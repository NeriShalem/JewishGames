import React from "react";
import "./TitleTextPage.css"
const TitleTextPage = ({ title }) => {

    return (

        <div className="titleTextPage">
            <div className="titleText">
                <h2>{title}</h2>
                <h2>{title}</h2>
            </div>

            <hr className={"line"} />
        </div>
    )

}

export default TitleTextPage;

