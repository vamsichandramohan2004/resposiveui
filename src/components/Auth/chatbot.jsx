import React from "react";
import "./ChatbotIntegration.css";

const ChatbotIntegration = () => {
  const handleClick = (action) => {
    alert(`${action} done successfully!`);
    window.location.href = "/integration-success";
  };

  return (
    <div className="integration-container">
      <h2>Integrate Chatbot</h2>
      <button onClick={() => handleClick("Test Chatbot")}>Test Chatbot</button>
      <button onClick={() => handleClick("Copy Integration Code")}>Copy Integration Code</button>
      <button onClick={() => handleClick("Email Instructions to Developer")}>Email Instructions to Developer</button>
    </div>
  );
};
export default ChatbotIntegration;