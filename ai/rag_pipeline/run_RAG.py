
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

def get_existing_retriever(namespace, mode):
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
  
  # base case: we're using this retriever for simple Q&A
  vectorstore = PineconeVectorStore(
      index, OpenAIEmbeddings().embed_query, text_field, namespace=namespace
  )
  
  # other case: we're using this retriever to generate investment reports:
  if mode == "copilot":
    vectorstore = PineconeVectorStore(
      index, OpenAIEmbeddings.embed_query, text_field, namespace=namespace, top_k = 8
    )

  print('this the vectorstore:', vectorstore)

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
def run_RAG(retriever, mode):
  # NEW PROMPT TEMPLATE
  if mode == "chat":
    template = """Answer the questions in a concise manner based on the following context and your general knowledge, which can include text and tables:
    {context}
    Question: {question}
    """
  elif mode == "copilot":
    template = """You are an investment report helper powered by a Retriever-Augmented Generation model, \
designed to assist the users in creating investment reports for a company based on \
user-provided PDF documents and an user-provided investment thesis. Your capabilities include extracting and \
analyzing information from financial documents, answering specific questions about a company, and generating a\
comprehensive investment report based on the provided investment thesis.
    
Here is an example investment thesis and the corresponding report:
User-Provided Investment Thesis: AAPL’s F1Q24 EPS, revenue and gross margins beat on a beat in iPhones and gross margins.
(Begin Answer)
Services, as expected, grew 11% yoy (despite a 7 pp headwind from year-ago extra week), accelerating for the third consecutive quarter on a like-for-like basis. That said, AAPL’s F2Q24 guidance missed as a revenue miss (~$90 bn v. consensus of ~$96 bn) due to iPhone and Other Products was partly offset by better-than-expected gross margins (46-47% v. consensus of 45.4%).
First, iPhone outperformed (+6% yoy) in the quarter driven by record upgraders and despite a MSD% yoy decline in Mainland China iPhone revenue and increased competition in the region. iPhone 15 is resonating with consumers and channel inventories are lean, which we believe foreshadows strong iPhone 16 sell-in later this year though the F2Q24 revenue guidance for iPhone missed (~$46 bn v. consensus of $50 bn).
Second, revenue for non-iPhone Products in the aggregate performed in-line with consensus, but the F2Q24 outlook, which implies ~$21 bn, missed. This is likely due to the timing of new iPad and Mac launches, which we now expect in the June quarter.
Third, AAPL is investing in generative AI and will share details about what it’s working on later this year.
Key positives and concerns:
Positives:
1. Total active installed base achieved a new all-time high of over 2.2 billion active devices and an all-time record number of iPhone upgraders in the quarter. Growth in AAPL's installed base and in iPhone upgrades was driven by double digit \%\ growth in several emerging markets with all time iPhone records in Latin America, Western Europe, the Middle East, and South Korea, and December quarter revenue records in India and Indonesia. We expect AAPL's focus on emerging markets to continue driving installed base growth. In addition to iPhone success, AAPL's other products continue to see large shares of new buyers, including nearly 50% of new Mac buyers, over 50% of iPad buyers, and nearly 2/3 of Apple Watch buyers.
2. double digit % yoy. Services revenue beat GS/consensus estimates of $23.1 bn/$23.3 bn driven by all-time revenue records in advertising, cloud services, payment services, and video, and December quarter records in App Store and Apple Care. Services revenue achieved records in the Americas, Europe, and the rest of Asia-Pacific. AAPL reported over 1 bn paid subscriptions across Services, which is over double from four years ago. Services should continue to benefit from AAPL's growing installed base and increasing customer engagement.
3. Gross margins of 45.9% was the highest since F2Q12 with outlook for F2Q24 better-than-expected with guidance of 46\%-47\% (v. consensus of 45.4%). Margins benefited from operating leverage & favorable mix shift driven by strong iPhone and Services performance in the quarter, partially offset by forex.
4. Vision Pro to launch tomorrow (February 2); strong interest from enterprise customers. AAPL highlighted several companies including Walmart, Nike, Vanguard, Stryker, Bloomberg, and SAP that are investing in the Vision Pro for productivity, collaborative product design, immersive training, and other applications.
5. AAPL continues to invest in AI and plans to share more details later this year.
Positives:
1. F2Q24E revenue outlook missed consensus primarily on iPhone and other products. Apple expects F2Q24 revenue to be similar to F2Q23 excluding a $5 bn tailwind from demand recapture in the prior year period (implies ~$90 bn) which is below consensus of $96 bn. Apple expects iPhone revenue to decline $5 bn yoy (implies ~$46 bn) & for Services revenue growth to be similar to F1Q24 (+11% yoy). This implies other product revenue (Mac, iPad, Wearables) will be down ~10% yoy or $2 bn yoy (v. consensus outlook for flat yoy). Services revenue is not expected to accelerate sequentially given outlook for FX headwinds (~2 pp in F2Q24 v. largely flat in F1Q24) and tough comps. We believe this is conservative (GSe: +14%) given price increases in select services and App Store momentum.
2. Greater China revenue down 13% yoy with every other key geography outperforming. While Greater China revenue of $20.8 bn missed GS/consensus of $24.0/$23.5 bn in the quarter, Apple observed solid growth in upgraders year-over-year & reached a new record installed base of actives in the region.

Earnings and guidance:
AAPL's F1Q24 EPS of $2.18 beat GS/consensus (FactSet) of $2.10/$2.10 reflecting a beat in product revenue on better-than-expected iPhone sales & gross margins at the high-end of guidance.
Revenue of $119.6 bn was slightly above GSe/consensus of $117.4 bn/$118.0 bn with Products revenue of $96.5 bn slightly above GS/consensus estimates of $94.3 bn/$94.6 bn and Services revenue of $23.1 bn in-line with GS/consensus of $23.1 bn/$23.3 bn.
Products revenue beat was driven by outperformance in iPhone and Wearables, Home, and Accessories.
iPhone revenue of $69.7 bn was beat our estimate of $68.0 bn & consensus of $67.6 bn.
Mac revenue of $7.8 bn beat our estimate of $7.4 bn but fell short of consensus of $7.9 bn.
iPad revenue of $7.0 bn missed GS/consensus of $7.3 bn/$7.4 bn.
Wearables, Home, and Accessories revenue of $12.0 bn beat GS/consensus of $11.6 bn/$11.3 bn.
Gross profit of $54.9 bn, representing 45.9% margins, was slightly above GS/consensus of $53.6 bn/$53.6 bn (45.7%/45.5% margins).
EBIT of $40.4 bn represented 33.8% margins, was slightly above our estimate/consensus of $39.2/$39.1 bn (GS/consensus of 33.4%/33.1% margins). Operating expenses of $14.5 bn were largely in-line with GS/consensus of $14.4 bn/$14.5 bn.
AAPL repurchased $23 bn of shares during the quarter (v. GSe $27 bn).

AAPL provided F2Q24 guidance including: (1) revenue to decline $5 bn yoy (implies $90 bn); (2) forex headwind of -200 bps; (3) Services growth to be double digits %, similar to F1Q24 (+11% yoy); (4) iPhone revenue to decline $5 bn yoy (implies ~$46 bn); (5) gross margins of 46-47%; (6) opex of $14.3-$14.5 bn; (7) OI&E of +$50 mn; and (8) tax rate of 16%.

Thesis summary:
Apple designs, manufactures, and markets personal technology devices and sells a variety of related services. Its long history and track record of (1) designing category-defining and innovative products (e.g., Mac, iPhone, iPad, Apple Watch, AirPods, iPod); (2) protecting digital privacy; and (3) delivering premium services & experiences have contributed to an unmatched brand strength. Apple's brand loyalty has resulted in a growing installed base of users that provide Apple with visibility into revenue growth by reducing customer churn, lowering customer acquisition costs for new product and services launches (e.g., Apple TV+, Apple Fitness, Apple Watch), and encouraging repeat purchases, such as phone upgrades.
We are Buy-rated (on CL) on AAPL as we believe that the market's focus on slower product revenue growth masks the strength of the Apple ecosystem and associated revenue durability & visibility. Apple's installed base growth, secular growth in services, and new product innovation should more than offset cyclical headwinds to product revenue, such as a reduced iPhone unit demand due to a lengthening replacement cycle and reduced consumer demand for the PC & tablet category. Valuation is attractive relative to AAPL's historical multiple -- both on an absolute & relative basis -- and compared to key tech peers. The majority of gross profit growth over the next 5-years should be driven by Services, which should mark an inflection point in the Services investment narrative and support AAPL's premium multiple. The durability of Apple's installed base and the resulting revenue growth visibility from attaching more Services and Products is what underpins the recurring revenue -- or Apple-as-a-Service -- opportunity.
Key risks to our view include weakening consumer demand, supply chain disruption, intensifying competition, regulatory risks, and capital allocation execution.
(End Answer)

Your job is to offer insights and data-driven explanations from the retrieved conext below and justify the user-provided investment thesis.

  {context}
  User-Provided Investment Thesis: {question}
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
    print("this is each chunk received: ", chunk)
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
  retriever = get_existing_retriever(namespace=companySymbol, mode=mode)
  chat_history = get_chat_history(companySymbol, userID)
  chain = run_RAG(retriever, mode)
  final_query = query
  if mode == "chat":
    final_query = contextualize_question(chat_history, query)
  
  output = process_results(chain, final_query)
  if mode == "chat":
    add_to_chat_history(query, output['answer'], companySymbol, userID)
  
  print("this is the reframed question: ", output['question'], '\n')
  print("this is the answer: ", output['answer'], '\n')
  print("this is the context retrieved", output['context'], '\n')
  print("this is the number of contexts retrieved: ", len(output['context']), '\n')

  return output

if __name__ == "__main__":
  main('What are the key risks to this business?', 'CHWY')