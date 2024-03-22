"use client";

import React, { useContext } from "react";
import { ShopContext } from "../context/shop-context";
import Image from "next/image";

export const Product = (props) => {
    const { id, productName, price, productImage} = props.data;
    const { addToCart, cartItems } = useContext(ShopContext);

    const cartItemAmount = cartItems[id]

    return (
        <div className="product">
            <Image src={productImage} alt={productName} width={500} height={500} />
             <div className="description">
                <p> <b>{productName}</b> </p>
                <p> ${price} </p>
                <button className="addToCartButton" onClick={() => addToCart(id)}>
                    Add to cart {cartItemAmount > 0 && (cartItemAmount)}
                </button>
            </div>
        </div>
    );
}
