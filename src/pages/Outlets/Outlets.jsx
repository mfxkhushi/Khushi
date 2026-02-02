import React from 'react';
import BackIcon from '../../assets/back.png';
import Logo from '../../assets/natural-logo1.png';
import { useNavigate } from 'react-router-dom';
import './Outlets.css';

function Outlets() {
  const navigate = useNavigate(); 

  const handleButtonClick = (floor) => {
    navigate(`/page/${floor.replace(/\s+/g, '-').toLowerCase()}`);
  };

  const floors = [
    { id: 1, name: 'Ground Floor' },
    { id: 2, name: 'Floor 1' },
    { id: 3, name: 'Floor 2' },
    { id: 4, name: 'Floor 3' },
    { id: 5, name: 'Floor 4' },
    { id: 6, name: 'Floor 5' }
  ];

  return (
    <div className="outlets-container">
      <img src={BackIcon} alt="Back" className="back-icon" onClick={() => navigate('/')} />
      <img src={Logo} alt="Bailey Logo" className="outlets-logo" />
      <div className="buttons-container">
        {floors.map((floor) => (
          <button
            key={floor.id}
            className="floor-button"
            onClick={() => handleButtonClick(floor.name)}
          >
            {floor.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Outlets;