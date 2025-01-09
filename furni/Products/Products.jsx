import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';

const products = [
  {
    id: 1,
    name: 'kruzo chair',
    price: 100,
    image: '/react/src/assets/images/Kruzo Chair.png',
    count: 1
  },
  {
    id: 2,
    name: 'Ergonomic Chair',
    price: 75,
    image: '/react/src/assets/images/Ergonomic Chair.png',
    count: 2
  },
  {
    id: 3,
    name: 'nordic chair',
    price: 75,
    image: '/react/src/assets/images/Nordic Chair.png',
    count: 3
  },
  {
    id: 10,
    name: 'kitchen',
    price: 300,
    image: '/react/src/assets/images/kitchen.jpg',
    count: 10
  }
];

const Products = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <h2>Products Component</h2>
      <div className='products d-flex flex-wrap justify-content-center'>
        {products.map((item) => (
          <div key={item.id} className='card m-2'>
            <img src={item.image} alt={item.name} className='card-img' style={{ width: "18rem", height:"18rem" }} />
            <div className='card-body'>
              <h3>{item.name}</h3>
              <span>{item.price} $</span>
            </div>
            <button className='btn btn-success m-2' onClick={() => addToCart(item)}>Add to cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;