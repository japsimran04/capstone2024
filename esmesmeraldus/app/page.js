"use client";

import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import NavBar from "./components/nav-bar.jsx";
import Footer from "./components/Footer";
import ShopContextProvider from "./context/shop-context";

function Page() {
  return (
    <ShopContextProvider>
      <Router>
        <NavBar />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
        </p>
        <Footer />
      </Router>
    </ShopContextProvider>
  );
}
export default Page;

