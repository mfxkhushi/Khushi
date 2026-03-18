import React from 'react';
import './Navbar.css';
import Logo from '../../assets/CAPELLA-LOGO.png';
import Logo2 from '../../assets/LOGO2.png';
import BackIcon from '../../assets/back.png';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/" className="home-link">
        <div className="back-icon">
          <img src={BackIcon} alt="Back" />
        </div>
      </Link>
      <div className="logo">
        <img src={Logo} alt="Capella Logo" className="navbar-logo" />
      </div>
      <div className="logo2">
        <img src={Logo2} alt="Logo 2" className="navbar-logo2" />
      </div>
    </div>
  );
}

export default Navbar;