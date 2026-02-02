import React, { useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import './plans.css';

import image1 from '../../assets/site-plan.png';


function Plans() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const slideData = [
    { index: 0, src: image1, name: 'Tower 1 Second Floor' },

  ];

  const handlePreviousClick = () => {
    setCurrentSlide((prev) => (prev === 0 ? slideData.length - 1 : prev - 1));
  };

  const handleNextClick = () => {
    setCurrentSlide((prev) => (prev === slideData.length - 1 ? 0 : prev + 1));
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
    <div className="plans-page">
      <Navbar />
      <div className="plans-content">
        <div className="plans-header">
          <h1>PLANS</h1>
        </div>

        <div className="slider-section">
          <div className="slider">
            <ul
              className="slider__wrapper"
              style={{ transform: `translateX(-${currentSlide * (100 / slideData.length)}%)` }}
            >
              {slideData.map((slide) => (
                <Slide
                  key={slide.index}
                  slide={slide}
                  current={currentSlide}
                  handleSlideClick={handleSlideClick}
                />
              ))}
            </ul>

            <div className="slider__controls">
              <SliderControl
                type="previous"
                title="Go to previous slide"
                handleClick={handlePreviousClick}
              />
              <SliderControl
                type="next"
                title="Go to next slide"
                handleClick={handleNextClick}
              />
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
              alt="Zoomed view"
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

// Slide Component
const Slide = ({ slide, current, handleSlideClick }) => {
  const { src, index, name } = slide;

  const handleMouseMove = (event) => {
    const el = event.currentTarget;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--x', event.clientX - (r.left + r.width / 2));
    el.style.setProperty('--y', event.clientY - (r.top + r.height / 2));
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
      <div className="slide__image-wrapper">
        <div className="slide__name">{name}</div>
        <img className="slide__image" alt={`Slide ${index + 1}`} src={src} />
      </div>
    </li>
  );
};

// Slider Control Component
const SliderControl = ({ type, title, handleClick }) => {
  return (
    <button className={`btn btn--${type}`} title={title} onClick={handleClick}>
      <svg className="icon" viewBox="0 0 24 24">
        <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
      </svg>
    </button>
  );
};

export default Plans;
