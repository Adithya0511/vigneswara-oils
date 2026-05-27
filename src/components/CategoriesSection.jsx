import './CategoriesSection.css';

const CategoriesSection = () => {
  const categories = [
    { name: 'Groundnut Oil', color: '#FFF8E1' },
    { name: 'Palm Oil', color: '#FFF3E0' },
    { name: 'Sunflower Oil', color: '#F1F8E9' },
    { name: 'Coconut Oil', color: '#EFEBE9' },
    { name: 'Essential Oils', color: '#E8F5E9' },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container">
        <h2 className="section-title">Industries & Categories</h2>
        
        <div className="categories-grid">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="category-item" 
              style={{ backgroundColor: category.color }}
            >
              <h3 className="category-name">{category.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
