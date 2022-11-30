import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./Pages.css";
// pages in site
import GamesPage from "../Pages/GamesPage";
import AboutPage from "../Pages/AboutPage";
import VideoPage from "../Pages/VideoPage";
import HomePage from "../Pages/HomePage";

// Games components
import MemoryGame from "../components/Games/MemoryGame/UIMemoryGame";
import TicTacToe from "../components/Games/TicTacToe/TicTacToe";
import AppTetris from "../components/Games/Tetris/src/AppTetris";

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
