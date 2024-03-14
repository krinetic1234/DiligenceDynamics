from typing import Any
from pydantic import BaseModel
from unstructured.partition.pdf import partition_pdf
import uuid
from langchain.retrievers.multi_vector import MultiVectorRetriever
from langchain.storage import InMemoryStore
from langchain_community.vectorstores import Chroma
from langchain_core.documents import Document
from langchain_openai import OpenAIEmbeddings
from langchain_core.output_parsers import StrOutputParser
from langchain_core.prompts import ChatPromptTemplate
from langchain_openai import ChatOpenAI
import os
import backoff
import openai
import firebase_admin
from firebase_admin import firestore
from firebase_admin import credentials, storage
from pinecone import Pinecone
from langchain.vectorstores import Pinecone as PineconeVectorStore



class Element(BaseModel):
    type: str
    text: Any

os.environ["OPENAI_API_KEY"] = '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'
openai.api_key = os.getenv("OPENAI_API_KEY")

# initialize connection to pinecone (get API key at app.pinecone.io)
pinecone_api_key = '3d280322-c071-4e57-997d-ebc26dfe428b'

# configure client
pc = Pinecone(api_key=pinecone_api_key)

"""
PART 1: SETUP PORTION AND DATA LOADING
Loads in data from a single pdf and partitions for tables, text, images
Partition data using Unstructured.io 
"""

# Get elements
def get_elements(path):

    raw_pdf_elements = partition_pdf(
        filename=path,
        # Using pdf format to find embedded image blocks
        extract_images_in_pdf=True,
        # Use layout model (YOLOX) to get bounding boxes (for tables) and find titles
        # Titles are any sub-section of the document
        infer_table_structure=True,
        # Post processing to aggregate text once we have the title
        chunking_strategy="by_title",
        # Chunking params to aggregate text blocks
        # Attempt to create a new chunk 3800 chars
        # Attempt to keep chunks > 2000 chars
        # Hard max on chunks
        max_characters=4000,
        new_after_n_chars=3800,
        combine_text_under_n_chars=2000,
        image_output_dir_path=path,
    )
    if os.path.exists(path):
        os.remove(path)
    return raw_pdf_elements

# Create a dictionary to store counts of each type
def create_categories_dict(raw_pdf_elements):
    category_counts = {}
    for element in raw_pdf_elements:
        category = str(type(element))
        if category in category_counts:
            category_counts[category] += 1
        else:
            category_counts[category] = 1
    # Unique_categories will have unique elements
    unique_categories = set(category_counts.keys())
    print(category_counts)
    return unique_categories, category_counts

# Categorizes elements and gets list of table and text elements
def categorize_table_texts(raw_pdf_elements):
    categorized_elements = []
    for element in raw_pdf_elements:
        if "unstructured.documents.elements.Table" in str(type(element)):
            categorized_elements.append(Element(type="table", text=str(element)))
        elif "unstructured.documents.elements.CompositeElement" in str(type(element)):
            categorized_elements.append(Element(type="text", text=str(element)))
    # Tables
    table_elements = [e for e in categorized_elements if e.type == "table"]
    print(len(table_elements))

    # Text
    text_elements = [e for e in categorized_elements if e.type == "text"]
    print(len(text_elements))
    return text_elements, table_elements

"""
PART 2: MULTI-VECTOR RETRIEVER
Use langchain's multivector retriever, and generate summaries for raw tables and raw chunks of texts
"""

def generate_table_text_summaries(text_elements, table_elements): 
    prompt_text = """You are an assistant tasked with summarizing tables and text. \
    Give a concise summary of the table or text. Table or text chunk: {element} """
    prompt = ChatPromptTemplate.from_template(prompt_text)

    # Summary chain
    model = ChatOpenAI(temperature=0, model="gpt-4-0125-preview")
    summarize_chain = {"element": lambda x: x} | prompt | model | StrOutputParser()

    # Apply to text
    texts = [i.text for i in text_elements]
    text_summaries = summarize_chain.batch(texts, {"max_concurrency": 5})

    # Apply to tables
    tables = [i.text for i in table_elements]
    table_summaries = summarize_chain.batch(tables, {"max_concurrency": 5})
    return text_summaries, table_summaries, texts, tables


