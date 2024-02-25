"use client";
import React, { useState, useEffect } from "react";
import { InputGroup, FormControl, Button, ListGroup } from "react-bootstrap";
import DatePicker from "react-datepicker/dist/react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import nasdaq_map from "../nasdaq_map.json";
import { useRouter } from 'next/navigation'

const CompanyPicker = ({ companySymbol, setCompanySymbol }) => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

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
    setShowSuggestions(false);
  };

  const handleSuggestionClick = (symbol) => {
    setInputValue(symbol);
    setCompanySymbol(symbol);
    setShowSuggestions(false);
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
    </div>
  );
};

export default CompanyPicker;
