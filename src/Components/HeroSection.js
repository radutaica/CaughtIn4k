import React from 'react';
import backgroundImage from '../Assets/background.jpg';

function HeroSection() {
  const onPress = () => {
    console.log('Pressed');
  };

  return (
    <div
      className="bg-cover bg-center h-screen text-white py-20 px-5 sm:px-10 md:px-20"
    >
      <div className="container mx-auto h-full flex flex-col justify-between">
        <div className="text-center md:text-left mb-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-black">
            Welcome to Caught in 4K
          </h1>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-5 text-black">
            Where Fashion Meets Personalization
          </h1>
          <p className="text-lg sm:text-xl mt-5 text-black mx-auto md:mx-0 max-w-5xl">
            At Caught in 4K, we believe that style is a way to express who you are without having to speak. With a focus on modern, unique designs, our collections are crafted to stand out in a crowd. But we don't stop there - we offer you the canvas to create something truly unique. Our customization feature allows you to tailor our designs to your personal style, ensuring that what you wear is a true reflection of you.
          </p>
          <button
            className="mt-10 bg-black hover:bg-white text-white hover:text-black font-bold py-3 px-10 rounded-full"
            onClick={onPress}
          >
            Shop Now
          </button>
        </div>
        <div className="flex flex-col md:flex-row mt-10 space-y-10 md:space-y-0 md:space-x-10 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-5xl text-black font-medium">200+</h1>
            <p className="text-black">International brands</p>
          </div>
          <div className="h-0.5 md:h-full w-full md:w-0.5 bg-black mx-10 md:mx-0"></div>
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-5xl text-black font-medium">2,000+</h1>
            <p className="text-black">High-Quality Products</p>
          </div>
          <div className="h-0.5 md:h-full w-full md:w-0.5 bg-black mx-10 md:mx-0"></div>
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-5xl text-black font-medium">30,000+</h1>
            <p className="text-black">Happy customers</p>
          </div>
        </div>
        <div className="bg-black w-full mt-20 py-10 flex justify-center overflow-x-auto space-x-7 text-center no-scrollbar">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white whitespace-nowrap">
            VERSACE
          </h1>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white whitespace-nowrap">
            ZARA
          </h1>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white whitespace-nowrap">
            GUCCI
          </h1>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white whitespace-nowrap">
            PRADA
          </h1>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white whitespace-nowrap">
            Calvin Klein
          </h1>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white whitespace-nowrap">
            H&M
          </h1>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
