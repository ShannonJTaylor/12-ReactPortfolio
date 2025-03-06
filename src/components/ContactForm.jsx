import { useState } from 'react';

function ContactForm() {
  // State variables to track form values
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Handle input change for form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') setName(value);
    if (name === 'email') setEmail(value);
    if (name === 'message') setMessage(value);
  };

  // Validate email
  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    if (!name || !email || !message) {
      setErrorMessage('All fields are required');
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email address');
      return;
    }

    // Submit the form (you can add logic to send form data to a server here)
    alert('Form submitted successfully!');

    // Clear form fields
    setName('');
    setEmail('');
    setMessage('');
    setErrorMessage('');
  };

  return (
    <div className="contact-form">
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Your Name"
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
        <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Your Email"
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
        <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            value={message}
            placeholder="Your Message"
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}

export default ContactForm;
