
import React from 'react';

const CategoryDropdown = ({ value, onChange }) => {
  return (
    <select
      value={value}
      onChange={e => onChange(e.target.value)}
      className="border px-2 py-1 rounded"
    >
      <option value="">All Categories</option>
      <option value="T-Shirt">T-Shirt</option>
      <option value="Jacket">Jacket</option>
      <option value="Shoes">Shoes</option>
    </select>
  );
};

export default CategoryDropdown;
