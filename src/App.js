import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import ResumePage from "./page/ResumePage";
import HomePage from "./page/HomePage";
import ProjectPage from "./page/ProjectPage";
import AboutMe from "./page/AboutMe";
import ContactPage from "./page/ContactPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Resume" element={<ResumePage />} />
        <Route path="/Project" element={<ProjectPage />} />
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="/Contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;