import React from "react";
import MemoryGame from "../components/Games/MemoryGame/UIMemoryGame";
import TicTacToe from "../components/Games/TicTacToe/TicTacToe";
import { Routes, Route, Link } from "react-router-dom";
import GamesPage from "./GaemsPage";
import AboutPage from "./AboutPage";
import VideoPage from "./VideoPage";

function HomePage(props) {
  return (
    <>
      <Routes>
        <Route path="/" element={<div>Hello world</div>} />
        <Route path="/GamesPage" element={<GamesPage />} />
        <Route path="/AboutPage" element={<AboutPage />} />
        <Route path="/VideoPage" element={<VideoPage />} />

        <Route path="/TicTacToe" element={<TicTacToe />} />
        <Route path="/MemoryGame" element={<MemoryGame />} />
      </Routes>
    </>
  );
}

export default HomePage;
