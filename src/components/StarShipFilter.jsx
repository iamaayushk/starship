import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StarShipFilter = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [hyperdriveFilter, setHyperdriveFilter] = useState('');
  const [crewFilter, setCrewFilter] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://swapi.py4e.com/api/starships/");
        setData(response.data.results);
        setFilteredData(response.data.results);
      } catch (err) {
        console.log("error", err);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    let temp = [...data];

    if (hyperdriveFilter) {
      temp = temp.filter(ship => {
        const rating = parseFloat(ship.hyperdrive_rating);
        if (isNaN(rating)) return false;
        if (hyperdriveFilter === '<1.0') return rating < 1.0;
        if (hyperdriveFilter === '1.0-2.0') return rating >= 1.0 && rating <= 2.0;
        if (hyperdriveFilter === '>2.0') return rating > 2.0;
        return true;
      });
    }

    if (crewFilter) {
      temp = temp.filter(ship => {
        const crew = parseInt(ship.crew.replace(/[^0-9]/g, '') || 0);
        if (crewFilter === '1-5') return crew >= 1 && crew <= 5;
        if (crewFilter === '6-50') return crew >= 6 && crew <= 50;
        if (crewFilter === '50 +') return crew > 50;
        return true;
      });
    }

    setFilteredData(temp);
  }, [hyperdriveFilter, crewFilter, data]);

  return (
    <div className="p-6 bg-gradient-to-b from-[#050101] to-[#001a23] text-white min-h-screen mt-20">
      <h1 className="text-2xl font-bold mb-6 text-center">Star Wars Starships</h1>

      <div className="flex flex-wrap gap-4 mb-6 justify-center items-center">
        <div>
          <label className="block text-sm mb-1">Filter by Hyperdrive Rating</label>
          <select
            value={hyperdriveFilter}
            onChange={(e) => setHyperdriveFilter(e.target.value)}
            className="bg-zinc-800 border border-gray-600 rounded px-3 py-1 text-white"
          >
            <option value="">All</option>
            <option value="<1.0">&lt; 1.0</option>
            <option value="1.0-2.0">1.0 - 2.0</option>
            <option value=">2.0">&gt; 2.0</option>
          </select>
        </div>

        <div>
          <label className="block text-sm mb-1">Filter by Crew Size</label>
          <select
            value={crewFilter}
            onChange={(e) => setCrewFilter(e.target.value)}
            className="bg-zinc-800 border border-gray-600 rounded px-3 py-1 text-white"
          >
            <option value="">All</option>
            <option value="1-5">1 - 5</option>
            <option value="6-50">6 - 50</option>
            <option value="50+">50+</option>
          </select>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-zinc-100 text-sm">
          <thead className="bg-gradient-to-r from-zinc-800 to-zinc-700 text-zinc-200">
            <tr>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Model</th>
              <th className="px-4 py-2 border">Manufacturer</th>
              <th className="px-4 py-2 border">Hyperdrive Rating</th>
              <th className="px-4 py-2 border">Crew</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((ship, index) => (
              <tr key={index} className="hover:bg-zinc-900 cursor-pointer">
                <td className="px-4 py-2 border">{ship.name}</td>
                <td className="px-4 py-2 border">{ship.model}</td>
                <td className="px-4 py-2 border">{ship.manufacturer}</td>
                <td className="px-4 py-2 border">{ship.hyperdrive_rating}</td>
                <td className="px-4 py-2 border">{ship.crew}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StarShipFilter;
