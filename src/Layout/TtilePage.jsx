import React from "react";
import { Link } from "react-router-dom";
import "./TtitlePage.css";
import TitleText from "../components/assets/TitleText/TitleText";

const TitlePage = ({ title }) => {
  return (
    <div className="TitlePage">
      <Link to={`${title}Page`}>
        <TitleText title={title} />
      </Link>
    </div>
  );
};

export default TitlePage;
