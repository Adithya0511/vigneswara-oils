import { MapPin, Phone, Briefcase, TrendingUp } from 'lucide-react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <h1 className="hero-title">
          Quality Oils, Trusted Distribution, <br />
          <span className="text-secondary">Reliable Business Partnerships</span>
        </h1>
        <p className="hero-subtitle">
          Vigneswara Oils And Enterprises – Leading wholesale distributor of premium edible oils and related products.
        </p>
        
        <div className="hero-buttons">
          <a href="#contact" className="btn btn-primary">Contact Us</a>
          <a href="#products" className="btn btn-secondary">Explore Products</a>
        </div>

        <div className="hero-stats">
          <div className="stat-card">
            <MapPin className="stat-icon" />
            <p>Nandigama, Krishna, AP</p>
          </div>
          <div className="stat-card">
            <Phone className="stat-icon" />
            <p>+91 98484 14764</p>
          </div>
          <div className="stat-card">
            <Briefcase className="stat-icon" />
            <p>8+ Years Experience</p>
          </div>
          <div className="stat-card">
            <TrendingUp className="stat-icon" />
            <p>Annual Turnover: 5–25 Cr</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
