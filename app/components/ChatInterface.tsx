"use client";

import React, { useState } from "react";
import styles from "../styles/ChatInterface.module.css";

const ChatInterface = ({ companySymbol }) => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you today?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      try {
        let customPrompt =
          "You are a chatbot powered by a Retriever-Augmented Generation model, designed to assist the user in creating investment reports and answering queries about companies based on user-provided PDF documents. Your capabilities include extracting and analyzing information from financial documents, answering specific questions about a company's performance, and generating comprehensive investment reports. You offer insights and data-driven recommendations, emphasizing that users should consider these as part of their broader research.";
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: input, sender: "user" },
        ]);
        setInput("");
        const response = await fetch("http://localhost:8080/api/company-chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ query: input, companySymbol: companySymbol }), // customPrompt + 
        });
        const message = await response.json();
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: message.response, sender: "bot" },
        ]);
      } catch (error) {
        console.log("error", error);
      }
    }
  };

  return (
    <div className={styles.chatContainer}>
      <div className={styles.messagesContainer}>
        {messages.map((message, index) => (
          <div
            key={index}
            className={
              message.sender === "bot" ? styles.messageBot : styles.messageUser
            }
          >
            {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage} className={styles.inputContainer}>
        <input
          type="text"
          className={styles.inputField}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your question..."
        />
        <button type="submit" className={styles.sendButton}>
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatInterface;
