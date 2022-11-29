import React, { useState, useEffect } from "react";
import Board from "./Board/Board";
import "./TicTacToe.css";

function TicTacToe() {
  const [size, setSize] = useState(3);
  const [board, setBoard] = useState([]);

  const handleTicTacToeChange = (e) => {
    setSize(e.target.value);
    newBoard(size);
  };

  const newBoard = (size) => {
    let i = 0;
    let xo = [];
    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        xo[i] = {
          row: r,
          column: c,
          xORo: "",
          element: function () {
            return <div className={`Row${this.row}`}></div>;
          },
        };
        i++;
      }
    }
    setBoard(xo);
  };

  useEffect(() => {
    newBoard(size);
  }, [size]);

  useEffect(() => {
    newBoard(size);
  }, []);

  return (
    <>
      <h3>React Tic Tac Toe - with hooks</h3>
      <input type="number" min="3" max="10" onChange={handleTicTacToeChange} />
      <br />
      <span>Board size: {size} </span>
      <div className="boardContainer">
        <Board board={board} size={size} />
      </div>
    </>
  );
}

export default TicTacToe;

// const [history, setHistory] = useState();
// const [stepNumber, setStepNumber] = useState(0);
// const [xIsNext, setXisNext] = useState(true);
// const winner = cw(history[stepNumber]);
// const xO = xIsNext ? "x" : "o";

// const handelClick = (i) => {
//   const historyPoint = history.slice(0, stepNumber + 1);
//   const current = historyPoint[stepNumber];
//   const squares = [...current];

//   if (winner || squares[i]) return;

//   squares[i] = xO;
//   setHistory([...historyPoint, squares]);
//   setStepNumber(historyPoint.length);
//   setXisNext(!xIsNext);
// };

// const jumpTo = (step) => {
//   setStepNumber(step);
//   setXisNext(step % 2 === 0);
// };
// const renderMoves = () => {
//   history.map((_step, move) => {
//     const destination = move ? `Go to move #${move}` : `Go to start`;
//     return (
//       <li key={move}>
//         <button onClick={() => jumpTo(move)}>{destination}</button>
//       </li>
//     );
//   });
// };

// return (
//   <>
//
// <Board squares={history[stepNumber]} onClick={handelClick} />
//<div className="info-wrapper">
//<div>
//<h3>History</h3>
// {renderMoves()}
//</div>
//<h3>{winner ? "Winner " + winner : "Next Player " + xO}</h3>
//</div>
//   </>
// );
