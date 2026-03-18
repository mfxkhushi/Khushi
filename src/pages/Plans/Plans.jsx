import React from 'react';

import { useNavigate } from 'react-router-dom';

import Navbar from '../../Components/Navbar/Navbar';

import Footer from '../../Components/Footer/Footer';

import './Plans.css';

import sitePlanImg from '../../assets/site-plan.png';

function Plans() {

  const navigate = useNavigate();



  const handleButtonClick = (planName) => {

    navigate(`/floor-plan/${planName}`);

  };



  return (

    <div className="plans-page">

      <Navbar />



      <div className="plans-content">

        <div className="plans-header">
          <h1>PLANS</h1>
        </div>



        <div className="plans-image-section">

          <img

            src={sitePlanImg}

            alt="Site Plan"

            className="plans-image"

          />

        </div>



        <div className="plans-buttons">

          <button onClick={() => handleButtonClick('tower1')}>Floor Plan Tower 1</button>

          <button onClick={() => handleButtonClick('clubhouse')}>Club House Plan</button>

          <button onClick={() => handleButtonClick('tower2')}>Floor Plan Tower 2</button>

        </div>

      </div>



      <Footer />

    </div>

  );

}



export default Plans;

