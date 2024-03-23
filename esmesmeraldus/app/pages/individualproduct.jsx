import React, { useContext } from "react";
import { ShopContext } from "../context/shop-context";
import Image from "next/image";
import { useParams } from 'react-router-dom';
import { PRODUCTS } from "../data/products.js";

const IndividualProduct = () => {
  const { id } = useParams();
  const { addToCart, cartItems, products} = useContext(ShopContext);

  const product = PRODUCTS.find(product => product.id === Number(id));
  const { productName, price, productImage, description } = product;

  const cartItemAmount = cartItems[id]

  return (
    <div>
      <div className="individualProduct">
        <Image src={productImage} alt={productName} width={500} height={500} />
        <h1>{productName}</h1>
        <p> ${price} </p>
        <p> {description}</p>
      </div>
      <button className="addToCartButton" onClick={(event) => { event.preventDefault(); event.stopPropagation(); addToCart(id);}}>
        Add to cart {cartItemAmount > 0 && (cartItemAmount)}  
      </button>
    </div>
  );
}

export default IndividualProduct;