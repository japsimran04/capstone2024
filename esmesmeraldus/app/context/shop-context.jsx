"use client";

import React, { createContext, useState } from "react";
import { PRODUCTS } from "../data/products";

export const ShopContext = createContext();

// Adjust getDefaultCart to initialize with more detailed objects if needed
const getDefaultCart = () => {
    let cart = {};
    for (let product of PRODUCTS) {
        cart[product.id] = { quantity: 0, beanType: 'Whole' }; // Default to 'whole' or any preferred default
    }
    return cart;
};

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item].quantity > 0) {
                let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
                totalAmount += cartItems[item].quantity * itemInfo.price;
            }
        }
        return totalAmount;
    };

    const addToCart = (productId, beanType, quantity = 1) => {
        setCartItems((prev) => {
            const currentItem = prev[productId];
            // If already present, update quantity and bean type, otherwise add new
            return {
                ...prev,
                [productId]: {
                    quantity: (currentItem?.quantity || 0) + quantity,
                    beanType: beanType,
                },
            };
        });
    };

    const removeFromCart = (productId) => {
        setCartItems((prev) => {
            const currentItem = prev[productId];
            const newQuantity = currentItem.quantity - 1 > 0 ? currentItem.quantity - 1 : 0;
            // If the item's quantity goes to 0, you might want to remove it or reset to default
            return {
                ...prev,
                [productId]: { ...currentItem, quantity: newQuantity },
            };
        });
    };

    // Update to handle the object structure of cartItems
    const updateCartItemCount = (newItemCount, itemId, beanType) => {
        setCartItems((prev) => {
            if (newItemCount !== prev[itemId].quantity) {
                const updatedCartItems = { ...prev };
                updatedCartItems[itemId] = {
                    quantity: newItemCount,
                    beanType: beanType || prev[itemId].beanType, // Preserve bean type if not passed
                };
                return updatedCartItems;
            }
            return prev;
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
    );
};

export default ShopContextProvider;
