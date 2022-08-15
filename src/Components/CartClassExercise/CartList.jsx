import React, { Component } from 'react';
import { CartContext } from './CartContext';
import CartItem from './CartItem';
import { MdOutlineExpandMore } from 'react-icons/md';

export default class CartList extends Component {
  constructor() {
    super();
    this.state = {
      toggleCart: true,
      cartList: [],
    };
  }

  render() {
    const parseCartList = this.context.cartList.map((item) => (
      <CartItem item={item} key={item.id} />
    ));
    return (
      <div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            height: 'fit-content',
          }}>
          <h1>Cart list</h1>
          <div
            style={{
              backgroundColor: 'white',
              padding: '.5rem',
              borderRadius: '5px',
            }}
            onClick={() =>
              this.setState({ toggleCart: !this.state.toggleCart })
            }>
            <MdOutlineExpandMore />
          </div>
        </div>
        {this.state.toggleCart && (
          <div>
            <ul
              style={{
                display: 'grid',
                gap: '1rem',
                padding: '2rem 1rem',
              }}>
              {this.context.cartList.length > 0 ? (
                parseCartList
              ) : (
                <h2>No items in the cart yet.</h2>
              )}
            </ul>
            <h2>Total: ${this.context.calculateTotal().toFixed(2)}</h2>
          </div>
        )}
      </div>
    );
  }
}
CartList.contextType = CartContext;
