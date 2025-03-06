import React from 'react';
import resume from '../assets/Resume.pdf';

const Resume = () => {
  const proficiencies = [
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "HTML5",
    "CSS3",
    "Git",
    "SQL",
    "GraphQL"
  ];

  return (
    <div className="resume-section">
      <h2>Resume</h2>
      <p>Click the link below to download my resume:</p>
      <a href={resume} download="Resume.pdf">
        <button>Download Resume</button>
      </a>

      <h3>Proficiencies:</h3>
      <ul>
        {proficiencies.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default Resume;
