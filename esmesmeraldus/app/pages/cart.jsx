"use client";

import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PRODUCTS } from "../data/products";
import { ShopContext } from "../context/shop-context";
import CartItem from "../components/cart-item.jsx";
import "../styles/cart.css";

const Cart = () => {
    const { cartItems, getTotalCartAmount } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();
    const navigate = useNavigate();

    return (
        <div className="cart-container"> 
            <h1 className="cart-title">Shopping Cart</h1>
            <hr className="line" />
            <div className="cart-items-setup">
                {PRODUCTS.map((Product) => {
                    if (cartItems[Product.id] !== 0) {
                        return <CartItem key={Product.id} data={Product} className="cart-item-line"/>;
                    }
                    return null;
                })}
            </div>
            {totalAmount > 0 ? (
                <div className="cart-summary">
                    <div className="subtotal-container">
                    <span className="subtotal-text">Subtotal:</span>
                    <span className="subtotal-number">${totalAmount}</span>
                    </div>
                    <div className="cart-actions">
                        <button className="checkout" onClick={() => navigate("/checkout")}>Checkout</button>
                        <button className="go-back-shopping" onClick={() => navigate("/shop")}>Continue Shopping</button>
                    </div>
                </div>
            ) : (
                <h1 className="empty-cart"> Your Cart is Empty</h1>
            )}
        </div>
    );
}

export default Cart;
