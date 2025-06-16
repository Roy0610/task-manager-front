// src/components/ProjectList.js
import React from "react";

const ProjectList = ({ projects, onProjectClick }) => {
  return (
    <div>
      <h2>プロジェクト一覧</h2>
      {projects.map((project) => (
        <div
          key={project.id}
          style={{ border: "1px solid #ccc", margin: "1em", padding: "1em", cursor: "pointer" }}
          onClick={() => onProjectClick && onProjectClick(project.id)}  // ✅ クリックで発火
        >
          <h3>{project.name}</h3>
          <ul>
            {project.tasks.map((task) => (
              <li key={task.id}>
                {task.title} [{task.status}]
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};


export default ProjectList;
