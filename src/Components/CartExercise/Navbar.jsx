import React from 'react';
import { useContext } from 'react';
import { CartContext } from './CartContext';

export default function Navbar() {
  const { state } = useContext(CartContext);
  return (
    <div className='component'>
      <h1>Navbar</h1>
      <div style={{ display: 'flex', justifyContent: 'end', gap: '1rem' }}>
        <h2>Cart</h2>
        <h2>{state.cart.length}</h2>
      </div>
    </div>
  );
}
