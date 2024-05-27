import React, { useState } from 'react';
import Footer from '../Components/Footer';
import tshirtImage from '../Assets/hoodie.jpg';

const About = () => {
  const [zoom, setZoom] = useState(false);
  const [content, setContent] = useState(false);

  const handlePress = () => {
    console.log("Pressed");
    setZoom(true);
    setTimeout(() => {
      setContent(true);
    }, 350)
  };

  return (
    <div className={`bg-gray-200 flex-1 relative ${zoom ? 'overflow-hidden' : ''}`}>
      <div className={`bg-cover bg-center h-screen text-white py-40 px-10 object-fill relative z-10`}>
        <div className="flex justify-center items-center h-full">
          <button
            onClick={handlePress}
            className="focus:outline-none"
            style={{ background: 'transparent', border: 'none', padding: '0', cursor: 'pointer' }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl xl:text-[12rem] font-bold text-gray-600 relative">
              A
              <span className="relative inline-block">
                <div
                  className={`absolute inset-0 transition-transform duration-1000 ${zoom ? 'transform scale-[27]' : ''}`}
                  style={{ width: '1em', height: '1em', left: '-0.1em', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" fill="transparent"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></line>
                  </svg>
                </div>
                <span className="opacity-0">O</span>
              </span>
              UT US
            </h1>
          </button>
        </div>
        {content ? (
          <div className={`absolute inset-0 flex justify-center items-center transition-opacity duration-1000`}>
            <div className="text-center bg-white text-black rounded-full p-8">
              <h2 className="text-2xl font-bold mb-4">About Our Business</h2>
              <p className="text-lg">
                Hackney started as a small interior design firm in downtown Michigan, aiming to help home buyers make do with the new space that they had acquired. It soon became obvious that it would make sense to help our clients see beyond the walls and floor plans, and to be there with them from the get-go.
              </p>
              <p className="text-lg mt-4">
                Currently, we offer house realtor, interior design, and architecture services in order to help our customers find their forever homes as seamlessly and painlessly as possible. We value our customers above everything else, meaning that we won't take 'OK' as an answer.
              </p>
            </div>
          </div>
        ) : null}
      </div>
      <Footer />
    </div>
  );
};

export default About;
