import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ cartCount }) => {
  return (
    <nav className="bg-gray-800 text-white p-4 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-xl font-bold">
          Shop
        </Link>
        <Link to="/cart" className="relative">
          Cart
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full px-2">
              {cartCount}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
