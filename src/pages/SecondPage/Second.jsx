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
  const [weather, setWeather] = useState({ temp: '29', icon: 'https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png' });
  const navigate = useNavigate();
  const inactivityTimeoutRef = useRef(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        // Using Open-Meteo API which is very reliable and has no CORS issues
        const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=20.2724&longitude=85.8338&current_weather=true');
        const data = await response.json();
        if (data && data.current_weather) {
          setWeather({
            temp: Math.round(data.current_weather.temperature),
            icon: 'https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png'
          });
        }
      } catch (error) {
        console.error("Error fetching weather:", error);
        // Fallback to a reasonable default if API fails
        setWeather({ temp: '29', icon: 'https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png' });
      }
    };

    fetchWeather();
    const weatherInterval = setInterval(fetchWeather, 15 * 60 * 1000);
    return () => clearInterval(weatherInterval);
  }, []);

  const redimateData = [
    { title: "OVERVIEW", img: RedimateOverview, path: "/overview" },
    { title: "LOCATION", img: RedimateLocation, path: "/location" },
    { title: "AMENITIES", img: RedimateAmenities, path: "/amenities" },
    { title: "PLANS", img: RedimatePlans, path: "/plans" },
    { title: "SPECS", img: RedimateSpecs, path: "/specs" },
  ];

  const today = new Date().toLocaleDateString('en-GB', {
    weekday: 'long',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  }).replace(/,/, '');

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
        <div className="center-logo">
          <img src={Logo} alt="Capella Logo" />
        </div>
        <div className="walkthrough" onClick={() => setShowVideo(true)}>
          <img src={playIcon} alt="Play" />
          <span>WALKTHROUGH<br />VIDEO</span>
        </div>
      </div>

      <div className="dashboard-grid">
        {redimateData.map((item, index) => (
          <Link to={item.path} className="dashboard-item" key={index}>
            <div className="item-image">
              <img src={item.img} alt={item.title} />
            </div>
          </Link>
        ))}
      </div>

      <div className="bottom-bar">
        <div 
          className="weather-section" 
          onClick={() => window.location.href = 'https://www.google.com/search?q=weather+bhubaneswar'}
          style={{ cursor: 'pointer' }}
        >
          <div className="temp">{weather.temp}° C</div>
          <div className="location-weather">
            <span>Bhubaneswar</span>
            <img src={weather.icon} alt="weather" />
          </div>
        </div>

        <div className="developer-logo">
          <img src={Logo2} alt="Khushi Realcon" />
          <span className="tagline">SPREADING HAPPINESS</span>
        </div>

        <div className="bottom-links">
          <div className="construction-update">
            <div className="icon-box">
              <img src={HomeIcon} alt="Crane" />
            </div>
            <div className="text-box">
              <span>CLICK FOR</span>
              <span>CONSTRUCTION UPDATE</span>
              <span>VIDEO MAR 2023</span>
            </div>
          </div>
          <div 
            className="vr-section"
            onClick={() => window.location.href = 'https://digitour.housing.com/projects/Khushi_Capella/3bhk'}
            style={{ cursor: 'pointer' }}
          >
            <div className="vr-icon">
              <span>360°</span>
            </div>
            <div className="vr-text">CLICK FOR VR</div>
          </div>
        </div>
      </div>

      <div className="footer-orera">
        ORERA NO.: RP/19/2022/00731 rera.odisha.gov.in
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