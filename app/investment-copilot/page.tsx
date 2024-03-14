"use client";
import "bootstrap/dist/css/bootstrap.css";
import React, { useState, useEffect } from "react";
import DocumentUploader from "../components/DocumentUploader";
import CompanyPicker from "../components/CompanyPicker";
import Table from "../components/Table";
import ChatInterface from "../components/ChatInterface";
import { Container, Row, Col } from "react-bootstrap";
import { storage } from "../firebase/firebaseConfig";
import { ref, list, getDownloadURL, getMetadata } from "firebase/storage";
import { FcDocument } from "react-icons/fc";
import "../styles/globals.css";
import { Roboto } from "next/font/google";

export default function Page() {
  const mode = "copilot";
  const [companySymbol, setCompanySymbol] = useState("");
  

  return (
    <Container fluid className="page-container">
      <Row>
        <Col>
          <h1 className="pt-5 pb-2">Investment Report Helper</h1>
          <CompanyPicker
            companySymbol={companySymbol}
            setCompanySymbol={setCompanySymbol}
          />
          {!companySymbol && (     
              <h4 className="mb-3">Welcome to DiligenceDynamics's generative investment report helper. Please a select a company to start.</h4>
          )}
          {companySymbol && (     
              <h4 className="mb-3">To help you write your report on {companySymbol}, please describe your investment thesis</h4>
          )}
          {companySymbol && (
            <ChatInterface
              companySymbol={companySymbol}
              mode={mode}
            ></ChatInterface>
          )}

          
        </Col>
      </Row>
    </Container>
  );
}