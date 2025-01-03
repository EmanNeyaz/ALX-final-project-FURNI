
import React from 'react';

const Cart = () => {
  return (
    <table className='table container'>
        <thead>
            <tr>
                <th className='border p-2 '>Product</th>
                <th className='border p-2'>Price</th>
                <th className='border p-2'>Quantity</th>
                <th className='border p-2'>Total</th>
                <th className='border p-2'>Remove</th>
            </tr>
        </thead>
      
    </table>
  );
};

export default Cart;