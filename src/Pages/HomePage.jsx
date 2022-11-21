import React from "react";
import "./HomePage.css";

import MemoryGame from "../components/Games/MemoryGame/UIMemoryGame";
import TicTacToe from "../components/Games/TicTacToe/TicTacToe";
import { Routes, Route, Link } from "react-router-dom";
import GamesPage from "./GamesPage";
import AboutPage from "./AboutPage";
import VideoPage from "./VideoPage";
import AppTetris from "../components/Games/Tetris/src/AppTetris";

function HomePage(props) {
  return (
    <div className="boardHomePage">
      <Routes>
        <Route path="/GamesPage" element={<GamesPage />} />
        <Route path="/AboutPage" element={<AboutPage />} />
        <Route path="/VideoPage" element={<VideoPage />} />

        <Route path="/Tetris" element={<AppTetris />} />
        <Route path="/TicTacToe" element={<TicTacToe />} />
        <Route path="/MemoryGame" element={<MemoryGame />} />
      </Routes>
    </div>
  );
}

export default HomePage;
