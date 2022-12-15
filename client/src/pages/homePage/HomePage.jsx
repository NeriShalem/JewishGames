import React from "react";
import { useState } from "react";

function HomePage({ setTtitle }) {
  setTtitle("Home");
  return (
    <div className="homePage">
      <img
        className="imgHomePage"
        src="https://images.unsplash.com/photo-1553481187-be93c21490a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        alt="game"
      />
    </div>
  );
}
export default HomePage;
