// src/pages/ProjectPage.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import ProjectForm from "../components/ProjectForm";
import ProjectList from "../components/ProjectList";

const ProjectPage = () => {
  const [projects, setProjects] = useState([]);

  const fetchProjects = () => {
    axios.get("http://localhost:8080/projects")
      .then((res) => setProjects(res.data))
      .catch((err) => console.error("APIエラー:", err));
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleProjectCreated = () => {
    fetchProjects();
  };

  return (
    <div>
      <ProjectForm onProjectCreated={handleProjectCreated} />
      <ProjectList projects={projects} />
    </div>
  );
};

export default ProjectPage;
