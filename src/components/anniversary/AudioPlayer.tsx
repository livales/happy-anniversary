
import { useEffect, useRef, useState } from "react";

interface AudioPlayerProps {
  audioSrc: string;
}

const AudioPlayer = ({ audioSrc }: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Auto-play music
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

      // Try to play after a short delay
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
        <source src={audioSrc} />
      </audio>

      <button
        onClick={toggleMusic}
        className="fixed top-20 right-4 z-50 bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white/90 transition-all duration-300"
      >
        {isPlaying ? "🔊" : "🔇"}
      </button>
    </>
  );
};

export default AudioPlayer;
