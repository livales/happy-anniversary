import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const useScrollColorTransition = () => {
  const [currentBgColor, setCurrentBgColor] = useState(
    "linear-gradient(135deg, #FBF6ED 0%, #FDEEF1 50%, #F8E8EC 100%)"
  );

  const colorStops = [
    "linear-gradient(135deg, #FBF6ED 0%, #FDEEF1 50%, #F8E8EC 100%)", // Cream & soft pink
    "linear-gradient(135deg, #FFF5E6 0%, #FFE8CC 50%, #FFDAB3 100%)", // Warm butter
    "linear-gradient(135deg, #FFF8DC 0%, #FFFACD 50%, #FFEB9C 100%)", // Light yellow
    // "linear-gradient(135deg, #FFE4B5 0%, #FFDAB9 50%, #FFA500 30%)", // Orange warmth
    "linear-gradient(135deg, #FF6B6B 20%, #FFE066 50%, #FF8E53 100%)", // Challenge heat
    "linear-gradient(135deg, #FFEB3B 0%, #FFF59D 50%, #FFFDE7 100%)", // Bright optimistic
    "linear-gradient(135deg, #FFFEF7 0%, #FFFACD 50%, #FFF8DC 100%)", // Final celebration
  ];

  useEffect(() => {
    const sections = document.querySelectorAll("[data-section]");

    sections.forEach((section, index) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top 50%",
        end: "bottom 50%",
        onEnter: () => {
          setCurrentBgColor(
            colorStops[index] || colorStops[colorStops.length - 1]
          );
        },
        onEnterBack: () => {
          setCurrentBgColor(colorStops[index] || colorStops[0]);
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return { currentBgColor };
};
