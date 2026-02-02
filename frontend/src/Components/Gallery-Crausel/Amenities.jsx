import React, { useRef, useState } from 'react';
import './Gallery-Crausel.css';

import image1 from '../../assets/Amenities/Driveway.jpg';
import image2 from '../../assets/Amenities/temple.jpg';
import image3 from '../../assets/Amenities/swimming-pool.jpg';
import image4 from '../../assets/Amenities/squash-court.jpg';
import image5 from '../../assets/Amenities/rock-climbing.jpg';
import image6 from '../../assets/Amenities/multisports.jpg';
import image7 from '../../assets/Amenities/kids-game.jpg';
import image8 from '../../assets/Amenities/indoor.jpg';
import image9 from '../../assets/Amenities/gym.jpg';
import image10 from '../../assets/Amenities/grocery-store.jpg';
import image11 from '../../assets/Amenities/gamezone.jpg';
import image12 from '../../assets/Amenities/creche.jpg';
import image13 from '../../assets/Amenities/children-play.jpg';
import image14 from '../../assets/Amenities/business-center.jpg';
import image15 from '../../assets/Amenities/banquet-hall.jpg';
import image16 from '../../assets/Amenities/banquet.jpg';
import image17 from '../../assets/Amenities/terrace.png';

const ArrowLeft = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/>
  </svg>
);

const ArrowRight = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
  </svg>
);

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 
             5 17.59 6.41 19 12 13.41 17.59 19 
             19 17.59 13.41 12z"/>
  </svg>
);

function Amenities() {
  const scrollRef = useRef(null);
  const [zoomedImage, setZoomedImage] = useState(null);

const images = [
  { id: 1, url: image1, alt: "Driveway" },
  { id: 2, url: image2, alt: "Landscape & Temple" },
  { id: 3, url: image3, alt: "Swimming Pool" },
  { id: 4, url: image4, alt: "Squash Court" },
  { id: 5, url: image5, alt: "Rock climbing wall" },
  { id: 6, url: image6, alt: "Multi Sports Court" },
  { id: 7, url: image7, alt: "Kids Games Room" },
  { id: 8, url: image8, alt: "Indoor Games Room" },
  { id: 9, url: image9, alt: "Gym" },
  { id: 10, url: image10, alt: "Grocery Store" },
  { id: 11, url: image11, alt: "Game Zone Lobby" },
  { id: 12, url: image12, alt: "Creche" },
  { id: 13, url: image13, alt: "Children Play Area" },
  { id: 14, url: image14, alt: "Business Center" },
  { id: 15, url: image15, alt: "Banquet Hall" },
  { id: 16, url: image16, alt: "Banquet Lawn" },
  { id: 17, url: image17, alt: "Terrace Lounge" },
];



  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleImageClick = (image) => {
    setZoomedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeZoom = () => {
    setZoomedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="gallery-container-crausel">
      <div className="image-scroll-container" ref={scrollRef}>
        <div className="image-scroll">
          {images.map((image) => (
            <img
              key={image.id}
              src={image.url}
              alt={image.alt}
              className="gallery-image"
              onClick={() => handleImageClick(image)}
            />
          ))}
        </div>
      </div>

      <div className="scroll-controls">
        <button onClick={() => scroll('left')} className="scroll-arrow">
          <ArrowLeft />
        </button>
        <button onClick={() => scroll('right')} className="scroll-arrow">
          <ArrowRight />
        </button>
      </div>

      {zoomedImage && (
        <div className="image-zoom-overlay" onClick={closeZoom}>
          <div className="zoomed-image-container" onClick={(e) => e.stopPropagation()}>
            <img
              src={zoomedImage.url}
              alt={zoomedImage.alt}
              className="zoomed-image"
            />
            <button className="close-zoom" onClick={closeZoom}>
              <CloseIcon />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Amenities;
