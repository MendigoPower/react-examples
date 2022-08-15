import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

export default function Button() {
  return (
    <button
      style={{
        padding: '.5rem 1rem',
        width: '100%',
        borderRadius: '5px',
        fontSize: '1rem',
        fontWeight: 600,
        backgroundColor: 'hsl(158, 36%, 37%)',
        color: 'white',
      }}>
      <MdAddShoppingCart />
      Add to Cart
    </button>
  );
}
