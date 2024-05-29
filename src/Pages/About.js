import React, { useState } from 'react';
import Footer from '../Components/Footer';
import tshirtImage from '../Assets/hoodie.jpg';
import { AiOutlineClose, AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';


const About = () => {
  const [zoom, setZoom] = useState(false);
  const [content, setContent] = useState(false);

  const handlePressOn = () => {
    setZoom(true);
    setTimeout(() => {
      setContent(true);
    }, 350)
  };

  const handlePressOff = () => {
    setZoom(false);
    setTimeout(() => {
      setContent(false);
    }, 350)
  };

  const contentArray = [
    {
      title: 'About Our Business',
      text: 'Hackney started as a small interior design firm in downtown Michigan, aiming to help home buyers make do with the new space that they had acquired. It soon became obvious that it would make sense to help our clients see beyond the walls and floor plans, and to be there with them from the get-go.',
      text2: 'Currently, we offer house realtor, interior design, and architecture services in order to help our customers find their forever homes as seamlessly and painlessly as possible. We value our customers above everything else, meaning that we won\'t take "OK" as an answer.'
    },
    {
      title: 'Our Mission',
      text: 'Our mission is to transform spaces into beautiful and functional environments that reflect the personality and lifestyle of our clients.',
      text2: 'We are committed to providing exceptional service and ensuring that every project is completed to the highest standards.'
    },
    {
      title: 'Contact Us',
      text: 'We would love to hear from you! Please feel free to reach out to us with any questions or to schedule a consultation.',
      text2: 'You can contact us via email at info@hackney.com or call us at (123) 456-7890.'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? contentArray.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === contentArray.length - 1 ? 0 : prevIndex + 1));
  };

  const data = contentArray[currentIndex];

  return (
    <div className={`bg-gray-200 flex-1 relative ${zoom ? 'overflow-hidden' : ''}`}>
      <div className={`bg-cover bg-center h-screen text-white py-40 px-10 object-fill relative z-10`}>
        <div className="flex justify-center items-center h-full">
          <button
            onClick={handlePressOn}
            className="focus:outline-none"
            style={{ background: 'transparent', border: 'none', padding: '0', cursor: 'pointer' }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl xl:text-[12rem] font-bold text-gray-600 relative">
              A
              <span className="relative inline-block">
                <div
                  className={`absolute inset-0 transition-transform duration-1000 ${zoom ? 'transform scale-[50]' : 'transform scale-[1]'}`}
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
          <div className="absolute inset-0 flex justify-center items-center transition-opacity duration-1000">
            <div className="relative text-center bg-white text-black rounded-lg p-8 shadow-lg max-w-md">
              <div className="absolute top-4 right-4">
                <button
                  onClick={handlePressOff}
                  className="focus:outline-none bg-transparent border-none p-0 cursor-pointer text-xl"
                >
                  <AiOutlineClose/>
                </button>
              </div>
              <h2 className="text-2xl font-bold mb-4">{data.title}</h2>
              <p className="text-lg">
              {data.text}  
            </p>
              <p className="text-lg mt-4">
                {data.text2}
              </p>
              <div className="absolute inset-y-0 left-0 flex items-center">
              <button onClick={handlePrev} className="focus:outline-none bg-transparent border-none p-0 cursor-pointer text-2xl text-black">
                <AiOutlineArrowLeft/>
              </button>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center">
                <button onClick={handleNext} className="focus:outline-none bg-transparent border-none p-0 cursor-pointer text-2xl">
                <AiOutlineArrowRight/>
                </button>
              </div>
            </div>
          </div>
        ) : null}

      </div>
      <Footer />
    </div>
  );
};

export default About;
