'use client';

import React, { useEffect, useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';
import '../styles/globals.css';

const Page: React.FC = () => {
  const [showSignup, setShowSignup] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const router = useRouter();
  const auth = getAuth();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        setIsLoggedIn(true);
        router.push('/'); // Redirect to home page if already logged in
      } else {
        setIsLoggedIn(false);
      }
    });

    return () => unsubscribe(); // Cleanup subscription
  }, [auth, router]);

  if (isLoggedIn) {
    return <p>User is alread logged in.</p>; 
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
