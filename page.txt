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
import moment from "moment-timezone";

const Landing = () => {
  moment.tz.setDefault("America/New_York");
  const [companyData, setCompanyData] = React.useState(null);
  const [stockDiff, setStockDiff] = React.useState(0);
  const [fullDiff, setFullDiff] = React.useState(0);
  const api_key = "yDtGVD0KnJPgdFurSVspS5eHyreyLBUS"; // API key for Polygon AI
  const [startDate, setStartDate] = React.useState(
    new Date(Date.now() - 92 * 24 * 60 * 60 * 1000)
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
        if (data.results.length > 1) {
          const currentClose = data.results[data.results.length - 1].c;
          const prevClose = data.results[data.results.length - 2].c;
          const earliestClose = data.results[0].c;
          let diff = (currentClose / prevClose - 1) * 100;
          let fullDiff = (currentClose / earliestClose - 1) * 100;
          setStockDiff(diff);
          setFullDiff(fullDiff);
        }
        setCompanyData(data);
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
      <div style={{ marginTop: 75, paddingBottom: 50 }}>
        <h1>Welcome to DiligenceDynamics</h1>
        <p>Search for a company to get started</p>
      </div>
      <div style={{ width: 600 }}>
        <Search onSearch={handleSearch} />
        {companyData && companyData.results ? (
          <div>
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottom: "2px solid #000",
                }}
              >
                <h4>
                  {nasdaq_map[companyData.ticker]}{" "}
                  <span className="h5">(NASDAQ:{companyData.ticker})</span>
                </h4>
                <div>
                  {stockDiff > 0 ? (
                    <span className="h5" style={{ color: "green" }}>
                      ↑ {stockDiff.toFixed(2)}% Today
                    </span>
                  ) : (
                    <span className="h5" style={{ color: "red" }}>
                      ↓ {stockDiff.toFixed(2)}% Today
                    </span>
                  )}
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <h2 style={{ textAlign: "left" }}>
                  ${companyData.results[companyData.results.length - 1].c}
                </h2>
                <div>
                  {fullDiff > 0 ? (
                    <span className="h5" style={{ color: "green" }}>
                      ↑ {fullDiff.toFixed(2)}% from start date
                    </span>
                  ) : (
                    <span className="h5" style={{ color: "red" }}>
                      ↓ {fullDiff.toFixed(2)}% from start date
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="datepicker" style={{ flexDirection: "row" }}>
              <p style={{ marginRight: 15 }}>Start date:</p>
              <DatePicker
                selected={startDate}
                onChange={(date) => {
                  setStartDate(date);
                }}
                dateFormat="yyyy-MM-dd"
                maxDate={new Date(Date.now() - 1 * 24 * 60 * 60 * 1000)}
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
          </div>
        ) : null}
      </div>
      <FinanceChart data={companyData} />
    </Container>
  );
};

export default Landing;
