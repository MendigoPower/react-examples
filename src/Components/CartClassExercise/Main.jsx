import React, { Component } from 'react';
import Products from './Products';
import CartList from './CartList';

export default class Main extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '3fr 1fr',
            paddingTop: '150px',
          }}>
          <Products />
          <CartList />
        </div>
      </div>
    );
  }
}
