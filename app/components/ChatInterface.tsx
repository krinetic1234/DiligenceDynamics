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
  const [relevantFiles, setRelevantFiles] = useState("");

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
        const sortedPreviousChatData = previous_chat_data.sort((a, b) => a.time - b.time);
        const previousMessages = sortedPreviousChatData.flatMap(({ question, answer }) => [
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
  
  const getRelevantFilesString = () => {
    if (relevantFiles) {
      return "<br>Relevant files: " + relevantFiles;
    }
    return "";
  }

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
            }),
          });
          const message = await response.json();

          const metadataList = message.metadataList;
          let relevantFilesString = "";
          if (metadataList) {
            const relevantFiles = metadataList.map((metadata) => {
              return metadata.file_name;
            });
            
            const uniqueRelevantFiles = relevantFiles.filter((value, index, array) => array.indexOf(value) === index);
            relevantFilesString = uniqueRelevantFiles.join(", ");
          }

          const htmlString = relevantFilesString !== "" ? "Relevant files: " + relevantFilesString : "";
          const responseText = message.response;

          setMessages((prevMessages) => [
            ...prevMessages,
            { text: responseText, sender: "bot", citation: htmlString },
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
    <div>
      {/* <h6>{getRelevantFilesString()}</h6> */}
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
              {message.sender === "bot" && (
                <div>
                  <p></p>
                  <p>{message.citation}</p>
                </div>
              )}
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
    </div>
    
  );
};

export default ChatInterface;
