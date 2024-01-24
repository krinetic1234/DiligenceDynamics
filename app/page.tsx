import React from 'react';
import ChatInterface from './components/ChatInterface';
import DocumentUploader from './components/DocumentUploader';
import './styles/globals.css';

const Home = () => {
  // const handleFileUpload = (event) => {
  //   console.log("doc uploaded")
  // };

  return (
    <div className="container">
      <ChatInterface />
      <DocumentUploader />
    </div>
  );
};

export default Home;