import React from 'react';
import './Navbar.css';
import Logo from '../../assets/CAPELLA-LOGO.png';
import BackIcon from '../../assets/back.png';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/second" className="home-link">
        <div className="back-icon">
          <img src={BackIcon} alt="Back" />
        </div>
      </Link>
      <div className="logo">
        <img src={Logo} alt="Bailey Square" />
      </div>
    </div>
  );
}

export default Navbar;