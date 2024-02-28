import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
import { Form, Button, Row, Col, Toast } from 'react-bootstrap';


const DocumentUploader = ({ companySymbol, onUploadSuccess }) => {
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [showToast, setShowToast] = React.useState(false);
  const [toastMessage, setToastMessage] = React.useState('');
  const [toastVariant, setToastVariant] = React.useState('success');

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    console.log(selectedFile);
    if (!selectedFile) {
      // alert('Please select a file to upload first');
      setToastMessage('Please select a file to upload first');
      setToastVariant('danger');
      setShowToast(true);
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('companySymbol', companySymbol);
    // Upload the file to the server
    try {
      const response = await fetch('http://localhost:8080/api/upload-document', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('File uploaded successfully!');
        setToastMessage('File uploaded successfully!');
        setToastVariant('success');

        // tell parent to fetch updated list of files
        onUploadSuccess();
      } else {
        console.error('File upload failed.');
        setToastMessage('File upload failed.');
        setToastVariant('danger');
      }
      setShowToast(true);
    } catch (error) {
      console.error('Error:', error);
      setToastMessage('Error uploading file');
      setToastVariant('danger');
      setShowToast(true);
      // throw error
      throw error;
    }
  }

  
  return (
    <>
      <Row className="align-items-end mb-4">
        <Col>
          <Form.Group controlId="formFile">
            <Form.Label>Upload files to process for Q&A</Form.Label>
            <Form.Control type="file" onChange={handleFileChange}/>
          </Form.Group>
        </Col>
        <Col className="px-0">
          <Button variant="primary" onClick={handleUpload}>
            Upload
          </Button>
        </Col>
      </Row>
      <Toast
        show={showToast}
        onClose={() => setShowToast(false)}
        delay={3000}
        autohide
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
        }}
        bg={toastVariant}
        // text="white"
      >
        <Toast.Header closeButton={false}>
          <strong className="me-auto">{toastVariant === 'success' ? 'Success' : 'Error'}</strong>
        </Toast.Header>
        <Toast.Body>{toastMessage}</Toast.Body>
      </Toast>
    </>
  );
}

export default DocumentUploader;