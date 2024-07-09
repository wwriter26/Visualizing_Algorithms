import React, { useState, useEffect, useRef } from "react";
import Konva from "konva";
import { Stage, Layer, Circle, Line, Text } from "react-konva";
import "./Graph.css";

const Graph = () => {
  const containerRef = useRef(null);
  const [nodes, setnodes] = useState(
    { x: 200, y: 200, id: 1 },
    { x: 80, y: 80, id: 2 },
    { x: 80, y: 320, id: 3 },
    { x: 320, y: 80, id: 4 },
    { x: 320, y: 320, id: 5 }
  );
  
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });


  const edges = [
    { points: [200, 200, 80, 80] },
    { points: [200, 200, 80, 320] },
    { points: [200, 200, 320, 80] },
    { points: [200, 200, 320, 320] },
  ];

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };

    window.addEventListener("resize", updateSize);
    updateSize(); // Set size on mount

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div className="graph-container" ref={containerRef}>
      <h2>Graph Visualization</h2>
      <Stage width={dimensions.width} height={dimensions.height}>
        <Layer className='align-center'>
          {edges.map((edge, index) => (
            <Line
              key={index}
              points={edge.points}
              stroke="#4CAF50"
              strokeWidth={2}
            />
          ))}
          {nodes.map((node) => (
            <React.Fragment key={node.id}>
              <Circle
                x={node.x}
                y={node.y}
                radius={25}
                fill={Konva.Util.getRandomColor()}
                stroke="#4CAF50"
                strokeWidth={2}
                draggable
              />
              <Text
                text={node.id.toString()}
                x={node.x}
                y={node.y}
                fontSize={18}
                fontFamily="Calibri"
                fill="#555"
                align="center"
                offsetX={9}
                offsetY={7}
              />
            </React.Fragment>
          ))}
        </Layer>
      </Stage>
    </div>
  );
};

export default Graph;
