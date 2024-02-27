
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
from pinecone import Pinecone
from langchain.vectorstores import Pinecone as PineconeVectorStore

os.environ["OPENAI_API_KEY"] = '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'
openai.api_key = os.getenv("OPENAI_API_KEY")

pinecone_api_key = '3d280322-c071-4e57-997d-ebc26dfe428b'

def get_existing_retriever():
  if not firebase_admin._apps:
    credential_path = 'rag_pipeline/cs224g-firebase-adminsdk-p4elq-cf48ba0235.json'
    current_directory = os.getcwd()

    # Specify the string you want to check
    desired_directory_name = "rag_pipeline"
    # Check if the current directory name is the desired string
    if os.path.basename(current_directory) == desired_directory_name:
      credential_path = 'cs224g-firebase-adminsdk-p4elq-cf48ba0235.json'
    cred = credentials.Certificate(credential_path)
    firebase_admin.initialize_app(cred)
  db = firestore.client()

  parsed_doc_ref = db.collection('parsed-documents')
  docs = parsed_doc_ref.stream()
  # print('num docs:', len(list(docs)))
  # print('docs:', docs)

  documents_for_docstore = []
  for doc in docs:
    # print(f"{doc.id} => {doc.to_dict()}")
    body = doc.to_dict().get('text')
    if not body:
      body = doc.to_dict().get('table')
    documents_for_docstore.append((doc.id, body))

  store = InMemoryStore()
  # vectorstore = Chroma(collection_name="summaries", embedding_function=OpenAIEmbeddings(), persist_directory='rag_pipeline/persist_db')
  pc = Pinecone(api_key=pinecone_api_key)
  index_name = 'cs224g-documents'
  index = pc.Index(index_name)
  index.describe_index_stats()
  text_field = "text"

  vectorstore = PineconeVectorStore(
      index, OpenAIEmbeddings().embed_query, text_field
  )

  retriever = MultiVectorRetriever(
    vectorstore=vectorstore,
    docstore=store,
    id_key='doc_id',
  )
  
  retriever.docstore.mset(documents_for_docstore)
  return retriever

# vectorstore = Chroma(
#   collection_name="summaries",
#   embedding_function=OpenAIEmbeddings(),
#   persist_directory = 'persist_db'
# )
# store = InMemoryStore()
# id_key = "doc_id"

# # retriever = process_RAG.get_retriever()
# retriever = MultiVectorRetriever(
#   vectorstore = vectorstore,
#   docstore = store
#   id_key = id_key,
# )

# zipped_text = list(zip(doc_ids, texts))
# zipped_tables = list(zip(table_ids, texts))
# retriever.docstore.mset(zipped_text)
# retriever.docstore.mset(zipped_tables)

def print_intermediate(data):
  # print("intermediate results:", data)
  return data

def run_RAG(retriever):
  # Prompt template

  template = """Answer the question based only on the following context, which can include text and tables:
  {context}
  Question: {question}
  """
  prompt = ChatPromptTemplate.from_template(template)
  # print(prompt)

  # Option 1: LLM
  model = ChatOpenAI(temperature=0, model="gpt-4-0125-preview")
  # Option 2: Multi-modal LLM
  # model = GPT4-V or LLaVA

  # RAG pipeline
  chain = (
    {"context": retriever, "question": RunnablePassthrough()}
    | prompt
    | print_intermediate
    | model
    | StrOutputParser()
  )
  
  return chain


def main(query):
  retriever = get_existing_retriever()
  chain = run_RAG(retriever)
  result = chain.invoke(
      query
  )
  # "What was the reported revenue?"

  # retrieved_context = result.get("context", "")
  # print('context: ', retrieved_context)
  print('result:', result)
  return result

  """We can check the [trace](https://smith.langchain.com/public/85a7180e-0dd1-44d9-996f-6cb9c6f53205/r) to see retrieval of tables and text."""

  # chain.invoke("Explain images / figures with playful and creative examples.")

if __name__ == "__main__":
  main('What was the reported revenue?')