import React from "react";
import Video from "../components/assets/video/Video";
import TitleTextPage from "./TitleTextPage";

function VideoPage(props) {
  return (
    <div className="videoPage">
      <div className="titleVideoPage">
        <TitleTextPage title={"Video"} />
      </div>
      <div className="videosInThePage">
        <Video />
      </div>
      {/* "https://www.youtube.com/watch?v=GlBCRg-6K_s" 
       "https://www.youtube.com/watch?v=-V0CBmsvAok" 
       "https://www.youtube.com/watch?v=17GhyAoGC2E&t=17s" 
       "https://www.youtube.com/watch?v=hu7Wa2URXi4&t=759s" 
       "https://www.youtube.com/watch?v=gBqJLMoTgbE&t=25s"  */}
    </div>
  );
}
export default VideoPage;
