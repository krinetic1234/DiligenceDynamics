'use client'

import SideBar from "./components/SideBar";
import { AuthProvider } from "./contexts/AuthContext"
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

import './styles/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <html lang="en">
      <body>
        <AuthProvider>
        <Container fluid className="page-container">
          <button onClick={toggleSidebar} className="toggle-sidebar-btn">
            {sidebarVisible ? '<' : '>'}
          </button>
          <Row className="row-container">
            {sidebarVisible && (
              <Col xs={3} className="sidebar">
                <SideBar />
              </Col>
            )}
            <Col xs={sidebarVisible ? 9 : 12}>
              {children}
            </Col>
          </Row>
        </Container>
        </AuthProvider>
      </body>
    </html>
    
  )
}