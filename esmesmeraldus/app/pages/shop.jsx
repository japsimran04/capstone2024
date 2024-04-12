import React from "react";
import { PRODUCTS } from "../data/products.js";
import { Product } from "../components/product.jsx";
import { Link } from "react-router-dom";
import "../styles/shop.css";

const Shop = () => {
  return (
    <div className="shop-container">
      <div className="shopTitle">
        <h1>Colombian Coffee</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => (
          <div className="shop-item" key={product.id}>
            <Link to={`/product/${product.id}`} className="shop-item-link">
              <Product data={product} />
            </Link>
            <h2 className="shop-item-title">{product.title}</h2>
            <p className="shop-item-description">{product.description}</p>
            <p className="shop-item-price">${product.price}</p>
            <Link to={`/product/${product.id}`} className="shop-item-button">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;