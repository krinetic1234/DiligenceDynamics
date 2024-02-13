# DiligenceDynamics
A suite of LLM-powered products for financial investors (QA RAG model, automated excel operations, predictive analytics, market sentiment)

[Insert details on how to use the app, link to test data, cool things to try]

# For Development
Clone the repository and navigate to the root directory.
Run `npm install` and `npm run dev` to install all required packages and start up the dev server.
The webapp will be accessible at https://localhost:3000.

# Sprint 1 Goals (Individual Contributions)

- Krish Maniar: basic UI frontend, testing financial data retrieval on GPT-4 and other open-source models
- Justin Lim: This sprint, I helped create our figma mocks, interviewed multiple investors/analysts for need-finding, and added a basic sidebar with routing to our web application. I also worked on setting up and running our first multi-modal RAG system, and created the demo video that demonstrates its ability to accurately parse data from tables and text. Note, the code for that pipeline is in a colab notebook and isn't in the github yet. Next sprint, I will focus on building out the front end and improving the model.
- Winston Shum: For this sprint, I helped design the front-end, interviewed several investors/analysts for need-finding. For the coding part, I helped research and setup the RAG pipeline and exploring options like unstructured.io, langchain, and different vector embedding methods incl. chromadb and pinecone. (RAG model in colab as mentioned by Justin). Will be focusing on finetuning the RAG model and improving the model/front-end going forward.
- Collin Jung: For this sprint, I created UI mockups, read deeper into the current field of fintech, and experimented with RAG models. In the next sprints, I will focus on designing and configuring the front end to be easily used and understandable.
- Jakob Nordhagen: 
    - **This sprint:** Broadly, my contributions to Sprint 1 consisted of research, development, and experimentation. I investigated the current state of the market for our type of product in order to understand where our application will fit in, finding that AlphaSense is the solution to beat. I experimented with a RAG model for parsing documents with Langchain (loosely collaborating with Winston and Justin) and I implemented a basic login/signup modal component with React Bootstrap.
    - **Going forward:** During the next sprint, I expect to focus on integrating LLM functionality into our app, as well as building out a backend and augmenting/redesigning our current frontend. I may also work on brainstorming new features to build in other than our main RAG document-based QA solution, as I believe we will ultimately need more in order for our project to be compelling.

