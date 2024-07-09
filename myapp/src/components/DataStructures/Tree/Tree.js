// src/components/Tree/Tree.js
import React from 'react';
import './Tree.css';

const Tree = () => {
  return (
    <div className="tree-container">
      <h2>Tree Visualization</h2>
      <div className="tree">
        <div className="node">1</div>
        <div className="branch">
          <div className="node">2</div>
          <div className="node">3</div>
        </div>
      </div>
    </div>
  );
};

export default Tree;
