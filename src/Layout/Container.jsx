import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./Container.css";

// pages in site
import GamesPage from "../Pages/GamesPage";
import AboutPage from "../Pages/AboutPage";
import VideoPage from "../Pages/VideoPage";
import HomePage from "../Pages/HomePage";

// Games components
import MemoryGame from "../components/Games/MemoryGame/UIMemoryGame";
import TicTacToe from "../components/Games/TicTacToe/TicTacToe";
import AppTetris from "../components/Games/Tetris/src/AppTetris";


function Container(props) {
  return (
    <div className="Container">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/GamesPage" element={<GamesPage />} />
        <Route path="/AboutPage" element={<AboutPage />} />
        <Route path="/VideoPage" element={<VideoPage />} />

        <Route path="/Tetris" element={<AppTetris />} />
        <Route path="/TicTacToe" element={<TicTacToe />} />
        <Route path="/MemoryGame" element={<MemoryGame />} />
        <Route path="/Soon" element={<h1>Soon</h1>} />
      </Routes>
    </div>
  );
}

export default Container
  ;
