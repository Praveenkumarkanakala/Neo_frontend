import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/Home';
import AboutPage from './components/AboutPage/about';
import ContactPage from './components/ContactPage/contact';
import GalleryPage from './components/Gallery/Gallery';
import Conference from './components/Conference/conference';
import Newconference from './components/inside1/conference1';
import Newconference1 from './components/inside2/conference2';
import Events from './components/Events/event';
import Eventsa from './components/Eventsa/eventsa';
import Newevents from './components/Newevents/newevent';
import Newconference2 from './components/inside3/conference3';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/conference" element={<Conference />} />
          <Route path="/inside" element={< Newconference />} />
          <Route path="/inside1" element={< Newconference1 />} />
          <Route path="/inside2" element={< Newconference2 />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events1" element={<Eventsa/>} />
          <Route path="/newevents" element={<Newevents />} />
          
        </Routes>
    </Router>
  );
}

export default App;
