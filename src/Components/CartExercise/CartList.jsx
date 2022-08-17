import React from 'react';
import { useContext } from 'react';
import { RESET_CART } from './actions';
import { CartContext } from './CartContext';
import CartItem from './CartItem';

export default function CartList() {
  const { state, calculateTotal, dispatch } = useContext(CartContext);
  const parseCartList = state.cart.map((item, index) => (
    <CartItem item={item} key={index} />
  ));
  return (
    <div className='component'>
      <h1>Cart list</h1>
      <ul>{parseCartList}</ul>
      Total: ${calculateTotal()}
      <button onClick={() => dispatch({ type: RESET_CART })}>Reset Cart</button>
    </div>
  );
}
