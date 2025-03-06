import React from "react";
import ContactForm from "../components/ContactForm";



function Contact() {
    return (
      <div className="contact-page">
        <h1>Contact Me</h1>
        <p>
          Questions, comments, concerns? Fill out the form below to get in touch with me!
        </p>
        <ContactForm />
      </div>
    );
  }

  export default Contact;
  