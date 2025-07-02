import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ScrollFloatingParticles = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

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
    };
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    
    // Calculate particles based on scroll progress
    const baseParticleCount = 3;
    const maxParticleCount = 15;
    const currentParticleCount = Math.floor(
      baseParticleCount + (maxParticleCount - baseParticleCount) * scrollProgress
    );

    // Create particles
    const createParticle = (type: "heart" | "flower") => {
      const particle = document.createElement("div");
      const symbols = {
        heart: ["💕", "💖", "💗", "💝", "❤️"],
        flower: ["🌸", "🌺", "🌻", "🌷", "🌹", "🌼"],
      };
      
      particle.innerHTML = symbols[type][Math.floor(Math.random() * symbols[type].length)];
      particle.className = "absolute text-lg pointer-events-none z-10";
      particle.style.left = Math.random() * 100 + "vw";
      particle.style.opacity = String(0.4 + scrollProgress * 0.4);
      particle.style.fontSize = `${1 + scrollProgress}rem`;

      container.appendChild(particle);

      const duration = 4 + Math.random() * 3;
      const delay = Math.random() * 2;

      gsap.fromTo(
        particle,
        {
          y: "100vh",
          rotation: 0,
          scale: 0.5,
        },
        {
          y: "-10vh",
          rotation: 360 + Math.random() * 360,
          scale: 0.8 + Math.random() * 0.4,
          x: (Math.random() - 0.5) * 200,
          duration,
          delay,
          ease: "none",
          onComplete: () => particle.remove(),
        }
      );
    };

    // Create particles based on scroll progress
    const particleInterval = setInterval(() => {
      if (scrollProgress > 0.1) {
        for (let i = 0; i < currentParticleCount; i++) {
          setTimeout(() => {
            createParticle(Math.random() > 0.6 ? "heart" : "flower");
          }, i * 300);
        }
      }
    }, 2000);

    return () => {
      clearInterval(particleInterval);
    };
  }, [scrollProgress]);

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
      if (scrollProgress > 0.3) {
        createFloatingHeart();
      }
    }, 3000 - scrollProgress * 2000);

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