import React, { useState, useEffect, useRef } from 'react';
import './Second.css';
import { Link, useNavigate } from 'react-router-dom';
import playIcon from '../../assets/play-icon.png';
import Logo from '../../assets/CAPELLA-LOGO.png';
import Logo2 from '../../assets/LOGO2.png';
import Video from '../../assets/video/Khushi.mp4';

import HomeIcon from '../../assets/FlatHomeReleased.png';

// Import redimate images - update these paths as needed
import RedimateOverview from '../../assets/overview.jpg';
import RedimateLocation from '../../assets/location.jpg';
import RedimateAmenities from '../../assets/Amenities.jpg';
import RedimatePlans from '../../assets/PLANS-NEW.jpg';
import RedimateSpecs from '../../assets/SPECS-NEW.jpg';
import RedimateWhyGreenBuilding from '../../assets/green.png';


function Second() {
  const [showVideo, setShowVideo] = useState(false);
  const navigate = useNavigate();
  const inactivityTimeoutRef = useRef(null);

  const redimateData = [
    { title: "OVERVIEW", img: RedimateOverview, path: "/overview" },
    { title: "LOCATION", img: RedimateLocation, path: "/location" },
    { title: "AMENITIES", img: RedimateAmenities, path: "/amenities" },
    { title: "PLANS", img: RedimatePlans, path: "/plans" },
    { title: "SPECIFICATIONS", img: RedimateSpecs, path: "/specs" },
    { title: "WHYGREENBUILDING", img: RedimateWhyGreenBuilding, path: "/why-green-building" },
  ];

  const today = new Date().toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'numeric',
    year: 'numeric'
  });

  const resetInactivityTimer = () => {
    if (inactivityTimeoutRef.current) {
      clearTimeout(inactivityTimeoutRef.current);
    }
    inactivityTimeoutRef.current = setTimeout(() => {
      navigate('/');
    }, 20000);
  };

  useEffect(() => {
    const activityEvents = ['mousemove', 'keydown', 'click', 'scroll'];
    activityEvents.forEach((event) => {
      window.addEventListener(event, resetInactivityTimer);
    });

    resetInactivityTimer();

    return () => {
      activityEvents.forEach((event) => {
        window.removeEventListener(event, resetInactivityTimer);
      });
      if (inactivityTimeoutRef.current) {
        clearTimeout(inactivityTimeoutRef.current);
      }
    };
  }, [navigate]);

  return (
    <div className="main-container">
      <div className="top-bar">
        <div className="date">{today}</div>
        <div className="play-icon" onClick={() => setShowVideo(true)}>
          <img src={playIcon} alt="Play" />
        </div>
      </div>

      <div className="logo-section">
        <img src={Logo} alt="Logo 1" className="logo1" />
      </div>

      <div className="redimate-container">
        {redimateData.map((item, index) => (
          <Link to={item.path} className="redimate-image-wrapper" key={index} style={{ animationDelay: `${index * 0.2}s` }}>
            <img src={item.img} alt={item.title} className="redimate-image" />
          </Link>
        ))}
      </div>

      <div className="bottom-info">
        <div className="home-icon" onClick={() => navigate('/')}>
          <img src={HomeIcon} alt="Home" />
        </div>
        <div className="logo2">
          <img src={Logo2} alt="Logo 2" />
        </div>
      </div>

      {showVideo && (
        <div className="video-popup">
          <div className="video-wrapper">
            <video controls autoPlay className="popup-video">
              <source src={Video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <button className="close-btn-inside" onClick={() => setShowVideo(false)}>✕</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Second;