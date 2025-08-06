
import React, { useEffect, useState } from 'react';
import ProductCard from './components/ProductCard';
import SearchBar from './components/SearchBar';
import CategoryDropdown from './components/CategoryDropdown';
import axios from 'axios';

const App = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get('http://localhost:5000/api/products', {
        params: { search, category },
      });
      setProducts(res.data);
    };
    fetchProducts();
  }, [search, category]);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">THE SHOP</h1>
      <div className="flex gap-4 mb-4">
        <SearchBar value={search} onChange={setSearch} />
        <CategoryDropdown value={category} onChange={setCategory} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map(product => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default App;
