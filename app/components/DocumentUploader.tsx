import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import { Form, Button, Row, Col, Toast, Spinner } from "react-bootstrap";

const DocumentUploader = ({ companySymbol, onUploadSuccess }) => {
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [showToast, setShowToast] = React.useState(false);
  const [toastMessage, setToastMessage] = React.useState("");
  const [toastVariant, setToastVariant] = React.useState("success");
  const [isProcessing, setIsProcessing] = React.useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    console.log(selectedFile);
    if (!selectedFile) {
      // alert('Please select a file to upload first');
      setToastMessage("Please select a file to upload first");
      setToastVariant("danger");
      setShowToast(true);
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("companySymbol", companySymbol);
    // Upload the file to the server
    try {
      const response = await fetch(
        "http://localhost:8080/api/upload-document",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        console.log("File uploaded successfully!");
        setToastMessage("File uploaded successfully!");
        setToastVariant("success");

        // tell parent to fetch updated list of files
        onUploadSuccess();
      } else {
        console.error("File upload failed.");
        setToastMessage("File upload failed.");
        setToastVariant("danger");
      }
      setShowToast(true);
      return response.ok;
    } catch (error) {
      console.error("Error:", error);
      setToastMessage("Error uploading file");
      setToastVariant("danger");
      setShowToast(true);
      // throw error
      throw error;
    }
  };

  const handleProcess = async () => {
    console.log(selectedFile);
    if (!selectedFile) {
      // alert('Please select a file to upload first');
      setToastMessage("Please select a file to upload and process first");
      setToastVariant("danger");
      setShowToast(true);
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("companySymbol", companySymbol);
    // Upload the file to the server
    try {
      const response = await fetch(
        "http://localhost:8080/api/process-document",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        console.log("File processed successfully!");
        setToastMessage("File processed successfully!");
        setToastVariant("success");

        // tell parent to fetch updated list of files
        // onUploadSuccess();
      } else {
        console.error("File processing failed.");
        setToastMessage("File processing failed.");
        setToastVariant("danger");
      }
      setShowToast(true);
      return response.ok;
    } catch (error) {
      console.error("Error:", error);
      setToastMessage("Error processing file");
      setToastVariant("danger");
      setShowToast(true);
      // throw error
      throw error;
    }
  };

  const uploadAndProcess = async () => {
    const isOk = await handleUpload();
    if (isOk) {
      // process the file
      setIsProcessing(true);
      await handleProcess();
      setIsProcessing(false);
    }
  };

  return (
    <>
      <Row className="align-items-end mb-4">
        <Col>
          <Form.Group controlId="formFile">
            <Form.Label>Upload files to process for Q&A</Form.Label>
            <Form.Control type="file" onChange={handleFileChange} />
          </Form.Group>
        </Col>
        <Col className="px-0">
          <Button
            variant="custom"
            className="custom-outline-button"
            onClick={uploadAndProcess}
          >
            Upload
          </Button>
        </Col>
      </Row>
      {isProcessing && (
        <Row className="mb-3">
          <Col>
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>{" "}
            Processing document... This may take a few minutes depending on the
            file size.
          </Col>
        </Row>
      )}
      <Toast
        show={showToast}
        onClose={() => setShowToast(false)}
        delay={3000}
        autohide
        style={{
          position: "absolute",
          top: 0,
          right: 0,
        }}
        bg={toastVariant}
        // text="white"
      >
        <Toast.Header closeButton={false}>
          <strong className="me-auto">
            {toastVariant === "success" ? "Success" : "Error"}
          </strong>
        </Toast.Header>
        <Toast.Body>{toastMessage}</Toast.Body>
      </Toast>
    </>
  );
};

export default DocumentUploader;
