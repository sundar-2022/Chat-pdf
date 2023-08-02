import React, { useState } from "react";
import "./ChatSection.css";



const ChatSection = () => {
        const [messages, setMessages] = useState([
        {
          author: "bot",
          type: "text",
          data: { text: "Welcome to our website! How can I assist you today?" },
        },
      ]);

      
const handleResetChat = () => {
  setMessages([
    {
      author: "bot",
      type: "text",
      data: { text: "Welcome to our website! How can I assist you today?" },
    },
  ]);
};

// Function to delete the chat
const handleDeleteChat = () => {
  setMessages([]);
};

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
    <div className="chat-header">
      <h2>Chat Box</h2>
      <div className="chat-actions">
          <button onClick={handleResetChat}>Reset</button>
          <button onClick={handleDeleteChat}>Delete</button>
        </div>
    </div>
      {/* <div className="chat-window"> */}
        {messages.map((message, index) => (
          <div
            key={index}
            className={`chat-message ${
              message.author === "user" ? "user-message" : "bot-message"
            }`}
          >
              <div className="msg-content" style={{width:"200px"}}>{message.data.text}</div>
          </div>
        ))}
      {/* </div> */}
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
             strokeWidth={5}
             d="M14 5l7 7m0 0l-7 7m7-7H3"
           />
         </svg>
     </button>
     
      </div>
      
    </div>
  );
};

export default ChatSection;
