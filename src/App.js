import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectPage from "./pages/ProjectPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Task Manager</h1>
        <Routes>
          <Route path="/" element={<ProjectPage />} />
          <Route path="/projects/:id" element={<ProjectDetailPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
