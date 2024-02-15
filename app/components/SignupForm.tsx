'use client';

import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(''); // Firebase errors
  const [formError, setFormError] = useState(''); // Form validation errors

  const auth = getAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setFormError('');

    if (password !== confirmPassword) {
      setFormError('Passwords do not match.');
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("User created successfully");
      // Redirect or clear form here
    } catch (error) {
      console.error("Error signing up:", error.message);
      setError(error.message);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      {error && <Form.Text style={{ color: 'red' }}>{error}</Form.Text>}
      {formError && <Form.Text style={{ color: 'red' }}>{formError}</Form.Text>}
      <Form.Group controlId="formBasicEmail" className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword" className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="formConfirmPassword" className="mb-3">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit" className="mb-3">
        Sign Up
      </Button>
    </Form>
  );
};

export default SignupForm;
