import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/shop-context";
import Image from "next/image";
import { useParams } from 'react-router-dom';
import { PRODUCTS } from "../data/products.js";
import "../Styles/individualproduct.css";

const IndividualProduct = () => {
  const { id } = useParams();
  const { addToCart, removeFromCart, cartItems } = useContext(ShopContext);
  const [beanType, setBeanType] = useState('whole');
  const [quantity, setQuantity] = useState(0); // Add this line to manage quantity state

  const product = PRODUCTS.find(product => product.id === Number(id));
  const { productName, price, productpageimage, notesimage, descriptionnotes, notes2, acidity, altitude, temperature } = product;

    // New state variable for the current image index
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    //function to handle right arrow click
    const handleRightArrowClick = () => {
      setCurrentImageIndex((currentImageIndex + 1) % 2);
    };
  
    //function to handle left arrow click
    const handleLeftArrowClick = () => {
      setCurrentImageIndex((currentImageIndex + 1) % 2);
    };
  
    //array to hold the images
    const images = [productpageimage, notesimage];

  useEffect(() => {
    if (cartItems[id]) {
      setQuantity(cartItems[id]);
    } else {
      setQuantity(0);
    }
  }, [cartItems, id]);

  const handleAddToCart = () => {
    if (quantity > 0) {
      addToCart(id, beanType, quantity); // Add to cart with current quantity
      setQuantity(0); // Reset quantity to 0 after adding
    }
  };
  
  const handleRemoveFromCart = () => {
    if (quantity > 1) {
      // If quantity is greater than 1, decrement by 1
      setQuantity(quantity - 1);
    } else if (quantity === 1) {
      // If quantity is 1, remove from cart and reset quantity to 0
      removeFromCart(id);
      setQuantity(0);
    }
  };
  
  const incrementQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1); 
  };


  return (
    <div className="page-background">
      <div className="individualProduct">
        <div className="productContainer">
        <div className="imageContainer">
          <button className="arrowButton left" onClick={handleLeftArrowClick}>&lt;</button>
          <div className="imageWrapper">
            <Image src={images[currentImageIndex]} alt={productName} width={400} height={500} style={{ borderRadius: '20px' }}/>
          </div>
          <button className="arrowButton right" onClick={handleRightArrowClick}>&gt;</button>
        </div>
          <div className="productDetails">
            <h1 className="page-title-product-text">{productName}</h1>
              <p className="page-acidity-text">{acidity}</p>
              <p className="page-product-price-text">${price.toFixed(2)}</p>
            <div className="page-product-text">
            <p>{notes2}</p>
            <p>{altitude}</p>
            <p>{temperature}</p>
            </div>
            <p className="descriptionnotes">{descriptionnotes}</p>
            <div>
              <h3 className="select-bean-line select-bean-title">Select Bean Type</h3>
              <button className={`beanTypeButton ${beanType === 'whole' ? 'selected' : ''}`} onClick={() => setBeanType('whole')}>Whole Bean</button>
              <button className={`beanTypeButton ${beanType === 'ground' ? 'selected' : ''}`} onClick={() => setBeanType('ground')}>Ground Bean</button>
            </div>
            <h3 className="select-bean-line select-bean-title">Quantity</h3>
            <div className="cart-operations-container">
              <div className="cart-item-quantity-page">
                <button onClick={handleRemoveFromCart}>-</button>
                <span>{quantity}</span>
                <button onClick={incrementQuantity}>+</button>
              </div>
              <button className="addToCartButton" onClick={handleAddToCart}>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
 );
}
export default IndividualProduct;
