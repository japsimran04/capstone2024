import React from "react";
import { useParams } from "react-router-dom";
import { PRODUCTS } from "../data/products.js";

const IndividualProductPage = () => {
  const { id } = useParams(); // Get the product ID from the URL parameter
  const product = PRODUCTS.find((product) => product.id === id); // Find the product with the matching ID

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      {/* Add more product details, reviews, and add-to-cart functionality */}
    </div>
  );
};

export default IndividualProductPage;
