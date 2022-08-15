import React from 'react';
import { CartProvider } from './CartContext';
import Main from './Main';
import Navbar from './Navbar';

export default function CartExercise() {
  return (
    <div className='component'>
      <h1>Cart Exercise</h1>
      <CartProvider>
        <Navbar />
        <Main />
      </CartProvider>
    </div>
  );
}
