
"use client";

import { BrowserRouter as Router,Routes, Route, Outlet } from "react-router-dom";
import NavBar from "./components/nav-bar.jsx";
import Footer from "./components/Footer";
import ShopContextProvider from "./context/shop-context";

function Page() {
  return (
    <ShopContextProvider>
      <Router>
        <NavBar />
        <Outlet />
        <Footer />
      </Router>
    </ShopContextProvider>
  );
}
export default Page;
