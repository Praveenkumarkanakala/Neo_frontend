import React, { useState, useEffect } from "react";
import './newaievent.css';
import neologo from '../HomePage/neologo.png'; 
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import StripePay from "../payment/Stripe";
import { useNavigate } from "react-router-dom";

const Events = () => {
  const navigate=useNavigate()
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [selectedDay, setSelectedDay] = useState('day1'); 
  const handleclick1 = (amount, description) => {
    navigate(`/pay/${amount}/${encodeURIComponent(description)}`);
  };

  useEffect(() => {
    const eventDate = new Date('2025-03-05T00:00:00');
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
      <div className="eventsai">
        <div className="eventsai-text">
          <h1>Global Summit on AI and Mental Health Masterclass: Workshops and Coaching Exploration </h1> 
          <div className="event-ainew">
            <div className="event-ai">
              <FaCalendarAlt className="icon" />
              <span>March 05-06, 2025</span>
            </div>
            <div className="event-newai">
              <FaMapMarkerAlt className="icon" />
              <span>Paris, France</span>
            </div>
          </div>
          <div className="button-ai">
            <button className="ai-button">Brochure</button>
            <button className="ai-button">Abstract</button>
          </div>
        </div>

        <div className="countdown-ai">
          <div className="ai-timer">
            <div className="time-new">
              <span>{timeLeft.days}</span>
              <span>Days</span>
            </div>
            <div className="time-new">
              <span>{timeLeft.hours}</span>
              <span>Hours</span>
            </div>
            <div className="time-new">
              <span>{timeLeft.minutes}</span>
              <span>Minutes</span>
            </div>
            <div className="time-new">
              <span>{timeLeft.seconds}</span>
              <span>Seconds</span>
            </div>
          </div>
        </div>
      </div>

      <div className="conference-newai">
        <div className="image-newai">
          <img
            src={require('../NewEvents/ai.PNG')}
            alt="Conference"
          />
        </div>

        <div className="new-aicontainer">
          <h2>About the Conference</h2>
          <p> Welcome to the Global Summit on AI and Mental Health Masterclass: Workshops and Coaching Exploration, an immersive, future-focused event where the worlds of artificial intelligence and mental health converge. Under the theme,
            <strong>  "Minds Unbound: Transforming Mental Wellness Through AI Innovation," </strong>.
           this summit invites you to explore the profound potential of AI to revolutionize mental health care, making it more personalized, accessible, and insightful than ever before. 
          </p>
          <p> This summit brings together a dynamic and diverse audience—students, academics, mental health professionals, tech innovators, and the general public. Through interactive discussions, hands-on workshops, and networking opportunities, participants will reimagine what’s possible for mental health in the age of AI. Discover how AI can empower care providers, improve diagnostics, and provide real-time support for those in need.
          </p>
        </div>
      </div>

      <div className="newai-sessions">
        <h1>Key Focus Areas</h1>
        <div className="aicard-container">
            <div className="aicard">
            <h2 className="section-heading">AI-Powered Personalization: Transforming Therapy and Emotional Support in Real-Time</h2>
            <p>Explore the potential of AI to tailor support, adapting therapies and recommendations to each individual's needs, and providing care that resonates with the unique experiences of every person.</p>
            </div>
            <div className="aicard">
            <h2 className="section-heading">Revolutionizing Mental Health: AI Chatbots, Virtual Companions, and Ethical Innovation</h2>
            <p>Delve into AI-driven chatbots, virtual companions, and apps designed to offer real-time emotional support. Discover how these tools increase accessibility to mental health resources, especially for remote or underserved populations.</p>
            </div>
            <div className="aicard">
            <h2 className="section-heading">Ethics in Focus: Safeguarding Privacy and Trust in AI-Driven Mental Health Innovations</h2>
            <p>Address the crucial ethical considerations of data privacy, consent, and security in AI solutions. This discussion highlights best practices for developing AI tools that prioritize user autonomy and trustworthiness.</p>
            </div>
            <div className="aicard">
            <h2 className="section-heading">Bridging the Gap: Interdisciplinary Collaborations</h2>
            <p>Witness the power of interdisciplinary partnerships across AI, mental health, academia, and policy to foster responsible AI innovation. These collaborations are paving the way for AI solutions that are ethical, impactful, and empathetic.</p>
            </div>
        </div>
        </div>




        <div className="venue-newai">
          <h2>Venue</h2>
          <p>Paris, France</p>
        </div>

        <div className="summit-section">
            <div className="summit-cards">
              <div className="summitcard">
                <h3>Who Should Attend</h3>
                <p>This summit is tailored for anyone interested in the intersection of AI and mental wellness. Whether you’re a student, educator, researcher, mental health professional, tech enthusiast, or policymaker, you’ll find opportunities to deepen your understanding, forge connections, and join a community driven to reshape mental wellness.</p>
              </div>
              <div className="summitcard">
                <h3>What to Expect</h3>
                <ul>
                  <li>Keynote Speeches from industry pioneers in AI and mental health</li>
                  <li>Panel Discussions with thought leaders and advocates for ethical AI</li>
                  <li>Interactive Workshops focused on practical AI applications in mental health</li>
                  <li>Networking Opportunities with professionals and innovators passionate about mental wellness</li>
                  <li>Join us to bridge the gap between innovation and empathy for a mentally healthier world.</li>
                </ul>
              </div>
            </div>
          </div>

      
      <div className="newai-agenda">
        <h2>Scientific Agenda</h2>
        <div className="ai-buttons">
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

        <table className="newai-table">
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


      <section className="registration-ai">
        <div className="intro-newai">
          <h1>Register Now!</h1>
          <p>
            Register now to start your journey and join a community of passionate learners, ambitious professionals, and forward-thinkers ready to make a difference.
          </p>
          <p>The world is waiting for you - take the first step today!</p>
        </div>

        <div className="registration-cards-ai">
          <div className="registration-newaicard">
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

          <div className="registration-newaicard">
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

          <div className="registration-newaicard">
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


          <div className="registration-newaicard">
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

          <div className="registration-newaicard">
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

          <div className="registration-newaicard">
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
           <p><i className="fas fa-map-marker-alt"></i> Prospekt Gagarina, Nizhny Novgorod, Nizhegorodskaya oblast', Russia, 603022</p>
           <br/>
           <p><i className="fas fa-envelope"></i> Email: <a href="mailto:contact@neoconferences.org">contact@neoconferences.org</a></p>
           <br/>
           <p><i className="fas fa-phone"></i> Phone: <a href="tel:+7 996 829-21-05">+7 996 829-21-05</a></p>
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

export default Events;