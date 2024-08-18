import React from "react";

/**
 * Displays a single cart item with options to update quantity and remove the item.
 * 
 * @param {Object} item - The cart item details.
 * @param {Function} updateCartQuantity - Updates the quantity of the item in the cart.
 * @param {Function} setCartItems - Updates the cart items in the parent component.
 */
const CartItem = ({ item, updateCartQuantity, setCartItems }) => {
  // Handle quantity change
  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    updateCartQuantity(item.key, newQuantity);
  };

  // Remove item from cart
  const removeFromCart = (keyid) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.key !== keyid));
  };

  return (
    <div className="flex justify-between items-center py-4 border-b">
      <div className="flex items-center">
        <img
          src={item.image}
          alt={item.name}
          className="w-16 h-16 object-cover rounded"
        />
        <div className="ml-4">
          <h4 className="text-lg">{item.name}</h4>
          <p className="text-gray-600">₹{item.price}</p>
        </div>
      </div>
      <div className="flex items-center">
        <select
          value={item.quantity}
          onChange={handleQuantityChange}
          className="border border-gray-300 rounded p-1 mr-4"
        >
          {[...Array(10).keys()].map((i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
        <button
          className="bg-red-500 text-white py-1 px-4 rounded hover:bg-red-600 transition"
          onClick={() => removeFromCart(item.key)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
