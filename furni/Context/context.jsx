import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [products] = useState([
    {
      id: 1,
      name: 'kruzo chair',
      price: 100,
      image: <img src="/react/public/images/Kruzo.png" alt="kruzo" />,
      count: 1
    },
    {
      id: 2,
      name: 'Ergonomic Chair',
      price: 75,
      image: <img src="/react/public/images/Ergonomic.png" alt="Ergonomic" />,
      count: 2
    },
    {
      id: 3,
      name: 'nordic chair',
      price: 75,
      image: <img src="/react/public/images/Nordic.png" alt="nordic" />,
      count: 3
    },
    {
      id: 4,
      name: 'sofa',
      price: 150,
      image: <img src="/react/public/images/sofa.png" alt="sofa" />,
      count: 4
  },
  {
      id: 5,
      name: 'wood chair',
      price: 50,
      image: <img src="/react/public/images/wood chair.png" alt="wood" />,
      count: 5
  },
  {
      id: 6,
      name: 'living corner',
      price: 250,
      image: <img src="/react/public/images/living.jpg" alt="living corner" />,
      count: 6
  },
  {
      id: 7,
      name: 'candle',
      price: 25,
      image: <img src="/react/public/images/candle.jpg" alt="candle" />,
      count: 7
  },
  {
      id: 8,
      name: 'comfe chair',
      price: 100,
      image: <img src="/react/public/images/comfe.jpg" alt="comfe" />,
      count: 8
  },
  {
      id: 9,
      name: 'm couch',
      price: 200,
      image: <img src="/react/public/images/mcouch.jpg" alt="m couch" />,
      count: 9
  },
  {
      id: 10,
      name: 'kitchen',
      price: 300,
      image: <img src="/react/public/images/kitchen.jpg" alt="kitchen" />,
      count: 10
  }
  ]);

  return (
    <DataContext.Provider value={{ products }}>
      {children}
    </DataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};