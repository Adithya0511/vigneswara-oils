import { CheckCircle2 } from 'lucide-react';
import './BrandsSection.css';

const BrandsSection = () => {
  const brands = [
    {
      name: 'Britannia',
      logo: '/britannia.png'
    },
    {
      name: 'Lay\'s',
      logo: '/lays.png'
    }
  ];

  const highlights = [
    'Quality Assured Products',
    'Trusted Market Brands',
    'Reliable Supply Network',
    'Customer-Focused Service'
  ];

  return (
    <section id="brands" className="section-padding">
      <div className="container">
        <h2 className="section-title">Brands We Deal With</h2>
        <p className="brands-subheading">
          Providing products from trusted and widely recognized brands to ensure quality and customer satisfaction.
        </p>

        <div className="brands-grid">
          {brands.map((brand, index) => (
            <div key={index} className="brand-card card">
              <img src={brand.logo} alt={`${brand.name} Logo`} className="brand-logo" />
            </div>
          ))}
        </div>

        <div className="brands-footer">
          <p className="brands-support-text">
            "Vigneswara Oils And Enterprises deals with recognized brands and quality products to serve customers with reliability and consistency."
          </p>

          <div className="brands-highlights">
            <h3 className="highlights-title">Why Customers Trust Our Products</h3>
            <ul className="highlights-list">
              {highlights.map((highlight, index) => (
                <li key={index} className="highlight-item">
                  <CheckCircle2 className="highlight-icon" size={20} />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
