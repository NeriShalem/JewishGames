import React from "react";
import "./GamesPage.css";
import memoryLogoGame from "../assets/img/logo/memoryLogoGame.svg";
import TetrisLogoGame from "../assets/img/logo/TetrisLogoGame.svg";
import TicTacToeLogoGame from "../assets/img/logo/TicTacToeLogoGame.svg";
import SoonLogoGame from "../assets/img/logo/SoonLogoGame.svg";

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
              <Link to="/TicTacToe">
                <img className="GameImgLink" src={TicTacToeLogoGame} alt="TicTacToeLogoGame" />
              </Link>
              <Link className="LinkGameLink" to="/TicTacToe">
                TicTacToe
              </Link>
            </div>

            <div className="squareGameLink">
              <Link to="/Tetris">
                <img className="GameImgLink" src={TetrisLogoGame} alt="TetrisLogoGame" />
              </Link>
              <Link className="LinkGameLink" to="/Tetris">
                Tetris
              </Link>
            </div>

            <div className="squareGameLink">
              <Link to="/MemoryGame">
                <img className="GameImgLink" src={memoryLogoGame} alt="memoryLogoGame" />
              </Link>
              <Link className="LinkGameLink" to="/MemoryGame">
                Memory Game
              </Link>
            </div>


            <div className="squareGameLink">
              <Link to="/Soon">
                <img className="GameImgLink" src={SoonLogoGame} alt="SoonLogoGame" />
              </Link>
              <Link className="LinkGameLink" to="/Soon">
                Soon
              </Link>
            </div>
            <div className="squareGameLink">
              <Link to="/Soon">
                <img className="GameImgLink" src={SoonLogoGame} alt="SoonLogoGame" />
              </Link>
              <Link className="LinkGameLink" to="/Soon">
                Soon
              </Link>
            </div>
            <div className="squareGameLink">
              <Link to="/Soon">
                <img className="GameImgLink" src={SoonLogoGame} alt="SoonLogoGame" />
              </Link>
              <Link className="LinkGameLink" to="/Soon">
                Soon
              </Link>
            </div>
            <div className="squareGameLink">
              <Link to="/Soon">
                <img className="GameImgLink" src={SoonLogoGame} alt="SoonLogoGame" />
              </Link>
              <Link className="LinkGameLink" to="/Soon">
                Soon
              </Link>
            </div>
            <div className="squareGameLink">
              <Link to="/Soon">
                <img className="GameImgLink" src={SoonLogoGame} alt="SoonLogoGame" />
              </Link>
              <Link className="LinkGameLink" to="/Soon">
                Soon
              </Link>
            </div>



          </div>
        </div>
      </div >
    </>
  );
}

export default GamesPage;
