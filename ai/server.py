from flask import Flask, request, jsonify
from flask_cors import CORS
from rag_pipeline.run_RAG import main
import firebase_utils.database_utils as db_utils
import os

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


@app.route('/api/upload-document', methods=['POST'])
def upload_document():
    # # get the request data
    # query = request.json['query']
    # print('query:', query)
    # # run the RAG model
    # response = main(query)
    # print('response:', response)
    # return jsonify({'response': response})

    try:
        uploaded_file = request.files['file']
        company_symbol = request.form.get('companySymbol')
        if uploaded_file.filename != '':
            # Adjust the path where you want to save the file on the server
            # save_path = ''

            # file_path = os.path.join(save_path, uploaded_file.filename)
            uploaded_file.save(uploaded_file.filename)

            # Here you can add code to upload the file to Firebase Storage
            # Refer to Firebase Storage documentation for more details
            storage_path = f'companies/{company_symbol}/manually_uploaded/{uploaded_file.filename}'
            db_utils.upload_to_firebase(storage_path, uploaded_file.filename)

            # os.remove(uploaded_file.filename)

            return 'File uploaded successfully!', 200
        else:
            return 'No file selected', 400
    except Exception as e:
        print('Error:', str(e))
        return 'Error uploading file', 500

if __name__ == '__main__':
    app.run(debug=True, port=8080)