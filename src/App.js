import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectPage from "./pages/ProjectPage";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Task Manager</h1>
        <Routes>
          <Route path="/" element={<ProjectPage />} />
          {/* 今後ここに他ページも追加できる */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
