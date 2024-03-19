import React from "react";
import { Link } from "react-router-dom";

export default Header = () => {
    return (
        <header>
             <div className="scrolling-bar">
                Free delivery for purchases of $50 or over! Only in Calgary!
            </div>
            <div className="logo">
                <Link to="/">
                    <img src="/logo.png" alt="Logo" />
                </Link>
            </div>
            <nav>
                <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/learn">Learn</Link></li>
                <li><Link to="/cart">Cart</Link></li>
                <li><Link to="/search">Search</Link></li>
                </ul>
            </nav>
            <div className="user-actions">
                <Link to="/login">Log In</Link>
                <Link to="/signup">Sign Up</Link>
            </div>
      </header>
    );
};


