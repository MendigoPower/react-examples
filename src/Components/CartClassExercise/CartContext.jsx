import { Component, createContext } from 'react';

export const CartContext = createContext();

export class CartProvider extends Component {
  constructor() {
    super();
    this.state = {
      cartList: [],
    };
    this.addToCart = this.addToCart.bind(this);
    this.calculateTotal = this.calculateTotal.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }
  addToCart(newProduct) {
    const { cartList } = this.state;
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
        this.setState({ cartList: newCartList });
      } else {
        // not found in cart
        updatedProduct = { ...newProduct, quantity: 1 };
        this.setState({ cartList: [...cartList, updatedProduct] });
      }
    } else {
      // cart is empty
      this.setState({ cartList: [{ ...newProduct, quantity: 1 }] });
    }
  }

  calculateTotal() {
    return this.state.cartList.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  }
  removeItem(id) {
    const filteredList = this.state.cartList.filter((item) => item.id !== id);
    this.setState({ cartList: filteredList });
  }
  render() {
    return (
      <CartContext.Provider
        value={{
          cartList: this.state.cartList,
          addToCart: this.addToCart,
          calculateTotal: this.calculateTotal,
          removeItem: this.removeItem,
        }}>
        {this.props.children}
      </CartContext.Provider>
    );
  }
}
