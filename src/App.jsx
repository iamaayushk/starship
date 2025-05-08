import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar'
// import Hero from './components/Hero'
import StarshipCompare from './components/StarshipCompare'
import StarShipFilter from './components/StarShipFilter'

import SearchStarShip from './components/SearchStarShip'
import Home from './pages/Home';
import Search from './pages/Search';
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/compare" element={<StarshipCompare />} />
        <Route path="/filter" element={<StarShipFilter />} />
      </Routes>
    </Router>
  );
};

export default App
