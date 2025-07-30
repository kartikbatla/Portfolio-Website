import React, { useState } from 'react';
import './Contact.css';
// Corrected Imports for react-icons/fa6
import {
  FaUser,
  FaEnvelope,
  FaTag,
  FaMessage, // Renamed from FaComment or FaMessage in previous versions, FaMessage is common in fa6
  FaPhone, // Corrected from FaPhoneAlt
  FaLocationDot, // This should be correct in fa6 for map-marker-alt equivalent
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaPaperPlane
} from 'react-icons/fa6'; // Using Font Awesome 6 icons

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // This is a client-side alert for demonstration purposes only.
    // In a real application, you would send formData to a backend service here.
    alert('Message Sent! (Form submission is not actually implemented on the frontend)');
    console.log('Form Data Submitted:', formData); // Log data to console for testing
    setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form after submission
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        {/* Section Title with Gradient */}
        <h2 className="section-title contact-title-gradient">Get In Touch</h2>
        <p className="contact-subtitle">
          Ready to bring your ideas to life? Let's connect and create something extraordinary together.
        </p>

        <div className="contact-content">
          {/* Left Column: Contact Form */}
          <div className="contact-form-container">
            <h3>Send a Message</h3>
            <form onSubmit={handleSubmit} className="contact-form">
              {/* Name and Email in a single row for desktop */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <div className="input-wrapper">
                    <FaUser className="input-icon" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <div className="input-wrapper">
                    <FaEnvelope className="input-icon" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Subject field */}
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <div className="input-wrapper">
                  <FaTag className="input-icon" />
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Message textarea */}
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <div className="input-wrapper textarea-wrapper"> {/* Specific wrapper for textarea icon positioning */}
                  <FaMessage className="input-icon textarea-icon" />
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    placeholder="Tell me about your project or idea..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn submit-glow-btn">
                <FaPaperPlane className="btn-icon" /> Send Message
              </button>
            </form>
          </div>

          {/* Right Column: Contact Info & Social Links */}
          <div className="contact-info-column">
            <h3>Let's Connect</h3>
            <div className="contact-details">
              {/* Email Detail Item */}
              <div className="contact-detail-item">
                <FaEnvelope className="detail-icon" />
                <div className="detail-text">
                  <p className="detail-label">Email</p>
                  <p className="detail-value">batlakartik@gmail.com</p>
                </div>
              </div>
              {/* Phone Detail Item*/}
              {/* <div className="contact-detail-item">
                <FaPhone className="detail-icon" /> 
                <div className="detail-text">
                  <p className="detail-label">Phone</p>
                  <p className="detail-value">+1 (555) 123-4567</p>
                </div>  
              </div>*/}

              {/* Location Detail Item */}
              <div className="contact-detail-item">
                <FaLocationDot className="detail-icon" />
                <div className="detail-text">
                  <p className="detail-label">Location</p>
                  <p className="detail-value">Vellore, Tamil Nadu</p>
                </div>
              </div>
            </div>

            <div className="social-links-container">
              <h3>Follow Me</h3>
              <div className="social-icons">
                <a href="https://github.com/kartikbatla" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/kartik-batla-93139328a/" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                  <FaLinkedinIn />
                </a>
                {/* Add more social links as needed */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;