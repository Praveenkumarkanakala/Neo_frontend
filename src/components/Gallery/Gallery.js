import React from 'react';
import './Gallery.css';
import neologo from '../HomePage/neologo.png'; // Ensure the image path is correct

// Add image imports (replace with your actual image paths)
import image1 from './neogallery.jpg';
import image2 from './neogallery1.jpg';
import image3 from './neogallery2.jpg';
import image4 from './neogallery3.jpg';
import image5 from './neogallery4.jpg';
import image6 from './neogallery5.jpg';

const GalleryPage = () => {
  return (
    <div className="gallery-container">
      {/* Header Section */}
      <div className="background-image">
        <div className="galleryoverlay">
          <h1>Gallery</h1>
          <h2>
            <a href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</a> / 
            <a href="/gallery" style={{ color: 'white', textDecoration: 'none' }}>Gallery</a>
          </h2>
        </div>
      </div>

      {/* Image Gallery Section */}
      <div className="image-gallery">
        <img src={image1} alt="Gallery Image 1" className="gallery-image" />
        <img src={image2} alt="Gallery Image 2" className="gallery-image" />
        <img src={image3} alt="Gallery Image 3" className="gallery-image" />
        <img src={image4} alt="Gallery Image 4" className="gallery-image" />
        <img src={image5} alt="Gallery Image 5" className="gallery-image" />
        <img src={image6} alt="Gallery Image 6" className="gallery-image" />
      </div>

      {/* Footer Section */}
      <footer className="gallery-footer">
          <div className="gallery-footer-container">
            <div className="gallery-footer-column">
              <h3>Contact Us</h3>
              <p><i className="fas fa-map-marker-alt"></i> Prospekt Gagarina, Nizhny Novgorod, Nizhegorodskaya oblast', Russia, 603022</p>
              <p><i className="fas fa-envelope"></i> Email: <a href="mailto:contact@neoconferences.org">contact@neoconferences.org</a></p>
              <p><i className="fas fa-phone"></i> Phone: <a href="tel:+7 996 829-21-05">+7 996 829-21-05</a></p>
              <div className="social-icons">
                <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
                <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
                <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
                <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
            <div className="gallery-footer-column">
              <h3>Useful Links</h3>
              <ul>
                <li className="gallery-arrow">About Us</li>
                <li className="gallery-arrow">Events</li>
                <li className="gallery-arrow">Contact Us</li>
                <li className="gallery-arrow">Terms & Conditions</li>
                <li className="gallery-arrow">Privacy Policy</li>
                <li className="gallery-arrow">Grants</li>
              </ul>
            </div>
            <div className="gallery-footer-column">
              <h3>Events</h3>
              <ul>
                <li className="gallery-arrow">3rd International Congress on Women's Health and Midwifery Excellence</li>
                <li className="gallery-arrow">3rd Global Congress on Women’s Leadership, Empowerment, and Sustainable Development</li>
                <li className="gallery-arrow">3rd International Congress of Women Changemakers and Visionary Leaders</li>
                <li className="gallery-arrow">3rd World Congress on Mindfulness, Psychology, and Spirituality</li>
              </ul>
            </div>
          </div>
          <div className="gallery-footer-left-right">
            <div className="gallery-footer-left">
              <img src={neologo} alt="Logo" className="gallery-footer-logo" />
              <span className="gallery-footer-logo-text">NEO CONFERENCES</span>
            </div>
            <div className="gallery-footer-right">
              <p>Copyright © 2024 <a href="#">Neo Conferences</a> – All Rights Reserved.</p>
            </div>
          </div>
        </footer>
    </div>
  );
};

export default GalleryPage;
