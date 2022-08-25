import React, { useContext, useEffect, useRef, useState } from 'react';
import { OrderContext } from './OrderContext';

const OrderForm = () => {
  const { placeOrder, ordersList } = useContext(OrderContext);
  const [toppings, setToppings] = useState([]);
  const [size, setSize] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);
  const clientRef = useRef();
  const toppingRef = useRef();
  const addTopping = () => {
    if (toppingRef.current.value) {
      setToppings([...toppings, toppingRef.current.value]);
    }
  };
  const total = (size, toppings) => {
    if (size === 'small') return 10 + 2 * toppings.length;
    if (size === 'medium') return 12 + 2 * toppings.length;
    if (size === 'large') return 14 + 2 * toppings.length;
  };
  const changeSize = (e) => {
    setSize(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newOrder = {
      id: ordersList.length + 1,
      clientName: clientRef.current.value,
      size,
      toppings,
      total: total(size, toppings),
      status: 'Order Placed',
    };
    placeOrder(newOrder);
  };
  useEffect(() => {
    setTotalPrice(total(size, toppings));
  }, [size, toppings]);
  return (
    <div>
      <h1>New Order</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Client Name' ref={clientRef} />
        <div>
          <input type='text' placeholder='Add a topping' ref={toppingRef} />
          <button type='button' onClick={addTopping}>
            Add topping
          </button>
        </div>
        <ul>
          {toppings.map((topping) => (
            <li>{topping}</li>
          ))}
        </ul>
        <div onChange={changeSize}>
          <div>
            <label htmlFor=''>Small</label>
            <input type='radio' name='size' value={'small'} />
          </div>
          <div>
            <label htmlFor=''>Medium</label>
            <input type='radio' name='size' value={'medium'} />
          </div>
          <div>
            <label htmlFor=''>Large</label>
            <input type='radio' name='size' value={'large'} />
          </div>
        </div>
        <h3>Total: ${totalPrice}</h3>
        <button>Place Order</button>
      </form>
    </div>
  );
};

export default OrderForm;
