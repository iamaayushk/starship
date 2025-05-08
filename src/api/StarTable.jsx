import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useReactTable, getCoreRowModel, flexRender, createColumnHelper} from '@tanstack/react-table';

const columnHelper = createColumnHelper();

const StarshipTable = () => {
  const [data, setData] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);
  const [prevUrl, setPrevUrl] = useState(null);
  const [currentUrl, setCurrentUrl] = useState('https://swapi.py4e.com/api/starships/');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(currentUrl);
        setData(response.data.results);
        setNextUrl(response.data.next);
        setPrevUrl(response.data.previous);
      } catch (err) {
        console.error("Error occurred while fetching data", err);
      }
    };
  
    fetchData();
  }, [currentUrl]);
  
  
      
  

  const columns = [
    columnHelper.accessor('name', { header: 'Name' }),
    columnHelper.accessor('model', { header: 'Model' }),
    columnHelper.accessor('manufacturer', { header: 'Manufacturer' }),
    columnHelper.accessor('crew', { header: 'Crew' }),
    columnHelper.accessor('hyperdrive_rating', { header: 'HyperDrive Rating' }),
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div  className="p-6 bg-gradient-to-b from-black to-zinc-900 text-white min-h-screen" id='table'>
      <h1 className="text-4xl text-neutral-300 text-center font-bold">List of Starships</h1>
      <div className="overflow-x-auto mt-10">
      <table className="min-w-full bg-zinc-900 border border-gray-700 rounded-md mt-10 text-sm">
        <thead className="bg-zinc-700">
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id} className="px-4 py-2 text-left border border-zinc-300">
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id} className="hover:bg-zinc-950 ">
              {row.getVisibleCells().map(cell => (
                <td key={cell.id} className="px-4 py-2 border cursor-pointer border-zinc-300">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      </div>

    
      <div className="mt-4 flex justify-between">
        <button
          onClick={() => setCurrentUrl(prevUrl)}
          disabled={!prevUrl}
          className="bg-zinc-800 text-white font-semibold border px-4 py-2 rounded hover:bg-zinc-200 hover:text-black cursor-pointer disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={() => setCurrentUrl(nextUrl)}
          disabled={!nextUrl}
          className="bg-zinc-800 text-white font-semibold border px-4 py-2 rounded hover:bg-zinc-200 hover:text-black cursor-pointer disabled:opacity-50"

        >
          Next
        </button>
      </div>
    </div>
  );
};

export default StarshipTable;
