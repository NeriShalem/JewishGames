import React from "react";
import { Link } from "react-router-dom";

function GamesPage(props) {
  return (
    <div className="gamePage">
      <h1>Game Page</h1>
      <div>
        <Link className="home" to="/TicTacToe">
          xo
        </Link>
      </div>
      <div>
        <Link className="home" to="/MemoryGame">
          Memory Game
        </Link>
      </div>
    </div>
  );
}

export default GamesPage;
