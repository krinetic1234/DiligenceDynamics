
"""
PART 6: RUN RAG PIPELINE (refer to process_RAG.py for embedding process)
For option 1 (above):
- Simply pass retrieved text chunks to LLM, as usual.
For `option 2a` (above):
- We would pass retrieved image and images to the multi-modal LLM.
- This should be possible soon, once [llama-cpp-python add multi-modal support](https://github.com/abetlen/llama-cpp-python/issues/813).
- And, of course, this will be enabled by GPT4-V API.
"""
from langchain.retrievers.multi_vector import MultiVectorRetriever
from langchain.storage import InMemoryStore
from langchain_openai import OpenAIEmbeddings
from langchain_core.output_parsers import StrOutputParser
from langchain_core.prompts import ChatPromptTemplate
from langchain_openai import ChatOpenAI
import os
import openai
from langchain_core.runnables import RunnablePassthrough
import firebase_admin
from firebase_admin import firestore
from firebase_admin import credentials
from pinecone import Pinecone
from langchain.vectorstores import Pinecone as PineconeVectorStore
from langchain_core.output_parsers import StrOutputParser
from langchain_core.runnables import RunnableParallel, RunnablePassthrough
from langchain_openai import ChatOpenAI, OpenAIEmbeddings
from langchain_core.messages import HumanMessage, AIMessage
from langchain_core.prompts import ChatPromptTemplate, MessagesPlaceholder
from datetime import datetime


os.environ["OPENAI_API_KEY"] = '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'
openai.api_key = os.getenv("OPENAI_API_KEY")

pinecone_api_key = '3d280322-c071-4e57-997d-ebc26dfe428b'

def format_docs(docs):
  return "\n\n".join(doc.page_content for doc in docs)

def init_firebase_app():
  if not firebase_admin._apps:
    # path for running from api
    credential_path = 'rag_pipeline/cs224g-firebase-adminsdk-p4elq-cf48ba0235.json'
    current_directory = os.getcwd()

    # Specify the string you want to check
    desired_directory_name = "rag_pipeline"
    # Check if the current directory name is the desired string
    # path for running file directly
    if os.path.basename(current_directory) == desired_directory_name:
      credential_path = 'cs224g-firebase-adminsdk-p4elq-cf48ba0235.json'
    cred = credentials.Certificate(credential_path)
    firebase_admin.initialize_app(cred)

def get_existing_retriever(namespace, user_id):
  init_firebase_app()
  db = firestore.client()

  # parsed_doc_ref = db.collection('parsed-documents')
  parsed_doc_ref = db.collection(namespace)
  docs = parsed_doc_ref.stream()

  documents_for_docstore = []
  for doc in docs:
    # print(f"{doc.id} => {doc.to_dict()}")
    body = doc.to_dict().get('text')
    if not body:
      body = doc.to_dict().get('table')
    documents_for_docstore.append((doc.id, body))

  store = InMemoryStore()
  pc = Pinecone(api_key=pinecone_api_key)
  index_name = 'cs224g-documents'
  index = pc.Index(index_name)
  print(index.describe_index_stats())
  text_field = "text"

  vectorstore = PineconeVectorStore(
      index, OpenAIEmbeddings().embed_query, text_field, namespace=namespace
  )

  print('this the vectorstore:', vectorstore)

  retriever = MultiVectorRetriever(
    vectorstore=vectorstore,
    docstore=store,
    id_key='doc_id',
    search_kwargs={'filter': {'user_id': user_id}}
  )
  
  retriever.docstore.mset(documents_for_docstore)
  return retriever

def print_intermediate(data):
  return data

