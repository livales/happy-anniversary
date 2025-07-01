
import { useEffect, useState } from 'react';
import { gsap } from 'gsap';

interface UniversalLoadingProps {
  isLoading: boolean;
}

const UniversalLoading = ({ isLoading }: UniversalLoadingProps) => {
  if (!isLoading) return null;

  useEffect(() => {
    const tl = gsap.timeline();
    
    // Animate hearts floating up
    tl.fromTo('.loading-heart', {
      scale: 0,
      y: 100,
      opacity: 0,
    }, {
      scale: 1,
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: "back.out(1.7)"
    })
    // Animate text appearing
    .fromTo('.loading-text', {
      opacity: 0,
      y: 30,
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out"
    }, "-=0.5")
    // Animate hearts pulsing
    .to('.loading-heart', {
      scale: 1.2,
      duration: 0.5,
      yoyo: true,
      repeat: -1,
      ease: "power2.inOut"
    });

    return () => {
      tl.kill();
    };
  }, [isLoading]);

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-pink-100 via-purple-50 to-rose-100 flex items-center justify-center">
      <div className="text-center">
        <div className="flex justify-center items-center space-x-4 mb-8">
          <div className="loading-heart text-6xl">💕</div>
          <div className="loading-heart text-6xl">💖</div>
          <div className="loading-heart text-6xl">💕</div>
        </div>
        <div className="loading-text font-dancing text-4xl md:text-5xl text-pink-600 font-bold">
          I Love You
        </div>
        <div className="loading-text mt-4 text-lg text-pink-500 opacity-75">
          Loading our memories...
        </div>
      </div>
    </div>
  );
};

export default UniversalLoading;
