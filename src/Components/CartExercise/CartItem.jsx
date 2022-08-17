import React from 'react';
import { useContext } from 'react';
import { REMOVE_ITEM } from './actions';
import { CartContext } from './CartContext';

export default function CartItem(props) {
  const { dispatch } = useContext(CartContext);
  const { item } = props;
  return (
    <li style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr' }}>
      <div>
        <button
          onClick={() => dispatch({ type: REMOVE_ITEM, payload: item.id })}>
          X
        </button>
        <span>{item.title}</span>
      </div>
      <span>{item.quantity}</span>
      <span>${item.price}</span>
    </li>
  );
}
