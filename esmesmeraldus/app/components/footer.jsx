import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <footer>
      <div className="footer-links">
        <ul>
          <li><button onClick={() => handleNavigation("/privacy-policy")}>Privacy Policy</button></li>
          <li><button onClick={() => handleNavigation("/terms-of-service")}>Terms of Service</button></li>
          <li><button onClick={() => handleNavigation("/return-policy")}>Return Policy</button></li>
        </ul>
      </div>
      <div className="social-media">
        <ul>
          <li><a href="https://www.instagram.com/esmeralduscoffee/">Instagram</a></li>
          <li><a href="https://www.linkedin.com/company/esmaralduscoffee/">LinkedIn</a></li>
          <li><a href="https://www.pinterest.ca/esmeralduscoffee/">Pinterest</a></li>
          <li><a href="mailto:esmeralduscoffee@gmail.com">Email</a></li>
          <li><a href="https://www.facebook.com/esmeralduscoffe">Facebook</a></li>
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

export default Footer;
