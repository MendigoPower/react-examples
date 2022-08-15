import { useState } from 'react';
import { createContext } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addToCart = (newProduct) => {
    //check if cart is not empty
    if (cartList.length > 0) {
      let updatedProduct;
      const found = cartList.find((item) => item.id === newProduct.id);
      if (found) {
        // if product was found in cart
        updatedProduct = { ...found, quantity: found.quantity + 1 };
        const newCartList = cartList.map((item) => {
          if (item.id === updatedProduct.id) {
            return updatedProduct;
          } else {
            return item;
          }
        });
        setCartList(newCartList);
      } else {
        // not found in cart
        updatedProduct = { ...newProduct, quantity: 1 };
        setCartList([...cartList, updatedProduct]);
      }
    } else {
      // cart is empty
      setCartList([{ ...newProduct, quantity: 1 }]);
    }
  };
  const calculateTotal = () => {
    return cartList.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };
  const removeItem = (id) => {
    const filteredList = cartList.filter((item) => item.id !== id);
    setCartList(filteredList);
  };
  return (
    <CartContext.Provider
      value={{ cartList, addToCart, calculateTotal, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};
