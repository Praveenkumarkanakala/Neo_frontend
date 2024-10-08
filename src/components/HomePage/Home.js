import React, { useState,useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './home.css';
import neologo from './neologo.png'; 
import conferenceImage from './image.png';
import newconferenceone from './newimageone.png';
import conferenceImageone from './imageone.png';
import newconferenceImage from './newimage.png'
import logo from './neo conference logo.jpg';
const HomePage = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const searchableItems = [
    { keyword: 'home', path: '/' },
    { keyword: 'about', path: '/about' },
    { keyword: 'events', path: '/conference' },
    { keyword: 'gallery', path: '/gallery' },
    { keyword: 'contact', path: '/contact' },
  ];

  const handleSearch = () => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const match = searchableItems.find(item => item.keyword === lowerCaseSearchTerm);

    if (match) {
      navigate(match.path);
    } else {
      const fuzzyMatch = searchableItems.find(item => 
        item.keyword.includes(lowerCaseSearchTerm)
      );

      if (fuzzyMatch) {
        navigate(fuzzyMatch.path);
      } else {
        alert(`No results found for "${searchTerm}".`);
      }
    }
  };

  const scrollRef = useRef(null);
  const scrollPrev = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -300,
        behavior: 'smooth',
      });
    }
  };
  const scrollNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 300,
        behavior: 'smooth',
      });
    }
  };
  
  return (
    <div>
        <nav className="navbar">
          <div className="navbar-logo">
            <Link to="/" aria-label="Homepage">
              <img src={logo} alt="NEO Conferences Logo" className="logo-image" />
            </Link>
          </div>
          <ul className="nav-links">
            <li><Link to="/" aria-label="Home">Home</Link></li>
            <li><Link to="/about" aria-label="About Us">About Us</Link></li>
            <li><Link to="/conference" aria-label="Events">Events</Link></li>
            <li><Link to="/gallery" aria-label="Gallery">Gallery</Link></li>
            <li><Link to="/contact" aria-label="Contact Us">Contact Us</Link></li>
          </ul>
          <div className="search-bar">
            <input 
              type="text" 
              placeholder="Search..." 
              aria-label="Search" 
              value={searchTerm} 
              onChange={(e) => setSearchTerm(e.target.value)} 
            />
            <button onClick={handleSearch} aria-label="Search Button">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </nav>

        <div className="video-container">
          <video autoPlay muted loop playsInline>
            <source src={require('../images/NeoVideo.mp4')} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="text-overlay">
            <h1>NEO CONFERENCES</h1>
            <h3>V3’s: Vibrant Expression, Verified Influence, and Visionary Insight</h3>
          </div>
        </div>

        <div className="about-section">
            <div className="about-content">
                <h2>About Us</h2>
                <p>
                  NEO Global Conferences is dedicated to advancing knowledge, fostering collaboration, 
                  and driving impactful innovation across various fields including research, leadership, and technology.  
                  We champion the V3’s: Vibrant Expression, Verified Influence, and Visionary Insight, creating a dynamic platform where these principles can thrive.
                  <br /><br />
                  Our conferences are designed to feature leading experts, researchers, authors, entrepreneurs,  
                  and thought leaders who share their cutting-edge insights and verified knowledge. Whether held virtually or in person,  
                  our events offer a dynamic environment where professionals can explore new ideas, engage with breakthrough research, 
                  and collaborate with peers to drive progress and innovation.
                </p>
                <Link to="/about" className="read-more-button">Read More</Link>
            </div>
        </div>
        <div className="call-media">
            <div className="call-media__icon">
                <img loading="lazy" decoding="async" src="https://wordpress.vecurosoft.com/techbiz/wp-content/uploads/2022/08/tel-1-1.png" alt="Contact Icon" />
            </div>
            <div className="media-body">
                <span className="call-media__label">Reach Us on: 24/7 AVAILABLE</span>
                <p className="call-media__info">
                    Email: <a className="footer-mail" href="mailto:contact@neoconferences.org">contact@neoconferences.org</a>
                </p>
                <p className="call-media__info">
                    Phone: <a className="footer-mail" href="tel:+7 996 829-21-05">+7 996 829-21-05</a>
                </p>
            </div>
        </div>

        <div className="conference-page">
          <h1 className="upcoming-conferences-heading">Our Upcoming Conferences</h1>
          <div className="conference-section">
            <div className="conference-container">
              <img src={conferenceImage} alt="Women Leaders Summit in Paris" className="conference-main-image" />
              <div className="conference-details">
                <h3>3rd Global Women Power Summit on the Dynamics of Leadership</h3>
                <p>Women's Voices, Women's Power: Toward a Vision of Women Leadership</p>
                <div className="conference-dates">
                  {[
                    { image: newconferenceImage, date: 'March 5-6, 2025 | Paris, France', link: '/newevents' },
                    { image: newconferenceImage, date: 'May 7-8, 2025 | Toronto, Canada', link: '/events' },
                    { image: newconferenceImage, date: 'July 23-24, 2025 | London, UK', link: '/events1' }
                  ].map((item, index) => (
                    <div className="conference-date" key={index}>
                      <Link to={item.link}>
                      <img src={item.image} alt={item.date} />
                      <p>{item.date}</p>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="conference-container">
              <img src={conferenceImageone} alt="Psychiatry Summit in Paris" className="conference-main-image" />
              <div className="conference-details">
                <h3>3rd Global Summit on Psychiatry, Mental Health, and Neuroscience</h3>
                <p>Unlocking the Power of Global Mental Health: From Awareness to Action</p>
                <div className="conference-dates">
                  {[
                    { image: newconferenceone, date: 'March 05-06, 2025 | Paris, France', link: '/inside2' },
                    { image: newconferenceone, date: 'March 05-06, 2025 | Paris, France', link: '/inside1' },
                    { image: newconferenceone, date: 'March 05-06, 2025 | Paris, France', link: '/inside' }
                  ].map((item, index) => (
                    <div className="conference-date" key={index}>
                      <Link to={item.link}> 
                      <img src={item.image} alt={item.date} />
                      <p>{item.date}</p>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>


        <h1 className="experts-heading">Meet Our Experts</h1>
        <div className="experts-wrapper">
            <button className="scroll-btn left" onClick={scrollPrev}>&#8592;</button>
            <div className="experts-section" ref={scrollRef}>
                {[
                    { src: require('../images/speaker7.png'), alt: "Dr. Debra Dupree" },
                    { src: require('../images/speaker1.png'), alt: "Girisha Andrea Steigler" },
                    { src: require('../images/speaker0.png'), alt: "Inga Harms" },
                    { src: require('../images/speaker2.png'), alt: "Kirsten Cameron" },
                    { src: require('../images/speaker5.png'), alt: "Michele LaFemina" },
                    { src: require('../images/speaker10.png'), alt: "Trudy Ann Pines" }
                ].map((speaker, index) => (
                    <div className="expert-card" key={index}>
                        <img src={speaker.src} alt={speaker.alt} loading="lazy" />
                    </div>
                ))}
            </div>
            <button className="scroll-btn right" onClick={scrollNext}>&#8594;</button>
        </div>
        <div className="custom-container">
          <h1 className="custom-title">Join us to meet Inspiring Speakers & Experts across the Globe</h1>
          <div className="custom-stats">
              {["300+", "120+", "120+", "60+"].map((num, index) => (
                  <div className={`custom-stat custom-stat-${index + 1}`} key={index}>
                      <span className="custom-number">{num}</span>
                      {["Global Events", "Symposiums", "Workshops", "Conferences"][index]}
                  </div>
               ))}
          </div>
        </div>

        <footer className="footer">
          <div className="footer-container">
            <div className="footer-column">
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
            <div className="footer-column">
              <h3>Useful Links</h3>
              <ul>
                <li className="arrow">About Us</li>
                <li className="arrow">Events</li>
                <li className="arrow">Contact Us</li>
                <li className="arrow">Terms & Conditions</li>
                <li className="arrow">Privacy Policy</li>
                <li className="arrow">Grants</li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Events</h3>
              <ul>
                <li className="arrow">3rd International Congress on Women's Health and Midwifery Excellence</li>
                <li className="arrow">3rd Global Congress on Women’s Leadership, Empowerment, and Sustainable Development</li>
                <li className="arrow">3rd International Congress of Women Changemakers and Visionary Leaders</li>
                <li className="arrow">3rd World Congress on Mindfulness, Psychology, and Spirituality</li>
              </ul>
            </div>
          </div>
          <div className="footer-left-right">
            <div className="footer-left">
              <img src={neologo} alt="Logo" className="footer-logo" />
              <span className="footer-logo-text">NEO CONFERENCES</span>
            </div>
            <div className="footer-right">
              <p>Copyright © 2024 <a href="#">Neo Conferences</a> – All Rights Reserved.</p>
            </div>
          </div>
        </footer>
    </div>
  );
};

export default HomePage;