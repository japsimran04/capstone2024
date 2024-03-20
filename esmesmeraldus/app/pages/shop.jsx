"use client";

import React from "react";
import { PRODUCTS } from "../data/products.js";
import { Product } from "../components/product.jsx";
import "../Styles/Shop.css";

const Shop = () => {
  return (
    <div className="shop">
        <div className="shopTitle">
            <h1>Esmeraldus Shop</h1>
        </div>
        <div className="products">
            {PRODUCTS.map((product) => (
            <Product data={product}/>
        ))}
        </div>
    </div>
  );
}

export default Shop;