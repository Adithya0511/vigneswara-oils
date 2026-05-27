import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3 className="footer-title">Vigneswara Oils</h3>
            <p className="footer-desc">
              Your trusted partner for wholesale distribution of premium edible oils and related products. Delivering quality and reliability since 2018.
            </p>
            <div className="social-links">
              <a href="#" className="social-icon" aria-label="Facebook">FB</a>
              <a href="#" className="social-icon" aria-label="Twitter">TW</a>
              <a href="#" className="social-icon" aria-label="Instagram">IG</a>
              <a href="#" className="social-icon" aria-label="LinkedIn">LI</a>
            </div>
          </div>
          
          <div className="footer-links-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#why-us">Why Choose Us</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-links-col">
            <h4 className="footer-heading">Our Products</h4>
            <ul className="footer-links">
              <li><a href="#products">PM Oil (Palmolein)</a></li>
              <li><a href="#products">SF Oil (Sunflower)</a></li>
              <li><a href="#products">GN Oil (Groundnut)</a></li>
              <li><a href="#products">Other Edible Oils</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2026 Vigneswara Oils And Enterprises. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
