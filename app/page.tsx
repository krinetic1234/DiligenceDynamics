// ./app/page.tsx
"use client";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/globals.css";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import moment from "moment-timezone";
import Search from "./components/Search";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});
const Landing = () => {
  moment.tz.setDefault("America/New_York");

  return (
    <Container className="text-center mt-5 landing">
      <div
        style={{
          marginTop: 50,
          paddingBottom: 50,
          color: "#e85a4f",
        }}
        className={roboto.className}
      >
        <h1>Welcome to DiligenceDynamics</h1>
        <p>Search for a company to get started</p>
      </div>
      <Search />
    </Container>
  );
};

export default Landing;
