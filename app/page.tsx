import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import Search from './components/Search';

import './styles/globals.css';

const Landing = () => {

  return (
    <Container className="text-center mt-5">
      <h1>Welcome to DiligenceDynamics</h1>
      <p>Search for a company to get started</p>
      <Search />
    </Container>
  );
};

export default Landing;