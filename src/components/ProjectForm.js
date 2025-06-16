import React, { useState } from "react";
import axios from "axios";

const ProjectForm = ({ onProjectCreated }: ProjectFormProps) => {
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setError("プロジェクト名を入力してください");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/projects", { name });
      setName("");
      setError("");
      if (onProjectCreated) onProjectCreated(response.data);
    } catch (err) {
      console.error("作成エラー:", err);
      if (err.response?.data?.message) {
        setError(`作成に失敗しました: ${err.response.data.message}`);
      } else {
        setError("サーバーエラーが発生しました。しばらくしてから再試行してください。");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>プロジェクト作成</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="プロジェクト名"
      />
      <button type="submit">作成</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
};

export default ProjectForm;