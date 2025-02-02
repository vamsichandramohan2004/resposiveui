import React from "react";
import "./IntegrationSuccess.css";

const IntegrationSuccess = () => {
    const handleSubmit = () => {
    alert("Chatbot started successfully!");
    }
    const handleclick = (action) => {
        window.location.href = '/setup-organization';
    }
  return (
    <div className="success-container">
      <h1>🎉 Integration Successful!</h1>
      <button onClick={handleclick}>Explore Admin Panel</button>
      <button onClick={handleSubmit}>Start Chatting</button>
    </div>
  );
};

export default IntegrationSuccess;