
import { useEffect, useRef, useState } from "react";

const AudioPlayer14 = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const playAudio = async () => {
        try {
          await audio.play();
          setIsPlaying(true);
        } catch (error) {
          console.log("Auto-play prevented by browser");
        }
      };

      setTimeout(playAudio, 1000);
    }
  }, []);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        audio.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        loop
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src="https://www.soundjay.com/misc/sounds/magic-chime-02.wav" />
      </audio>

      <button
        onClick={toggleMusic}
        className="fixed top-24 right-4 z-50 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-all duration-300 hover:scale-110"
      >
        <div className="flex items-center space-x-2">
          <span className="text-xl">
            {isPlaying ? "🔊" : "🔇"}
          </span>
          <span className="text-sm font-medium text-gray-700">
            {isPlaying ? "Playing" : "Paused"}
          </span>
        </div>
      </button>
    </>
  );
};

export default AudioPlayer14;
