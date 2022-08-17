import React, { Component } from 'react';
import Navbar from './Navbar';
import Main from './Main';
import { CartProvider } from './CartContext';
import './index.css';

export default class CartClassExercise extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: 'hsl(30, 38%, 92%)',
          fontFamily: 'Montserrat',
        }}>
        <CartProvider>
          <Navbar />
          <Main />
        </CartProvider>
      </div>
    );
  }
}
