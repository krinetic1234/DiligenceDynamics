// ./app/page.tsx
"use client";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/globals.css";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import moment from "moment-timezone";
import Search from "./components/Search";
import NewsList from "./components/NewsList";
import FinanceChart from "./components/FinanceChart";
import ChatInterface from "./components/ChatInterface";

const Landing = () => {
  moment.tz.setDefault("America/New_York");
  const [companyData, setCompanyData] = React.useState(null);

  return (
    <Container className="text-center mt-5 landing">
      <div style={{ marginTop: 75, paddingBottom: 50 }}>
        <h1>Welcome to DiligenceDynamics</h1>
        <p>Search for a company to get started</p>
      </div>
      <Search companyData={companyData} setCompanyData={setCompanyData} />
      <Row>
        <Col>
          {companyData ? <FinanceChart companyData={companyData} /> : null}
          {companyData ? <ChatInterface /> : null}
        </Col>
        <Col>
          {companyData ? <NewsList companyData={companyData} /> : null}
        </Col>
      </Row>
      
    </Container>
  );
};

export default Landing;
