// SearchFilter.js
// eslint-disable-next-line no-unused-vars
import React from 'react';

const Pencarian = ({ handleSearch }) => {
  return (
    <div>
      <label htmlFor="search">Cari:</label>
      <input
        type="text"
        id="search"
        placeholder="Masukkan kata kunci..."
        onChange={(e) => handleSearch (e.target.value)}
      />
    </div>
  );
};

export default Pencarian;
