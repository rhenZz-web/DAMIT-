
import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="border p-4 rounded shadow">
      <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover mb-2" />
      <h2 className="text-xl font-semibold">{product.name}</h2>
      <p>{product.description}</p>
      <p className="font-bold">${product.price}</p>
      <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">Add to Cart</button>
    </div>
  );
};

export default ProductCard;
