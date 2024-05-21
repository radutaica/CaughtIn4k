import React from 'react';
import Footer from '../Components/Footer';
import tshirtImage from '../Assets/hoodie.jpg';

const About = () => {
  return (
    <div className="bg-gray-200 flex-1 relative">
      <div className="bg-cover bg-center h-screen text-white py-40 px-10 object-fill relative z-10">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-20" style={{ marginTop: '250px' }}>
          <h1 className="text-9xl font-bold text-black px-4 py-2" style={{ opacity: 0.5, textShadow: '2px 2px 0 #FFF, -2px -2px 0 #FFF, -2px 2px 0 #000, 2px -2px 0 #FFF' }}>ABOUT US</h1>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-20 relative mt-40 md:mt-0">
          <div className="md:w-1/2 flex justify-center">
            <div className="w-[1000px] h-[1000px] bg-cover bg-center relative z-10">
              <img src={tshirtImage} className="w-full h-full object-cover rounded-lg shadow-lg" alt="T-shirt" />
            </div>
          </div>
          <div className="md:w-1/2 z-30 px-4 md:px-0">
            <p className="text-gray-600 text-lg">
              Hackney started as a small interior design firm in downtown Michigan, aiming to help home buyers make do with the new space that they had acquired. It soon became obvious that it would make sense to help our clients see beyond the walls and floor plans, and to be there with them from the get-go.
            </p>
            <p className="text-gray-600 text-lg mt-4">
              Currently, we offer house realtor, interior design, and architecture services in order to help our customers find their forever homes as seamlessly and painlessly as possible. We value our customers above everything else, meaning that we won't take 'OK' as an answer.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    
  );
};

export default About;
