import { createContext, useState } from 'react';

export const OrderContext = createContext(null);

const OrderProvider = ({ children }) => {
  const statusList = [
    'Order Placed',
    'Prepping pizza',
    'Pizza in the oven',
    'Ready to pick up',
  ];
  const [ordersList, setOrdersList] = useState([]);
  const placeOrder = (newOrder) => {
    setOrdersList([...ordersList, newOrder]);
  };
  const updateStatus = (orderId, orderStatus) => {
    const statusId = statusList.indexOf(orderStatus);
    const updatedOrder = {
      ...ordersList[orderId - 1],
      status: statusList[statusId + 1],
    };
    setOrdersList(
      ordersList.map((order) => {
        if (order.id === updatedOrder.id) {
          return updatedOrder;
        }
        return order;
      })
    );
  };
  return (
    <OrderContext.Provider value={{ ordersList, placeOrder, updateStatus }}>
      {children}
    </OrderContext.Provider>
  );
};
export default OrderProvider;
