"use client";
import React, { useState, useEffect } from "react";
import { InputGroup, FormControl, Button, ListGroup } from "react-bootstrap";
import DatePicker from "react-datepicker/dist/react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import nasdaq_map from "../nasdaq_map.json";
import { useRouter } from 'next/navigation'

const Search = ({ companyData, setCompanyData }) => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [stockDiff, setStockDiff] = React.useState(0);
  const [fullDiff, setFullDiff] = React.useState(0);
  const api_key = "yDtGVD0KnJPgdFurSVspS5eHyreyLBUS"; // API key for Polygon AI
  const [startDate, setStartDate] = React.useState(
    new Date(Date.now() - 92 * 86400000) // 24 * 60 * 60 * 1000
  );
  const [endDate, setEndDate] = React.useState(new Date());
  const [query, setQuery] = React.useState("");

  const router = useRouter();

  const handleSearch = async (input) => {
    try {
      setQuery(input);
      if (query === "") {
        setCompanyData(null);
      } else {
        const start = startDate.toISOString().split("T")[0];
        const end = endDate.toISOString().split("T")[0];
        console.log('query', query.toUpperCase());
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

  useEffect(() => {
    handleSearch(query);
  }, [startDate, endDate, query]);

  useEffect(() => {
    if (inputValue) {
      let filteredSuggestions = Object.entries(nasdaq_map)
        .filter(
          ([symbol, name]) =>
            symbol.toLowerCase().includes(inputValue.toLowerCase()) ||
            name.toLowerCase().includes(inputValue.toLowerCase())
        )
        .slice(0, 5);

      filteredSuggestions.sort(([symbolA, nameA], [symbolB, nameB]) => {
        if (
          symbolA.toLowerCase() === inputValue.toLowerCase() ||
          nameA.toLowerCase() === inputValue.toLowerCase()
        ) {
          return -1;
        }
        if (
          symbolB.toLowerCase() === inputValue.toLowerCase() ||
          nameB.toLowerCase() === inputValue.toLowerCase()
        ) {
          return 1;
        }
        return 0;
      });

      setSuggestions(filteredSuggestions);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  }, [inputValue, nasdaq_map]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    handleSearch(inputValue);
    setShowSuggestions(false);
  };

  const handleSuggestionClick = (symbol) => {
    // setInputValue(symbol);
    // setShowSuggestions(false);
    // handleSearch(symbol);
    router.push('/company-search/' + symbol);
  };

  return (
    <div style={{ width: 600 }}>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Search for a company..."
          aria-label="Search for a company"
          aria-describedby="basic-addon2"
          value={inputValue}
          onChange={handleInputChange}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
          onFocus={() => inputValue && setShowSuggestions(true)}
        />
        <Button
          variant="primary"
          id="button-addon2"
          onClick={handleButtonClick}
        >
          Search
        </Button>
        {showSuggestions && suggestions.length > 0 && (
          <ListGroup
            style={{
              position: "absolute",
              zIndex: 1,
              width: "100%",
              paddingTop: 40,
            }}
          >
            {suggestions.map(([symbol, name], index) => (
              <ListGroup.Item
                key={index}
                action
                onClick={() => handleSuggestionClick(symbol)}
              >
                {symbol} - {name}
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </InputGroup>
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
  );
};

export default Search;
