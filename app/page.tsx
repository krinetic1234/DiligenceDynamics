import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ChatInterface from './components/ChatInterface';
import DocumentUploader from './components/DocumentUploader';
import SideBar from './components/SideBar';
import { Container, Row, Col } from 'react-bootstrap';


import './styles/globals.css';

const Home = () => {
  // const handleFileUpload = (event) => {
  //   console.log("doc uploaded")
  // };

  return (
    <Container fluid className="page-container">
      <Row>
        <Col className="sidebar">
          <SideBar />
        </Col>
        <Col>
          <DocumentUploader />
          <ChatInterface />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;