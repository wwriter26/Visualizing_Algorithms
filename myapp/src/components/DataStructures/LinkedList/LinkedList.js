// src/components/LinkedList/LinkedList.js
import React from 'react';
import './LinkedList.css';

const LinkedList = () => {
  return (
    <div className="linked-list-container">
      <h2>Linked List Visualization</h2>
      <div className="node">1</div>
      <div className="arrow">→</div>
      <div className="node">2</div>
      <div className="arrow">→</div>
      <div className="node">3</div>
    </div>
  );
};

export default LinkedList;
