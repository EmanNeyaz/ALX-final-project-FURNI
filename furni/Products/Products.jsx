import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';

const Products = () => {
  const { addToCart } = useContext(CartContext);
  const products = [
    // my  products data here
    {
      id: 1,
      name: 'kruxo chair',
      price: 100,
      image: <img src="/react/src/assets/images/Kruzo Chair.png" alt="kruzo" />,
      count: 1
    },
    {
        id: 2,
        name: 'Ergonomic Chair',
        price: 75,
        image: <img src="/react/src/assets/images/candle.jpg" alt="Ergonomic" />,
        count: 2
    },
    {
        id: 3,
        name: 'nordic chair',
        price: 75,
        image: <img src="/react/src/assets/Nordic CHAIR.png" alt="Nordic" />,
        count: 3
    },
    {
        id: 4,
        name: 'sofa',
        price: 150,
        image: <img src="/react/src/assets/sofa.png" alt="sofa" />,
        count: 4
    },
    {
        id: 5,
        name: 'wood chair',
        price: 50,
        image: <img src="/react/src/assets/wood chair.png" alt="wood" />,
        count: 5
    },
    {
        id: 6,
        name: 'living corner',
        price: 250,
        image: <img src="/react/src/assets/living corner.jpg" alt="living corner" />,
        count: 6
    },
    {
        id: 7,
        name: 'candle',
        price: 25,
        image: <img src="/react/src/assets/candle.jpg" alt="candle" />,
        count: 7
    },
    {
        id: 8,
        name: 'comfe chair',
        price: 100,
        image: <img src="/react/src/assets/comfe chair.jpg" alt="comfe" />,
        count: 8
    },
    {
        id: 9,
        name: 'm couch',
        price: 200,
        image: <img src="/react/src/assets/modern couch.jpg" alt="m couch" />,
        count: 9
    },
    {
        id: 10,
        name: 'kitchen',
        price: 300,
        image: <img src="/react/src/assets/kitchen.jpg" alt="kitchen" />,
        count: 10
    }
  ];

  return (
    <div>
      <h2>Products Component</h2>
      <div className='products d-flex flex-wrap justify-content-center'>
        {products.map((item) => (
          <div key={item.id} className='card m-2'>
            <img src={`/images/${item.image}`} alt="" className='card-img' style={{ width: "18rem" }} />
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