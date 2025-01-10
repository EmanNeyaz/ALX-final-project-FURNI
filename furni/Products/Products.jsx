import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import './Products.css';
import softs from '../../assets/images/softs.jpg';
import candle from '../../assets/images/candle.jpg';
import comfe from '../../assets/images/comfe.jpg';
import mcouch from '../../assets/images/mcouch.jpg';
import kitchen from '../../assets/images/kitchen.jpg';
import couch from '../../assets/images/couch2.jpg';
import bedroom from '../../assets/images/bedroom.jpg';
import Table from '../../assets/images/table (1).jpg';
import Living from '../../assets/images/living.jpg';
import Mirror from '../../assets/images/mirorr.jpg';
import Office from '../../assets/images/office.png';
import table from '../../assets/images/table (10).jpg';

/********************************************** */
const products = [
  {
    id: 1,
    name: 'soft couch',
    price: 100,
    image:  softs,
    count: 1
  },
  {
    id: 2,
    name: 'Comfortable Chair',
    price: 75,
    image: comfe,
    count: 2
  },
  {
    id: 3,
    name: 'Red couch',
    price: 100,
    image: couch,
    count: 3
  },
  {
    id: 4,
    name: 'Bedroom',
    price: 450,
    image: bedroom,
    count: 4
},
{
    id: 5,
    name: 'Living corner',
    price: 250,
    image: Living,
    count: 5
},
{
    id: 6,
    name: 'modern couch',
    price: 150,
    image: mcouch,
    count: 6
},
{
    id: 7,
    name: 'Table',
    price: 150,
    image: Table,
    count: 7
},
{
    id: 8,
    name: 'Table',
    price: 150,
    image: table,
    count: 8
},
{
    id: 9,
    name: 'Kitchen',
    price: 300,
    image: kitchen,
    count: 9
},

  {
    id: 10,
    name: 'office Lamp',
    price: 50,
    image: Office,
    count: 10
  },
  {
    id: 11,
    name: 'candle',
    price: 25,
    image: candle,
    count: 11
},
{
  id: 12,
  name: 'Mirror',
  price: 25,
  image: Mirror,
  count: 12
}





];
//****************************************************** */
const Products = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className=' '>
      <h2>Our Products </h2>
      <div className='products d-flex flex-wrap justify-content-center'>
        {products.map((item) => (
          <div key={item.id} className='card m-2'>
            <img src={item.image} alt={item.name} className='card-img' style={{ width: "20rem", height:"" }} />
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