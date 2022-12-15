import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./Pages.css";
// pages in site
import GamesPage from "../../../pages/gamesPage/GamesPage";
import AboutPage from "../../../pages/aboutPage/AboutPage"
import VideoPage from "../../../pages/videoPage/VideoPage";
import HomePage from "../../../pages/homePage/HomePage";

// Games components
import MemoryGame from "../../../components/games/MemoryGame/UIMemoryGame.jsx";
import TicTacToe from "../../../components/games/TicTacToe/TicTacToe.jsx";
import AppTetris from "../../../components/games/Tetris/src/AppTetris.jsx";



const Pages = ({ setTtitle }) => {
  return (
    <div className="Pages">
      <Routes>
        <Route path="/" element={<HomePage setTtitle={setTtitle} />} />
        <Route
          path="/GamesPage"
          element={<GamesPage setTtitle={setTtitle} />}
        />
        <Route
          path="/AboutPage"
          element={<AboutPage setTtitle={setTtitle} />}
        />
        <Route
          path="/VideoPage"
          element={<VideoPage setTtitle={setTtitle} />}
        />
        <Route path="/Tetris" element={<AppTetris setTtitle={setTtitle} />} />
        <Route
          path="/TicTacToe"
          element={<TicTacToe setTtitle={setTtitle} />}
        />
        <Route
          path="/MemoryGame"
          element={<MemoryGame setTtitle={setTtitle} />}
        />
        <Route path="/Soon" element={<h1>Soon</h1>} />
      </Routes>
    </div>
  );
};

export default Pages;
