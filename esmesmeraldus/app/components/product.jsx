import React, { useContext } from "react";
import { ShopContext } from "../context/shop-context";
import Image from "next/image";
import { Link } from "react-router-dom";

export const Product = (props) => {
    const { id, productName, price, productImage} = props.data;
    const { addToCart, cartItems } = useContext(ShopContext);

    const cartItemAmount = cartItems[id]

    return (
        <div className="product">
            <Link to={`/product/${id}`}>
                <Image src={productImage} alt={productName} width={500} height={500} />
                <div className="description">
                    <p> <b>{productName}</b> </p>
                    <p> ${price.toFixed(2)} </p>
                    
                </div>
            </Link>
            {/*<button className="addToCartButton" onClick={(event) => { event.preventDefault(); event.stopPropagation(); addToCart(id);}}> 
                Add to cart {cartItemAmount > 0 && (cartItemAmount)}
            </button>*/}
        </div>
    );
}