"""
PART 3: GENERATE SUMMARIES FOR IMAGES
embed and retrieve texts from images, and pass text chunks to LLM for answer synthesis
-  Note: To run LLaVA with python bindings, we need a Python API to run the CLIP model. 
   CLIP support is likely to be added to `llama.cpp` in the future. After running the above, 
   we  fetch and clean image summaries.
"""

# import glob
# import os

# # Get all .txt file summaries
# file_paths = glob.glob(os.path.expanduser(os.path.join(path, "*.txt")))

# # Read each file and store its content in a list
# img_summaries = []
# for file_path in file_paths:
#     with open(file_path, "r") as file:
#         img_summaries.append(file.read())

# # Remove any logging prior to summary
# logging_header = "clip_model_load: total allocated memory: 201.27 MB\n\n"
# cleaned_img_summary = [s.split(logging_header, 1)[1].strip() for s in img_summaries]

"""
PART 4: INITIALIZE AND ADD VECTOR EMBEDDINGS
Add to chromadb vector store, this needs to be run on a local host since we want to always have this data accessible
"""
# # The vectorstore to use to index the child chunks
# vectorstore = Chroma(collection_name="summaries", embedding_function=OpenAIEmbeddings())
# # The storage layer for the parent documents
# store = InMemoryStore()
# id_key = "doc_id"

# # The retriever (empty to start)
    
# retriever = MultiVectorRetriever(
#     vectorstore=vectorstore,
#     docstore=store,
#     id_key=id_key,
# )
retriever = None
# persist_directory = 'persist_db'
index_name = 'cs224g-documents'

def get_retriever():
    global retriever
    if retriever is None:
        # The vectorstore to use to index the child chunks
        # the default embeddings are text-embedding-ada-002
        # vectorstore = Chroma(collection_name="summaries", embedding_function=OpenAIEmbeddings(), persist_directory = persist_directory)
        index = pc.Index(index_name)
        index.describe_index_stats()
        
        text_field = "text"

        vectorstore = PineconeVectorStore(
            index, OpenAIEmbeddings().embed_query, text_field
        )

        
        # The storage layer for the parent documents
        store = InMemoryStore()
        id_key = "doc_id"
        # The retriever (empty to start)
        retriever = MultiVectorRetriever(
            vectorstore=vectorstore,
            docstore=store,
            id_key=id_key,
        )
    return retriever

def add_data_to_retriever(text_summaries, table_summaries, texts, tables, companySymbol):
    # cred = credentials.Certificate('cs224g-firebase-adminsdk-p4elq-cf48ba0235.json')
    # app = firebase_admin.initialize_app(cred)
    db = firestore.client()

    retriever = get_retriever()
    id_key = "doc_id"
    # Add texts
    doc_ids = [str(uuid.uuid4()) for _ in texts]
    summary_texts = [
        Document(page_content=s, metadata={id_key: doc_ids[i]}) for i, s in enumerate(text_summaries)
    ]
    retriever.vectorstore.add_documents(summary_texts, namespace=companySymbol)
    zipped_text = list(zip(doc_ids, texts))
    retriever.docstore.mset(zipped_text)
    for id, text in zipped_text:
        doc_ref = db.collection(companySymbol).document(id)
        doc_ref.set({
            'id':id,
            'text':text
        })
    
    # Add tables
    table_ids = [str(uuid.uuid4()) for _ in tables]
    summary_tables = [
        Document(page_content=s, metadata={id_key: table_ids[i]}) for i, s in enumerate(table_summaries)
    ]
    retriever.vectorstore.add_documents(summary_tables, namespace=companySymbol)
    zipped_tables = list(zip(table_ids, tables))
    retriever.docstore.mset(zipped_tables)
    for id, table in zipped_tables:
        doc_ref = db.collection(companySymbol).document(id)
        doc_ref.set({
            'id':id,
            'table':table
        })


