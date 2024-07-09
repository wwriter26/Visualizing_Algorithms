// src/components/Home.js
import React from 'react';
import NavBar from '../Navbar/Navbar';
import './Home.css';

const Home = () => {
  return (
    <div>
      <NavBar />
      <header>
        <h1>Welcome to the Data Structures and Algorithms Visualizer</h1>
      </header>
      <main>
        <p>Explore the world of data structures and algorithms through interactive visualizations.</p>
      </main>
      <footer>
        <p>&copy; 2024 Data Structures and Algorithms Visualizer</p>
      </footer>
    </div>
  );
};

export default Home;
