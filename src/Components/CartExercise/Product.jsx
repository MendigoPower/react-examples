import React from 'react';
import { useContext } from 'react';
import { CartContext } from './CartContext';

export default function Product(props) {
  const { product } = props;
  const { addToCart } = useContext(CartContext);
  const handleClick = () => {
    addToCart(product);
  };
  return (
    <div className='component'>
      <h1>{product.title}</h1>
      <img
        src={product.image}
        alt=''
        style={{ width: '100%', height: '300px' }}
      />
      <h2>Price: ${product.price}</h2>
      <p>{product.description}</p>
      <button onClick={handleClick}>Add to cart</button>
    </div>
  );
}
