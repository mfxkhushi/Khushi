import React, { useRef, useState } from 'react';
import './Gallery-Crausel.css';

import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import img4 from '../../assets/img4.jpg';
import img5 from '../../assets/img5.jpg';

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

function Exterior() {
  const scrollRef = useRef(null);
  const [zoomedImage, setZoomedImage] = useState(null);

  const images = [
    { id: 1, url: img1, alt: "Image 1" },
    { id: 2, url: img2, alt: "Image 2" },
    { id: 3, url: img3, alt: "Image 3" },
    { id: 4, url: img4, alt: "Image 4" },
    { id: 5, url: img5, alt: "Image 5" },
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

export default Exterior;
