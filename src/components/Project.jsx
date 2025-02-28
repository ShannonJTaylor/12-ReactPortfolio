
import React from 'react';

const Project = ({ title, image, deployedUrl, repoUrl }) => {
  return (
    <div>
      <a href={deployedUrl} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={title} />
        <p>{title}</p>
      </a>
      <a href={repoUrl} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
    </div>
  );
};

export default Project;
