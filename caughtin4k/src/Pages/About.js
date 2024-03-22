import React from 'react';
import Footer from '../Components/Footer';
import tshirtImage from '../Assets/hoodie.jpg';
const About = () => {
  return (
    <div className="bg-gray-200 flex-1 ">
      <div className="bg-cover bg-center h-screen text-white py-40 px-10 object-fill">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2" style={{ marginTop: '250px' }}>
        <h1 className="text-9xl font-bold text-orange-900 px-4 py-2">ABOUT US</h1>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-10">
      <div className="md:w-1/2">
          <div className="h-64 w-full bg-cover bg-center" style={{ backgroundImage: "url('path-to-your-image.jpg')" }}>
          <img src={tshirtImage} className="w-full h-auto object-cover" />
          </div>
        </div>
        <div className="md:w-1/2">
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
