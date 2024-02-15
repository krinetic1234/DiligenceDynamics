'use client';

import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const auth = getAuth();

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('Logged in successfully');
      // Handle successful login (e.g., redirect to a dashboard)
    } catch (error: any) {
      setError(error.message);
      console.error('Failed to log in:', error.message);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <div>
        <h2>Log in</h2>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit">Log In</button>
    </form>
  );
};

export default LoginForm;
