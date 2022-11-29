import React from "react";
import "./Square.css";

function square(props) {
  const { squ } = props;
  console.log(squ);
  return (
    <div className="square">
      <span>{squ.row}</span>
      <span>{squ.column}</span>
    </div>
  );
}

export default square;
