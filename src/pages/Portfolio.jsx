 import React from "react";
 import Project from "../components/Project";
 import { project1, project2, project3 } from "../assets/images/imageImports";

 const Portfolio =() => {
  const projects = [
    
      {
        title:"Calculator",
        image: project1, //Import images from the src/assets/images/imageImports.js file
        projectLink:"https://www.example.com",
        githubLink:"https://www.github.com",
      },
      {
        title:"Surf Report",
        image: project2,
        projectLink:"https://www.example.com",
        githubLink:"https://www.github.com",
      },
      {
        title:"Pastel Puzzle",
        image:project3,
        projectLink:"https://www.example.com",
        githubLink:"https://www.github.com",
      },
      {
        title:"Project 4",
        image:"https://via.placeholder.com/150",
        projectLink:"https://www.example.com",
        githubLink:"https://www.github.com",
      },
      {
        title:"Project 5",
        image:"https://via.placeholder.com/150",
        projectLink:"https://www.example.com",
        githubLink:"https://www.github.com",
      },
      {
        title:"Project 6",
        image:"https://via.placeholder.com/150",
        projectLink:"https://www.example.com",
        githubLink:"https://www.github.com",
      }
    ];
    
    return (
      <div className="projects-container">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            image={project.image}
            deployedUrl={project.projectLink}
            repoUrl={project.githubLink}
          />
        ))}
    </div>
    );
  }

  export default Portfolio;
  