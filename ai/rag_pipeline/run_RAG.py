
"""
PART 6: RUN RAG PIPELINE (refer to process_RAG.py for embedding process)
For option 1 (above):
- Simply pass retrieved text chunks to LLM, as usual.
For `option 2a` (above):
- We would pass retrieved image and images to the multi-modal LLM.
- This should be possible soon, once [llama-cpp-python add multi-modal support](https://github.com/abetlen/llama-cpp-python/issues/813).
- And, of course, this will be enabled by GPT4-V API.
"""
from typing import Any
from pydantic import BaseModel
from unstructured.partition.pdf import partition_pdf
# import uuid
from langchain.retrievers.multi_vector import MultiVectorRetriever
from langchain.storage import InMemoryStore
from langchain_community.vectorstores import Chroma
from langchain_core.documents import Document
from langchain_openai import OpenAIEmbeddings
from langchain_core.output_parsers import StrOutputParser
from langchain_core.prompts import ChatPromptTemplate
from langchain_openai import ChatOpenAI
import os
# import backoff
import openai
from langchain_core.runnables import RunnablePassthrough
import firebase_admin
from firebase_admin import firestore
from firebase_admin import credentials
import getpass
import bs4
from langchain import hub
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_community.document_loaders import WebBaseLoader
from langchain_community.vectorstores import Chroma
from langchain_core.output_parsers import StrOutputParser
from langchain_core.runnables import RunnableParallel, RunnablePassthrough
from langchain_openai import ChatOpenAI, OpenAIEmbeddings
from langchain_core.messages import HumanMessage, AIMessage
from langchain_core.prompts import ChatPromptTemplate, MessagesPlaceholder

os.environ["OPENAI_API_KEY"] = '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'
openai.api_key = os.getenv("OPENAI_API_KEY")

def format_docs(docs):
  return "\n\n".join(doc.page_content for doc in docs)

def get_existing_retriever():
  if not firebase_admin._apps:
    cred = credentials.Certificate('rag_pipeline/cs224g-firebase-adminsdk-p4elq-cf48ba0235.json')
    firebase_admin.initialize_app(cred)
  db = firestore.client()

  parsed_doc_ref = db.collection('parsed-documents')
  docs = parsed_doc_ref.stream()

  documents_for_docstore = []
  for doc in docs:
    # print(f"{doc.id} => {doc.to_dict()}")
    body = doc.to_dict().get('text')
    if not body:
      body = doc.to_dict().get('table')
    documents_for_docstore.append((doc.id, body))

  store = InMemoryStore()
  vectorstore = Chroma(collection_name="summaries", embedding_function=OpenAIEmbeddings(), persist_directory='rag_pipeline/persist_db')
  retriever = MultiVectorRetriever(
    vectorstore=vectorstore,
    docstore=store,
    id_key='doc_id',
  )
  
  retriever.docstore.mset(documents_for_docstore)
  return retriever

def print_intermediate(data):
  return data

# Option 2: Multi-modal LLM
# model = GPT4-V or LLaVA
# RAG pipeline: added streaming for sources
# Original prompt template
def run_RAG(retriever):
  # NEW PROMPT TEMPLATE
  template = """Answer the questions in a concise manner based on the following context, which can include text and tables:
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

def get_chat_history():
  chat_history = []
  if not firebase_admin._apps:
    cred = credentials.Certificate('rag_pipeline/cs224g-firebase-adminsdk-p4elq-cf48ba0235.json')
    firebase_admin.initialize_app(cred)
  chat_db = firestore.client()
  chat_history_ref = chat_db.collection('chat-history')
  chats = chat_history_ref.stream()
  for chat in chats:
    question = HumanMessage(content=chat.to_dict().get('question'))
    answer = AIMessage(content=chat.to_dict().get('answer'))
    print(question)
    print(answer)
    chat_history.extend([question, answer])
  return chat_history
  
def add_to_chat_history(query, answer):
  if not firebase_admin._apps:
    cred = credentials.Certificate('rag_pipeline/cs224g-firebase-adminsdk-p4elq-cf48ba0235.json')
    firebase_admin.initialize_app(cred)
  chat_db = firestore.client()
  # zipped_chat = list(zip(query, answer))
  chat_ref = chat_db.collection('chat-history').document(query)
  chat_ref.set({
    'question': query,
    'answer': answer
  })

  # for query, answer in zipped_chat:
  #   chat_ref = chat_db.collection('chat-history').document(query)
  #   chat_ref.set({
  #     'question': query,
  #     'answer': answer
  #   })

def main():
  query = "What about in terms of taxes?"
  retriever = get_existing_retriever()
  chat_history = get_chat_history()
  
  chain = run_RAG(retriever)
  final_query = contextualize_question(chat_history, query)
  
  output = process_results(chain, final_query)
  add_to_chat_history(query, output['answer'])
  
  print("this is the reframed question: ", output['question'], '\n')
  print("this is the answer: ", output['answer'], '\n')
  print("this is the context retrieved", output['context'], '\n')

  return output
  """We can check the [trace](https://smith.langchain.com/public/85a7180e-0dd1-44d9-996f-6cb9c6f53205/r) to see retrieval of tables and text."""

  # chain.invoke("Explain images / figures with playful and creative examples.")

if __name__ == "__main__":
  main()