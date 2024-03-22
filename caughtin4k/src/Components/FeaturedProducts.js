import React from 'react';
import tshirtImage from '../Assets/tshirt.jpg';

const products = [
  { id: 1, name: 'Product 1', price: '$100', imageUrl: '../Assets/tshirt.jpg'},
  { id: 2, name: 'Product 2', price: '$200', imageUrl: '../Assets/tshirt.jpg' },
  { id: 3, name: 'Product 3', price: '$300', imageUrl: '../Assets/tshirt.jpg' },
  { id: 4, name: 'Product 4', price: '$300', imageUrl: '../Assets/tshirt.jpg' },
  { id: 5, name: 'Product 5', price: '$300', imageUrl: '../Assets/tshirt.jpg' },
  { id: 6, name: 'Product 6', price: '$300', imageUrl: '../Assets/tshirt.jpg' },
  { id: 7, name: 'Product 7', price: '$300', imageUrl: '../Assets/tshirt.jpg' },
  { id: 8, name: 'Product 6', price: '$300', imageUrl: '../Assets/tshirt.jpg' },
  { id: 9, name: 'Product 7', price: '$300', imageUrl: '../Assets/tshirt.jpg' },
  { id: 10, name: 'Product 6', price: '$300', imageUrl: '../Assets/tshirt.jpg' },
  { id: 11, name: 'Product 7', price: '$300', imageUrl: '../Assets/tshirt.jpg' },
  { id: 12, name: 'Product 6', price: '$300', imageUrl: '../Assets/tshirt.jpg' },
  { id: 13, name: 'Product 7', price: '$300', imageUrl: '../Assets/tshirt.jpg' },
];

function FeaturedProducts() {
  return (
    <div className="py-20">
      <h2 className="text-3xl font-bold text-center mb-10">Featured Products</h2>
      {/* Updated container div for horizontal scrolling */}
      <div className="flex overflow-x-auto no-scrollbar px-5 gap-10">
      {products.map((product) => (
        <div key={product.id} className="product min-w-[320px] shadow-lg rounded-lg overflow-hidden bg-gray-800 mb-10">
          <img src={tshirtImage} className="w-full h-auto object-cover" />
          <div className="p-4">
            <h4 className="font-bold text-lg text-white">{product.name}</h4>
            <p className="text-l text-white">{product.price}</p>
            {/* Add links or other product details here */}
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}

export default FeaturedProducts;
