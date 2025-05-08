import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

const SearchStarShip = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://swapi.py4e.com/api/starships/");
        setData(response.data.results);
      } catch (err) {
        console.log("Error fetching starships:", err);
      }
    };

    fetchData();
  }, []);

  const filterData = (term) => {
    setSearchTerm(term);
    if (term.trim() === "") {
      setFilteredData([]);
    } else {
      const filtered = data.filter(starship =>
        starship.name.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredData(filtered);
    }
  };

  return (
    <div className="mt-20 p-6 min-h-screen bg-gradient-to-b from-[#050101] to-[#001a23] text-white">
      <h1 className="text-3xl font-bold mb-8 text-center">Search for Star Wars Starships</h1>

      <SearchBar onSearch={filterData} />

      {searchTerm.trim() === "" ? (<p className="text-gray-200 mt-8 text-center">Start typing to search for starships.</p>) : filteredData.length > 0 ? (
        <div className="overflow-x-auto mt-6">
          <table className="min-w-full border border-zinc-500 text-sm">
            <thead className="bg-zinc-700 border border-zinc-500 text-white">
              <tr >
                <th className="px-4 py-2 border">Name</th>
                <th className="px-4 py-2 border">Model</th>
                <th className="px-4 py-2 border">Manufacturer</th>
                <th className="px-4 py-2 border">Cost</th>
                <th className="px-4 py-2 border">Length</th>
                <th className="px-4 py-2 border">Crew</th>
                <th className="px-4 py-2 border">Passengers</th>
                <th className="px-4 py-2 border">Max Speed</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((ss, index) => (
                <tr key={index} className="hover:bg-zinc-800 text-white font-medium">
                  <td className="px-4 py-2 border cursor-pointer">{ss.name}</td>
                  <td className="px-4 py-2 border cursor-pointer">{ss.model}</td>
                  <td className="px-4 py-2 border cursor-pointer">{ss.manufacturer}</td>
                  <td className="px-4 py-2 border cursor-pointer">{ss.cost_in_credits}</td>
                  <td className="px-4 py-2 border cursor-pointer">{ss.length}</td>
                  <td className="px-4 py-2 border cursor-pointer">{ss.crew}</td>
                  <td className="px-4 py-2 border cursor-pointer">{ss.passengers}</td>
                  <td className="px-4 py-2 border cursor-pointer">{ss.max_atmosphering_speed}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-red-400 mt-6 text-center">No starships found for "{searchTerm}".</p>
      )}
    </div>
  );
};

export default SearchStarShip;
