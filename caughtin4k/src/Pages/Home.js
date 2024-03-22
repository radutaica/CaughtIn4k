import React, {useEffect} from 'react';
import '../index.css';
// Assuming you have these components or will create them
import HeroSection from '../Components/HeroSection';
import FeaturedProducts from '../Components/FeaturedProducts';
import Footer from '../Components/Footer';


function Home() {
  return (
    <div className="bg-gray-200">
      <HeroSection />
      <FeaturedProducts />
      <Footer />
    </div>
  );
}

export default Home;