// FeaturedProducts.js
import React from 'react';

// Dummy product data - replace with real data
const products = [
  { id: 1, name: 'Product 1', price: '$100' },
  { id: 2, name: 'Product 2', price: '$200' },
  { id: 3, name: 'Product 3', price: '$300' },
];

function FeaturedProducts() {
  return (
    <div className="py-20">
      <h2 className="text-3xl font-bold text-center mb-10">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-5">
        {products.map((product) => (
          <div key={product.id} className="product">
            <h4>{product.name}</h4>
            <p>{product.price}</p>
            {/* Add product images and links */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedProducts;