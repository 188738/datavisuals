import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import BarChart from './BarChart';
import Graphs from './Graphs';
import Home from './Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/" element={<Home netWorth={400000} />} />  // Set Home as the default component
          <Route path="/barchart" element={<BarChart />} />  // Route for BarChart
          <Route path="/graphs" element={<Graphs />} />  // Route for Graphs
        </Routes>
      </div>
    </Router>
  );
}

export default App;
