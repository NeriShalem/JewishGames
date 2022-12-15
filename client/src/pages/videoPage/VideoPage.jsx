import React from "react";
import { useState } from "react";

import "./VideoPage.css";

import Video from "../../components/assets/video/Video";

function VideoPage({ setTtitle }) {
  setTtitle("Video");
  return (
    <div className="videoPage">
      <div className="videosInThePage">
        <Video />
      </div>
    </div>
  );
}
export default VideoPage;
