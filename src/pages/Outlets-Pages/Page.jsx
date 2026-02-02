import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Adidas from '../../assets/shops/adidas.png';
import Alexander from '../../assets/shops/alexander.avif';
import Asics from '../../assets/shops/asics.png';
import Boss from '../../assets/shops/boss.png';
import Burraberry from '../../assets/shops/burberry.avif';
import Calvin from '../../assets/shops/calvin-klien.png';
import Cartier from '../../assets/shops/cartier.png';
import Champion from '../../assets/shops/champion.avif';
import Chanel from '../../assets/shops/chanel.png';
import Chopard from '../../assets/shops/chopard.avif';
import Coach from '../../assets/shops/coach.png';
import Columbia from '../../assets/shops/columbia.png';
import Converse from '../../assets/shops/converse.png';
import Desigual from '../../assets/shops/Desigual.avif';
import Fendi from '../../assets/shops/fendi.png';
import Fila from '../../assets/shops/fila.png';
import Gucci from '../../assets/shops/gucci.png';
import Levis from '../../assets/shops/levis.jpg';
import NewBalance from '../../assets/shops/new-balance.png';
import Next from '../../assets/shops/next.png';
import Nike from '../../assets/shops/nike.png';
import NorthFace from '../../assets/shops/north-face.avif';
import Pandora from '../../assets/shops/pandora.avif';
import PeterEngland from '../../assets/shops/peter-england.png';
import Prada from '../../assets/shops/prada.png';
import Puma from '../../assets/shops/puma.png';
import RayBan from '../../assets/shops/ray-ban.png';
import Reebok from '../../assets/shops/reebok.png';
import Rolex from '../../assets/shops/rolex.avif';
import Salvatore from '../../assets/shops/salvatore-ferragamo.avif';
import Superme from '../../assets/shops/supreme.png';
import Swatch from '../../assets/shops/swatch.avif';
import Tissot from '../../assets/shops/tissot.avif';
import Umbro from '../../assets/shops/umbro.png';
import Vans from '../../assets/shops/vans.png';
import Volcom from '../../assets/shops/volcom.png';
import BackIcon from '../../assets/back.png';

// food
import Kfc from '../../assets/shops/kfc.png'
import bwc from '../../assets/shops/bwc.png'
import keventers from '../../assets/shops/keventers.jpg'
import Baskin from '../../assets/shops/baskin-robbins.png'
import starbuks from '../../assets/shops/starbucks.png'
import mcdonalds from '../../assets/shops/mcdonalds.png'
import dominos from '../../assets/shops/dominos.png'
import wowmomo from '../../assets/shops/wowmomo.jpg'
import wowchina from '../../assets/shops/wowchina.jpg'


import './Page.css';

