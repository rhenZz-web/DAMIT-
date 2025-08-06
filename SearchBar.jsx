
import React from 'react';

const SearchBar = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Search..."
      value={value}
      onChange={e => onChange(e.target.value)}
      className="border px-2 py-1 rounded w-full"
    />
  );
};

export default SearchBar;
