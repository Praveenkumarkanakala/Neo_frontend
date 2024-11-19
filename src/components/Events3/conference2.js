import React, { useState, useEffect } from "react";
import './conference2.css';
import neologo from '../HomePage/neologo.png'; 
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
const OverlayPage = () => {
  const navigate=useNavigate()
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [selectedDay, setSelectedDay] = useState('day1'); 
  const handleclick1 = (amount, description) => {
    navigate(`/pay/${amount}/${encodeURIComponent(description)}`);
  };
  useEffect(() => {
    const eventDate = new Date('2025-05-07T00:00:00');
    const interval = setInterval(() => {
      const now = new Date();
      const difference = eventDate - now;

      if (difference <= 0) {
        clearInterval(interval);
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const day1Schedule = [
    { time: '08:00 – 08:30', speaker: 'Opening Ceremony', title: 'Opening Ceremony' },
    { time: '08:30 – 09:00', speaker: 'Keynote Speaker', title: 'Keynote Speaker Slot Available' },
    { time: '09:00 – 09:30', speaker: 'Speaker', title: 'The New Wave of Female Leadership' },
    { time: '09:30 – 10:00', speaker: 'Keynote Speaker', title: 'Keynote Speaker Slot Available' },
    { time: '10:00 – 10:30', speaker: 'Speaker', title: 'Speaker Slot Available' },
    { time: '10:30 – 11:00', speaker: 'Keynote Speaker', title: 'Keynote Speaker Slot Available' },
    { time: '11:00 – 11:30', speaker: 'Speaker', title: 'Speaker Slot Available' },
    { time: '11:30 – 12:00', speaker: 'Keynote Speaker', title: 'Keynote Speaker Slot Available' },
    { time: '12:00 – 12:30', speaker: 'Speaker', title: 'Speaker Slot Available' },
    { time: '12:30 – 13:00', speaker: 'Keynote Speaker', title: 'Keynote Speaker Slot Available' },
    { time: '13:00 – 14:00', speaker: 'Lunch Hour' },
    { time: '14:00 – 14:30', speaker: 'Keynote Speaker', title: 'Keynote Speaker Slot Available' },
    { time: '14:30 – 15:00', speaker: 'Speaker', title: 'Speaker Slot Available' },
    { time: '15:00 – 15:30', speaker: 'Speaker', title: 'Speaker Slot Available' },
    { time: '15:30 – 16:00', speaker: 'Speaker', title: 'Speaker Slot Available' },
    { time: '16:00 – 16:30', speaker: 'Speaker', title: 'Speaker Slot Available' },
    { time: '16:30 – 17:00', speaker: 'Speaker', title: 'Speaker Slot Available' },
    { time: '17:00 – 17:30', speaker: 'Speaker', title: 'Speaker Slot Available' },
    { time: '17:30 – 18:00', speaker: 'Speaker', title: 'Speaker Slot Available' },
    
  ];

  const day2Schedule = [
    { time: '08:00 – 08:30', speaker: 'Opening Ceremony', title: 'Opening Ceremony' },
    { time: '08:30 – 09:00', speaker: 'Keynote Speaker', title: 'Keynote Speaker Slot Available' },
    { time: '09:00 – 09:30', speaker: 'Speaker', title: 'The New Wave of Female Leadership' },
    { time: '09:30 – 10:00', speaker: 'Keynote Speaker', title: 'Keynote Speaker Slot Available' },
    { time: '10:00 – 10:30', speaker: 'Speaker', title: 'Speaker Slot Available' },
    { time: '10:30 – 11:00', speaker: 'Keynote Speaker', title: 'Keynote Speaker Slot Available' },
    { time: '11:00 – 11:30', speaker: 'Speaker', title: 'Speaker Slot Available' },
    { time: '11:30 – 12:00', speaker: 'Keynote Speaker', title: 'Keynote Speaker Slot Available' },
    { time: '12:00 – 12:30', speaker: 'Speaker', title: 'Speaker Slot Available' },
    { time: '12:30 – 13:00', speaker: 'Keynote Speaker', title: 'Keynote Speaker Slot Available' },
    { time: '13:00 – 14:00', speaker: 'Lunch Hour' },
    { time: '14:00 – 14:30', speaker: 'Keynote Speaker', title: 'Keynote Speaker Slot Available' },
    { time: '14:30 – 15:00', speaker: 'Speaker', title: 'Speaker Slot Available' },
    { time: '15:00 – 15:30', speaker: 'Speaker', title: 'Speaker Slot Available' },
    { time: '15:30 – 16:00', speaker: 'Speaker', title: 'Speaker Slot Available' },
    { time: '16:00 – 16:30', speaker: 'Speaker', title: 'Speaker Slot Available' },
    { time: '16:30 – 17:00', speaker: 'Speaker', title: 'Speaker Slot Available' },
    { time: '17:00 – 17:30', speaker: 'Speaker', title: 'Speaker Slot Available' },
    { time: '17:30 – 18:00', speaker: 'Speaker', title: 'Speaker Slot Available' },
  ];

  const day3Schedule = [
    { time: '08:00 – 08:30', speaker: 'Opening Ceremony', title: 'Opening Ceremony' },
    { time: '08:30 – 09:00', speaker: 'Keynote Speaker', title: 'Keynote Speaker Slot Available' },
    { time: '09:00 – 09:30', speaker: 'Speaker', title: 'The New Wave of Female Leadership' },
    { time: '09:30 – 10:00', speaker: 'Keynote Speaker', title: 'Keynote Speaker Slot Available' },
    { time: '10:00 – 10:30', speaker: 'Speaker', title: 'Speaker Slot Available' },
    { time: '10:30 – 11:00', speaker: 'Keynote Speaker', title: 'Keynote Speaker Slot Available' },
    { time: '11:00 – 11:30', speaker: 'Speaker', title: 'Speaker Slot Available' },
    { time: '11:30 – 12:00', speaker: 'Keynote Speaker', title: 'Keynote Speaker Slot Available' },
    { time: '12:00 – 12:30', speaker: 'Speaker', title: 'Speaker Slot Available' },
    { time: '12:30 – 13:00', speaker: 'Keynote Speaker', title: 'Keynote Speaker Slot Available' },
    { time: '13:00 – 14:00', speaker: 'Lunch Hour' },
    { time: '14:00 – 14:30', speaker: 'Keynote Speaker', title: 'Keynote Speaker Slot Available' },
    { time: '14:30 – 15:00', speaker: 'Speaker', title: 'Speaker Slot Available' },
    { time: '15:00 – 15:30', speaker: 'Speaker', title: 'Speaker Slot Available' },
    { time: '15:30 – 16:00', speaker: 'Speaker', title: 'Speaker Slot Available' },
    { time: '16:00 – 16:30', speaker: 'Speaker', title: 'Speaker Slot Available' },
    { time: '16:30 – 17:00', speaker: 'Speaker', title: 'Speaker Slot Available' },
    { time: '17:00 – 17:30', speaker: 'Speaker', title: 'Speaker Slot Available' },
    { time: '17:30 – 18:00', speaker: 'Speaker', title: 'Speaker Slot Available' },
    
  ];

  const day4Schedule = [
    { time: '08:00 – 08:30', speaker: 'Opening Ceremony', title: 'Opening Ceremony' },
    { time: '08:30 – 09:00', speaker: 'Keynote Speaker', title: 'Keynote Speaker Slot Available' },
    { time: '09:00 – 09:30', speaker: 'Speaker', title: 'The New Wave of Female Leadership' },
    { time: '09:30 – 10:00', speaker: 'Keynote Speaker', title: 'Keynote Speaker Slot Available' },
    { time: '10:00 – 10:30', speaker: 'Speaker', title: 'Speaker Slot Available' },
    { time: '10:30 – 11:00', speaker: 'Keynote Speaker', title: 'Keynote Speaker Slot Available' },
    { time: '11:00 – 11:30', speaker: 'Speaker', title: 'Speaker Slot Available' },
    { time: '11:30 – 12:00', speaker: 'Keynote Speaker', title: 'Keynote Speaker Slot Available' },
    { time: '12:00 – 12:30', speaker: 'Speaker', title: 'Speaker Slot Available' },
    { time: '12:30 – 13:00', speaker: 'Keynote Speaker', title: 'Keynote Speaker Slot Available' },
    { time: '13:00 – 14:00', speaker: 'Lunch Hour' },
    { time: '14:00 – 14:30', speaker: 'Keynote Speaker', title: 'Keynote Speaker Slot Available' },
    { time: '14:30 – 15:00', speaker: 'Speaker', title: 'Speaker Slot Available' },
    { time: '15:00 – 15:30', speaker: 'Speaker', title: 'Speaker Slot Available' },
    { time: '15:30 – 16:00', speaker: 'Speaker', title: 'Speaker Slot Available' },
    { time: '16:00 – 16:30', speaker: 'Speaker', title: 'Speaker Slot Available' },
    { time: '16:30 – 17:00', speaker: 'Speaker', title: 'Speaker Slot Available' },
    { time: '17:00 – 17:30', speaker: 'Speaker', title: 'Speaker Slot Available' },
    { time: '17:30 – 18:00', speaker: 'Speaker', title: 'Speaker Slot Available' },
  ];


  const schedule = selectedDay === 'day1' 
  ? day1Schedule 
  : selectedDay === 'day2' 
  ? day2Schedule 
  : selectedDay === 'day3' 
  ? day3Schedule 
  : selectedDay === 'day4'
  ? day4Schedule 
  : null;

  return (
    <div>
      <div className="overlay-cont">
        <div className="overlay-text">
          <h1>3rd International conference on Mental Health, Well-Being, and Spiritual Healing</h1> 
          {/* <p>Unlocking the Power of Global Mental Health: From Awareness to Action</p> */}
          <div className="event-details">
            <div className="event-date">
              <FaCalendarAlt className="icon" />
              <span>May 07-08, 2025</span>
            </div>
            <div className="event-location">
              <FaMapMarkerAlt className="icon" />
              <span>Toronto, Canada </span>
            </div>
          </div>
          <div className="button-group">
            <button className="event-button">Brochure</button>
            <button className="event-button">Abstract</button>
          </div>
        </div>

        <div className="countdown-container">
          <div className="countdown-timer">
            <div className="time-box">
              <span>{timeLeft.days}</span>
              <span>Days</span>
            </div>
            <div className="time-box">
              <span>{timeLeft.hours}</span>
              <span>Hours</span>
            </div>
            <div className="time-box">
              <span>{timeLeft.minutes}</span>
              <span>Minutes</span>
            </div>
            <div className="time-box">
              <span>{timeLeft.seconds}</span>
              <span>Seconds</span>
            </div>
          </div>
        </div>
      </div>

      {/* Image and About Section outside the overlay background */}
      <div className="conference-details">
        <div className="image-container">
          <img
            src={require('../images/conf.jpg')}
            alt="Conference"
          />
        </div>

        <div className="text-container">
          <h2>About the Conference</h2>
          <p>
          The 3rd World Congress on Mindfulness, Psychology, and Spirituality, hosted by Neo Conferences, presents a unique opportunity for individuals from diverse backgrounds and disciplines to come together, share insights, and explore the interconnectedness of mind, body, and spirit. 
          </p>
          <p>The theme of this congress is  <strong>"Mindfulness in Action: Integrating Psychology and Spirituality for Holistic Well-Being."</strong>  This forum aims to serve as a catalyst for transformative change, promoting mental health, emotional resilience, and spiritual growth through mindfulness practices.
          </p>
          <p>
          Join us in Paris, France, on March 05-06, 2025, to engage in meaningful discussions and connect with like-minded individuals who are dedicated to enhancing well-being through mindfulness, psychological understanding, and spiritual exploration. This is a chance to express your passion on an international platform and contribute to a collective vision of holistic health and personal development.
          </p>
          <p>By convening in this inclusive environment, we can create a powerful movement for positive change and significantly impact the world. We invite you to share your experiences, insights, and innovative ideas for fostering a more mindful, psychologically informed, and spiritually enriched future for all.</p>
        </div>
      </div>




      {/* Scientific Sessions Section */}
      <div className="scientific-sessions">
        <h1>Sessions/Topics</h1>
        <ul>
          <li>Women's Representation in Leadership</li>
          <li>Women in Innovation and Entrepreneurship</li>
          <li>Women Empowerment & Leadership</li>
          <li>Women in Safety & Health</li>
          <li>Women in Power and Decision-Making</li>
          <li>Women in Business Management & Startups</li>
          <li>Women Economic Empowerment</li>
          <li>Gender Equality and Empowerment</li>
          <li>Women in Network and Sustainable Development</li>
          <li>Work and the Future of Feminism</li>
        </ul>
        <div className="venue-section">
          <h2>Venue</h2>
          <p>Paris, France</p>
        </div>
      </div>








      {/* Scientific Agenda */}
      <div className="scientific-agenda">
        <h2>Scientific Agenda</h2>
        <div className="day-buttons">
          <button onClick={() => setSelectedDay('day1')} className={selectedDay === 'day1' ? 'active' : ''}>
            Day 1 (Physical)
          </button>
          <button onClick={() => setSelectedDay('day2')} className={selectedDay === 'day2' ? 'active' : ''}>
            Day 2 (Physical)
          </button>
          <button onClick={() => setSelectedDay('day3')} className={selectedDay === 'day3' ? 'active' : ''}>
            Day 1 (Virtual)
          </button>
          <button onClick={() => setSelectedDay('day4')} className={selectedDay === 'day4' ? 'active' : ''}>
            Day 2 (Virtual)
          </button>
        </div>

        <table className="schedule-table">
          <thead>
            <tr>
              <th>Time</th>
              <th>Speaker</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            {schedule.map((session, index) => (
              <tr key={index}>
                <td>{session.time}</td>
                <td>{session.speaker}</td>
                <td>{session.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      

      <section className="sec-carai">
        <div className="intro-cars">
          <h1>Register Now!</h1>
          <p>
            Register now to start your journey and join a community of passionate learners, ambitious professionals, and forward-thinkers ready to make a difference.
          </p>
          <p>The world is waiting for you - take the first step today!</p>
        </div>

        <div className="sec-card-carai">
          <div className="sec-caraicard">
            <h3>Speaker Registration</h3>
            <ul>
              <li>Certificate</li>
              <li>CPD Credits</li>
              <li>Breakfast & Lunch</li>
            </ul>
            <p>$599</p>
            <button onClick={() => handleclick1(599, 'Speaker Registration & Certificate & CPD Credits & Breakfast & Lunch')}>
              Register Now →
            </button>
          </div>

          <div className="sec-caraicard">
            <h3>Package A</h3>
            <ul>
              <li>Certificate</li>
              <li>CPD Credits</li>
              <li>Breakfast & Lunch</li>
              <li>Speaker Slot + 2 Nights</li>
              <li>Accommodation</li>
            </ul>
            <p>$899</p>
            <button onClick={() => handleclick1(899, 'Package A: Certificate & CPD Credits & Breakfast & Lunch & Speaker Slot + 2 Nights & Accommodation')}>
              Register Now →
            </button>
          </div>

          <div className="sec-caraicard">
            <h3>Package B</h3>
            <ul>
              <li>Certificate</li>
              <li>CPD Credits</li>
              <li>Breakfast & Lunch</li>
              <li>Speaker Slot + 3 Nights</li>
              <li>Accommodation</li>
            </ul>
            <p>$1,099</p>
            <button onClick={() => handleclick1(1099, 'Package B: Certificate & CPD Credits & Breakfast & Lunch & Speaker Slot + 3 Nights & Accommodation')}>
              Register Now →
            </button>
          </div>


          <div className="sec-caraicard">
            <h3>Exhibitor Pass</h3>
            <ul>
              <li>Certificate</li>
              <li>CPD Credits</li>
              <li>Breakfast & Lunch</li>
              <li>Exhibitor Booth</li>
              <li>Speaker Slot</li>
            </ul>
            <p>$1,399</p>
            <button onClick={() => handleclick1(1399, 'Exhibitor Pass: Certificate & CPD Credits & Breakfast & Lunch & Exhibitor Booth & Speaker Slot')}>
              Register Now →
            </button>
          </div>

          <div className="sec-caraicard">
            <h3>Delegate</h3>
            <ul>
              <li>Certificate</li>
              <li>CPD Credits</li>
              <li>Breakfast & Lunch</li>
            </ul>
            <p>$299</p>
            <button onClick={() => handleclick1(299, 'Delegate: Certificate & CPD Credits & Breakfast & Lunch')}>
              Register Now →
            </button>
          </div>

          <div className="sec-caraicard">
            <h3>Virtual Speaker</h3>
            <ul>
              <li>Certificate</li>
              <li>CPD Credits</li>
            </ul>
            <p>$299</p>
            <button onClick={() => handleclick1(299, 'Virtual Speaker: Certificate & CPD Credits')}>
              Register Now →
            </button>
          </div>
        </div>
      </section>



    <footer className="footer">
       
       <div className="footer-container">
         <div className="footer-column">
           <h3>Contact Us</h3>
           <br/>
           <p><i className="fas fa-map-marker-alt"></i>Prospekt Gagarina, Nizhny Novgorod, Nizhegorodskaya oblast', Russia, 603022</p>
           <br/>
           <p><i className="fas fa-envelope"></i> Email: <a href="mailto:contact@neoconferences.org">contact@neoconferences.org</a></p>
           <p><i className="fas fa-phone"></i> Phone: <a href="tel:+7 996 829-21-05">+7 996 829-21-05</a></p>
           <br/>
           <div className="social-icons">
             <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
             <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
             <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
             <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
           </div>
         </div>
         <div className="footer-column useful-links">
           <h3>Useful Links</h3>
           <ul>
             <li class="arrow">About Us</li>
             <li class="arrow">Events</li>
             <li class="arrow">Contact Us</li>
             <li class="arrow">Terms & Conditions</li>
             <li class="arrow">Privacy Policy</li>
             <li class="arrow">Grants</li>
           </ul>
         </div>
         <div className="footer-column events">
           <h3>Events</h3>
           <ul>
              <li class="arrow">3rd International congress on Women's Health and Midwifery Excellence   </li>
              <li class="arrow"> 3rd Global Congress on Women’s Leadership, Empowerment, and Sustainable Development  </li>
              <li class="arrow"> 3rd International Congress of Women Changemakers and Visionary Leaders </li>
              <li class="arrow"> 3rd World Congress on Mindfulness, Psychology, and Spirituality </li>
            </ul>
         </div>
       </div>
       <div className="footer-left-right">
            <div className="footer-left">
               <img src={neologo} alt="Logo" className="footer-logo" />
               <span className="footer-logo-text">NEO CONFERENCES</span>
             </div>
             <div className="footer-right">
               <p>
                  Copyright © 2024 <a href="#">Neo Conferences</a> – All Rights Reserved. 
               </p>
             </div>
       </div>
     </footer> 
    </div>
  );
};

export default OverlayPage;