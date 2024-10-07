import React, { useState } from 'react';
import './contact.css';
import neologo from '../HomePage/neologo.png'; 


function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const phonePattern = /^[0-9]{10}$/; 
    if (formData.phone && !phonePattern.test(formData.phone)) {
      setStatus('Please enter a valid phone number.');
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/add-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        const result = await response.json();
        setStatus(result.message || 'Failed to send message.');
      }
    } catch (error) {
      setStatus('An error occurred.');
    }
    setTimeout(() => setStatus(''), 5000);
  };

  return (
    <div className="contact-us-container">
      <header>
        <h1>Contact Us</h1>
        <h2>
          <a href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</a> / 
          <a href="/contact" style={{ color: 'white', textDecoration: 'none' }}> Contact Us</a>
        </h2>
      </header>

      <div className="contact-content">
        <div className="text-section">
          <h2>Office Addresses</h2>
          <p>Don't hesitate to reach us</p>
          <p><strong>Email:</strong> contact@neoconferences.org</p>
          <p><strong>Contact us at:</strong> +7 996 829-21-05</p>
          <h3>United States Office Address</h3>
          <p>Prospekt Gagarina, Nizhny Novgorod, Nizhegorodskaya oblast', Russia, 603022</p>
        </div>

        <div className="form-section">
          <h2>Leave a Message</h2>
          <p>We're ready to help you</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Enter Full Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number:</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Feedback:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message here"
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit">SEND A MESSAGE →</button>
            {status && <p className="status-message">{status}</p>}
          </form>
        </div>
      </div>
        <footer className="new-footer">
          <div className="new-footer-container">
            <div className="new-footer-column">
              <h3>Contact Us</h3>
              <p><i className="fas fa-map-marker-alt"></i> Prospekt Gagarina, Nizhny Novgorod, Nizhegorodskaya oblast', Russia, 603022</p>
              <p><i className="fas fa-envelope"></i> Email: <a href="mailto:contact@neoconferences.org">contact@neoconferences.org</a></p>
              <p><i className="fas fa-phone"></i> Phone: <a href="tel:+7 996 829-21-05">+7 996 829-21-05</a></p>
              <div className="new-social-icons">
                <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
                <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
                <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
                <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
            <div className="new-footer-column">
              <h3>Useful Links</h3>
              <ul>
                <li className="new-arrow">About Us</li>
                <li className="new-arrow">Events</li>
                <li className="new-arrow">Contact Us</li>
                <li className="new-arrow">Terms & Conditions</li>
                <li className="new-arrow">Privacy Policy</li>
                <li className="new-arrow">Grants</li>
              </ul>
            </div>
            <div className="new-footer-column">
              <h3>Events</h3>
              <ul>
                <li className="new-arrow">3rd International Congress on Women's Health and Midwifery Excellence</li>
                <li className="new-arrow">3rd Global Congress on Women’s Leadership, Empowerment, and Sustainable Development</li>
                <li className="new-arrow">3rd International Congress of Women Changemakers and Visionary Leaders</li>
                <li className="new-arrow">3rd World Congress on Mindfulness, Psychology, and Spirituality</li>
              </ul>
            </div>
          </div>
          <div className="new-footer-left-right">
            <div className="new-footer-left">
              <img src={neologo} alt="Logo" className="new-footer-logo" />
              <span className="new-footer-logo-text">NEO CONFERENCES</span>
            </div>
            <div className="new-footer-right">
              <p>Copyright © 2024 <a href="#">Neo Conferences</a> – All Rights Reserved.</p>
            </div>
          </div>
        </footer>

    </div>
  );
}

export default ContactUs;
