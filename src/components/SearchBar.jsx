import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div className="mb-6 flex justify-center items-center">
      <input
        type="text"
        className="w-1/2 p-2 border border-zinc-500 rounded-md  bg-zinc-800 text-zinc-200"
        placeholder="Search for a starship..."
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
