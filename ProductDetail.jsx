
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(\`http://localhost:5000/api/products/\${id}\`).then(res => {
      setProduct(res.data);
    });
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <img src={product.imageUrl} alt={product.name} className="w-full h-64 object-cover mb-4" />
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p>{product.description}</p>
      <p className="text-xl font-semibold">${product.price}</p>
    </div>
  );
};

export default ProductDetail;
