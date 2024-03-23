// CartItem.jsx
"use client";

import React, { useContext } from "react";
import { ShopContext } from "../context/shop-context";

const CartItem = ({ data, className }) => {
    const { id, productName, price, productImage } = data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);

    return (
        <div className={`cartItem ${className}`}> {/* className is applied here */}
            <img src={productImage} alt={productName} className="productImage" />
            <div className="description">
                <p><b>{productName}</b></p>
                <p>${price}</p>
                <div className="countHandler">
                    <button onClick={() => removeFromCart(id)}>-</button>
                    <input
                        type="number"
                        value={cartItems[id]}
                        onChange={(e) => updateCartItemCount(id, Number(e.target.value))}
                    />
                    <button onClick={() => addToCart(id)}>+</button>
                </div>
            </div>
        </div>
    );
}

export default CartItem;
