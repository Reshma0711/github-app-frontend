import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SearchPage.module.css";

function SearchPage() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username.trim()) {
      try {
        const response = await fetch(
          `https://backend-github-ihc5.onrender.com/api/users/${e.target[0].value}`
        );
        if (response.ok) {
          navigate(`/user/${username.trim()}`);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchPage;
