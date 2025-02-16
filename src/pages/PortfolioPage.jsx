import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "../components/Portfolio.css";

const Portfolio = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeModal, setActiveModal] = useState(null);

  useEffect(() => {
    axios.get("https://api.github.com/users/OliverWG-net/repos")
      .then((response) => {
        setRepos(response.data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  if (loading) return <p>Loading projects...</p>;

const imgMap = {
  ".WealthSpecialists": "Images/wealth-specialist-logo.png",
  "Database-project": "Images/database-logo.png",
  "CV-React": "Images/react.png",
  "CV-Sida": "Images/cv-html-css.png",
  "Gissa-nummer": "Images/bingo.png",
  "Stack-Pop":"Images/stack-pop.png",

};

const descriptionMap = {
  ".WealthSpecialists": "Ett bank system där du kan skapa användare eller öppna nya konton. Du kan också omväxla valuta samt föra över pengar mellan egna konton eller till andra användare. Du kan kan också ansöka om lån, sedan se räntan på ditt lån eller på ditt sparkonto",
  "Database-project": "Ett projekt där jag skapade en databas i SQL. Sedan ett program som lägger till hämtar och filtrera data från databasen, detta görs igenom Entity Framework.",
  "CV-React": "Mitt CV projekt där jag gör en refaktorisering av min CV-sida med React",
  "CV-Sida": "Min CV skapad i HTML och CSS",
  "Gissa-nummer": "Ett simpelt bingo spel",
  "Stack-Pop":"En kodövning där jag skapade en stack och en pop funktion i C#",
};


  return (
    <>
      <div className="portfolio-container">
        {repos.slice(0, 6).map((repo, index) => (
          <a
            key={repo.id}
            href={`#modal${index + 1}`}
            className={`modalPlacement${index + 1}`}
            onClick={() => setActiveModal(index + 1)}
          >
            <img
              src={imgMap[repo.name] ||  "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"}
              alt={repo.name}
              className="portfolio-img"
            />
            <p className="githubTitle">{repo.name}</p>
          </a>
        ))}
      </div>

      {/* Modals */}
      {repos.slice(0, 6).map((repo, index) => (
        <div
          key={index}
          id={`modal${index + 1}`}
          className={`modal ${activeModal === index + 1 ? "show" : ""}`}
        >
          <div className="modal-content">
            <a
              href="#"
              className="close"
              onClick={() => setActiveModal(null)}
            >
              &times;
            </a>
            <h2>{repo.name}</h2>
            <p>{descriptionMap[repo.name] || "No description available."}</p>
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Visit Repo
            </a>
          </div>
        </div>
      ))}
    </>
  );
};

export default Portfolio;