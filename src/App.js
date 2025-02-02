import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css"; 

// Importing Components
import Login from "./components/Auth/Login";
import ChatbotIntegration from "./components/Auth/chatbot";
import IntegrationSuccess from "./components/Auth/integ";
import TrainingStatus from "./components/Auth/training";
import ScrapedData from "./components/Auth/Scrapped";
import SetupOrganization from "./components/Auth/setuporg";

function App() {
  return (
    <Router>
      <Routes>
        {/* Auth Routes
        <Route path="/" element={<Login />} />
        <Route path="/verify-email" element={<VerifyEmail />} /> */}

        {/* Organization Setup */}
        <Route path="/setup-organization" element={<SetupOrganization />} />

        {/* Chatbot Training */}
        <Route path="/" element={<Login />} />

        <Route path="/training-status" element={<TrainingStatus />} />
        <Route path="/scraped-data" element={<ScrapedData />} />

        {/* Chatbot Integration */}
        <Route path="/chatbot" element={<ChatbotIntegration />} />
        <Route path="/integration-success" element={<IntegrationSuccess />} />

        {/* 404 Page */}
      </Routes>
    </Router>
  );
}

export default App;