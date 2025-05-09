import React from 'react';
import '../assets/styles/Footer.css'; // Import file CSS để thêm styles

const Footer: React.FC = () => {
    return (
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-left">
            <p>&copy; 2025 My Website. All rights reserved.</p>
          </div>
          <div className="footer-center">
            <ul className="footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="footer-right">
            <ul className="social-icons">
              <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a></li>
            </ul>
          </div>
        </div>
      </footer>
    );
  };
  
export default Footer;