# Option 2: Multi-modal LLM
# model = GPT4-V or LLaVA
# RAG pipeline: added streaming for sources
# Original prompt template
def run_RAG(retriever, mode):
  # NEW PROMPT TEMPLATE
  if mode == "chat":
    template = """Answer the questions in a concise manner based on the following context and your general knowledge, which can include text and tables:
    {context}
    Question: {question}
    """
  else: template = """You are a chatbot powered by a Retriever-Augmented Generation model, designed to assist the user in creating investment reports and answering queries about companies based on user-provided PDF documents. Your capabilities include extracting and analyzing information from financial documents, answering specific questions about a company's performance, and generating comprehensive investment reports. You offer insights and data-driven recommendations, emphasizing that users should consider these as part of their broader research.
  {context}
  Question: {question}
  """
  
  inference_prompt = ChatPromptTemplate.from_template(template)

  model = ChatOpenAI(temperature=0, model="gpt-4-0125-preview")  # gpt-4-0125-preview
  
  rag_chain_references = (
    RunnablePassthrough.assign(context=(lambda x: x["context"]))
    | inference_prompt
    | print_intermediate
    | model
    | StrOutputParser()
  )
  chain = RunnableParallel(
    {"context": retriever, "question": RunnablePassthrough()}
  ).assign(answer=rag_chain_references)

  return chain

### REFRAMING QUESTION USING CONTEXT
def contextualize_question(existing_chat_history, question):
  context_q = question
  if existing_chat_history:
    model = ChatOpenAI(temperature=0, model="gpt-4-0125-preview")  # gpt-4-0125-preview

    contextualize_q_system_prompt = """Given a chat history and the latest user question \
    which might reference context in the chat history, formulate a standalone question \
    which can be understood without the chat history. Do NOT answer the question, \
    just reformulate it if needed and otherwise return it as is."""

    contextualize_q_prompt = ChatPromptTemplate.from_messages(
        [
            ("system", contextualize_q_system_prompt),
            MessagesPlaceholder(variable_name="chat_history"),
            ("human", "{question}"),
        ]
    )
    print("contextualize chat history: ", existing_chat_history)
    contextualize_q_chain = contextualize_q_prompt | model | StrOutputParser()
    context_q = contextualize_q_chain.invoke(
      {
        "chat_history": existing_chat_history,
        "question": question,
      }
    )
  return context_q

# new logic below
def process_results(chain, contextualize_query):
  output = {}
  curr_key = None
  for chunk in chain.stream(contextualize_query):
  #   print(chunk)
  # for chunk in result:
    for key in chunk:
      if key not in output:
        output[key] = chunk[key]
      else:
        output[key] += chunk[key]
      curr_key = key
  # output has keys: "question", "answer", and "context", which you can print out
  return output

def get_chat_history(companySymbol, userID):
  init_firebase_app()
  chat_history = []
  chat_db = firestore.client()
  
  chat_history_ref = chat_db.collection('users').document(userID) \
                                .collection('companies').document(companySymbol) \
                                .collection('chat_history')
  # Retrieve chat history sorted by time
  chats = chat_history_ref.order_by('time').stream()

  for chat in chats:
    chat_data = chat.to_dict()
    question = HumanMessage(content=chat_data.get('question'))
    answer = AIMessage(content=chat_data.get('answer'))
    chat_history.extend([question, answer])

  print('chat_history:', chat_history)
  
  return chat_history
  
def add_to_chat_history(query, answer, companySymbol, userID):
  init_firebase_app()
  chat_db = firestore.client()

  chat_ref = chat_db.collection('users').document(userID) \
                        .collection('companies').document(companySymbol) \
                        .collection('chat_history').document()
    
  # Add a new chat document
  chat_ref.set({
    'question': query,
    'answer': answer,
    'time': datetime.now()  
  })

def main(query, companySymbol, mode, userID):
  retriever = get_existing_retriever(namespace=companySymbol, user_id=userID)
  chat_history = get_chat_history(companySymbol, userID)
  
  chain = run_RAG(retriever, mode)
  final_query = contextualize_question(chat_history, query)
  
  output = process_results(chain, final_query)
  add_to_chat_history(query, output['answer'], companySymbol, userID)
  
  print("this is the reframed question: ", output['question'], '\n')
  print("this is the answer: ", output['answer'], '\n')
  print("this is the context retrieved", output['context'], '\n')

  return output

if __name__ == "__main__":
  main('What are the key risks to this business?', 'CHWY')