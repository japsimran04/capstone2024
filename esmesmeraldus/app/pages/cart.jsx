"use client";

import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PRODUCTS } from "../data/products";
import { ShopContext } from "../context/shop-context";
import CartItem from "../components/cart-item.jsx";
import "../Styles/Cart.css";

const Cart = () => {
    const { cartItems, getTotalCartAmount } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();

    const navigate = useNavigate();

    return (
        <div className="Cart">
            <div>
                <h1>Cart</h1>
            </div>
            <div className="cartItems">
                {PRODUCTS.map((Product) => {
                    if (cartItems[Product.id] !== 0) {
                        return <CartItem data ={Product}/>
                    }
                })}
            </div>
        {totalAmount > 0 ? (
            <div className="checkout">
                <p> Subtotal: ${totalAmount}</p>
                <button onClick={() => navigate("/shop")}>Back to Shopping</button>
                <button>Checkout</button>
            </div>
        ) : (
            <h1> Your Cart is Empty</h1>
        )}
        </div>
    );
}

export default Cart;