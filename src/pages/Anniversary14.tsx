import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import UniversalLoading from "../components/UniversalLoading";
import { usePageLoading } from "../hooks/usePageLoading";
import CakeAnimation from "../components/anniversary14/CakeAnimation";
import Section1Title from "../components/anniversary14/Section1Title";
import Section2Ingredients from "../components/anniversary14/Section2Ingredients";
import Section3Instructions from "../components/anniversary14/Section3Instructions";
import Section4Challenge from "../components/anniversary14/Section4Challenge";
import Section5TeamChef from "../components/anniversary14/Section5TeamChef";
import Section6FinalResult from "../components/anniversary14/Section6FinalResult";
import Section7Closing from "../components/anniversary14/Section7Closing";
import lauvilikemebetter from "../assets/lauv-i-like-me-better.mp3";
import AudioPlayer from "../components/anniversary/AudioPlayer";
import { useScrollColorTransition } from "../hooks/useScrollColorTransition";
import ScrollFloatingParticles from "../components/anniversary14/ScrollFloatingParticles";

gsap.registerPlugin(ScrollTrigger);

const Anniversary14 = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { currentBgColor } = useScrollColorTransition();
  const { isLoading } = usePageLoading(2500);

  useEffect(() => {
    if (isLoading) return;

    // Initial page setup
    gsap.set("body", { overflow: "hidden" });

    const timer = setTimeout(() => {
      gsap.set("body", { overflow: "auto" });
    }, 1000);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [isLoading]);

  return (
    <>
      <UniversalLoading isLoading={isLoading} />
      <div
        ref={containerRef}
        className="relative min-h-screen"
        style={{
          background: currentBgColor,
          transition: "background 1s ease-in-out",
        }}
      >
        {/* <AudioPlayer14 /> */}
        <AudioPlayer audioSrc={lauvilikemebetter} />
        
        {/* Progressive Floating Particles */}
        <ScrollFloatingParticles />

        {/* Fixed Cake Animation */}
        <div className="fixed top-20 right-4 lg:right-8 z-30 w-64 h-64 lg:w-80 lg:h-80">
          <CakeAnimation />
        </div>

        {/* Content Sections */}
        <div className="relative z-10">
          <Section1Title />
          <Section2Ingredients />
          <Section3Instructions />
          <Section4Challenge />
          <Section5TeamChef />
          <Section6FinalResult />
          <Section7Closing />
        </div>
      </div>
    </>
  );
};

export default Anniversary14;
