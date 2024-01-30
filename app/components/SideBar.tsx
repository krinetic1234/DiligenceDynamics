"use client"

import React from 'react';
import styles from '../styles/SideBar.module.css';
// import '../styles/SideBar.css';
import { Nav, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const SideBar = () => {
  return (
    <Row>
        <Col>
            <Nav defaultActiveKey="/home" className={styles.sidebar}>
                <h3 className={styles.header}>DiligenceDynamics</h3>
                <Nav.Item>
                    <Nav.Link href="/home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/settings">settings</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/something else">something</Nav.Link>
                </Nav.Item>
            </Nav>
        </Col>
    </Row>
    
  );
};

export default SideBar;