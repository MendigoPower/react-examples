import React from 'react';
import Products from './Products';

export default function Product() {
  return (
    <div className='component'>
      <h1>{props.post.category}</h1>
      <img src='' alt='' style={{ width: '100%', height: '300px' }} />
      <h2>Price: $0</h2>
      <p>description</p>
      <button>Add to cart</button>
    </div>
  );
}
