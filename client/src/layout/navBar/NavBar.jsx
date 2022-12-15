import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import Sound from "../../components/assets/sound/Sound";
import logoGameWorld from "../../assets/img/logo/logoGameWorld.svg";

function NavBar(props) {
  return (
    <div>
      <div className="navBar">
        <div className="boardLogoNavBar">
          <Link className="home" to="/">
            <img
              className="logoGameWorld"
              src={logoGameWorld}
              alt="logoGameWorld"
            />
          </Link>
        </div>
        <div className="sound">
          <Sound />
        </div>
        <Link className="navBarLink homeLink" to="/">
          Home
        </Link>

        <Link className="navBarLink gamePageLink" to="/GamesPage">
          Games
        </Link>

        <Link className="navBarLink VideoLink" to="/VideoPage">
          Video
        </Link>

        <Link className="navBarLink AboutPageLink" to="/AboutPage">
          About
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
