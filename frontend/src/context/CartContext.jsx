import React, { createContext, useState, useContext } from 'react';

// 1. Create the Context
const CartContext = createContext();

// 2. Create the Provider Component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Add an item to the cart (or increase quantity if it already exists)
  const addToCart = (item, quantity = 1) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i
        );
      }
      return [...prevItems, { ...item, quantity }];
    });
  };

  // Remove an item entirely from the cart
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Update the quantity of a specific item
  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return; // Prevent setting quantity to 0 or negative
    setCartItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  // Clear the cart (used after a successful checkout)
  const clearCart = () => {
    setCartItems([]);
  };

  // Calculate the total price of all items in the cart
  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// 3. Create a custom hook for easy access to the cart context
export const useCart = () => {
  return useContext(CartContext);
};