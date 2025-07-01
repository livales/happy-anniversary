
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const CakeAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Initial state - empty bowl with ingredients around
    gsap.set('.ingredient', { opacity: 0, scale: 0.8, rotation: 45 });
    gsap.set('.bowl', { opacity: 1 });
    gsap.set('.batter', { opacity: 0, scale: 0 });
    gsap.set('.cake-pan', { opacity: 0, y: 50 });
    gsap.set('.oven', { opacity: 0, scale: 0.8 });
    gsap.set('.final-cake', { opacity: 0, scale: 0.5, rotation: -10 });

    // Animation 1: Ingredients fly into bowl (Section 2 - Ingredients)
    ScrollTrigger.create({
      trigger: '[data-section="ingredients"]',
      start: 'top 60%',
      end: 'bottom 40%',
      animation: gsap.timeline()
        .to('.ingredient', {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'back.out(1.7)'
        })
        .to('.ingredient', {
          x: 0,
          y: 0,
          scale: 0.3,
          opacity: 0.7,
          duration: 1,
          stagger: 0.1,
          ease: 'power2.inOut'
        }, '-=0.5')
    });

    // Animation 2: Mixing and batter (Section 3 - Instructions)
    ScrollTrigger.create({
      trigger: '[data-section="instructions"]',
      start: 'top 60%',
      end: 'bottom 40%',
      animation: gsap.timeline()
        .to('.batter', {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'elastic.out(1, 0.3)'
        })
        .to('.cake-pan', {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'bounce.out'
        }, '-=0.5')
    });

    // Animation 3: Oven baking (Section 4 - Challenge)
    ScrollTrigger.create({
      trigger: '[data-section="challenge"]',
      start: 'top 60%',
      end: 'bottom 40%',
      animation: gsap.timeline()
        .to('.oven', {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'power2.out'
        })
        .to('.cake-pan', {
          scale: 0.8,
          y: -20,
          duration: 1,
          ease: 'power2.inOut'
        }, '-=0.5')
        .to('.oven-heat', {
          opacity: 0.8,
          duration: 0.5,
          repeat: -1,
          yoyo: true,
          ease: 'power2.inOut'
        })
    });

    // Animation 4: Final cake reveal (Section 6 - Final Result)
    ScrollTrigger.create({
      trigger: '[data-section="final"]',
      start: 'top 60%',
      end: 'bottom 40%',
      animation: gsap.timeline()
        .to('.oven', {
          opacity: 0,
          scale: 0.8,
          duration: 0.5,
          ease: 'power2.in'
        })
        .to('.final-cake', {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 1.5,
          ease: 'elastic.out(1, 0.5)'
        })
        .to('.sprinkles', {
          opacity: 1,
          y: -10,
          duration: 2,
          stagger: 0.1,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut'
        }, '-=1')
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full relative">
      <svg viewBox="0 0 300 300" className="w-full h-full">
        {/* Empty Bowl */}
        <ellipse cx="150" cy="200" rx="60" ry="20" fill="#F5DEB3" stroke="#D2B48C" strokeWidth="2" className="bowl" />
        
        {/* Ingredients around bowl */}
        <g className="ingredient">
          <circle cx="80" cy="100" r="15" fill="#FF69B4" />
          <text x="80" y="105" textAnchor="middle" fontSize="10" fill="white">❤️</text>
        </g>
        <g className="ingredient">
          <circle cx="220" cy="120" r="15" fill="#87CEEB" />
          <text x="220" y="125" textAnchor="middle" fontSize="10" fill="white">⏳</text>
        </g>
        <g className="ingredient">
          <circle cx="90" cy="180" r="15" fill="#FFD700" />
          <text x="90" y="185" textAnchor="middle" fontSize="10" fill="white">💪</text>
        </g>
        <g className="ingredient">
          <circle cx="210" cy="180" r="15" fill="#98FB98" />
          <text x="210" y="185" textAnchor="middle" fontSize="10" fill="white">🤝</text>
        </g>

        {/* Batter in bowl */}
        <ellipse cx="150" cy="195" rx="50" ry="15" fill="#F4A460" className="batter" />

        {/* Cake Pan */}
        <rect x="120" y="220" width="60" height="30" rx="5" fill="#C0C0C0" stroke="#A9A9A9" strokeWidth="2" className="cake-pan" />
        <rect x="125" y="225" width="50" height="20" rx="3" fill="#DEB887" className="cake-pan" />

        {/* Oven */}
        <rect x="100" y="160" width="100" height="80" rx="10" fill="#696969" stroke="#2F4F4F" strokeWidth="2" className="oven" />
        <rect x="110" y="170" width="80" height="60" rx="5" fill="#1C1C1C" className="oven" />
        <rect x="105" y="200" width="90" height="5" fill="#FF4500" className="oven-heat" opacity="0" />

        {/* Final Cake */}
        <g className="final-cake">
          <ellipse cx="150" cy="180" rx="40" ry="12" fill="#F4A460" />
          <rect x="110" y="160" width="80" height="20" rx="5" fill="#DEB887" />
          <ellipse cx="150" cy="160" rx="40" ry="12" fill="#F0E68C" />
          <rect x="125" y="150" width="50" height="5" fill="#FF69B4" />
          <circle cx="150" cy="145" r="3" fill="#FF0000" />
        </g>

        {/* Sprinkles */}
        <g className="sprinkles">
          {[...Array(8)].map((_, i) => (
            <rect
              key={i}
              x={130 + (i * 5)}
              y={140 + Math.random() * 20}
              width="2"
              height="4"
              fill={['#FF69B4', '#00CED1', '#FFD700', '#98FB98'][i % 4]}
              opacity="0"
            />
          ))}
        </g>
      </svg>
    </div>
  );
};

export default CakeAnimation;
