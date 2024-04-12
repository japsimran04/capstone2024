import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom'; // To access query parameters
import { PRODUCTS } from "../data/products.js";
import { Product } from "../components/product.jsx";
import { Link } from "react-router-dom";
import "../Styles/Shop.css";

const Shop = () => {
    const { search } = useLocation(); // Extracting search string from URL
    const searchParams = new URLSearchParams(search);
    const query = searchParams.get('search')?.toLowerCase() || "";

    const [filteredProducts, setFilteredProducts] = useState(PRODUCTS);

    // Effect to handle search query changes and filter products
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
                    <Link key={product.id} to={`/product/${product.id}`}>
                        <Product data={product}/>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Shop;
