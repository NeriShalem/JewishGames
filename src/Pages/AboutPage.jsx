import React from "react";
import TitleTextPage from "./TitleTextPage";
import "./AboutPage.css";

function AboutPage(props) {
  return (
    <div className="aboutPage">
      <TitleTextPage title={"About"} className="CompTitleTextPage" />
      <div className="parAboutPage">
        <p>
          Our mission is to be the home site for Jewish children who play on the Internet.
        </p>
        <p>
          The internet is a spiritually challenging place.
          We are aware of this plight of the parents who want on the one hand
          to expose their children to using the Internet and on the other hand want to keep them protected.
        </p>
        <p>
          That's why the Jewish games site was created,
          to bring the classic games and new and original games with a Jewish-value orientation,
          to use the children's free time for positive content and connection to the Israeli tradition.
        </p>
        <p>
          Our desire is that every Jewish parent and child who chooses to use the Internet as a tool,
          Will use this tool positively and constructively
          Happy browsing!
        </p>
      </div>
    </div >
  );
}
export default AboutPage;
