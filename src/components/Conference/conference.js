import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './conference.css';
import img1 from '../images/conf3.jpg';
import img2 from '../images/img2.png';
import img3 from '../images/img3.png';
import img4 from '../images/img4.png';
import img5 from '../images/img5.jpg';
import img6 from '../images/img6.jpg';
import img7 from '../images/newai.PNG';
import img8 from '../images/leadership.png';
import ChatbotIcon from '../chatbot/chatbot';
// import Footer from '../Footer/footer';

const Card = ({ title, date, location, description, image, link }) => {
  const navigate = useNavigate(); 

  const handleDetailsClick = () => {
    navigate(link); 
  };

  return (
    <div className="card">
      <img src={image} alt={title} />
      <div className="card-content">
        <h2>{title}</h2>
        <p className="date">{date}</p>
        <p className="location">{location}</p>
        <p className="description">{description}</p>
        <div className="card-buttons">
          <button className="details-btn" onClick={handleDetailsClick}>
            Details
          </button>
          <button className="register-btn">Register</button>
        </div>
      </div>
    </div>
  );
};

const events = [

  {
    title: "4th International Congress of Women Changemakers and Visionary Leaders",
    date: "May 07-08, 2025",
    location: "Toronto  Canada",
    // description: "Focusing on women influencers in various fields.",
    image: img3,
    link: "/newevents" 
  },
  {
    title: "4th World Congress on Mindfulness, Psychology, and Spirituality",
    date: "May 07-08, 2025",
    location: "Toronto, Canada",
    // description: "Exploring new trends in health and wellness.",
    image: img4,
    link: "/inside2" 
  },
  {
    title: "4th Global Congress on Women’s Leadership, Empowerment, and Sustainable Development ",
    date: "October 09-10, 2025",
    location: "Toronto, Canada",
    image: img8,
    link: "/3rd-event" 
  },
  {
    title: "4th International congress on Women's Health and Midwifery Excellence ",
    date: "October 09-10, 2025",
    location: "Toronto, Canada",
    image: img1,
    link: "/events" 
  },
  {
    title: "4th International conference on Mental Health, Well-Being, and Spiritual Healing",
    date: "October 09-10, 2025",
    location: "Toronto, Canada",
    image: img5,
    link: "/inside1" 
  },
  {
    title: "4th Global Congress on Women’s Leadership, Empowerment, and Sustainable Development",
    date: "March 08-09, 2026",
    location: "Paris, France",
    // description: "Key discussions on mental health.",
    image: img2,
    link: "/events1" 
  },
  
  {
    title: "4th International Conference on Gender Diversity and Transgender Health",
    date: "March 08-09, 2026",
    location: "Paris, France",
    image: img6,
    link: "/inside" 
  },
  {
    title: "From Novice to AI Pro: Career-Boosting Skills for the Digital Age",
    image: img7,
    link: "/theosym" 
  },
  
];

const EventsPage = () => (
  <div className="events-page">
    {events.map((event, index) => (
      <Card key={index} {...event} />
    ))}

    <ChatbotIcon/>
    
  </div>
  
);

export default EventsPage;
