import React from "react";
import "./Board.css";
import Row from "./Row/Row.jsx";

function Board(props) {
  const { board } = props;
  let r = 0;
  let newRow = [];

  function nextRow() {
    newRow = [];
    r++;
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      newRow.push(<div className={board[i][j]}></div>);
      console.log(newRow);
    }
  }
  // console.log(board[0]?.element());
  // newRow = board.filter((cell) => cell.row === r);
  console.log(newRow);
  return (
    <>
      {/* {newRow.map((cell) => (
        <Row key={cell.row} cell={cell} />
      ))} */}
    </>
  );
}

export default Board;
