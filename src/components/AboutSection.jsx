import { Building, Scale, FileText, Clock, MapPin } from 'lucide-react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container">
        <h2 className="section-title">About Vigneswara Oils And Enterprises</h2>
        
        <div className="about-grid">
          <div className="about-content">
            <p className="about-text">
              <strong>Vigneswara Oils And Enterprises</strong> is a trusted wholesale distributor based in Nandigama, Andhra Pradesh. We are committed to delivering quality products and dependable services while building long-term relationships with customers and business partners.
            </p>
            <p className="about-text">
              With over 8 years of experience in the industry, we have established a strong distribution network, ensuring competitive pricing and consistent supply for all our clients across the region.
            </p>
          </div>
          
          <div className="about-card card">
            <h3 className="card-title">Business Information</h3>
            <ul className="info-list">
              <li>
                <Building className="info-icon" />
                <div>
                  <span className="info-label">Nature of Business</span>
                  <span className="info-value">Trader / Wholesaler / Distributor</span>
                </div>
              </li>
              <li>
                <Scale className="info-icon" />
                <div>
                  <span className="info-label">Legal Status</span>
                  <span className="info-value">Proprietorship</span>
                </div>
              </li>
              <li>
                <FileText className="info-icon" />
                <div>
                  <span className="info-label">GST Registration</span>
                  <span className="info-value">Feb 2024</span>
                </div>
              </li>
              <li>
                <Clock className="info-icon" />
                <div>
                  <span className="info-label">Experience</span>
                  <span className="info-value">8+ Years</span>
                </div>
              </li>
              <li>
                <MapPin className="info-icon" />
                <div>
                  <span className="info-label">Location</span>
                  <span className="info-value">Nandigama, Krishna, AP</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
