import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ArrowLeft, Clock, Heart } from "lucide-react";

const SeeYou2028 = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const heartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in container
      gsap.fromTo(
        containerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.5, ease: "power2.out" }
      );

      // Animate main text
      gsap.fromTo(
        textRef.current?.children || [],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.3,
          delay: 0.5,
          ease: "power3.out",
        }
      );

      // Heartbeat animation
      gsap.to(heartRef.current, {
        scale: 1.2,
        duration: 0.8,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f0f23 100%)",
      }}
    >
      {/* Subtle stars background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Back button */}
      <Link
        to="/surat"
        className="absolute top-24 left-6 text-white/60 hover:text-white transition-colors flex items-center gap-2 z-10"
      >
        <ArrowLeft className="w-5 h-5" />
        <span className="text-sm">Back</span>
      </Link>

      {/* Main content */}
      <div ref={textRef} className="text-center px-6 max-w-2xl mx-auto z-10">
        {/* Clock icon */}
        <div className="mb-8 flex justify-center">
          <div className="p-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
            <Clock className="w-12 h-12 text-blue-300/80" />
          </div>
        </div>

        {/* Main message */}
        <h1 className="font-dancing text-5xl md:text-7xl text-white mb-6 leading-tight">
          See You in 2028
        </h1>

        <p className="text-xl md:text-2xl text-blue-200/80 mb-8 font-light">
          I will be better
        </p>

        {/* Heart */}
        <div ref={heartRef} className="flex justify-center mb-12">
          <Heart className="w-8 h-8 text-pink-400 fill-pink-400/50" />
        </div>

        {/* Subtle message */}
        <p className="text-white/40 text-sm max-w-md mx-auto leading-relaxed">
          Distance and time are just numbers. What matters is the promise we keep in our hearts. 
          Until we meet again, I'll keep growing, learning, and becoming the person you deserve.
        </p>

        {/* Year indicator */}
        <div className="mt-16 flex items-center justify-center gap-8 text-white/30">
          <div className="text-center">
            <div className="text-2xl font-light">2025</div>
            <div className="text-xs mt-1">Now</div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-16 h-px bg-gradient-to-r from-white/20 to-white/40" />
            <Heart className="w-4 h-4 text-pink-400/50" />
            <div className="w-16 h-px bg-gradient-to-l from-white/20 to-white/40" />
          </div>
          <div className="text-center">
            <div className="text-2xl font-light text-blue-300/60">2028</div>
            <div className="text-xs mt-1">Together</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeeYou2028;
