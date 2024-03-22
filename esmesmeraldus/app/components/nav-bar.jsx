"use client";

import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Shop from "../pages/shop";
import About from "../pages/about.js"; 
import Cart from "../pages/cart";
import Login from "./login";
import Signup from "./signup";
import SearchBar from "../components/search-bar";
import logo from "../assets/images/logo.png";

const NavBar = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    const handleSearch = (query) => {
        navigate(`/search?q=${query}`);
    }

    return (
        <header>
            <div className="scrolling-bar">
                Free delivery for purchases of $50 or over! Only in Calgary!
            </div>
            <div className="Header">
                <img src={logo} alt="Esmeraldus Colombian Coffee" />
                <h1>Esmeraldus Colombian Coffee</h1>
            </div>
            <div className="user-actions">
                <button onClick={() => handleNavigation("/")}>Home</button>
                <button onClick={() => handleNavigation("/shop")}>Shop</button>
                <button onClick={() => handleNavigation("/about")}>About</button>
                <button onClick={() => handleNavigation("/cart")}>Cart</button>
                <button onClick={() => handleNavigation("/login")}>Log In</button>
                <button onClick={() => handleNavigation("/signup")}>Sign Up</button>
                <SearchBar onSearch={handleSearch} />
            </div>
            <Routes>
                <Route path="/"/>
                <Route path="/shop" element={<Shop />} />
                <Route path="/about" element={<About />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </header>
    );
};

export default NavBar;
