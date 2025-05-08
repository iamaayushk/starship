import React, { useEffect, useState } from 'react';
import axios from 'axios';

const STORAGE_KEY = "starShipSelected";

const StarshipCompare = () => {
  const [starships, setStarships] = useState([]);
  const [selected, setSelected] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://swapi.py4e.com/api/starships/");
        setStarships(response.data.results);
      } catch (err) {
        console.log("error", err);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
   
    localStorage.setItem(STORAGE_KEY, JSON.stringify(selected));
  }, [selected]);

  const handleSelect = (e) => {
    const selectedName = e.target.value;
    const ship = starships.find(s => s.name === selectedName);
    if (ship && selected.length < 3 && !selected.find(s => s.name === selectedName)) {
      setSelected([...selected, ship]);
    }
  };

  const removeShip = (name) => {
    setSelected(selected.filter(ship => ship.name !== name));
  };

  return (
    <div className="mt-20 p-6 bg-gradient-to-b from-[#050101] to-[#001a23] text-white min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-center">Compare Starships</h2>
      <p className='text-center text-sm text-neutral-300 mb-5'>Select at Max 3 Starships</p>

      <div className="mb-4 flex flex-wrap justify-center gap-4">
        <select onChange={handleSelect} className="bg-zinc-800 text-white px-4 py-2 rounded" value="">
          <option value="" disabled>Select a starship</option>
          {starships.map((ship, index) => (
            <option key={index} value={ship.name}>{ship.name}</option>
          ))}
        </select>

        {selected.map(ship => (
          <button
            key={ship.name}
            onClick={() => removeShip(ship.name)}
            className="bg-red-600 hover:bg-red-700 cursor-pointer text-white px-3 py-1 rounded"
          >
            Remove {ship.name}
          </button>
        ))}
      </div>

      {selected.length > 0 && (
        <div className="overflow-x-auto rounded-lg shadow-lg border border-zinc-400">
          <table className="min-w-full text-sm">
            <thead className="bg-gradient-to-r from-zinc-800 to-zinc-700 text-white">
              <tr>
                <th className="px-4 py-3  text-left">Name</th>
                {selected.map(ship => (
                  <th key={ship.name} className="px-4 border py-3 text-left ">{ship.name}</th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-black/50">
              {["model", "manufacturer", "crew", "hyperdrive_rating"].map(attr => (
                <tr key={attr} className="border-t border-gray-700 hover:bg-zinc-900">
                  <td className="px-4 py-2 font-semibold capitalize border cursor-pointer">{attr.replace(/_/g, ' ')}</td>
                  {selected.map(ship => (
                    <td key={ship.name + attr} className="px-4 py-2 border cursor-pointer">{ship[attr]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default StarshipCompare;
