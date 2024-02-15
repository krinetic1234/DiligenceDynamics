'use client';

import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/firebaseConfig'; 
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';

const Page: React.FC = () => {
  const [user, loading, error] = useAuthState(auth);
  // State to toggle between login and signup forms
  const [showSignup, setShowSignup] = useState<boolean>(false);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Toggle the form display
  const toggleForm = () => setShowSignup(!showSignup);

  // If the user is logged in, redirect or show a different component
  if (user) {
    return <div>User is already logged in</div>;
  }

  return (
    <div>
      {showSignup ? <SignupForm /> : <LoginForm />}
      <button onClick={toggleForm}>
        {showSignup ? 'Already have an account? Log in' : "Don't have an account? Sign up"}
      </button>
    </div>
  );
};

export default Page;
