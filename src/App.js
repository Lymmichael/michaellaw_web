import React from "react";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import ResumePage from "./page/ResumePage";
import HomePage from "./page/HomePage";
import ProjectPage from "./page/ProjectPage";
import AboutMe from "./page/AboutMe";
import ContactPage from "./page/ContactPage";
function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/michaellaw_web/" element={<HomePage />} />
        <Route path="/michaellaw_web/Resume" element={<ResumePage />} />
        <Route path="/michaellaw_web/Project" element={<ProjectPage />} />
        <Route path="/michaellaw_web/AboutMe" element={<AboutMe />} />
        <Route path="/michaellaw_web/Contact" element={<ContactPage />}/>
      </Routes>
    </Router>
  );
}


export default App;