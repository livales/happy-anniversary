import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ScrollFloatingParticles = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const particleIntervals = useRef<NodeJS.Timeout[]>([]);

  useEffect(() => {
    // Track scroll progress for the entire page
    ScrollTrigger.create({
      trigger: "body",
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        setScrollProgress(self.progress);
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      particleIntervals.current.forEach(clearInterval);
      particleIntervals.current = [];
    };
  }, []);

  // Optimized particle creation
  const createParticle = useCallback(
    (type: "heart" | "flower") => {
      const container = containerRef.current;
      if (!container) return;
      const particle = document.createElement("div");
      const symbols = {
        heart: ["💕", "💖", "💗"],
        flower: ["🌸", "🌺", "🌷"],
      };

      particle.innerHTML =
        symbols[type][Math.floor(Math.random() * symbols[type].length)];
      particle.className = "absolute text-lg pointer-events-none z-10";
      particle.style.left = Math.random() * 100 + "vw";
      particle.style.opacity = String(0.3 + scrollProgress * 0.3);
      particle.style.fontSize = `${0.8 + scrollProgress * 0.5}rem`;

      container.appendChild(particle);

      const duration = 6 + Math.random() * 4;

      gsap.fromTo(
        particle,
        {
          y: "-10vh",
          rotation: 0,
          scale: 0.3,
        },
        {
          y: "110vh",
          rotation: 180 + Math.random() * 180,
          scale: 0.6 + Math.random() * 0.3,
          x: (Math.random() - 0.5) * 150,
          duration,
          ease: "power1.inOut",
          onComplete: () => particle.remove(),
        }
      );
    },
    [scrollProgress]
  );

  useEffect(() => {
    if (!containerRef.current) return;

    // Calculate particles based on scroll progress - reduced for performance
    const baseParticleCount = 1;
    const maxParticleCount = 5;
    const currentParticleCount = Math.floor(
      baseParticleCount +
        (maxParticleCount - baseParticleCount) * scrollProgress
    );

    // Create particles from start of scroll - optimized
    const particleInterval = setInterval(() => {
      if (scrollProgress > 0.05 && currentParticleCount > 0) {
        createParticle(Math.random() > 0.7 ? "heart" : "flower");
      }
    }, 4000);

    particleIntervals.current.push(particleInterval);

    return () => {
      clearInterval(particleInterval);
    };
  }, [scrollProgress, createParticle]);

  // Create floating background hearts that intensify with scroll
  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    const createFloatingHeart = () => {
      const heart = document.createElement("div");
      const hearts = ["💕", "💖", "💗"];
      heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
      heart.className = "absolute pointer-events-none z-5";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.top = Math.random() * 100 + "vh";
      heart.style.opacity = String(0.15 + scrollProgress * 0.2);
      heart.style.fontSize = `${2 + scrollProgress * 2}rem`;

      container.appendChild(heart);

      gsap.to(heart, {
        y: "-=50",
        x: "+=30",
        rotation: 15,
        duration: 8,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      setTimeout(() => heart.remove(), 16000);
    };

    const floatingInterval = setInterval(() => {
      if (scrollProgress > 0.2) {
        createFloatingHeart();
      }
    }, 4000 - scrollProgress * 1500);

    return () => {
      clearInterval(floatingInterval);
    };
  }, [scrollProgress]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-10 overflow-hidden"
    />
  );
};

export default ScrollFloatingParticles;
