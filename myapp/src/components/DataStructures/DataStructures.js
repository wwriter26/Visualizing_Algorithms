// src/components/DataStructures.js
import React from "react";
import NavBar from "../Navbar/Navbar";
import "./DataStructures.css";

const DataStructures = () => {
  return (
    <div>
      <NavBar />
      <header>
        <h1>Data Structures</h1>
      </header>
      <main>
        <div className="card-container">
          <div className="card">
            <h3>Linked List</h3>
            <p>Visualize the linked list operations</p>
            <a href="/data-structures/linkedlist">Explore</a>
          </div>
          <div className="card">
            <h3>Tree</h3>
            <p>Visualize the Tree operations</p>
            <a href="/data-structures/tree">Explore</a>
          </div>
          <div className="card">
            <h3>Graph</h3>
            <p>Visualize the Graph operations</p>
            <a href="/data-structures/graph">Explore</a>
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

export default DataStructures;
