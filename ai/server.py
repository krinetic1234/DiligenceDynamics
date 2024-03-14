from flask import Flask, request, jsonify, url_for
from flask_cors import CORS
from rag_pipeline.run_RAG import main
from rag_pipeline.process_RAG import process
import firebase_utils.database_utils as db_utils
import os
from sentiment.scrape import news_results, reddit_results
from excel_nlp.parse_spacy import fetch_graph
from summary.summary import naive_summary

# app instance
app = Flask(__name__)
CORS(app)

@app.route('/api/company-chat', methods=['POST'])
def company_chat():
    # get the request data
    query = request.json['query']
    companySymbol = request.json['companySymbol']
    mode = request.json['mode']
    userID = request.json['userID']
    print('query:', query)
    print('companySymbol:', companySymbol)
    print('mode:', mode)
    print('userID:', userID)
    # run the RAG model
    response = main(query, companySymbol, mode, userID)['answer']
    print('response:', response)
    return jsonify({'response': response})

@app.route('/api/upload-document', methods=['POST'])
def upload_document():
    try:
        uploaded_file = request.files['file']
        company_symbol = request.form.get('companySymbol')
        user_id = request.form.get('userId')
        is_manual = request.form.get('isManual')
        if uploaded_file.filename != '':
            # Adjust the path where you want to save the file on the server
            # save_path = ''

            # file_path = os.path.join(save_path, uploaded_file.filename)
            uploaded_file.save(uploaded_file.filename)

            # Here you can add code to upload the file to Firebase Storage
            # Refer to Firebase Storage documentation for more details
            storage_path = f'companies/{company_symbol}/{uploaded_file.filename}'
            db_utils.upload_to_firebase(storage_path, uploaded_file.filename, user_id, is_manual)
            os.remove(uploaded_file.filename)

            return 'File uploaded successfully!', 200
        else:
            return 'No file selected', 400
    except Exception as e:
        print('Error:', str(e))
        return 'Error uploading file', 500
    
@app.route('/api/process-document', methods=['POST'])
def process_document():
    try:
        uploaded_file = request.files['file']
        file_name = uploaded_file.filename
        company_symbol = request.form.get('companySymbol')
        storage_path = f'companies/{company_symbol}/{file_name}'
        user_id = request.form.get('userId')
        
        process(storage_path, company_symbol, user_id)

        return 'File processed successfully!', 200

    except Exception as e:
        print('Error:', str(e))
        return 'Error processing file', 500

@app.route('/api/company-summary', methods=['POST'])
def company_summary():
    # get the request data
    companySymbol = request.json['companySymbol']
    print('companySymbol:', companySymbol)
    summary = naive_summary(companySymbol)
    print('summary:', summary)
    return jsonify({'summary': summary})

@app.route('/api/sentiment/news/<company_name>')
def get_news_sentiment(company_name):
    fig_path, titles = news_results(company_name)
    fig_url = url_for('static', filename=fig_path)  
    # return jsonify({'fig_url': fig_url, 'titles': titles})

    fig_url = '/' + company_name + '_news.png'
    return jsonify({'fig_url': fig_url, 'titles': titles})

@app.route('/api/sentiment/reddit/<company_name>')
def get_reddit_sentiment(company_name):
    fig_path, titles = reddit_results(company_name)
    fig_url = url_for('static', filename=fig_path) 
    # return jsonify({'fig_url': fig_url, 'titles': titles})
    fig_url = '/' + company_name + '_reddit.png'
    return jsonify({'fig_url': fig_url, 'titles': titles})

@app.route('/api/nlp/<prompt>')
def get_xlsx(prompt):
    xlsx_path = fetch_graph(prompt)
    fig_url = url_for('static', filename=xlsx_path) 
    return jsonify({'fig_url': fig_url})
    
if __name__ == '__main__':
    app.run(debug=True, port=8080)