function Page() {
  const { floor } = useParams();
  const navigate = useNavigate();
  const [selectedStore, setSelectedStore] = useState(null);

  const floors = {
    'ground-floor': {
      description: 'Welcome to the vibrant Ground Floor, featuring a variety of premium stores with the latest fashion and accessories.',
      stores: [
        { name: 'Adidas', image: Adidas, description: 'Top sportswear with innovative designs.' },
        { name: 'Alexander', image: Alexander, description: 'Luxury fashion for all occasions.' },
        { name: 'Asics', image: Asics, description: 'Premium running and athletic gear.' },
        { name: 'Boss', image: Boss, description: 'Elegant menswear and accessories.' },
        { name: 'Burberry', image: Burraberry, description: 'Iconic British luxury brand.' },
        { name: 'Calvin', image: Calvin, description: 'Modern and stylish clothing line.' },


      ],
    },
    'floor-1': {
      description: 'Explore Floor 1, home to luxury brands and exclusive collections.',
      stores: [
        { name: 'Cartier', image: Cartier, description: 'Exquisite jewelry and watches.' },
        { name: 'Champion', image: Champion, description: 'Classic athletic apparel.' },
        { name: 'Chanel', image: Chanel, description: 'High-end fashion and perfumes.' },
        { name: 'Chopard', image: Chopard, description: 'Luxury timepieces and jewelry.' },
        { name: 'Coach', image: Coach, description: 'Premium leather goods and bags.' },
        { name: 'Columbia', image: Columbia, description: 'Outdoor gear and apparel.' },
      ],
    },
    'floor-2': {
      description: 'Floor 2 offers a mix of sportswear and casual wear for all ages.',
      stores: [
        { name: 'Converse', image: Converse, description: 'Iconic sneakers and casual wear.' },
        { name: 'Desigual', image: Superme, description: 'Vibrant and unique clothing.' },
        { name: 'Fendi', image: Fendi, description: 'Luxury fashion with bold designs.' },
        { name: 'Fila', image: Fila, description: 'Stylish sportswear heritage.' },
        { name: 'Gucci', image: Gucci, description: 'Italian luxury and high fashion.' },
        { name: 'Levis', image: Levis, description: 'Classic denim and casual wear.' },
      ],
    },
    'floor-3': {
      description: 'Discover premium footwear and accessories on Floor 3.',
      stores: [
        { name: 'NewBalance', image: NewBalance, description: 'Comfortable and stylish shoes.' },
        { name: 'Next', image: Next, description: 'Affordable fashion for all.' },
        { name: 'Nike', image: Nike, description: 'Leading sportswear and footwear.' },
        { name: 'NorthFace', image: NorthFace, description: 'Top outdoor and adventure gear.' },
        { name: 'Pandora', image: Pandora, description: 'Customizable charm jewelry.' },
        { name: 'PeterEngland', image: PeterEngland, description: 'Formal and casual menswear.' },
      ],
    },
    'floor-4': {
      description: 'Floor 4 features high-end fashion and jewelry brands.',
      stores: [
        { name: 'Prada', image: Prada, description: 'Luxury Italian fashion house.' },
        { name: 'Puma', image: Puma, description: 'Dynamic sportswear and lifestyle.' },
        { name: 'RayBan', image: RayBan, description: 'Iconic sunglasses and eyewear.' },
        { name: 'Reebok', image: Reebok, description: 'Fitness and casual footwear.' },
        { name: 'Rolex', image: Rolex, description: 'Prestigious luxury watches.' },
        { name: 'Salvatore', image: Salvatore, description: 'Elegant Italian fashion.' },
      ],
    },
    'floor-5': {
      description: 'Top floor with exclusive watches and streetwear styles.',
      stores: [
        { name: 'wowmomo', image: wowmomo, description: 'Streetwear with cult following.' },
        { name: 'kfc', image:Kfc, description: 'Trendy and affordable watches.' },
        { name: 'bwc', image: bwc, description: 'Swiss precision timepieces.' },
        { name: 'keventers', image: keventers, description: 'Sportswear with soccer roots.' },
        { name: 'baskin robbins', image: Baskin, description: 'Skate culture and casual shoes.' },
        { name: 'starbucks', image: starbuks, description: 'Youthful action sports apparel.' },
        { name: 'mcdonalds', image: mcdonalds, description: 'Youthful action sports apparel.' },
        { name: 'dominos', image: dominos, description: 'Youthful action sports apparel.' },
        { name: 'wow china', image: wowchina, description: 'Skate culture and casual shoes.' },



        
      ],
    },
  };

  const currentFloor = floors[floor] || floors['ground-floor'];

  const handleBackClick = () => {
    navigate('/outlets');
  };

  const handleImageClick = (store) => {
    setSelectedStore(store);
  };

  const closePopup = () => {
    setSelectedStore(null);
  };

  useEffect(() => {
    if (!currentFloor) {
      navigate('/outlets');
    }
  }, [currentFloor, navigate]);

  return (
    <div className="page">
      <img src={BackIcon} alt="Back" className="back-icon" onClick={handleBackClick} />
      <h1 className="floor-title">
        {(floor || 'ground-floor').replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())} Stores
      </h1>
      <div className="stores-container">
        {currentFloor.stores.map((store, index) => (
          <div key={index} className="store-card" onClick={() => handleImageClick(store)}>
            <img src={store.image} alt={store.name} className="store-image" />
          </div>
        ))}
      </div>
      {selectedStore && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedStore.image} alt={selectedStore.name} className="popup-image" />
            <h3>{selectedStore.name}</h3>
            <p>{selectedStore.description || 'No description available'}</p>
            <button className="close-button" onClick={closePopup}>X</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Page;