import React from "react";
import "./GamesPage.css";
import memoryLogoGame from "../assets/img/logo/memoryLogoGame.svg";

import { Link } from "react-router-dom";
import TitleTextPage from "./TitleTextPage";

function GamesPage(props) {
  return (
    <>
      <div className="gamePage">
        <div className="gamePageTitle">
          <TitleTextPage title={"Games"} />
        </div>
        <div className="gameListBoard">
          <div className="gameList">
            <div className="squareGameLink">
              <Link className="LinkGameLink" to="/TicTacToe">
                xo
              </Link>
            </div>

            <div className="squareGameLink">
              <Link className="LinkGameLink" to="/Tetris">
                Tetris
              </Link>
            </div>

            <div className="squareGameLink">
              <Link className="LinkGameLink" to="/MemoryGame">
                <img className="memoryGameImgLink" src={memoryLogoGame} alt="memoryLogoGame" />
                Memory Game
              </Link>
            </div>
            <div className="squareGameLink">
              <Link className="LinkGameLink" to="/MemoryGame">
                <img className="memoryGameImgLink" src={memoryLogoGame} alt="memoryLogoGame" />
                Memory Game
              </Link>
            </div>
            <div className="squareGameLink">
              <Link className="LinkGameLink" to="/MemoryGame">
                <img className="memoryGameImgLink" src={memoryLogoGame} alt="memoryLogoGame" />
                Memory Game
              </Link>
            </div>
            <div className="squareGameLink">
              <Link className="LinkGameLink" to="/MemoryGame">
                <img className="memoryGameImgLink" src={memoryLogoGame} alt="memoryLogoGame" />
                Memory Game
              </Link>
            </div>
            <div className="squareGameLink">
              <Link className="LinkGameLink" to="/MemoryGame">
                <img className="memoryGameImgLink" src={memoryLogoGame} alt="memoryLogoGame" />
                Memory Game
              </Link>
            </div>
            <div className="squareGameLink">
              <Link className="LinkGameLink" to="/MemoryGame">
                <img className="memoryGameImgLink" src={memoryLogoGame} alt="memoryLogoGame" />
                Memory Game
              </Link>
            </div>
            <div className="squareGameLink">
              <Link className="LinkGameLink" to="/MemoryGame">
                <img className="memoryGameImgLink" src={memoryLogoGame} alt="memoryLogoGame" />
                Memory Game
              </Link>
            </div>




          </div>
        </div>
      </div>
    </>
  );
}

export default GamesPage;
