import React, { useState } from "react";
import "./SetupOrganization.css";

const SetupOrganization = () => {
  const [metaDescription, setMetaDescription] = useState("");

  const fetchMetaDescription = () => {
    // Dummy API call simulation
    setMetaDescription("This is a dummy meta-description fetched from the website.");
  };
  const handleClick = () => {
    window.location.href = "/chatbot";
  };

  return (
    <div className="setup-container">
      <h2>🎉BeyondChats Welcomes You</h2>
      <label htmlFor="beynd">Beyond Chats</label>
      <p>This is a dummy meta-description fetched from the website.</p>
      <textarea placeholder="Company Description" value={metaDescription} required />
      <button onClick={handleClick}>Next</button>
    </div>
  );
};

export default SetupOrganization;