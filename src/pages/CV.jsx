import React, { useEffect, useState } from "react";

const CV = () => {
  const [cvData, setCvData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("./data/cv.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load CV data");
        }
        return response.json();
      })
      .then((data) => setCvData(data))
      .catch((error) => setError(error.message));
  }, []);

  if (error) return <p style={{ color: "red" }}>Error loading CV: {error}</p>;
  if (!cvData) return <p>Loading CV...</p>;

  return (
    <main>
      <div className="content-container2">
        <div className="card">
          <div className="cvSection1">
            <h1 className="cvTitle">{cvData.name}</h1>
            <p className="info">
              <a href={`mailto:${cvData.email}`}>{cvData.email}</a><br />
              {cvData.address} <br />
              {cvData.phone} <br />
            </p>
          </div>

          <div className="cvSection1">
            <h2 className="headerText">PROFILE</h2>
            <p className="cvText">{cvData.profile}</p>
          </div>

          <div className="cvSection">
            <h2 className="headerText">WORK EXPERIENCE</h2>
            {cvData.workExperience.map((job, index) => (
              <div key={index}>
                <h3>{job.year} - {job.company}</h3>
                <ul>
                  {job.positions.map((position, i) => (
                    <li key={i}>{position}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="cvSection2">
            <h2 className="headerText">EDUCATION</h2>
            <ul>
              {cvData.education.map((edu, index) => (
                <li key={index}>{edu}</li>
              ))}
            </ul>
          </div>

          <div className="cvSection2">
            <h2 className="headerText">COMPUTER SKILLS</h2>
            <ul>
              {cvData.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>

          <div className="cvSection3">
            <h2 className="headerText">LANGUAGE SKILLS</h2>
            <ul>
              {cvData.languages.map((lang, index) => (
                <li key={index}>{lang}</li>
              ))}
            </ul>
            <h3 className="headerText">References and certificates available upon request.</h3>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CV;
