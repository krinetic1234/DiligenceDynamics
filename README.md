# DiligenceDynamics
A suite of LLM-powered products for financial investors (QA RAG model, automated excel operations, predictive analytics, market sentiment)

[Insert details on how to use the app, link to test data, cool things to try]

# For Development
Clone the repository and navigate to the root directory.
Run `npm install` and `npm run dev` to install all required packages and start up the dev server. Also, navigate to the AI-server folder, then install all the necessary packages.
You can do that by using the environment.yml file to get the conda environment, so do the following commands:
- `conda env create --file environment.yml`
- `conda activate cs224g`

You also need to install some brew packages by doing the following:
- `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`
- `brew update`
- `brew install poppler tesseract`
- `brew install cmake`
Now, run `python3 server.py` to start the Flask server that will handle all requests related to AI/LLMs. It takes about a minute for the server to start up the first time but then it will hot reload when files change.

You also need to add your secret keys to the `AI-server/rag_pipeline/process_RAG.py` and `AI-server/rag_pipeline/run_RAG.py` files

The web app will be accessible at https://localhost:3000.


# Sprint 1

- Krish Maniar: basic UI frontend, testing financial data retrieval on GPT-4 and other open-source models
- Justin Lim: This sprint, I helped create our figma mocks, interviewed multiple investors/analysts for need-finding, and added a basic sidebar with routing to our web application. I also worked on setting up and running our first multi-modal RAG system, and created the demo video that demonstrates its ability to accurately parse data from tables and text. Note, the code for that pipeline is in a colab notebook and isn't in the github yet. Next sprint, I will focus on building out the front end and improving the model.
- Winston Shum: For this sprint, I helped design the front-end, interviewed several investors/analysts for need-finding. For the coding part, I helped research and setup the RAG pipeline and exploring options like unstructured.io, langchain, and different vector embedding methods incl. chromadb and pinecone. (RAG model in colab as mentioned by Justin). Will be focusing on finetuning the RAG model and improving the model/front-end going forward.
- Collin Jung: For this sprint, I created UI mockups, read deeper into the current field of fintech, and experimented with RAG models. In the next sprints, I will focus on designing and configuring the front end to be easily used and understandable.
- Jakob Nordhagen: 
    - **This sprint:** Broadly, my contributions to Sprint 1 consisted of research, development, and experimentation. I investigated the current state of the market for our type of product in order to understand where our application will fit in, finding that AlphaSense is the solution to beat. I experimented with a RAG model for parsing documents with Langchain (loosely collaborating with Winston and Justin) and I implemented a basic login/signup modal component with React Bootstrap.
    - **Going forward:** During the next sprint, I expect to focus on integrating LLM functionality into our app, as well as building out a backend and augmenting/redesigning our current frontend. I may also work on brainstorming new features to build in other than our main RAG document-based QA solution, as I believe we will ultimately need more in order for our project to be compelling.
 
# Sprint 2
- Collin Jung: During this sprint, I designed and implemented the landing page. Functionality of this page includes search for NASDAQ companies by name and ticker with working autofill. On selecting a company, a chart showing stock price at close is displayed with adjustable date parameters. Also displayed is 2 changes in price: (1) Price change over the current day (2) Price difference between current date and whichever date chosen as start date. The color of the price changes based on net gain/loss with green for positive gain and red for negative loss. Underneath the chart is a list of the top 5 articles related to the company name. APIs used: News API (News articles), Polygon.io API (NASDAQ market info). To be done: Better design for articles, Summary for companies.
- Winston Shum: For this sprint, I finalized the design for the front-end, including how the landing page, the chat page, and the page for a specific company (stock information, company news, etc.) For the coding part, I finalized our RAG model such that it can be run locally, embed new documents, and can be called from an API. I also helped setup the firebase database where we have persistent storage of the raw texts, and separtely setup the persistent storage for the vector embeddings. Going forward: will need to implement the drag and drop functionality on the front-end, and will need to experiment with different document types for the RAG model.

  **Goals for sprint 3:** Fully integrate RAG model, clean up UI

