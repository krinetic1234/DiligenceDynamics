'use client';

import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const auth = getAuth();
  const router = useRouter();

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault(); 

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/');
      window.location.reload();
    } catch (error: any) {
      setError(error.message);
      console.error('Failed to log in:', error.message);
    }
  };

  return (
    <Form onSubmit={handleLogin}>
      <h2>Log in</h2>
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

      {error && <Form.Text style={{ color: 'red' }}>{error}</Form.Text>}

      <Button variant="primary" type="submit" className="mb-3">
        Log In
      </Button>
    </Form>
  );
};

export default LoginForm;
