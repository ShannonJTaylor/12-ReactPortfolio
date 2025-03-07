import React from 'react';
import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";


const Footer = () => {
  return (
    <footer>
      <a href="https://github.com/ShannonJTaylor" target="_blank" rel="noopener noreferrer">
      <FaGithub size={30}/>
      </a>
      <a href="https://www.linkedin.com/in/shannon-taylor-84490493" target="_blank" rel="noopener noreferrer">
      <FaLinkedin size={30}/>
      </a>
      <a href="https://stackoverflow.com/users/29851292/shannon-taylor" target="_blank" rel="noopener noreferrer">
      <FaStackOverflow size={30}/>
      </a>
    </footer>
  );
};

export default Footer;
