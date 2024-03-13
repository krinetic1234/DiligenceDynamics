"use client";

import React, { useState, useEffect } from "react";
import styles from "../styles/ChatInterface.module.css";
// import { ref, get, child, limitToFirst, limitToLast } from 'firebase/database';
import { firestore } from "../firebase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const ChatInterface = ({ companySymbol, mode }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  

  const fetchDataFromDatabase = async () => {
    try {
      console.log('messages:', messages);
      if (messages.length !== 0) {
        return;
      }
      // const companyRef = ref(database);
      const querySnapshot = await getDocs(collection(firestore, 'chat-history'));
      console.log('querySnapshot:', querySnapshot.docs);
      // const history = await get(child(companyRef, 'chat_history'));
      // console.log('history:', history);
      
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        console.log(doc.data());
      });

      const previous_chat_data = querySnapshot.docs.map(doc => {
        return doc.data();
      });
      // filter prevoius chat data on companyName
      const company_chat_data = previous_chat_data.filter(chat => chat.company === companySymbol);
      console.log('company_chat_data:', company_chat_data);

      if (company_chat_data.length !== 0) {
        const previousMessages = company_chat_data.flatMap(({ question, answer}) => [
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
        const response = await fetch("http://localhost:8080/api/company-chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: input,
            companySymbol: companySymbol,
            mode: mode,
          }), // customPrompt +
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

  useEffect(() => {
    console.log('hi im fetching');
    fetchDataFromDatabase();
  
  }, [companySymbol]);

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
