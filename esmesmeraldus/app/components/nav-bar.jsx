"use client";

import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Homepage from "../pages/homepage";
import Shop from "../pages/shop";
import About from "../pages/about.js"; 
import Cart from "../pages/cart";
import Login from "./login";
import Signup from "./signup";
import SearchBar from "../components/search-bar";
import Image from "next/image";
import "../styles/nav-bar.css";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

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
            <div className="navbar">
            <div className="leftSide">
                <Image src="/icons/logo.png" alt="Esmeraldus Colombian Coffee"width={100} height={100}/>  
            </div>

            <div className="rightSide">
                <button onClick={() => handleNavigation("/")}>Home<ExpandMoreIcon/></button>
                <button onClick={() => handleNavigation("/shop")}>Shop<ExpandMoreIcon/></button>   
                <button onClick={() => handleNavigation("/about")}>About<ExpandMoreIcon/></button> 
                <button onClick={() => handleNavigation("/cart")}>Cart<ExpandMoreIcon/></button>   

                <div className="Icons">
                <ShoppingCartIcon/>
                </div>
            
           </div>
           </div>
            <Routes>
                <Route path="/" element={<Homepage />} />
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
