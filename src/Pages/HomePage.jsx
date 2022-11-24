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
        <Route path="/" element={<img className="imgHomePage"
          src="https://images.unsplash.com/photo-1553481187-be93c21490a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="game" />} />
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
