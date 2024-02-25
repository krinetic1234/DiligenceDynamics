from flask import Flask, request, jsonify
from flask_cors import CORS
from rag_pipeline.run_RAG import main


# app instance
app = Flask(__name__)
CORS(app)

@app.route('/api/company-chat', methods=['POST'])
def company_chat():
    # get the request data
    query = request.json['query']
    print('query:', query)
    # run the RAG model
    response = main(query)
    print('response:', response)
    return jsonify({'response': response})

if __name__ == '__main__':
    app.run(debug=True, port=8080)