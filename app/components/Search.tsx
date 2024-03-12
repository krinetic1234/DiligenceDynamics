"use client";
import React, { useState, useEffect } from "react";
import { InputGroup, FormControl, Button, ListGroup } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import nasdaq_map from "../nasdaq_map.json";
import { useRouter } from "next/navigation";
import Image from "next/image";
import searchPic from "../images/search.png";
import "../styles/globals.css";

const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const router = useRouter();

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

  const handleSuggestionClick = (symbol) => {
    if (symbol !== "") {
      router.push("/company-search/" + symbol);
    }
  };

  return (
    <div style={{ width: 600 }}>
      <InputGroup className="mb-3" style={{ height: 60 }}>
        <FormControl
          placeholder="Search for a company..."
          aria-label="Search for a company"
          aria-describedby="basic-addon2"
          value={inputValue}
          style={{ borderRadius: 50 }}
          onChange={handleInputChange}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
          onFocus={() => inputValue && setShowSuggestions(true)}
        />
        <Button
          variant="custom"
          className="custom-outline-button"
          style={{
            // backgroundColor: "#76ABAE",
            borderRadius: "50%",
            marginLeft: 15,
          }}
          onClick={() => {
            handleSuggestionClick(inputValue);
          }}
        >
          <div style={{ width: 35, height: 30 }}>
            <Image src={searchPic} alt="search icon" height={30} width={30} />
          </div>
        </Button>
        {showSuggestions && suggestions.length > 0 && (
          <ListGroup
            style={{
              position: "absolute",
              zIndex: 1,
              width: "88%",
              paddingTop: 62,
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

export default Search;
