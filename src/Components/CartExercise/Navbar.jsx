import React from 'react';
import { useContext } from 'react';
import { CartContext } from './CartContext';

export default function Navbar() {
  const { cartList } = useContext(CartContext);
  return (
    <div className='component'>
      <h1>Navbar</h1>
      <div style={{ display: 'flex', justifyContent: 'end', gap: '1rem' }}>
        <h2>Cart</h2>
        <h2>{cartList.length}</h2>
      </div>
    </div>
  );
}
