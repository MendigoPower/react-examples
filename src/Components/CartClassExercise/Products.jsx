import React, { Component } from 'react';
import axios from 'axios';
import Product from './Product';

export default class Products extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      anotherProp: 'prop',
    };
  }
  componentDidMount() {
    axios
      .get('https://fakestoreapi.com/products/')
      .then((response) => this.setState({ products: response.data }));
  }
  render() {
    const parseProducts = this.state.products.map((product) => (
      <Product product={product} key={product.id} />
    ));
    return (
      <div>
        <section
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3,1fr)',
            gap: '1rem',
          }}>
          {parseProducts}
        </section>
      </div>
    );
  }
}
