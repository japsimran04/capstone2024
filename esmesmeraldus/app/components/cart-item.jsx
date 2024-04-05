// CartItem.jsx
"use client";

import React, { useContext } from "react";
import { ShopContext } from "../context/shop-context";

const CartItem = ({ data }) => {
    const { id, productName, price, productImage } = data;
    const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);
    const itemDetails = cartItems[id];
    const capitalizeFirstLetter = (string) => {
        if (!string) return string;
        return string.charAt(0).toUpperCase() + string.slice(1);
      };
    
    return (
        <div className="cart-item">
            <div className="cart-item-image-container">
                <img src={productImage} alt={productName} className="product-image" />
            </div>
            <div className="cart-item-details">
                <div className="cart-item-title">{productName}</div>
                <div className="cart-item-price">${price.toFixed(2)}</div>
                {itemDetails && 
                <>
                    <div className="cart-item-beanType">{capitalizeFirstLetter(itemDetails.beanType)}</div>
                    <div className="cart-item-quantity">
                        <button onClick={() => removeFromCart(id)}>-</button>
                        <span>{itemDetails.quantity}</span>
                        <button onClick={() => addToCart(id, itemDetails.beanType, 1)}>+</button>
                    </div>
                </>
                }
            </div>
        </div>
    );
};


export default CartItem;
