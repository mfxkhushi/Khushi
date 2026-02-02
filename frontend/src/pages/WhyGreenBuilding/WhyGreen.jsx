import React, { useState } from 'react';
import './WhyGreen.css';

import LeftSideImage from '../../assets/green-cert.png';
import FlipperImage1 from '../../assets/Asset.png';
import FlipperImage2 from '../../assets/Asset2.png';

import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

function WhyGreen() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="whygreen-page">

      {/* NAVBAR */}
      <Navbar />

      {/* MAIN CONTENT */}
      <div className="whygreen-content">
        <h1 className="whygreen-title">Why Green Building?</h1>

        <div className="content-wrapper">
          {/* LEFT IMAGE */}
          <div className="left-section">
            <div className="image-container">
              <img
                src={LeftSideImage}
                alt="Green Building Benefits"
                className="main-image"
              />
            </div>
          </div>

          {/* RIGHT FLIPPER */}
          <div className="right-section">
            <div
              className="flipper-container"
              onClick={() => setIsFlipped(!isFlipped)}
            >
              <div className={`flipper ${isFlipped ? 'flipped' : ''}`}>
                <div className="flipper-front">
                  <img src={FlipperImage1} className="flipper-image" />
                </div>

                <div className="flipper-back">
                  <img src={FlipperImage2} className="flipper-image" />
                </div>
              </div>

              <span className="flipper-instruction">Click to flip</span>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <Footer />

    </div>
  );
}

export default WhyGreen;
