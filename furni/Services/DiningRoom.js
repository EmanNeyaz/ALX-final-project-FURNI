import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './DiningRoom.css'; 

function DiningRoom() {
  const [cart, setCart] = useState([]); 

  const diningRoomItems = [
    {
      id: 1,
      name: 'Dining Table',
      image: '/assets/dining-table.jpg',
      description: 'A spacious dining table for memorable meals.',
      price: 899.0,
    },
    {
      id: 2,
      name: 'Dining Chairs',
      image: '/assets/dining-chairs.jpg',
      description: 'Comfortable and stylish chairs for your dining area.',
      price: 750.0,
    },
    {
      id: 3,
      name: 'Buffet Table',
      image: '/assets/buffet-table.jpg',
      description: 'A sleek buffet table with ample storage.',
      price: 850.0,
    },
    {
      id: 4,
      name: 'Bar Stool',
      image: '/assets/bar-stool.jpg',
      description: 'A modern bar stool for casual seating.',
      price: 499.0,
    },
    {
      id: 5,
      name: 'China Cabinet',
      image: '/assets/china-cabinet.jpg',
      description: 'An elegant cabinet to display your finest china.',
      price: 950.0,
    },
    {
      id: 6,
      name: 'Sideboard',
      image: '/assets/sideboard.jpg',
      description: 'A functional sideboard with a contemporary design.',
      price: 799.0,
    },
    {
      id: 7,
      name: 'Dining Bench',
      image: '/assets/dining-bench.jpg',
      description: 'A cozy bench for extra seating at the table.',
      price: 699.0,
    },
    {
      id: 8,
      name: 'Pendant Light',
      image: '/assets/pendant-light.jpg',
      description: 'A decorative pendant light for your dining room.',
      price: 599.0,
    },
    {
      id: 9,
      name: 'Wall Art',
      image: '/assets/wall-art.jpg',
      description: 'Beautiful wall art to enhance your dining room decor.',
      price: 399.0,
    },
  ];

  const handleAddToCart = (item) => {
    setCart([...cart, item]);
    alert(`${item.name} has been added to your cart!`);
  };

  return (
    <div className="dining-room-container">
      <h1 className="dining-room-title">Dining Room</h1>
      <div className="dining-room-grid">
        {diningRoomItems.map((item) => (
          <div key={item.id} className="dining-room-card">
            <img
              src={item.image}
              alt={item.name}
              className="dining-room-image"
            />
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p className="dining-room-price">Price: ${item.price.toFixed(2)}</p>
            <button
              className="dining-room-button"
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

export default DiningRoom;
