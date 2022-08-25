import React from 'react';
import OrderProvider from './OrderContext';
import OrderForm from './OrderForm';
import OrdersList from './OrdersList';

const OrderPizza = () => {
  return (
    <OrderProvider>
      <div>
        <h1>OrderPizza</h1>
        <OrderForm />
        <OrdersList />
      </div>
    </OrderProvider>
  );
};

export default OrderPizza;
