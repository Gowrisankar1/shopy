import React, { useState } from "react";

/**
 * Displays product details and allows adding the product to the cart.
 * 
 * @param {Object} product - The product details.
 * @param {Function} setCartItems - Updates the cart items in the parent component.
 * @param {string|number} key - Unique identifier for the product.
 */
const ProductCard = ({ product, setCartItems, key }) => {
  const [addedToCart, setAddedToCart] = useState(false);
  const [message, setMessage] = useState("");

  const addToCart = () => {
    setCartItems((prevItems) => {
      const isAlreadyInCart = prevItems.some(item => item.key === (key || product.id));
      if (isAlreadyInCart) {
        setMessage("This item is already in your cart.");
        setAddedToCart(true);
        return prevItems; // Return the existing items without adding again
      }
      
      // Add a unique key to the product if not provided
      const productWithKey = { ...product, key: key || Date.now() };
      setAddedToCart(true);
      setMessage(""); // Clear any previous message
      return [...prevItems, productWithKey];
    });
  };

  return (
    <div className="bg-white border p-4 rounded-lg shadow-lg">
      {/* Product image */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-lg"
      />
      {/* Product name */}
      <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
      {/* Product description */}
      <p className="text-gray-600">{product.description}</p>
      {/* Product price */}
      <p className="font-bold mt-2">₹{product.price}</p>
      {/* Add to cart button */}
      <button
        className={`bg-blue-500 text-white py-2 px-4 rounded mt-4 hover:bg-blue-600 transition ${addedToCart ? 'opacity-50 cursor-not-allowed' : ''}`}
        onClick={addToCart}
        disabled={addedToCart} // Disable button if item is already added
      >
        {addedToCart ? 'Added to Cart' : 'Add to Cart'}
      </button>
      {/* Message */}
      {message && <p className="mt-2 text-red-500">{message}</p>}
    </div>
  );
};

export default ProductCard;
