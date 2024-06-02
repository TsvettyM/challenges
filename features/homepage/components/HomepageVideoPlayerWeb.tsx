import { useRef, useState } from "react";

const HomepageVideoPlayerWeb = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  function handlePlay() {
    if (videoRef.current) {
      if (isPlaying === false) {
        setIsPlaying(true);
        videoRef.current.play();
      } else {
        setIsPlaying(false);
        videoRef.current.pause();
      }
    }
  }

  function handleReset() {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  }

  return (
    <section className="homepage__video--player">
      <div className="player__container w-[770px]">
        <video className="h-full" ref={videoRef}>
          <source src="https://ik.imagekit.io/ikmedia/example_video.mp4" />
        </video>

        <div className="h-10 p-3 bg-slate-300">
          <button type="button" onClick={handlePlay}>
            {isPlaying ? "pause" : "play"}
          </button>

          <button type="button" onClick={handleReset}>
            reset
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomepageVideoPlayerWeb;
