import React from 'react';
import logo from '../assets/spaceship.png';
import 'remixicon/fonts/remixicon.css';

const Hero = ({ scrollToSection }) => {
  return (
    <div className="relative border-b border-b-zinc-600 bg-gradient-to-r from-[#000000] to-[#1d1f1f] h-screen overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0 grid-bg pointer-events-none" />

      <div className="relative z-10 text-white text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg">
          Welcome to the Star Wars
        </h1>

        <div className="relative mt-6 flex items-center justify-center">
          <p className="text-2xl md:text-5xl font-bold text-gray-300 inline-block">Fleet Management</p>
          <img
            src={logo}
            alt="rocket"
            className="w-12 h-12 right-2 absolute md:w-16 md:h-16 md:ml-5 md:right-18 animate-rocket"
          />
        </div>

        <div className="mt-10">
          <button
            onClick={scrollToSection}  
            className="relative overflow-hidden group bg-[#a0a0a0] text-black border-2 border-zinc-200 font-semibold py-3 px-8 cursor-pointer rounded-full shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-black hover:border-white hover:text-white"
          >
            <span className="relative z-10">Explore Spaceships</span>
            <span className="absolute left-[-100%] top-0 h-full w-full bg-gradient-to-r from-transparent via-white to-transparent opacity-40 group-hover:left-full transition-all duration-700"></span>
          </button>
          <h4 className="text-2xl font-semibold">
            <i className="ri-arrow-down-wide-fill"></i>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Hero;
