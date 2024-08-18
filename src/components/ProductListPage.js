import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

/**
 * Fetches and displays a list of products from Firestore.
 * 
 * @param {Function} setCartItems - Updates the cart items in the parent component.
 */
const ProductListPage = ({ setCartItems }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      const dataArray = querySnapshot.docs.map((doc) => doc.data());
      setProducts(dataArray);
    };
    fetchData();
  }, []); // Fetch products once on component mount

  return (
    <div
      style={{ backgroundImage: `url('./public/images/background.jpg')` }} // Background image for the page
      className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 p-8" // Grid layout for product cards
    >
      {products.map((product, index) => (
        <ProductCard
          key={index} // Unique key for each product card
          product={product} // Pass product data to ProductCard
          setCartItems={setCartItems} // Handle adding product to the cart
        />
      ))}
    </div>
  );
};

export default ProductListPage;
