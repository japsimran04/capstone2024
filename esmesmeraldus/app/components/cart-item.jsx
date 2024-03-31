// CartItem.jsx
"use client";

import React, { useContext } from "react";
import { ShopContext } from "../context/shop-context";

const CartItem = ({ data }) => {
    const { id, productName, price, productImage } = data;
    const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);

    return (
        <div className="cart-item">
            <div className="cart-item-image-container">
                <img src={productImage} alt={productName} className="product-image" />
            </div>
            <div className="cart-item-details">
                <div className="cart-item-title">{productName}</div>
                <div className="cart-item-price">${price}</div>
                <div className="cart-item-quantity">
                    <button onClick={() => removeFromCart(id)}>-</button>
                    <span>{cartItems[id]}</span>
                    <button onClick={() => addToCart(id)}>+</button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