def modify_retriever(firebase_path, companySymbol):
    if not firebase_admin._apps:
        credential_path = 'rag_pipeline/cs224g-firebase-adminsdk-p4elq-cf48ba0235.json'
        current_directory = os.getcwd()

        # Specify the string you want to check
        desired_directory_name = "rag_pipeline"
        # Check if the current directory name is the desired string
        if os.path.basename(current_directory) == desired_directory_name:
            credential_path = 'cs224g-firebase-adminsdk-p4elq-cf48ba0235.json'
        cred = credentials.Certificate(credential_path)
        firebase_admin.initialize_app(cred, {'storageBucket': 'cs224g.appspot.com'})

    bucket = storage.bucket()
    blob = bucket.blob(firebase_path)
    # url = blob.generate_signed_url(expiration=60)
    local_file_path = 'temp_file.pdf'
    blob.download_to_filename(local_file_path)
    
    # path = path
    raw_pdf_elements = get_elements(local_file_path)
    unique_categories, category_counts = create_categories_dict(raw_pdf_elements)
    text_elements, table_elements = categorize_table_texts(raw_pdf_elements)
    text_summaries, table_summaries, texts, tables = generate_table_text_summaries(text_elements, table_elements)
    add_data_to_retriever(text_summaries,table_summaries, texts, tables, companySymbol)

"""
For option 2:
Store the image summary in the docstore, which we return to the LLM for answer generation.
"""

# Add image summaries
# no images for now
# img_ids = [str(uuid.uuid4()) for _ in cleaned_img_summary]
# summary_img = [
#     Document(page_content=s, metadata={id_key: img_ids[i]})
#     for i, s in enumerate(cleaned_img_summary)
# ]
# retriever.vectorstore.add_documents(summary_img)
# retriever.docstore.mset(list(zip(img_ids, cleaned_img_summary)))

"""
For option 3:
Store the images in the `docstore`.
Using the image in answer synthesis will require a multimodal LLM with Python API integration.
GPT4-V is expected soon, and as mentioned above, CLIP support is likely to be added to `llama.cpp` in the future.
"""

# # Add images
# img_ids = [str(uuid.uuid4()) for _ in cleaned_img_summary]
# summary_img = [
#     Document(page_content=s, metadata={id_key: img_ids[i]})
#     for i, s in enumerate(cleaned_img_summary)
# ]
# retriever.vectorstore.add_documents(summary_img)
# ### Fetch images
# retriever.docstore.mset(
#     list(
#         zip(
#             img_ids,
#         )
#     )
# )

"""
PART 5: RUN PIPELINE AND SANITY CHECK RETRIEVAL
"""    

def process(path, companySymbol):
    modify_retriever(path, companySymbol)
    # response = retriever.get_relevant_documents(
    #     "What are the current liabilities in the last quarter?"
    # )[1]
    # print(response)

    # # test image summary retrieval
    # retriever.get_relevant_documents("Images / figures with playful and creative examples")[1]
    # raw_pdf_elements = get_elements(path)
    # unique_categories, category_counts = create_categories_dict(raw_pdf_elements)
    # text_elements, table_elements = categorize_table_texts(raw_pdf_elements)
    # text_summaries, table_summaries, texts, tables = generate_table_text_summaries(text_elements, table_elements)
    # retriever = add_vector_storage(text_summaries,table_summaries, texts, tables)

def main(path, companySymbol):
    process(path, companySymbol)

if __name__ == "__main__":
    path = "companies/AAPL/manually_uploaded/apple 10k.pdf"
    main(path, 'AAPL')

