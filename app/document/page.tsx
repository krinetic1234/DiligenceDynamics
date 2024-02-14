import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ChatInterface from '../components/ChatInterface';
import DocumentUploader from '../components/DocumentUploader';
// import SideBar from './components/SideBar';
import { Container, Row, Col } from 'react-bootstrap';

export default function Page() {
    return (
        <Container fluid className="page-container">
            <Row>
                <Col>
                    <DocumentUploader />
                    <ChatInterface />
                </Col>
            </Row>
        </Container>
    );
}