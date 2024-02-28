'use client';

import React, { useState, useEffect } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/firebaseConfig'; 
import { useRouter } from 'next/navigation';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';
import '../styles/globals.css';

const Page: React.FC = () => {
  const [user, loading, error] = useAuthState(auth);
  const [showSignup, setShowSignup] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push('/'); 
    }
  }, [user, router]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Toggle the form display
  const toggleForm = () => setShowSignup(!showSignup);

  return (
    <Container className="mt-5">
    <Row className="justify-content-md-center">
    <Col xs={12} md={6}>
        <div>
            {showSignup ? <SignupForm /> : <LoginForm />}
            <Button variant="Secondary" onClick={toggleForm} className="underline-text">
                {showSignup ? 'Already have an account? Log in' : "Don't have an account? Sign up"}
            </Button>
        </div>
    </Col>
    </Row>
    </Container>
  );
};

export default Page;
