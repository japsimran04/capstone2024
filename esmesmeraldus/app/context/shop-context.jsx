"use client";

import React, { createContext, useState } from "react";
import { PRODUCTS } from "../data/products";

export const ShopContext = createContext();


const getDefaultCart = () => {
    let cart = {};
    for (let product of PRODUCTS) {
        cart[product.id] = { quantity: 0, beanType: 'Whole' }; 
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
            const updatedCartItems = { ...prev };
            if (prev[productId].quantity === 1) {
                
                delete updatedCartItems[productId];
            } else {
                
                updatedCartItems[productId] = { ...prev[productId], quantity: prev[productId].quantity - 1 };
            }
            return updatedCartItems;
        });
    };

    
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
