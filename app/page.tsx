// ./app/page.tsx
"use client";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { Container } from "react-bootstrap";
import Search from "./components/Search";
import "./styles/globals.css";

import FinanceChart from "./components/FinanceChart";
import moment from "moment-timezone";

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
      <FinanceChart data={companyData} />
    </Container>
  );
};

export default Landing;
