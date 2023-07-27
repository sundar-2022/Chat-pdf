import React, { useState } from "react";
import "./ChatSection.css";

const ChatSection = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");

  const handleUserMessage = () => {
    if (userInput.trim() === "") return; // Don't send empty messages

    const newMessage = {
      author: "user",
      type: "text",
      data: { text: userInput },
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setUserInput(""); // Clear the input field after sending

    // Simulate bot response after a short delay (you can replace this with an actual API call)
    setTimeout(() => {
      const botResponse = {
        author: "bot",
        type: "text",
        data: { text: "Hello again" },
      };
      setMessages((prevMessages) => [...prevMessages, botResponse]);
    }, 1000);
  };

  return (
    <div className="chat-section">
      <div className="chat-window">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`chat-message ${
              message.author === "user" ? "user-message" : "bot-message"
            }`}
          >
            {message.data.text}
          </div>
        ))}
      </div>
      <div className="user-input">
        <input
          type="text"
          placeholder="Type your questions..."
          value={userInput}
          onChange={(event) => setUserInput(event.target.value)}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              handleUserMessage();
            }
          }}
        />
      </div>
      <button className="send-button" onClick={handleUserMessage}>
       
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="arrow-icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
      </button>
    </div>
  );
};

export default ChatSection;
