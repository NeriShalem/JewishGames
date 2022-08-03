import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import Sound from "../components/assets/sound/Sound";
import logoGameWorld from "../assets/img/logo/logoGameWorld.png";
function NavBar(props) {
  return (
    <div className="navBar">
      <Link className="home" to="/">
        <img
          className="logoGameWorld"
          src={logoGameWorld}
          alt="logoGameWorld"
        />
      </Link>
      <div className="navBarLinks">
        <Link className="homeLink" to="/">
          Home
        </Link>

        <Link className="gamePageLink" to="/GamesPage">
          Games
        </Link>

        <Link className="VideoLink" to="/VideoPage">
          Video
        </Link>

        <Link className="AboutPageLink" to="/AboutPage">
          About
        </Link>
      </div>
      <div className="sound">
        <Sound />
      </div>
    </div>
  );
}

export default NavBar;
