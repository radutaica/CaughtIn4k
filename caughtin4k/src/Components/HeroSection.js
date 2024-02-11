import React from 'react';
import backgroundImage from '../Assets/background.jpg'
function HeroSection() {
  return (
    <div className="bg-cover bg-center h-screen text-white py-40 px-10 object-fill">
      <div className='ml-20'>
        <h1 className="text-6xl font-extrabold text-black line-clamp-3 ">Welcome to Caught in 4K </h1>
        <h1 className="text-5xl font-extrabold mt-5 text-black">Where Fashion Meets Personalization</h1>
        <p className="text-xl mt-5 text-black" style={{ maxWidth: '1000px' }}>
          At Caught in 4K, we believe that style is a way to express who you are without having to speak. With a focus on modern, unique designs, our collections are crafted to stand out in a crowd. But we don't stop there - we offer you the canvas to create something truly unique. Our customization feature allows you to tailor our designs to your personal style, ensuring that what you wear is a true reflection of you.
        </p>
        <button className="place-self-center mt-10 bg-black hover:bg-white text-white hover:text-black font-bold py-4 px-20 rounded-full ml-5">
          Shop Now
        </button>
        <div className='flex mt-20'>
          <div className='mr-10'>
            <h1 className="text-5xl text-black font-medium">200+</h1>
            <p className='text-black'>Internationl brands</p>
          </div>
          <div class="h-18 w-px bg-black mr-10"></div>
          <div className='mr-10'>
            <h1 className="text-5xl text-black font-medium">2,000+</h1>
            <p className='text-black'>High-Quality Products</p>
          </div>
          <div class="h-18 w-px bg-black mr-10"></div>
          <div className='mr-10'>
            <h1 className="text-5xl text-black font-medium">30,000+</h1>
            <p className='text-black'>Happy customers</p>
          </div>
        </div>
        <div className="bg-black w-full h-[200px] mt-20 flex items-center">
        <h1 className="text-6xl font-extrabold text-white line-clamp-3 mr-10 ml-20 ">VERSACE </h1>
        <h1 className="text-6xl font-extrabold text-white line-clamp-3 mr-10">ZARA </h1>
        <h1 className="text-6xl font-extrabold text-white line-clamp-3 mr-10">GUCCI </h1>
        <h1 className="text-6xl font-extrabold text-white line-clamp-3 mr-10">PRADA </h1>
        <h1 className="text-6xl font-extrabold text-white line-clamp-3 mr-10">Calvin Klein </h1>
        <h1 className="text-6xl font-extrabold text-white line-clamp-3 mr-10">H&M </h1>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;