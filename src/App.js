import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductListPage from "./components/ProductListPage";
import CartPage from "./components/CartPage";
const App = () => {
  const [cartItems, setCartItems] = useState([]);
  return (
    <Router>
      <Navbar cartCount={cartItems.length} />

      <Routes>
        <Route
          path="/"
          element={<ProductListPage setCartItems={setCartItems} />}
        />
        <Route
          path="/cart"
          element={
            <CartPage setCartItems={setCartItems} cartItems={cartItems} />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
