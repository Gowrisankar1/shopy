import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";

/**
 * Displays the cart items and calculates the total price.
 * 
 * @param {Function} setCartItems - Updates the cart items in the parent component.
 * @param {Array} cartItems - The current items in the cart.
 */
const CartPage = ({ setCartItems, cartItems }) => {
  const [totalPrice, setTotalPrice] = useState(0);

  // Update the quantity of a specific item in the cart
  const updateCartQuantity = (id, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.key === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  useEffect(() => {
    // Calculate the total price whenever cartItems change
    const newTotalPrice = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    setTotalPrice(newTotalPrice.toFixed(2));
  }, [cartItems]); // Dependency array ensures this runs when cartItems change

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p> // Message when the cart is empty
      ) : (
        <div>
          {/* Render each item in the cart */}
          {cartItems.map((item) => (
            <CartItem
              key={item.key}
              item={item}
              setCartItems={setCartItems}
              updateCartQuantity={updateCartQuantity}
            />
          ))}
          {/* Display the total price */}
          <p className="text-xl font-semibold mt-4">Total: ₹{totalPrice}</p>
        </div>
      )}
    </div>
  );
};

export default CartPage;

