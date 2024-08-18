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
    <div className="flex flex-col sm:flex-row justify-between items-center py-4 border-b">
      <div className="flex items-center w-full sm:w-auto">
        <img
          src={item.image}
          alt={item.name}
          className="w-24 h-24 sm:w-16 sm:h-16 object-cover rounded"
        />
        <div className="ml-4 flex flex-col">
          <h4 className="text-lg sm:text-base font-semibold">{item.name}</h4>
          <p className="text-gray-600 text-sm sm:text-base">₹{item.price}</p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center mt-4 sm:mt-0">
        <select
          value={item.quantity}
          onChange={handleQuantityChange}
          className="border border-gray-300 rounded p-2 mr-4 mb-2 sm:mb-0"
        >
          {[...Array(10).keys()].map((i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
        <button
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition"
          onClick={() => removeFromCart(item.key)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
