import React from 'react';
import '../index.css';
// Assuming you have these components or will create them
import HeroSection from '../Components/HeroSection';
import FeaturedProducts from '../Components/FeaturedProducts';
import Footer from '../Components/Footer';


function Home() {
  return (
    <div className="bg-blue-500">
      <HeroSection />
      <FeaturedProducts />
      <Footer />
    </div>
  );
}

export default Home;