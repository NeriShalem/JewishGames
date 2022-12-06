import React from "react";
import { useState } from "react";
import "./Container.css";

import TitlePage from "./TtilePage.jsx";
import Pages from "./Pages.jsx";

function Container(props) {
  const [title, setTtitle] = useState("Home");

  return (
    <div className="Container">
      <TitlePage title={title} />
      <Pages setTtitle={setTtitle} />
    </div>
  );
}

export default Container;
