import SideBar from "../components/SideBar";
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import '../styles/globals.css';

 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Container fluid className="page-container">
        <Row>
        <Col className="sidebar">
            <SideBar />
        </Col>
        <Col>
            {children}
        </Col>
        </Row>
    </Container>
    
    // <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
    //   <div className="w-full flex-none md:w-64">
    //     <SideBar />
    //   </div>
    //   <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    // </div>
  );
}