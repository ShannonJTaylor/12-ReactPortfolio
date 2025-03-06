import React from "react";
import { avatar } from "../assets/images/imageImports";

const AboutMe = () => {
    return (
      <div className="about-me-container">
        <img
        className="avatar-image"
        src={avatar}
        alt="Avatar"
        />

        <h1>About Me</h1>
        <p>
        I am an analytical scientist transitioning into a roll involving automation. My new roll requires me to program the automation that will allow my colleagues to work more efficiently. I am new to the world of coding
        but I am excited to utilized the skills I've gained and continue to grow in this field. I currently reside in Michigan where I love to get out with my side gig as a SUP yoga instructor.
        </p>
      </div>
    );
  };

  export default AboutMe;
  