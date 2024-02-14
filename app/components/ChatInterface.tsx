'use client'

import React, { useState } from 'react';
import styles from '../styles/ChatInterface.module.css';

const ChatInterface = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = (e) => {
    e.preventDefault();
    if (input.trim() !== '') {
      // Here you would typically handle sending the message to your AI service
      setMessages([...messages, { text: input, sender: 'user' }]);
      setInput('');
    }
  };

  return (
    <div className={styles.chatContainer}>
      <div className={styles.messagesContainer}>
        {messages.map((message, index) => (
          <div key={index} className={styles.message}>
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
        <button type="submit" className={styles.sendButton}>Send</button>
      </form>
    </div>
  );
};

export default ChatInterface;