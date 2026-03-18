import React from 'react';
import { useNavigate } from 'react-router-dom';
import './First.css';
import Touch from '../../assets/touch-icon.png';
import Logo from '../../assets/CAPELLA-LOGO.png';
import Logo2 from '../../assets/LOGO2.png';
import MapVideo from '../../assets/video/Khushi.mp4';

function First() {
  const navigate = useNavigate();

  return (
    <div className="slider-container" onClick={() => navigate('/second')}>
      <video className="background-video" autoPlay loop muted playsInline>
        <source src={MapVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="logo-container">
        <img src={Logo} alt="Capella Logo" className="first-page-logo" />
      </div>

      <div className="logo2-container">
        <img src={Logo2} alt="Khushi Realcon Logo" className="first-page-logo2" />
      </div>

      <div className="overlay-bar">
        <div className="overlay-content">
          <h1 className="title">KHUSHI CAPELLA</h1>
          <div className="start-btn">Touch To Start</div>
          <img src={Touch} alt="Touch Icon" />
        </div>
      </div>
    </div>
  );
}

export default First;
