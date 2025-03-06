
import React from 'react';

const Project = ({ title, image, deployedUrl, repoUrl }) => {
  return (
    
    <div className="project-card">
      <img src={image} alt={title} className="project-image"/>
      <h3>{title}</h3>
      <a href={deployedUrl} target="_blank" rel="noopener noreferrer" className="project-link">
      View Deployed App        
      </a>
      <br />
      <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="github-link">
        GitHub Repo
        </a>
    </div>
    
  );
};

export default Project;
