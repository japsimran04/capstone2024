import React from "react";
import "../Styles/homepage.css";
import { Link } from "react-router-dom";
import { PRODUCTS } from "../data/products.js";

const Homepage = () => {
    const featuredProducts = PRODUCTS.filter(product =>
        ["Classic 250g - Specialty Coffee", "Lembo 250g- Dark Roast", "Supremo 250g- Specialty Coffee", ].includes(product.productName)
    );

    return (
        <>
            <div className="picture-container">
                <img src="/images/homepage.png" alt="Homepage picture" />
                <Link to="/shop" className="shop-button">Shop now</Link>
            </div>

            {/* Featured Products Section */}
            <div className="featured-products-section">
                {/* <h2 className="featured-products-title">Featured Products</h2> */}
                <div className="featured-products-grid">
                    {featuredProducts.map(product => (
                        <div key={product.id} className="featured-product-card">
                            <Link to={`/product/${product.id}`}>
                                <div className="product-image-container">
                                    <img src={product.productImage} alt={product.productName} />
                                    <div className="product-description">
                                        {product.notes} 
                                    </div>
                                </div>
                            </Link>
                            <h3>{product.productName}</h3>
                            <p className="price">CAD${product.price.toFixed(2)}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Homepage;
