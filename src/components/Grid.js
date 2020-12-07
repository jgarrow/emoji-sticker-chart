import React from "react";
import Cell from "./Cell";

const Grid = () => {
  const [grid] = React.useState(new Array(104).fill(1));

  return (
    <ul>
      {grid.map((_, i) => {
        return (
          <React.Fragment key={i}>
            {i % 8 === 0 ? (
              <p>Week {Math.ceil((i + 1) / 8)}</p>
            ) : (
              <Cell keyName={`emoji-${i + 1}`} />
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default Grid;
