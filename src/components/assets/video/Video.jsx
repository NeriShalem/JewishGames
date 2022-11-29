
import React from 'react';
import { Player } from 'video-react';
import "./Video.css";

const Video = (src) => {

    return (
        <div>
            hello
            <Player
                fluid="false"
                height="200"
                width="200"
                playsInline
                poster="/assets/poster.png"
                src={"../src/components/assets/video/NissimBlack.mp4"}
            />
        </div>
    );
};


export default Video;