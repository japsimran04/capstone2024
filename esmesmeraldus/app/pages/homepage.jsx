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
                <h2 className="featured-products-title">Featured Products</h2>
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
            {/* Blog Section */}
            <div className="blog-section">
                <h2 className="Our-blog-title">Our Blogs</h2>
                <p className="blog-description">Learn about Specialty Coffee!</p>
                <div className="blog-cards">
                    {/* The three blog posts */}
                    <div className="blog-card">
                        <img src="/images/cupsofcoffee.png" alt="Shades and Types of Coffee" />
                        <h2>Shades and Types of Coffee</h2>
                        <p>Coffee comes in various types and roasts, each with distinct flavors: Arabica for sweetness, Robusta for strength, and Liberica for uniqueness.</p>
                        <a href="/blog" className="more-link-one">View Article</a>
                    </div>
                    <div className="blog-card">
                        <img src="/images/Esmeraldus.png" alt="Esmeraldus Colombian Coffee" />
                        <h2>The Origin of Esmeraldus Colombian Coffee's Coffeee</h2>
                        <p>Esmeraldus Colombian Coffee: Finest beans from Santa Rosa de Cabal. Rich flavor, sustainable. Experience Colombian coffee with us.</p>
                        <a href="/blog" className="more-link-two">View Article</a>
                    </div>
                    <div className="blog-card">
                        <img src="/images/coffeebeans.png" alt="Coffee Beans" />
                        <h2>Why Matte Coffee Beans are the Recommended Choice By Esmeraldus</h2>
                        <p>Esmeraldus Colombian Coffee: Elevate your coffee with matte beans. Rich flavor, low acidity, versatile brewing.</p>
                        <a href="/blog" className="more-link-three">View Article</a>
                    </div>
                </div>
                <a href="/blog" className="more-link">More...</a>
            </div>
        </>
    );
}

export default Homepage;
