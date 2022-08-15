import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Product from './Product';

export default function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products/')
      .then((response) => setProducts(response.data));
  }, []);
  const parseProducts = products.map((product) => (
    <Product product={product} key={product.id} />
  ));
  return (
    <div className='component'>
      <h1>Product list</h1>
      <section
        style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)' }}>
        {parseProducts}
      </section>
    </div>
  );
}
