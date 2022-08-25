import React, { useContext } from 'react';
import { OrderContext } from './OrderContext';

const OrdersList = () => {
  const { ordersList, updateStatus } = useContext(OrderContext);
  return (
    <table>
      <th>Order ID</th>
      <th>Client Name</th>
      <th>Total</th>
      <th>Order Status</th>
      <th>Next Step</th>
      {ordersList.map((order) => (
        <tr key={order.id}>
          <td>{order.id}</td>
          <td>{order.clientName}</td>
          <td>{order.total}</td>
          <td>{order.status}</td>
          <td>
            <button onClick={() => updateStatus(order.id, order.status)}>
              Next Step
            </button>
          </td>
        </tr>
      ))}
    </table>
  );
};

export default OrdersList;
