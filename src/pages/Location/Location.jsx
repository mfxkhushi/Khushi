import React, { useState, useRef } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import './Location.css';

import locationImg from '../../assets/LOCATION-MAP-LARGE-1.png'; 
import locationVideo from '../../assets/video/Drone.mp4'; // Update with your actual video path

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 
             5 17.59 6.41 19 12 13.41 17.59 19 
             19 17.59 13.41 12z"/>
  </svg>
);

function Location() {
  const [zoomedImage, setZoomedImage] = useState(null);
  const videoRef = useRef(null);

  const handleImageClick = () => {
    setZoomedImage(locationImg);
    document.body.style.overflow = 'hidden';
  };

  const closeZoom = () => {
    setZoomedImage(null);
    document.body.style.overflow = 'auto';
  };

  // Auto-play video when component mounts
  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(e => {
        console.log("Autoplay prevented:", e);
      });
    }
  }, []);

  return (
    <div className="location-container">
      <Navbar />

      <div className="location-content">
        {/* Left Side - Image */}
        <div className="location-image-section">
          <img
            src={locationImg}
            alt="Location"
            className="location-image"
            onClick={handleImageClick}
          />
        </div>

        {/* Right Side - Video (replacing Google Map) */}
        <div className="location-video-section">
          <video
            ref={videoRef}
            className="location-video"
            autoPlay
            loop
            playsInline
          >
            <source src={locationVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Zoom Overlay */}
      {zoomedImage && (
        <div className="image-zoom-overlay" onClick={closeZoom}>
          <div className="zoomed-image-container" onClick={(e) => e.stopPropagation()}>
            <img src={zoomedImage} alt="Zoomed" className="zoomed-image" />
            <button className="close-zoom" onClick={closeZoom}>
              <CloseIcon />
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Location;