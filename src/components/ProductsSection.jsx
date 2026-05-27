import { ArrowRight } from 'lucide-react';
import './ProductsSection.css';

const ProductsSection = () => {
  const products = [
    {
      id: 1,
      name: 'PM Oil (Palmolein Oil)',
      description: 'Premium quality refined palmolein oil, perfect for commercial frying and cooking due to its high oxidative stability.',
      image: 'https://images.unsplash.com/photo-1628186178351-4e488d551ba9?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 2,
      name: 'SF Oil (Sunflower Oil)',
      description: 'Light, healthy, and rich in Vitamin E. Ideal for everyday cooking, baking, and salad dressings.',
      image: 'https://images.unsplash.com/photo-1596647907575-52d3ce602693?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 3,
      name: 'GN Oil (Groundnut Oil)',
      description: 'Authentic filtered groundnut oil that adds a rich, nutty flavor to traditional dishes. 100% natural and pure.',
      image: 'https://images.unsplash.com/photo-1526068222955-f2d4f24f5a2b?auto=format&fit=crop&w=600&q=80',
    }
  ];

  return (
    <section id="products" className="section-padding">
      <div className="container">
        <h2 className="section-title">Our Premium Products</h2>
        
        <div className="grid grid-3">
          {products.map((product) => (
            <div key={product.id} className="product-card card">
              <div className="product-image-wrapper">
                <img src={product.image} alt={product.name} className="product-image" />
              </div>
              <div className="product-info">
                <h3 className="product-title">{product.name}</h3>
                <p className="product-desc">{product.description}</p>
                <a href="#contact" className="btn btn-outline product-btn">
                  Enquire Now <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
