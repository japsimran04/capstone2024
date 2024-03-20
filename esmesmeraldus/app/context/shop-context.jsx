"use client";

import React, { createContext, useState } from "react";
import { PRODUCTS } from "../data/products";

export const ShopContext = React.createContext();

const getDefaultCart = () => {
    let cart = {};
    for (let i = 0; i < PRODUCTS.length; i++) {
        cart[i] = 0;
    }
    return cart;
}

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
                totalAmount += cartItems[item] * itemInfo.price;
            }
        }

        return totalAmount;
    };

    const addToCart = (productId) => {
        setCartItems((prev) => ({...prev, [productId]: prev[productId] + 1}));
    };

    const removeFromCart = (productId) => {
        setCartItems((prev) => ({...prev, [productId]: prev[productId] - 1}));
    };

    const updateCartItemCount = (newItemCount, itemId) => {
        setCartItems((prev) => {
            const updatedCartItems = { ...prev };
            const prevItemCount = prev[itemId];
            const difference = newItemCount - prevItemCount;

            if (difference !== 0) {
                const productPrice = PRODUCTS.find((product) => product.id === Number(itemId)).price;
                const additionalAmount = difference * productPrice;
                const totalAmount = getTotalCartAmount() + additionalAmount;
                if (totalAmount >= 0) {
                    updatedCartItems[itemId] = newItemCount; // Update the item count
                }
            }
            return updatedCartItems;
        });
    };

    const contextValue = {
        cartItems, 
        addToCart, 
        removeFromCart, 
        updateCartItemCount, 
        getTotalCartAmount,
    };
    
    return (
        <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
    )
}

export default ShopContextProvider;
