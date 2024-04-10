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
  const [quantity, setQuantity] = useState(0); 

  const product = PRODUCTS.find(product => product.id === Number(id));
  const { productName, price, productpageimage, notesimage, descriptionnotes, notes2, acidity, altitude, temperature } = product;

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleRightArrowClick = () => {
      setCurrentImageIndex((currentImageIndex + 1) % 2);
    };
  
    const handleLeftArrowClick = () => {
      setCurrentImageIndex((currentImageIndex + 1) % 2);
    };
  
    const images = [productpageimage, notesimage];

    useEffect(() => {
      if (cartItems[id]) {
        setQuantity(cartItems[id].quantity);
      } else {
        setQuantity(0);
      }
  }, [cartItems, id]);
  
  const handleAddToCart = () => {
    incrementQuantity(); 
    addToCart(id, beanType, 1); 
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
              <p className="page-product-price-text">CAD${price.toFixed(2)}</p>
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
            <h3 className="select-bean-line select-bean-title"></h3>
            <div className="cart-operations-container">
            <button className="addToCartButton" onClick={handleAddToCart}> 
              Add to cart ({cartItems[id] ? cartItems[id].quantity : 0})
            </button>
            </div>  
          </div>
        </div>
      </div>
    </div>
 );
}
export default IndividualProduct;
