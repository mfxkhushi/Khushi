import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import floorPlansData from './floorPlansData.json';
import './FloorPage.css';

function FloorPage() {
  const { planType } = useParams();
  const [zoomedImage, setZoomedImage] = useState(null);

  const slides = floorPlansData[planType] || [];

  const handleImageClick = (img) => setZoomedImage(img);
  const closeZoom = () => setZoomedImage(null);

  if (!slides.length) return <div>Plan not found</div>;

  return (
    <div className="floor-plan-page">
      <Navbar />

      <div className="floor-plan-content">
        <h1>{planType.replace(/^\w/, (c) => c.toUpperCase())} Plan</h1>

        <div className="images-section">
          {slides.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Plan ${idx + 1}`}
              className="floor-plan-image"
              onClick={() => handleImageClick(img)}
            />
          ))}
        </div>

        {zoomedImage && (
          <div className="zoom-modal" onClick={closeZoom}>
            <button className="close-btn" onClick={closeZoom}>
              ×
            </button>
            <img
              src={zoomedImage}
              alt="Zoomed Plan"
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

export default FloorPage;
