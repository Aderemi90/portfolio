import  { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data: ", formData);
    setFormSubmitted(true);
  };

  return (
    <section className="contact-container">
      <h1>Contact Me</h1>
      <p>I would love to hear from you! Feel free to reach out via the form below or on my social media platforms.</p>

      <div className="contact-content">
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
          {formSubmitted && <p className="success-message">Thank you for reaching out! I will get back to you soon.</p>}
        </form>

        <div className="contact-details">
          <h2>Get in Touch</h2>
          <p>Email: <a href="mailto:remoj2003@gmail.com" className="email-link">remoj2003@gmail.com</a></p>
          <p>Phone: +234-7032237866</p>
          <div className="social-links">
            <a href="https://www.facebook.com/RemedicHealth" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://www.twitter.com/RemedicHealth" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://www.instagram.com/RemedicHealth" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;