import React from "react";
import "./TrainingStatus.css";

const TrainingStatus = () => {
    
  const dummyData = [
    { url: "https://example.com/about", status: "Scraped" },
    { url: "https://example.com/services", status: "Pending" },
    { url: "https://example.com/contact", status: "Scraped" },
  ];

  return (
    <div className="training-container">
      <h2>Chatbot Training Status</h2>
      <ul>
        {dummyData.map((page, index) => (
          <li key={index} className={page.status.toLowerCase()}>{page.url} - {page.status}</li>
        ))}
      </ul>
    </div>
  );
};

export default TrainingStatus;