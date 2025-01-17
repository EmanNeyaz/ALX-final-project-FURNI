import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './LivingRoom.css'; 
import { CartContext } from '../Context/CartContext'; 
import sofaSet from '../../assets/sofa-set.jpg';
import coffeeTable from '../../assets/coffee-table.jpg';
import tvStand from '../../assets/tv-stand.jpg';
import reclinerChair from '../../assets/recliner-chair.jpg';
import bookshelf from '../../assets/bookshelf.jpg';
import accentChair from '../../assets/accent-chair.jpg';
import sideTable from '../../assets/side-table.jpg';
import rug from '../../assets/rug.jpg';
import lamp from '../../assets/lamp.jpg';


function LivingRoom() {
  const { addToCart } = useContext(CartContext);  // State to track cart items

  const livingRoomItems = [
    {
      id: 1,
      name: 'Sofa Set',
      image: sofaSet,
      description: 'A luxurious and comfortable sofa set for your living room.',
      price: 899.0,
    },
    {
      id: 2,
      name: 'Coffee Table',
      image: coffeeTable,
      description: 'A modern coffee table to complement your seating area.',
      price: 499.0,
    },
    {
      id: 3,
      name: 'TV Stand',
      image: tvStand,
      description: 'A stylish TV stand with ample storage space.',
      price: 699.0,
    },
    {
      id: 4,
      name: 'Recliner Chair',
      image: reclinerChair,
      description: 'A cozy recliner chair for ultimate relaxation.',
      price: 799.0,
    },
    {
      id: 5,
      name: 'Bookshelf',
      image: bookshelf,
      description: 'A spacious bookshelf to organize your books and decor.',
      price: 599.0,
    },
    {
      id: 6,
      name: 'Accent Chair',
      image: accentChair,
      description: 'An elegant accent chair to enhance your living room decor.',
      price: 649.0,
    },
    {
      id: 7,
      name: 'Side Table',
      image: sideTable,
      description: 'A versatile side table with a sleek design.',
      price: 299.0,
    },
    {
      id: 8,
      name: 'Rug',
      image: rug,
      description: 'A soft and stylish rug to tie the room together.',
      price: 399.0,
    },
    {
      id: 9,
      name: 'Lamp',
      image: lamp,
      description: 'A decorative lamp to add a warm ambiance.',
      price: 199.0,
    },
  ];

  const handleAddToCart = (item) => {
    addToCart(item);
    
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
