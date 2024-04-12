import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom'; // To access query parameters
import { PRODUCTS } from "../data/products.js";
import { Product } from "../components/product.jsx";
import { Link } from "react-router-dom";
import "../styles/shop.css";

const shop = () => {
    const { search } = useLocation();
    const searchParams = new URLSearchParams(search);
    const query = searchParams.get('search')?.toLowerCase() || "";

    const [filteredProducts, setFilteredProducts] = useState(PRODUCTS);

    useEffect(() => {
        setFilteredProducts(PRODUCTS.filter(product =>
            product.productName.toLowerCase().includes(query)
        ));
    }, [query]);

    return (
        <div className="shop">
            <div className="shopTitle">
                <h1>Colombian Coffee</h1>
            </div>
            <div className="products">
                {filteredProducts.map((product) => (
                    <div key={product.id} className="shop-container">
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
    );
};


export default shop;