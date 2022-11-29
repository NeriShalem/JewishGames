import React from "react";
import Square from "./Square/Square";

import "./Row.css";

function Row(props) {
  const { newRow } = props;
  console.log(newRow);
  return (
    <div className={`row${newRow.row}`}>
      {newRow.map((squ) => {
        return <Square squ={squ} />;
      })}
    </div>
  );
}

export default Row;
