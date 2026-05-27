import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProductsSection from './components/ProductsSection';
import CategoriesSection from './components/CategoriesSection';
import BrandsSection from './components/BrandsSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import CollaborationsSection from './components/CollaborationsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <CategoriesSection />
        <BrandsSection />
        <WhyChooseUsSection />
        <CollaborationsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
