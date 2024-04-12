"use client";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Shop from './pages/shop';
import IndividualProduct from './pages/individualproduct';
import NavBar from './components/nav-bar';
import Footer from './components/footer';
import { ShopContextProvider } from './context/shop-context';
import PrivacyPolicy from './pages/privacy-policy';
import TermsOfService from './pages/terms-of-service';
import ReturnPolicy from './pages/return-policy';
import Payment from './pages/payment';

function Page() {

  return (
    <ShopContextProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/products" element={<Shop />} />
          <Route path="/product/:id" element={<IndividualProduct />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/return-policy" element={<ReturnPolicy />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
        <Footer />
      </Router>
    </ShopContextProvider>
  );
}

export default Page;