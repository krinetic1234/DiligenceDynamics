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
      <html lang="en">
        <body>
          <Container className="page-container">
            <Row className="row-container">
              <Col className="sidebar">
                  <SideBar />
              </Col>
              <Col>
                  {children}
              </Col>
            </Row>
          </Container>
        </body>
      </html>
    )
  }