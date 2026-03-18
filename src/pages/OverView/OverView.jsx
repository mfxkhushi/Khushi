import React, { useState, useEffect, useRef } from 'react';

import './OverView.css';

import Footer from '../../Components/Footer/Footer';

import Navbar from '../../Components/Navbar/Navbar';

import { useNavigate } from 'react-router-dom';

import img1 from '../../assets/img1.jpg';

import img2 from '../../assets/img2.jpg';

import img3 from '../../assets/img3.jpg';

import img4 from '../../assets/img4.jpg';

import img5 from '../../assets/img5.jpg';

import Logo from '../../assets/CAPELLA-LOGO.png';





function OverView() {

  const navigate = useNavigate();

  const [currentSlide, setCurrentSlide] = useState(0);

  const [selectedImage, setSelectedImage] = useState(null);

  const [isPaused, setIsPaused] = useState(false);

  const carouselRef = useRef(null);



  const carouselImages = [img1, img2, img3, img4, img5];

  const totalSlides = carouselImages.length;



  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);

  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);



  const goToSlide = (index) => setCurrentSlide(index);



  const handleImageClick = (image) => setSelectedImage(image);

  const handleCloseModal = () => setSelectedImage(null);



  useEffect(() => {

    if (!isPaused) {

      const timer = setInterval(nextSlide, 3000);

      return () => clearInterval(timer);

    }

  }, [isPaused]);



  const handleMouseEnter = () => setIsPaused(true);

  const handleMouseLeave = () => setIsPaused(false);



  // Swipe / Drag support on carousel

  useEffect(() => {

    const carousel = carouselRef.current;

    if (!carousel) return;



    let startX = 0;

    let isDragging = false;



    const handleTouchStart = (e) => {

      startX = e.touches ? e.touches[0].clientX : e.clientX;

      isDragging = true;

    };



    const handleTouchMove = (e) => {

      if (!isDragging) return;

      const currentX = e.touches ? e.touches[0].clientX : e.clientX;

      const diff = startX - currentX;

      if (Math.abs(diff) > 50) {

        if (diff > 0) nextSlide(); // swipe left → next

        else prevSlide(); // swipe right → prev

        isDragging = false;

      }

    };



    const handleTouchEnd = () => {

      isDragging = false;

    };



    // Touch events for mobile

    carousel.addEventListener('touchstart', handleTouchStart);

    carousel.addEventListener('touchmove', handleTouchMove);

    carousel.addEventListener('touchend', handleTouchEnd);



    // Mouse drag events for desktop

    carousel.addEventListener('mousedown', handleTouchStart);

    carousel.addEventListener('mousemove', handleTouchMove);

    carousel.addEventListener('mouseup', handleTouchEnd);

    carousel.addEventListener('mouseleave', handleTouchEnd);



    return () => {

      carousel.removeEventListener('touchstart', handleTouchStart);

      carousel.removeEventListener('touchmove', handleTouchMove);

      carousel.removeEventListener('touchend', handleTouchEnd);



      carousel.removeEventListener('mousedown', handleTouchStart);

      carousel.removeEventListener('mousemove', handleTouchMove);

      carousel.removeEventListener('mouseup', handleTouchEnd);

      carousel.removeEventListener('mouseleave', handleTouchEnd);

    };

  }, [currentSlide]);



  return (

    <div className="overview-container">
      <Navbar />

      <div className="main-content">

        <div className="left">

          <div

            className="carousel-container"

            onMouseEnter={handleMouseEnter}

            onMouseLeave={handleMouseLeave}

            ref={carouselRef}

          >

            <div className="carousel-inner">

              {carouselImages.map((img, index) => (

                <div

                  key={index}

                  className={`carousel-item ${index === currentSlide ? 'active' : ''}`}

                  onClick={() => index === currentSlide && handleImageClick(img)}

                >

                  <img src={img} alt={`Slide ${index + 1}`} />

                </div>

              ))}

            </div>

            <div className="progress-dots">

              {carouselImages.map((_, index) => (

                <span

                  key={index}

                  className={`progress-dot ${index === currentSlide ? 'active' : ''}`}

                  onClick={() => goToSlide(index)}

                />

              ))}

            </div>

          </div>

        </div>



        <div className="right">

          <h2>OVERVIEW </h2>

          <p className="quote">

            An abode built with luxury to flaunt the elegance of your lifestyle. Inspired by world-class architectural designs, Khushi Capella is rising proudly in Pahala to exhibit a lifestyle beyond compare.<br></br>



            3 Towers  |  2/3/4 BHK  |  242 Apartments

            Landscape Garden  |  High Lifestyle Club  |  60% Open Space

            Penthouses  |  Retail Space

          </p>

          <p className="quote-author">By Khushi Capella</p>

        </div>

      </div>



      <Footer />



      {selectedImage && (

        <div className="image-modal" onClick={handleCloseModal}>

          <div className="modal-content">

            <img src={selectedImage} alt="Zoomed project" />

            <button className="close-button" onClick={handleCloseModal}>✕</button>

          </div>

        </div>

      )}

    </div>

  );

}



export default OverView;

