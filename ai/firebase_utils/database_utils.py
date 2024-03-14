import os
import firebase_admin
from firebase_admin import credentials, storage

def initialize_firebase():
    if not firebase_admin._apps:
        # if running file directly
        credential_path = '../rag_pipeline/cs224g-firebase-adminsdk-p4elq-cf48ba0235.json'
        current_directory = os.getcwd()

        # Specify the string you want to check
        desired_directory_name = "ai"
        # Check if the current directory name is the desired string
        # if running from api call in server.py
        if os.path.basename(current_directory) == desired_directory_name:
            credential_path = 'rag_pipeline/cs224g-firebase-adminsdk-p4elq-cf48ba0235.json'
        cred = credentials.Certificate(credential_path)
        firebase_admin.initialize_app(cred, {'storageBucket': 'cs224g.appspot.com'})

def upload_to_firebase(storage_path, local_file_name, user_id, is_manual):
    try:
        initialize_firebase()
        print('storage_path:', storage_path)
        print('local_file_name:', local_file_name)
        # Upload the file to Firebase Storage
        bucket = storage.bucket()
        blob = bucket.blob(storage_path)
        print('user_id:', user_id)
        metadata = {'userId': user_id, 'isManual': is_manual}
        blob.metadata = metadata
        blob.upload_from_filename(local_file_name)


        # Optional: Delete the local file after uploading to Firebase Storage
        

        print('File uploaded to Firebase Storage successfully!')
    except Exception as e:
        print('Error uploading file to Firebase Storage:', str(e))

# if __name__ == '__main__':
#     initialize_firebase()
    
#     # Example usage
#     local_file_path = 'path/to/local/file.txt'
#     file_name = 'file.txt'
#     upload_to_firebase(local_file_path, file_name)
