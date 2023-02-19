import React, { useState, useRef, useEffect } from "react";
import { HiPause, HiPlay } from "react-icons/hi";
import Song from "../../static/audio.mp3";

const BackSound = () => {
  const [isPlay, setIsPlay] = useState(true);
  const audioEl = useRef();

  const playSong = () => {
    setIsPlay(true);
    audioEl.current.play();
  };
  const pauseSong = () => {
    setIsPlay(false);
    audioEl.current.pause();
  };
  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsPlay(true);
  //     audioEl.current.play();
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <>
      <div className="w-fit z-[9999] fixed top-4 left-4  ">
        <div
          onClick={!isPlay ? playSong : pauseSong}
          className="cursor-pointer  rounded-full  backdrop-blur w-fit  shadow-lg shadow-white/40  transition-all duration-700 delay-75 ease-linear  p-2 bg-gradient-to-tr from-pink-900/80 via-purple-600 to-cyan-900/50"
        >
          {isPlay ? (
            <HiPause
              size={25}
              className={`text-zinc-100/80   shadow rounded-full shadow-black/40 ${
                isPlay === true ? "animate-spin" : "animate-none"
              }`}
            />
          ) : (
            <HiPlay
              size={25}
              className={`text-zinc-100/80   shadow rounded-full shadow-black/40 ${
                isPlay === false ? "animate-none" : "animate-spin"
              }`}
            />
          )}
          <audio ref={audioEl} autoPlay loop>
            <source src={Song} type="audio/mpeg" />
          </audio>
        </div>
      </div>
    </>
  );
};

export default BackSound;
