import { useReducer, useState } from 'react';
import { createContext } from 'react';
import { ADD_TO_CART, REMOVE_ITEM, RESET_CART } from './actions';

export const CartContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const product = action.payload;
      console.log('adding to cart', product);
      if (state.cart.length === 0)
        // if cart is empty, return cart with 1 product
        return { cart: [{ ...product, quantity: 1 }] };
      // check if product is already in the cart
      const found = state.cart.find((item) => item.id === product.id);
      // if not, add the product to the list
      if (!found) return { cart: [...state.cart, { ...product, quantity: 1 }] };
      // if found, update quantity to increase by 1
      const newCartList = state.cart.map((item) => {
        if (item.id === found.id) {
          return { ...found, quantity: found.quantity + 1 };
        } else {
          return item;
        }
      });
      return { cart: newCartList };
    case REMOVE_ITEM:
      const filteredCart = state.cart.filter(
        (item) => item.id !== action.payload
      );
      return { cart: filteredCart };
    case RESET_CART:
      return { cart: [] };
    default:
      console.log('no action found');
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { cart: [] });
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
    return state.cart.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };
  const removeItem = (id) => {
    const filteredList = cartList.filter((item) => item.id !== id);
    setCartList(filteredList);
  };
  return (
    <CartContext.Provider value={{ state, dispatch, calculateTotal }}>
      {children}
    </CartContext.Provider>
  );
};
