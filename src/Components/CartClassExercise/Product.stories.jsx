import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import './Product.css';

const Card = styled.div`
  display: grid;
  align-items: center;
  text-align: center;
  grid-template-columns: 1fr 1fr;
  border-radius: 10px;
  width: 450px;
  background-color: hsl(0, 0%, 100%);
  gap: 1rem;
  padding: 1rem;
  p {
    color: gray;
  }

  h1 {
    color: hsl(158, 36%, 27%);
  }

  .card--content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const ProductStorybook = () => {
  return (
    <Card>
      <img
        src='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
        alt=''
        style={{ width: '100%', height: '300px' }}
      />
      <div className='card--content'>
        <p>MEN'S CLOTHING</p>
        <h1>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem
          omnis, nemo qui blanditiis saepe laboriosam.
        </p>
        <h1>$148.34</h1>
        <Button label='Add to cart' type='add' />
      </div>
    </Card>
  );
};

export default {
  title: 'Cart-Exercise/Product/Card',
  component: ProductStorybook,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  parameters: {
    backgrounds: { default: 'hsl(158, 36%, 37%)' },
  },
};
