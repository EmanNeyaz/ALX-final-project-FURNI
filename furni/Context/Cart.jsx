import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity, getTotalPrice } = useContext(CartContext);

  return (
    <div className='cart container'>
      <h2>Cart</h2>
      <table className='table container'>
        <thead>
          <tr>
            <th className='border p-2'>Product</th>
            <th className='border p-2'>Price</th>
            <th className='border p-2'>Quantity</th>
            <th className='border p-2'>Total</th>
            <th className='border p-2'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td className='border p-2'>{item.name}</td>
              <td className='border p-2'>{item.price} $</td>
              <td className='border p-2'>
                <button className='btn btn-secondary' onClick={() => decreaseQuantity(item.id)}>-</button>
                {item.quantity}
                <button className='btn btn-secondary' onClick={() => increaseQuantity(item.id)}>+</button>
              </td>
              <td className='border p-2'>{item.price * item.quantity} $</td>
              <td className='border p-2'>
                <button className='btn btn-danger' onClick={() => removeFromCart(item.id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Total: {getTotalPrice()} $</h3>
    </div>
  );
};

export default Cart;