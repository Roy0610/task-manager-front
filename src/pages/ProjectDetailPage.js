import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProjectDetailPage = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8080/projects/${id}`)
      .then((res) => setProject(res.data))
      .catch((err) => console.error("取得失敗", err));
  }, [id]);

  if (!project) return <p>読み込み中...</p>;

  return (
    <div>
      <h2>{project.name}</h2>
      <ul>
        {project.tasks.map((task) => (
          <li key={task.id}>{task.title} [{task.status}]</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectDetailPage;
