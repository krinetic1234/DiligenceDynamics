"use client";

import SideBar from "./components/SideBar";
import { AuthProvider } from "./contexts/AuthContext"
import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import menuPic from "./images/menu.png";
import Image from "next/image";

import "./styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [margin, setMargin] = useState(0);
  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
    if (margin === 0) {
      setMargin(0);
    } else {
      setMargin(0);
    }
  };

  return (
    <html lang="en">
      <body>
        <AuthProvider>
        <Container fluid className="page-container">
          <button
            onClick={toggleSidebar}
            className="toggle-sidebar-btn"
            style={{ marginLeft: margin }}
          >
            <Image src={menuPic} alt="menu icon" height={30} width={30} />
          </button>
          <Row className="row-container">
            {sidebarVisible && (
              <Col xs={2} className="sidebar">
                <SideBar />
              </Col>
            )}
            <Col xs={sidebarVisible ? 9 : 12}>{children}</Col>
          </Row>
        </Container>
        </AuthProvider>
      </body>
    </html>
  );
}
