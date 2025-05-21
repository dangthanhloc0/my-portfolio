import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-item">
            <div className="contact-icon">
              <i data-feather="mail"></i>
            </div>
            <div className="contact-content">
              <h3>Email</h3>
              <a href="mailto:dangthanhloca2@gmail.com">dangthanhloca2@gmail.com</a>
            </div>
          </div>
          
          <div className="contact-item">
            <div className="contact-icon">
              <i data-feather="phone"></i>
            </div>
            <div className="contact-content">
              <h3>Phone</h3>
              <a href="tel:+84379001285">+84 379 001 285</a>
            </div>
          </div>
          
          <div className="contact-item">
            <div className="contact-icon">
              <i data-feather="linkedin"></i>
            </div>
            <div className="contact-content">
              <h3>LinkedIn</h3>
              <a href="https://www.linkedin.com/in/dang-thanh-loc-15b401338/" target="_blank" rel="noopener noreferrer">Linkedin.com/dangloc</a>
            </div>
          </div>
          
          <div className="contact-item">
            <div className="contact-icon">
              <i data-feather="github"></i>
            </div>
            <div className="contact-content">
              <h3>GitHub</h3>
              <a href="https://github.com/dangthanhloc0/" target="_blank" rel="noopener noreferrer">GitHub.com/dangloc</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;