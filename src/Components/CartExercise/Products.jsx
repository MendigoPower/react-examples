import React, { useEffect, useState } from "react";
import Product from './Product';
import axios from 'axios';

export default function Products() {

  const { dataIsOutdated, setDataIsOutdated } = props;

  const [post, setPost] = useState([])

  useEffect(() => {
    if (dataIsOutdated) {
      const url = 'https://fakestoreapi.com/products';
      axios.get(url).then((response) => {
        setPost(response.data);
      })
      setDataIsOutdated(false);
    }
  }, [dataIsOutdated, setDataIsOutdated])

  return (
    <div className='component'>
      <section>
        {post.map((twilson) => {
          return <Product twilson={twilson} key={twilson._id} />
        })}
        <h1>Product list</h1>
        <section
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)' }}>
          <Product
            product={{
              title: '',
              price: 0,
              image: '',
              description: 'Product Description',
            }}
          />
          <Product
            product={{
              title: 'Product Name',
              price: 0,
              image: '',
              description: 'Product Description',
            }}
          />
          <Product
            product={{
              title: 'Product Name',
              price: 0,
              image: '',
              description: 'Product Description',
            }}
          />
          <Product
            product={{
              title: 'Product Name',
              price: 0,
              image: '',
              description: 'Product Description',
            }}
          />
          <Product
            product={{
              title: 'Product Name',
              price: 0,
              image: '',
              description: 'Product Description',
            }}
          />
        </section>

      </section>
    </div>
  );
}
