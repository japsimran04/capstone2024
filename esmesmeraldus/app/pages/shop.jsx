"use client";

import React from "react";
import { PRODUCTS } from "../data/products.js";
import { Product } from "../components/product.jsx";
import { Link } from "react-router-dom";
import "../Styles/Shop.css";

const Shop = () => {
  return (
    <div className="shop">
        <div className="shopTitle">
            <h1>Colombian Coffee</h1>
        </div>
        <div className="products">
            {PRODUCTS.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`}>
            <Product data={product}/>
            </Link>
        ))}
        </div>
    </div>
  );
}

export default Shop;