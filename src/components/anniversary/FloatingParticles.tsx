
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const FloatingParticles = () => {
  const heartsContainerRef = useRef<HTMLDivElement>(null);
  const flowersContainerRef = useRef<HTMLDivElement>(null);

  // Falling hearts animation
  useEffect(() => {
    const createHeart = () => {
      if (!heartsContainerRef.current) return;

      const heart = document.createElement("div");
      heart.innerHTML = "💖";
      heart.className = "absolute text-2xl pointer-events-none z-10";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.animationDuration = Math.random() * 3 + 2 + "s";
      heart.style.opacity = "0.7";

      heartsContainerRef.current.appendChild(heart);

      gsap.to(heart, {
        y: "100vh",
        rotation: 360,
        duration: 5,
        ease: "none",
        onComplete: () => heart.remove(),
      });
    };

    const heartInterval = setInterval(createHeart, 3000);
    return () => clearInterval(heartInterval);
  }, []);

  // Falling flowers animation
  useEffect(() => {
    const createFlower = () => {
      if (!flowersContainerRef.current) return;

      const flowers = ["🌸", "🌺", "🌻", "🌷", "🌹"];
      const flower = document.createElement("div");
      flower.innerHTML = flowers[Math.floor(Math.random() * flowers.length)];
      flower.className = "absolute text-xl pointer-events-none z-10";
      flower.style.left = Math.random() * 100 + "vw";
      flower.style.opacity = "0.6";

      flowersContainerRef.current.appendChild(flower);

      gsap.to(flower, {
        y: "100vh",
        rotation: Math.random() * 360,
        x: (Math.random() - 0.5) * 200,
        duration: Math.random() * 3 + 4,
        ease: "none",
        onComplete: () => flower.remove(),
      });
    };

    const flowerInterval = setInterval(createFlower, 2000);
    return () => clearInterval(flowerInterval);
  }, []);

  return (
    <>
      <div
        ref={heartsContainerRef}
        className="fixed inset-0 pointer-events-none z-10"
      />
      <div
        ref={flowersContainerRef}
        className="fixed inset-0 pointer-events-none z-10"
      />
    </>
  );
};

export default FloatingParticles;
