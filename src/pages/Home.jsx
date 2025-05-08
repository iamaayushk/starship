import React, { useRef } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import StarTable from '../api/StarTable';

const Home = () => {
  
  const starTableRef = useRef(null);

  
  const scrollToStarTable = () => {
    starTableRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='overflow-x-auto'>
      <Navbar />
      <Hero scrollToSection={scrollToStarTable} /> 
      <div ref={starTableRef}> 
        <StarTable />
      </div>
    </div>
  );
};

export default Home;
