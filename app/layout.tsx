import SideBar from "./components/SideBar";
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// import '../styles/globals.css';
import './styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Container fluid className="page-container">
      <Row className="row-container">
        <Col xs={4} className="sidebar">
            <SideBar />
        </Col>
        <Col xs={8}>
            {children}
        </Col>
      </Row>
    </Container>
  )
}