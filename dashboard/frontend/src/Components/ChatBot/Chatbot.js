// Chatbot.js
import React, { useState } from 'react';
import axios from 'axios';

const Chatbot = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
    if (input.trim() === '') return;
  
    try {
      const response = await axios.post(
        'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=YOUR_API_KEY',
        {
          "input": {
            "text": input
          }
        }
      );
  
      const newMessage = {
        text: input,
        sender: 'user',
      };
  
      setMessages([...messages, newMessage]);
  
      const botMessage = {
        text: response.data.text,
        sender: 'bot',
      };
  
      setMessages([...messages, botMessage]);
      setInput('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };
  
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender === 'user' ? 'user-message' : 'bot-message'}`}>
            {message.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Type a message..."
        className="chatbot-input"
      />
      <button onClick={sendMessage} className="send-button">Send</button>
    </div>
  );
};

export default Chatbot;
