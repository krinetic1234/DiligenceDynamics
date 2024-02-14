// ./app/page.tsx
"use client";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { Container, Button } from "react-bootstrap";
import Search from "./components/Search";
import "./styles/globals.css";
import DatePicker from "react-datepicker/dist/react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import FinanceChart from "./components/FinanceChart";
import nasdaq_map from "./nasdaq_map.json";

const Landing = () => {
  const [companyData, setCompanyData] = React.useState(null);
  const [companyName, setCompanyName] = React.useState("");
  const [companySymbol, setCompanySymbol] = React.useState("");

  const api_key = "yDtGVD0KnJPgdFurSVspS5eHyreyLBUS"; // API key for Polygon AI
  const [startDate, setStartDate] = React.useState(
    new Date(Date.now() - 31 * 24 * 60 * 60 * 1000)
  );
  const [endDate, setEndDate] = React.useState(new Date());
  const [query, setQuery] = React.useState("");

  const handleSearch = async (input) => {
    try {
      setQuery(input);
      if (query === "") {
        setCompanyData(null);
      } else {
        const start = startDate.toISOString().split("T")[0];
        const end = endDate.toISOString().split("T")[0];
        const response = await fetch(
          `https://api.polygon.io/v2/aggs/ticker/${query.toUpperCase()}/range/1/day/${start}/${end}?adjusted=true&sort=asc&limit=120&apiKey=${api_key}`
        );
        const data = await response.json();
        setCompanyData(data);
        setCompanySymbol(data.ticker);
        console.log(companySymbol);
      }
    } catch (error) {
      console.error("Error fetching company data:", error);
      setCompanyData(null);
    }
  };

  React.useEffect(() => {
    handleSearch(query);
  }, [startDate, endDate, query]);

  return (
    <Container
      className="text-center mt-5"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "70vh",
      }}
    >
      <div style={{ paddingBottom: 50 }}>
        <h1>Welcome to DiligenceDynamics</h1>
        <p>Search for a company to get started</p>
      </div>
      <div style={{ width: 500 }}>
        <Search onSearch={handleSearch} />
        {companyData ? (
          <div className="datepicker" style={{ flexDirection: "row" }}>
            <p style={{ marginRight: 15 }}>Start date:</p>
            <DatePicker
              selected={startDate}
              onChange={(date) => {
                setStartDate(date);
              }}
              dateFormat="yyyy-MM-dd"
              maxDate={new Date()}
              showYearDropdown
            />

            <p style={{ marginLeft: 30, marginRight: 15 }}>End date:</p>
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              dateFormat="yyyy-MM-dd"
              maxDate={new Date()}
              showYearDropdown
            />
          </div>
        ) : null}
      </div>
      <FinanceChart data={companyData} />
    </Container>
  );
};

export default Landing;
