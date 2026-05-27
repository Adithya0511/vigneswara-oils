import { PhoneCall } from 'lucide-react';
import './CollaborationsSection.css';

const CollaborationsSection = () => {
  return (
    <section className="collab-section section-padding">
      <div className="collab-overlay"></div>
      <div className="container collab-content">
        <h2 className="collab-title">Business Collaborations & Company Tie-Ups</h2>
        <p className="collab-text">
          We welcome partnerships with retailers, distributors, suppliers, and organizations seeking long-term business relationships.
        </p>
        
        <div className="collab-contact">
          <p className="collab-subtext">For New Collaborations and Company Tie-Ups:</p>
          <a href="tel:+919848414764" className="collab-phone">
            <PhoneCall size={28} />
            +91 98484 14764
          </a>
        </div>
        
        <a href="#contact" className="btn btn-secondary collab-btn">
          Connect With Us
        </a>
      </div>
    </section>
  );
};

export default CollaborationsSection;
