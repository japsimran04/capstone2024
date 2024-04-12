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

    const cartProductComponents = PRODUCTS.filter(product => 
        cartItems[product.id] && cartItems[product.id].quantity > 0
    ).map(product => (
        <CartItem key={product.id} data={product} />
    ));


    return (
        <div className="cart-container"> 
            <h1 className="cart-title">Shopping Cart</h1>
            <hr className="line" />
            {totalAmount > 0 ? (
                <>
                    <div className="cart-titles">
                        <span className="cart-item-title product">Product</span>
                        <span className="cart-item-title quantity">Quantity</span>
                        <span className="cart-item-title price">Price</span>
                    </div>
                    <div className="cart-items-setup">
                        {cartProductComponents}
                    </div>
                    <div className="cart-summary">
                        <div className="subtotal-container">
                            <span className="subtotal-text">Subtotal:</span>
                            <span className="subtotal-number">${totalAmount.toFixed(2)}</span>
                        </div>
                        <div className="cart-actions">
                            <button className="go-back-shopping" onClick={() => navigate("/shop")}>Continue Shopping</button>
                            <button className="checkout" onClick={() => navigate("/checkout")}>Checkout</button>
                        </div>
                    </div>
                </>
            ) : (
                <div>
                <h1 className="empty-cart">Your Cart is Empty</h1>
                <button className="go-back-shopping" onClick={() => navigate("/shop")}>Continue Shopping</button>
                </div>
            )}
        </div>
    );
}

export default Cart;
