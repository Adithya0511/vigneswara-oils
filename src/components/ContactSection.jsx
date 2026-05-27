import { MapPin, Phone, Mail, Navigation } from 'lucide-react';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-grid">
          <div className="contact-info">
            <h3 className="contact-subtitle">Contact Information</h3>
            <p className="contact-text">
              We're here to help and answer any question you might have. We look forward to hearing from you.
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <MapPin className="contact-icon" />
                <div>
                  <h4 className="contact-label">Our Location</h4>
                  <p className="contact-value">
                    Vigneswara Oils And Enterprises<br />
                    Ground Flower, 16-122, Opp. NSR Diary,<br />
                    Auto Nagar, Kesara, Nandigama,<br />
                    Andhra Pradesh – 521185
                  </p>
                </div>
              </div>
              
              <div className="contact-item">
                <Phone className="contact-icon" />
                <div>
                  <h4 className="contact-label">Phone</h4>
                  <p className="contact-value">+91 98484 14764</p>
                </div>
              </div>
            </div>

            <div className="contact-actions">
              <a href="tel:+919848414764" className="btn btn-primary contact-btn">
                <Phone size={18} /> Call Now
              </a>
              <a href="mailto:info@vigneswaraoils.com" className="btn btn-secondary contact-btn">
                <Mail size={18} /> Send Email
              </a>
              <a 
                href="https://maps.google.com/?q=16-122,+Opp.+NSR+Diary,+Auto+Nagar,+Kesara,+Nandigama,+Andhra+Pradesh" 
                target="_blank" 
                rel="noreferrer"
                className="btn btn-outline contact-btn"
              >
                <Navigation size={18} /> Get Directions
              </a>
            </div>
          </div>
          
          <div className="contact-map">
            {/* Google Maps Embed */}
            <iframe
              title="Vigneswara Oils Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15291.688326227937!2d80.287232!3d16.711831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35a64b9b7a4219%3A0xc32a87fb2c9c73bb!2sNandigama%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1689000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
