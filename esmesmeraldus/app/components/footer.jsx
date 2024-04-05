import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/footer.css";

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <footer className="footer-container">
      <div className="footer-subscribe">
        <form className="subscribe-form">
          <input className="enter-email-text" type="email" placeholder="Enter Email Address" />
          <button type="submit">→</button>
        </form>
        <p className='subscriber-news-text'>Subscribe for more news! We send out news, deals and recipes! Don't miss out!</p>
      </div>
      {/* Social Media Icons */}
      <div className="footer-social-media">
        <a href="mailto:esmeralduscoffee@gmail.com">
          <img src= "/icons/mail.png" alt="Email"/> 
        </a>
        <a href="https://www.instagram.com/esmeralduscoffee/">
          <img src= "/icons/instagram.png" alt="Instagram"/> 
        </a>
        <a href="https://www.linkedin.com/company/esmaralduscoffee/">
          <img src= "/icons/linkedin.png" alt="LinkedIn"/> 
        </a>
        <a href="https://www.pinterest.ca/esmeralduscoffee/">
          <img src= "/icons/pinterest.png" alt="Pinterest"/> 
        </a>
        <a href="https://www.facebook.com/esmeralduscoffe"> 
          <img src= "/icons/facebook.png" alt="Facebook"/> 
        </a> 
      </div>
      {/* Links */}
      <div className="footer-links">
        <button onClick={() => handleNavigation("/privacy-policy")}>Privacy Policy</button>
        <button onClick={() => handleNavigation("/terms-of-service")}>Terms of Service</button>
        <button onClick={() => handleNavigation("/return-policy")}>Return Policy</button>
      </div>
    </footer>
  );
}

export default Footer;
