import React from "react";

/**
 * Displays product details and allows adding the product to the cart.
 * 
 * @param {Object} product - The product details.
 * @param {Function} setCartItems - Updates the cart items in the parent component.
 * @param {string|number} key - Unique identifier for the product.
 */
const ProductCard = ({ product, setCartItems, key }) => {
  const addToCart = () => {
    // Add a unique key to the product if not provided
    const productWithKey = { ...product, key: key || Date.now() };
    // Add the product to the cart
    setCartItems((prevItems) => [...prevItems, productWithKey]);
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
        className="bg-blue-500 text-white py-2 px-4 rounded mt-4 hover:bg-blue-600 transition"
        onClick={addToCart}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
