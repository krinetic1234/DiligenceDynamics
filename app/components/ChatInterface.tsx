"use client";

import React, { useState, useEffect } from "react";
import { useAuth } from '../contexts/AuthContext';
import styles from "../styles/ChatInterface.module.css";
// import { ref, get, child, limitToFirst, limitToLast } from 'firebase/database';
import { firestore } from "../firebase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const ChatInterface = ({ companySymbol, mode }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const { currentUser } = useAuth();

  const fetchDataFromDatabase = async () => {
    try {
      if (!currentUser) {
        console.log('User not logged in');
        // throw new Error('User not logged in');
        return;
      }
      if (!companySymbol) {
        console.log('Company Symbol not provided');
        // throw new Error('Company Symbol not provided');
        return;
      }
      
      const querySnapshot = await getDocs(collection(firestore, 'users', currentUser.uid, 'companies', companySymbol, 'chat_history'));

      const previous_chat_data = querySnapshot.docs.map(doc => {
        return doc.data();
      });

      if (previous_chat_data.length !== 0) {
        const previousMessages = previous_chat_data.flatMap(({ question, answer}) => [
          { text: question, sender: "user" },
          { text: answer, sender: "bot" },
        ]);
  
        setMessages((prevMessages) => [
          ...prevMessages,
          ...previousMessages,
        ]);
      } else {
        console.log('No previous chat data found');
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "Hello! How can I help you today?", sender: "bot" }
        ]);
      }
      

      // setTableData(companyData);
    } catch (error) {
      console.error('Error fetching chat history:', error);
    }
  };
  

  const sendMessage = async (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      try {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: input, sender: "user" },
        ]);
        setInput("");
        if (currentUser) {
          const response = await fetch("http://localhost:8080/api/company-chat", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              query: input,
              companySymbol: companySymbol,
              mode: mode,
              userID: currentUser.uid,
            }), // customPrompt +
          });
          const message = await response.json();
          setMessages((prevMessages) => [
            ...prevMessages,
            { text: message.response, sender: "bot" },
          ]);
        } else {
          console.log("user not logged in");
          throw new Error("User not logged in");
        }
      } catch (error) {
        console.log("error", error);
      }
    }
  };

  useEffect(() => {
    fetchDataFromDatabase();
  
  }, [companySymbol, currentUser]);

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
