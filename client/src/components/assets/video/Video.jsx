
import React from 'react';
import { Player } from 'video-react';
import "./Video.css";

const Video = (src) => {
    return (
        <>
            <Player
                fluid={false}
                height={400}
                width={750}
                playsInline
                poster="/assets/poster.png"
                src={"../src/components/assets/video/NissimBlack.mp4"}
            />
        </>
    );
};


export default Video;