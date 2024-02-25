# DiligenceDynamics
A suite of LLM-powered products for financial investors (QA RAG model, automated excel operations, predictive analytics, market sentiment)

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

NOTE: If you're working with authentication (login/signup), install Firebase's CLI to start a local Firebase emulator where you can view authentication data: 
- `npm install -g firebase-tools`
- `firebase emulators:start`  

The web app will be accessible at https://localhost:3000.


# Sprint 1

- **Krish Maniar**: Conducted need-finding interviews with a Citadel Analyst and the Head of Global Alpha Equity at Two Sigma. Engaged in extensive background research and developed Figma mockups for initial UI concepts. Implemented the frontend's basic structure and tested financial data retrieval using GPT-4 and other open-source AI models. Explored existing AI finance technologies to identify potential limitations. Plans for the next phase include enhancing the UI design and integrating the AI inference engine into the web application.
- **Justin Lim**: This sprint, I helped create our figma mocks, interviewed multiple investors/analysts for need-finding, and added a basic sidebar with routing to our web application. I also worked on setting up and running our first multi-modal RAG system, and created the demo video that demonstrates its ability to accurately parse data from tables and text. Note, the code for that pipeline is in a colab notebook and isn't in the github yet. Next sprint, I will focus on building out the front end and improving the model.
- **Winston Shum**: For this sprint, I helped design the front-end, interviewed several investors/analysts for need-finding. For the coding part, I helped research and setup the RAG pipeline and exploring options like unstructured.io, langchain, and different vector embedding methods incl. chromadb and pinecone. (RAG model in colab as mentioned by Justin). Will be focusing on finetuning the RAG model and improving the model/front-end going forward.
- **Collin Jung**: For this sprint, I created UI mockups, read deeper into the current field of fintech, and experimented with RAG models. In the next sprints, I will focus on designing and configuring the front end to be easily used and understandable.
- **Jakob Nordhagen**: Broadly, my contributions to Sprint 1 consisted of research, development, and experimentation. I investigated the current state of the market for our type of product in order to understand where our application will fit in, finding that AlphaSense is the solution to beat. I experimented with a RAG model for parsing documents with Langchain (loosely collaborating with Winston and Justin) and I implemented a basic login/signup modal component with React Bootstrap. During the next sprint, I expect to focus on integrating LLM functionality into our app, as well as building out a backend and augmenting/redesigning our current frontend. I may also work on brainstorming new features to build in other than our main RAG document-based QA solution, as I believe we will ultimately need more in order for our project to be compelling.

# Sprint 2

- **Krish Maniar**: Focused primarily on UI development for this sprint, mainly enhancing the landing page. Designed and implemented an interactive sidebar, complete with user profile visibility, hover/interactive navigation items, and a show/hide feature for improved user experience. Helped develop the news API component, ensuring the presentation of information is comprehensive and consistent. Developed a carousel component to showcase the latest news articles dynamically. Researched about suitable embedding techniques for the RAG model and read on integrating AI models for inference within a Next.js application. Played around with Mistral and Llama to get more familiar with RAG models. Going forward, I hope to shift my focus from UI refinement to a deeper dive into the AI aspects, aiming to seamlessly integrate the RAG model into the web app with a robust document upload feature.
- **Justin Lim**: This sprint, I helped finalize front-end designs and implemented them. Aside from updating some stylings for the main page, I set up a firebase Cloud Firestore as our non-relational database and also setup a firebase storage system for uploaded files. I then took the RAG model file that Winston made and setup a Flask API server to call it. I also setup all the dependency tracking to make it easy for development (getting conda environment and installing packages). I then added the chat functionality to the main page and connected it with the Flask API so that you can chat about a company. Going forward, I will work on fixing up the news API (since sometimes the articles aren't relevant to the company), setting up functionality for users to upload files, store them in our firebase storage, and trigger an API that will process them into embeddings. Also, I will work on reorganizing the app such that it dynamically routes for different companies and stores previous conversations for a user and improving the RAG model.
- **Winston Shum**: For this sprint, I finalized the design for the front-end, including how the landing page, the chat page, and the page for a specific company (stock information, company news, etc.) For the coding part, I finalized our RAG model such that it can be run locally, embed new documents, and can be called from an API. I also helped setup the firebase database where we have persistent storage of the raw texts, and separtely setup the persistent storage for the vector embeddings. Going forward: will need to implement the drag and drop functionality on the front-end, and will need to experiment with different document types for the RAG model.
- **Collin Jung**: During this sprint, I designed and implemented the landing page. Functionality of this page includes search for NASDAQ companies by name and ticker with working autofill. On selecting a company, a chart showing stock price at close is displayed with adjustable date parameters. Also displayed is 2 changes in price: (1) Price change over the current day (2) Price difference between current date and whichever date chosen as start date. The color of the price changes based on net gain/loss with green for positive gain and red for negative loss. Underneath the chart is a list of the top 5 articles related to the company name. APIs used: News API (News articles), Polygon.io API (NASDAQ market info). To be done: Better design for articles, Summary for companies.
- **Jakob Nordhagen**: For this sprint, I primarily worked on authentication, frontend, and database setup. I connected and configured Firebase with our web application for user authentication, implemented a login page with two components (LoginForm and SignupForm) and connected them to the authentication pipeline, and added Firebase's emulator suite to our project and used it to test authentication. Next sprint, I plan to focus on completing user profile functionality, working on a per-company (LLM-generated) summary view, and ironing out/tuning the UI on the frontend.

# Sprint 3

- Fully integrate RAG model
- Clean up UI and complete user profile authentication
- Add sentiment analysis feature
