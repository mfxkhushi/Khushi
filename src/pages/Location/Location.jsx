import React, { useState, useRef } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import './Location.css';

import locationImg from '../../assets/LOCATION-MAP-LARGE-1.png'; 
import locationVideo from '../../assets/video/Drone.mp4'; 
import googleMapsIcon from '../../assets/location-icon.png'; // Using existing location icon

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

  const openGoogleMaps = () => {
    const address = "Khushi Capella | 2, 3 & 4 bhk Apartments in Bhubaneswar | Bhubaneswar 2 bhk Flat Price";
    const encodedAddress = encodeURIComponent(address);
    window.location.href = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
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

      <div className="location-header-text">
        <h1>Location Map</h1>
      </div>

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

        {/* Center - Video with Google Maps to the right */}
        <div className="location-video-wrapper">
          <div className="location-video-section">
            <video
              ref={videoRef}
              className="location-video"
              autoPlay
              loop
              muted
              controls
              playsInline
            >
              <source src={locationVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          
          {/* Google Maps on the right of the video in the 'black space' */}
          <div className="google-maps-side-section" onClick={openGoogleMaps}>
            <div className="maps-content">
              <img src={googleMapsIcon} alt="Google Maps" className="maps-icon" />
              <span className="maps-text-primary">Google Maps</span>
              <span className="maps-text-secondary">(Tap to see in Google Maps)</span>
            </div>
          </div>
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