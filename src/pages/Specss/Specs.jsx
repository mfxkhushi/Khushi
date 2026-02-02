import React, { useEffect, useRef } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import './Specs.css';

const specsData = [
  {
    title: 'STRUCTURE',
    points: [
      'Earthquake & Fire Resistance',
      'RCC Shear Wall Framed Structure',
      'Floor To Floor Height - 10\' 4"'
    ]
  },
  {
    title: 'WALL',
    points: [
      'Periphery/Reinforced Concrete Wall',
      'Internal AAC Block Wall with Plaster and Putty'
    ]
  },
  {
    title: 'DOOR',
    points: [
      'Laminated Flush Door with Solid/Engineered Wood Frame, SS Hinge, Lock & Tower Bolt'
    ]
  },
  {
    title: 'WINDOW',
    points: [
      'Sliding Aluminium Window with Glass',
    ]
  },
  {
    title: 'FLOORING',
    points: [
      'Living/Dinning/Bedroom Vitrified Tiles',
      'Toilet/Kitchen/Balcony-Matt Finish Vitified Tiles',
      
    ]
  },
  {
    title: 'WALL FINISH',
    points: [
      'Living/Dinning?Bedroom/Balcony - Acrylic Emulsion Paint Finish',
      'Kitchen - Provision of Dado 2 ft. above Kitchen Top',
      'Toilet - Provision of Dado 7 ft. above Floor and False Ceiling'
    ]
  }
  ,
  {
    title: 'EXTERNAL FINISH',
    points: [
      'Weather Coat Paint',
    ]
  },
  {
    title: 'ELECTRICAL',
    points: [
      'Concealed Wiring and Modular Switches',
    ]
  },
  {
    title: 'PLUMBING',
    points: [
      'Concealed & Underslung',
    ]
  },
  {
    title: 'CP FITTING ',
    points: [
      'Premium Fittings',
    ]
  },
  {
    title: 'SANITARY',
    points: [
      'Premium Sanitary Fixtures',
    ]
  },
  {
    title: 'LIFT',
    points: [
      'Premium Brand Lift with ARD Facility, 1 Stretcher Lift in each Tower',
    ]
  },
  {
    title: 'BALCONY',
    points: [
      'MS Railing',
    ]
  },
  {
    title: 'KITCHEN',
    points: [
      'Single Bowl SS Sink with Drain-Board and Tap',
      'Granite Top'
    ]
  },
 
];

function Specs() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const cards = document.querySelectorAll('.specs-card');
    cards.forEach((card, index) => {
      card.style.animation = `fadeInDown 0.6s ease ${index * 0.2}s forwards`;
    });

    const scrollContainer = scrollRef.current;
    let isDown = false;
    let startX;
    let scrollLeft;

    const handleMouseDown = (e) => {
      isDown = true;
      scrollContainer.classList.add('active');
      startX = e.pageX - scrollContainer.offsetLeft;
      scrollLeft = scrollContainer.scrollLeft;
    };

    const handleMouseLeave = () => {
      isDown = false;
      scrollContainer.classList.remove('active');
    };

    const handleMouseUp = () => {
      isDown = false;
      scrollContainer.classList.remove('active');
    };

    const handleMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - scrollContainer.offsetLeft;
      const walk = (x - startX) * 2; // Adjust scroll speed
      scrollContainer.scrollLeft = scrollLeft - walk;
    };

    const handleTouchStart = (e) => {
      isDown = true;
      startX = e.touches[0].pageX - scrollContainer.offsetLeft;
      scrollLeft = scrollContainer.scrollLeft;
    };

    const handleTouchMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.touches[0].pageX - scrollContainer.offsetLeft;
      const walk = (x - startX) * 2;
      scrollContainer.scrollLeft = scrollLeft - walk;
    };

    const handleTouchEnd = () => {
      isDown = false;
    };

    scrollContainer.addEventListener('mousedown', handleMouseDown);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);
    scrollContainer.addEventListener('mouseup', handleMouseUp);
    scrollContainer.addEventListener('mousemove', handleMouseMove);
    scrollContainer.addEventListener('touchstart', handleTouchStart);
    scrollContainer.addEventListener('touchmove', handleTouchMove);
    scrollContainer.addEventListener('touchend', handleTouchEnd);

    return () => {
      scrollContainer.removeEventListener('mousedown', handleMouseDown);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
      scrollContainer.removeEventListener('mouseup', handleMouseUp);
      scrollContainer.removeEventListener('mousemove', handleMouseMove);
      scrollContainer.removeEventListener('touchstart', handleTouchStart);
      scrollContainer.removeEventListener('touchmove', handleTouchMove);
      scrollContainer.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <div className="specs-page">
      <Navbar />
      <div className="specs-container">
        <h1 className="specs-title">Specifications</h1>
        <div className="specs-scroll-wrapper">
          <div ref={scrollRef} className="specs-scroll-container">
            {specsData.map((spec, index) => (
              <div className="specs-card" key={index}>
                <h2>{spec.title}</h2>
                <ul>
                  {spec.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Specs;