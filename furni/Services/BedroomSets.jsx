import React, {   useContext } from 'react';
import { Link } from 'react-router-dom';
import './BedroomSets.css';
import { CartContext } from '../Context/CartContext'; 
import modernBed from '../../assets/modern-bed.jpg';
import classicWardrobe from '../../assets/classic-wardrobe.jpg';
import nightstand from '../../assets/nightstand.jpg';
import dresser from '../../assets/dresser.jpg';
import canopyBed from '../../assets/canopy-bed.jpg';
import chestOfDrawers from '../../assets/chest-of-drawers.jpg';
import accentChair from '../../assets/accent-chair.jpg';
import vanityTable from '../../assets/vanity-table.jpg';
import mirror from '../../assets/mirror.jpg';

function BedroomSets() {
  const { addToCart } = useContext(CartContext);

  const bedroomItems = [
    {
      id: 1,
      name: 'Modern Bed',
      image: modernBed,
      description: 'A sleek and modern bed for your stylish bedroom.',
      price: 799.99,
    },
    {
      id: 2,
      name: 'Classic Wardrobe',
      image: classicWardrobe,
      description: 'A spacious wardrobe with a timeless design.',
      price: 499.99,
    },
    {
      id: 3,
      name: 'Nightstand',
      image: nightstand,
      description: 'A functional and stylish nightstand.',
      price: 149.99,
    },
    {
      id: 4,
      name: 'Dresser',
      image: dresser,
      description: 'A beautifully crafted dresser with ample storage.',
      price: 349.99,
    },
    {
      id: 5,
      name: 'Canopy Bed',
      image: canopyBed,
      description: 'A luxurious canopy bed for ultimate comfort.',
      price: 899.99,
    },
    {
      id: 6,
      name: 'Chest of Drawers',
      image: chestOfDrawers,
      description: 'An elegant chest of drawers to organize your belongings.',
      price: 299.99,
    },
    {
      id: 7,
      name: 'Accent Chair',
      image: accentChair,
      description: 'A cozy accent chair for your bedroom corner.',
      price: 199.99,
    },
    {
      id: 8,
      name: 'Vanity Table',
      image: vanityTable,
      description: 'A chic vanity table for your beauty essentials.',
      price: 399.99,
    },
    {
      id: 9,
      name: 'Mirror',
      image: mirror,
      description: 'A decorative mirror to complete your room.',
      price: 99.99,
    },
  ];

  const handleAddToCart = (item) => {
    addToCart(item);
    
  };

  return (
    <div className="bedroom-sets-container">
      <h1 className="bedroom-sets-title">Bedroom Sets</h1>
      <div className="bedroom-sets-grid">
        {bedroomItems.map((item) => (
          <div key={item.id} className="bedroom-set-card">
            <img
              src={item.image}
              alt={item.name}
              className="bedroom-set-image"
            />
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p className="bedroom-set-price">Price: ${item.price.toFixed(2)}</p>
            <button
              className="bedroom-set-button"
              onClick={() => handleAddToCart(item)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BedroomSets;
