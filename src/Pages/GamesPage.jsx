import React from "react";
import { Link } from "react-router-dom";

import TitleTextPage from "./TitleTextPage";
import { GAMES_LIST } from "../constants/games";
import "./GamesPage.css";

const GamesPage = () => {
   const renderGame = ({ url, name, imgUrl}, index) => (
       <div className="squareGameLink" key={index}>
           <Link to={url}>
               <img className="GameImgLink" src={imgUrl} alt="TicTacToeLogoGame" />
           </Link>
           <Link className="LinkGameLink" to={url}>
               {name}
           </Link>
       </div>
   )

  return (
    <>
      <div className="gamePage">
        <div className="gamePageTitle">
          <TitleTextPage title={"Games"} />
        </div>
        <div className="gameListBoard">
          {GAMES_LIST.map(renderGame)}
        </div>
      </div >
    </>
  );
}

export default GamesPage;
