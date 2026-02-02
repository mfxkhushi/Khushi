import React, { useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import './Amenities.css';

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


function Amenities() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const slideData = [
    { index: 0, src: image1, title: "Driveway" },
    { index: 1, src: image2, title: "Landscape & Temple" },
    { index: 2, src: image3, title: "Swimming Pool" },
    { index: 3, src: image4, title: "Squash Court" },
    { index: 4, src: image5, title: "Rock climbing wall" },
    { index: 5, src: image6, title: "Multi Sports Court" },
    { index: 6, src: image7, title: "Kids Games Room" },
    { index: 7, src: image8, title: "Indoor Games Room" },
    { index: 8, src: image9, title: "Gym" },
    { index: 9, src: image10, title: "Grocery Store" },
    { index: 10, src: image11, title: "Game Zone Lobby" },
    { index: 11, src: image12, title: "Creche" },
    { index: 12, src: image13, title: "Children Play Area" },
    { index: 13, src: image14, title: "Business Center" },
    { index: 14, src: image15, title: "Banquet Hall" },
    { index: 15, src: image16, title: "Banquet Lawn" },
    { index: 16, src: image17, title: "Terrace Lounge" },
  
  ];

  const handlePreviousClick = () => {
    setCurrentSlide((prev) => (prev - 1 + slideData.length) % slideData.length);
  };

  const handleNextClick = () => {
    setCurrentSlide((prev) => (prev + 1) % slideData.length);
  };

  const handleSlideClick = (index) => {
    if (currentSlide !== index) {
      setCurrentSlide(index);
    } else {
      setIsZoomed(true);
    }
  };

  const closeZoom = () => {
    setIsZoomed(false);
  };

  return (
    <div className="amenities-page">
      <Navbar />
      <div className="amenities-content">
        <div className="amenities-header">
          <h1>AMENITIES</h1>
        </div>

        <div className="slider-section">
          <div className="slider">
            <ul
              className="slider__wrapper"
              style={{ transform: `translateX(-${currentSlide * (100 / slideData.length)}%)` }}
            >
              {slideData.map(slide => (
                <Slide
                  key={slide.index}
                  slide={slide}
                  current={currentSlide}
                  handleSlideClick={handleSlideClick}
                />
              ))}
            </ul>

            <div className="slider__controls">
              <SliderControl type="previous" title="Previous" handleClick={handlePreviousClick} />
              <SliderControl type="next" title="Next" handleClick={handleNextClick} />
            </div>
          </div>
        </div>

        {isZoomed && (
          <div className="zoom-modal" onClick={closeZoom}>
            <button className="close-btn" onClick={closeZoom}>
              <i className="fas fa-times"></i>
            </button>
            <img
              src={slideData[currentSlide].src}
              alt={slideData[currentSlide].title}
              className="zoomed-image"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

const Slide = ({ slide, current, handleSlideClick }) => {
  const { src, index, title } = slide;

  const handleMouseMove = (event) => {
    const el = event.currentTarget;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--x', event.clientX - (r.left + Math.floor(r.width / 2)));
    el.style.setProperty('--y', event.clientY - (r.top + Math.floor(r.height / 2)));
  };

  const handleMouseLeave = (event) => {
    event.currentTarget.style.setProperty('--x', 0);
    event.currentTarget.style.setProperty('--y', 0);
  };

  let classNames = 'slide';
  if (current === index) classNames += ' slide--current';
  else if (current - 1 === index) classNames += ' slide--previous';
  else if (current + 1 === index) classNames += ' slide--next';

  return (
    <li
      className={classNames}
      onClick={() => handleSlideClick(index)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="slide__title">{title}</div>
      <div className="slide__image-wrapper">
        <img className="slide__image" alt={title} src={src} />
      </div>
    </li>
  );
};

const SliderControl = ({ type, title, handleClick }) => (
  <button className={`btn btn--${type}`} title={title} onClick={handleClick}>
    <svg className="icon" viewBox="0 0 24 24">
      <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
    </svg>
  </button>
);

export default Amenities;
