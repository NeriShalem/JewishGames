import React from "react";
import { Howl, howler } from "howler";
import { useState, useEffect } from "react";
import soundMP3 from "../../../assets/sound/hb.mp3";
import soundWAV from "../../../assets/sound/hb.wav";
import imgPlay from "../../../assets/img/icon/sound/play.jpeg";
import imgMute from "../../../assets/img/icon/sound/mute.jpeg";
import imgUnMute from "../../../assets/img/icon/sound/unmute.jpeg";

// /assets/sound/hb.wav";

const sounds = {
  backgroundSound: new Howl({
    src: [soundMP3, soundWAV],
    html5: true,
    autoplay: true,
    loop: true,
  }),
};

let stylePlay = { cursor: "pointer" },
  styleMute = { display: "none" };

function Sound() {
  const [backSoundPlay, setBackSoundPlay] = useState(true);
  const [imgShow, setImgShow] = useState();

  function muteBackgroundSound() {
    sounds.backgroundSound.mute(!sounds.backgroundSound._muted);
    // בשביל להחליף את התמונה בין שמיוט לאנמיוט
    sounds.backgroundSound._muted === false
      ? setImgShow(imgUnMute)
      : setImgShow(imgMute);
  }

  function play() {
    backSoundPlay && sounds.backgroundSound.play();
    setBackSoundPlay(false);
    stylePlay = { display: "none" };
    styleMute = { cursor: "pointer" };
    setImgShow(imgUnMute);
  }

  return (
    <>
      <div className={"buttonPlay"} style={stylePlay} onClick={play}>
        <img src={imgPlay} alt="play" height="80" width="100" />
      </div>
      <div
        className={"buttonMute"}
        onClick={muteBackgroundSound}
        style={styleMute}
      >
        <img src={imgShow} alt="play" height="80" width="100" />
      </div>
    </>
  );
}

export default Sound;
