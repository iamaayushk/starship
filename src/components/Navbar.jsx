import React, { useState } from 'react';
import '../index.css';
import { Link } from 'react-router-dom';
import { FaHome, FaSearch, FaSlidersH, FaBalanceScale, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar fixed top-0 h-[85px] w-full z-50 border-b  border-b-zinc-700 bg-transparent backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <h2 className='text-xl md:text-3xl mr-5 text-white font-bold '>Star Wars</h2>
          </div>

         
          <div className="hidden sm:flex sm:space-x-8">
            <Link to="/" className="flex items-center gap-2 text-zinc-400 text-lg hover:text-white transition duration-200">
               <FaHome className='text-blue-100' /> Home
            </Link>
            <Link to="/search" className="flex items-center gap-2 text-gray-400 text-lg hover:text-white transition duration-200">
              <FaSearch className='text-blue-100'  /> Search
            </Link>
            <Link to="/compare" className="flex items-center gap-2 text-gray-400 text-lg hover:text-white transition duration-200">
              <FaBalanceScale className='text-blue-100' /> Compare
            </Link>
            <Link to="/filter" className="flex items-center gap-2 text-gray-400 text-lg hover:text-white transition duration-200">
              <FaSlidersH className='text-blue-100' /> Filter
            </Link>
          </div>

          
          <div className="sm:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-400 hover:text-white text-2xl focus:outline-none"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

     
      {menuOpen && (
        <div className="sm:hidden bg-[#0a0b0e] px-4 pt-2 pb-4 space-y-8">
          <Link to="/" className="flex items-center gap-2 text-gray-400 text-lg hover:text-white transition duration-200">
            <FaHome /> Home
          </Link>
          <Link to="/search" className="flex items-center gap-2 text-gray-400 text-lg hover:text-white transition duration-200">
            <FaSearch /> Search
          </Link>
          <Link to="/compare" className="flex items-center gap-2 text-gray-400 text-lg hover:text-white transition duration-200">
            <FaBalanceScale /> Compare
          </Link>
          <Link to="/filter" className="flex items-center gap-2 text-gray-400 text-lg hover:text-white transition duration-200">
            <FaSlidersH /> Filter
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
