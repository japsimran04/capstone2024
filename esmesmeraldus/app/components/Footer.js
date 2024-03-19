import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-links">
        <ul>
          <li><a href="/privacy-policy">Privacy Policy</a></li>
          <li><a href="/terms-of-service">Terms of Service</a></li>
          <li><a href="/return-policy">Return Policy</a></li>
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

export default Footer;
