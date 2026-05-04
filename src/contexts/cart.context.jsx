import { useState, useEffect, createContext } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const existingItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);
  if (existingItem) {
    return cartItems.map((cartItem) => {
      return cartItem.id === existingItem.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
    });
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
}

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => { },
  cartItems: [],
  addItemToCart: () => { },
  cartCount: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  useEffect(() => {
    const currentCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    setCartCount(currentCount);
  }, [cartItems]);
  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  }
  const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
