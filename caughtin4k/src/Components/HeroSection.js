import React from 'react';

function HeroSection() {
  return (
    <div className="bg-cover bg-center h-screen text-white py-40 px-10 object-fill" style={{backgroundImage: `url('/path-to-your-image.jpg')`}}>
      <h1 className="text-5xl font-bold">Welcome to Our Store!</h1>
      <p className="text-xl mt-5">Check out our latest products!</p>
      <button className="mt-5 bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Shop Now
      </button>
    </div>
  );
}

export default HeroSection;