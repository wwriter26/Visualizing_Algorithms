// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/data-structures">Data Structures</Link></li>
        <li><Link to="/algorithms">Algorithms</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
