import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const Portfolio = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://api.github.com/users/OliverWG-net/repos")
      .then((response) => {
        setRepos(response.data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  if (loading) return <p>Loading projects...</p>;

  return (
    <div>
      <h2>GitHub Projects</h2>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>
            <h3>{repo.name}</h3>
            <p>{repo.description || "No description available."}</p>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Portfolio;