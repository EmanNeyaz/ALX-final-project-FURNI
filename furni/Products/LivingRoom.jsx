import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LivingRoom.css'; 

function LivingRoom() {
  const [cart, setCart] = useState([]); // State to track cart items

  const livingRoomItems = [
    {
      id: 1,
      name: 'Sofa Set',
      image: '/assets/sofa-set.jpg',
      description: 'A luxurious and comfortable sofa set for your living room.',
      price: 899.0,
    },
    {
      id: 2,
      name: 'Coffee Table',
      image: '/assets/coffee-table.jpg',
      description: 'A modern coffee table to complement your seating area.',
      price: 499.0,
    },
    {
      id: 3,
      name: 'TV Stand',
      image: '/assets/tv-stand.jpg',
      description: 'A stylish TV stand with ample storage space.',
      price: 699.0,
    },
    {
      id: 4,
      name: 'Recliner Chair',
      image: '/assets/recliner-chair.jpg',
      description: 'A cozy recliner chair for ultimate relaxation.',
      price: 799.0,
    },
    {
      id: 5,
      name: 'Bookshelf',
      image: '/assets/bookshelf.jpg',
      description: 'A spacious bookshelf to organize your books and decor.',
      price: 599.0,
    },
    {
      id: 6,
      name: 'Accent Chair',
      image: '/assets/accent-chair.jpg',
      description: 'An elegant accent chair to enhance your living room decor.',
      price: 649.0,
    },
    {
      id: 7,
      name: 'Side Table',
      image: '/assets/side-table.jpg',
      description: 'A versatile side table with a sleek design.',
      price: 299.0,
    },
    {
      id: 8,
      name: 'Rug',
      image: '/assets/rug.jpg',
      description: 'A soft and stylish rug to tie the room together.',
      price: 399.0,
    },
    {
      id: 9,
      name: 'Lamp',
      image: '/assets/lamp.jpg',
      description: 'A decorative lamp to add a warm ambiance.',
      price: 199.0,
    },
  ];

  const handleAddToCart = (item) => {
    setCart([...cart, item]);
    alert(`${item.name} has been added to your cart!`);
  };

  return (
    <div className="living-room-container">
      <h1 className="living-room-title">Living Room</h1>
      <div className="living-room-grid">
        {livingRoomItems.map((item) => (
          <div key={item.id} className="living-room-card">
            <img
              src={item.image}
              alt={item.name}
              className="living-room-image"
            />
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p className="living-room-price">Price: ${item.price.toFixed(2)}</p>
            <button
              className="living-room-button"
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

export default LivingRoom;
