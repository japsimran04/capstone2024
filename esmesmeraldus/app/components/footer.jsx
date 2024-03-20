import React from 'react';
import { Link } from 'react-router-dom';
import "../pages/terms-of-service.jsx";

const Footer = () => {
  return (
    <footer>
      <div className="footer-links">
      <button onClick={() => handleNavigation("/terms-of-service")}>Terms of Service</button>
      <Routes>
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>
        <ul>
          <li><Link to="/privacy-policy">Privacy Policy</Link></li>
          <li><Link to="../pages/terms-of-service.jsx">Terms of Service</Link></li>
          <li><Link to="/return-policy">Return Policy</Link></li>
        </ul>
      </div>
      <div className="social-media">
        <ul>
          <li><a href="https://www.instagram.com">Instagram</a></li>
          <li><a href="https://www.linkedin.com">LinkedIn</a></li>
          <li><a href="https://www.pinterest.com">Pinterest</a></li>
          <li><a href="mailto:example@example.com">Email</a></li>
          <li><a href="https://www.facebook.com">Facebook</a></li>
        </ul>
      </div>
      <div className="subscribe">
        <form>
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
        <p>Subscribe for more news, recipes, and updates!</p>
      </div>
    </footer>
  );
}

<div className="user-actions">
<button onClick={() => handleNavigation("/terms-of-service")}>Terms of Service</button>
<button onClick={() => handleNavigation("/shop")}>Shop</button>
<button onClick={() => handleNavigation("/about")}>About</button>
<button onClick={() => handleNavigation("/learn")}>Learn</button>
<button onClick={() => handleNavigation("/cart")}>Cart</button>
<button onClick={() => handleNavigation("/login")}>Log In</button>
<button onClick={() => handleNavigation("/signup")}>Sign Up</button>
<SearchBar onSearch={handleSearch} />
</div>
<Routes>
<Route path="/"/>
<Route path="/shop" element={<Shop />} />
{/* <Route path="/about" element={<About />} /> */}
{/* <Route path="/learn" element={<Learn />} /> */}
<Route path="/cart" element={<Cart />} />
{/* <Route path="/search" element={<Search />} /> */}
{/* <Route path="/login" element={<Login />} /> */}
{/* <Route path="/signup" element={<Signup />} /> */}
</Routes>

export default Footer;
