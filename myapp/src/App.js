// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Main 3 pages for the app
import Home from "./components/Home/Home";
import DataStructures from "./components/DataStructures/DataStructures";
import Algorithms from "./components/Algorithms/Algorithms";

// Style for the app
import "./index.css";

// Datastructure Imports
import LinkedList from "./components/DataStructures/LinkedList/LinkedList";
import Tree from "./components/DataStructures/Tree/Tree";
import Graph from "./components/DataStructures/Graph/Graph";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/data-structures" element={<DataStructures />} />
          <Route path="/algorithms" element={<Algorithms />} />
          <Route path="/data-structures/linkedlist" element={<LinkedList />} />
          <Route path="/data-structures/tree" element={<Tree />} />
          <Route path="/data-structures/graph" element={<Graph />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
