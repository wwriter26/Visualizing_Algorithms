// src/components/Algorithms.js
import React from 'react';
import NavBar from '../Navbar/Navbar';
import './Algorithms.css';

const Algorithms = () => {
  return (
    <div>
      <NavBar />
      <header>
        <h1>Algorithms</h1>
      </header>
      <main>
        <div className="card-container">
          <div className="card">
            <h3>Bubble Sort</h3>
            <p>Visualize the bubble sort algorithm</p>
            <a href="#">Explore</a>
          </div>
          <div className="card">
            <h3>Quick Sort</h3>
            <p>Visualize the quick sort algorithm</p>
            <a href="#">Explore</a>
          </div>
          <div className="card">
            <h3>Dijkstra's Algorithm</h3>
            <p>Visualize the shortest path algorithm</p>
            <a href="#">Explore</a>
          </div>
          {/* Add more cards as needed */}
        </div>
      </main>
      <footer>
        <p>&copy; 2024 Data Structures and Algorithms Visualizer</p>
      </footer>
    </div>
  );
};

export default Algorithms;
