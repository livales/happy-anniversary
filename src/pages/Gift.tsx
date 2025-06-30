
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Gift = () => {
  const flowerRef = useRef<HTMLDivElement>(null);
  const bearsRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const flower = flowerRef.current;
    const bears = bearsRef.current;
    const particles = particlesRef.current;

    if (!flower || !bears || !particles) return;

    // Timeline for flower growth animation
    const flowerTimeline = gsap.timeline({ delay: 0.5 });
    
    flowerTimeline
      .fromTo('.flower-stem', 
        { height: 0 },
        { height: '120px', duration: 2, ease: 'power2.out' }
      )
      .fromTo('.flower-bud',
        { scale: 0, rotation: 0 },
        { scale: 1, rotation: 360, duration: 1.5, ease: 'back.out(1.7)' },
        '-=0.5'
      )
      .fromTo('.petal',
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'back.out(1.7)' },
        '-=0.5'
      );

    // Bears animation
    const bearsTimeline = gsap.timeline({ delay: 3 });
    
    bearsTimeline
      .fromTo('.bear-left',
        { x: -200, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.5, ease: 'power2.out' }
      )
      .fromTo('.bear-right',
        { x: 200, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.5, ease: 'power2.out' },
        '-=1'
      )
      .to(['.bear-left', '.bear-right'],
        { x: 0, duration: 0.5, ease: 'power2.inOut' }
      );

    // Floating particles animation
    gsap.set('.particle', { 
      x: () => gsap.utils.random(-50, 50),
      y: () => gsap.utils.random(-50, 50),
      scale: () => gsap.utils.random(0.5, 1.5)
    });

    gsap.to('.particle', {
      y: '-=20',
      duration: 2,
      ease: 'power1.inOut',
      stagger: 0.1,
      repeat: -1,
      yoyo: true
    });

    gsap.to('.particle', {
      rotation: 360,
      duration: 4,
      ease: 'none',
      repeat: -1
    });

  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100 relative overflow-hidden">
      {/* Floating Particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle absolute text-pink-300 text-2xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            {i % 3 === 0 ? '💕' : i % 3 === 1 ? '✨' : '🌸'}
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center min-h-screen pt-20 pb-16 px-4">
        <div className="text-center space-y-12">
          {/* Title */}
          <div className="space-y-4">
            <h1 className="font-dancing text-5xl lg:text-7xl text-pink-600 mb-4">
              Hadiah Untukmu
            </h1>
            <p className="text-gray-600 text-lg max-w-md mx-auto">
              Sebuah hadiah kecil dari hati yang penuh cinta
            </p>
          </div>

          {/* Flower Animation - Fixed positioning */}
          <div ref={flowerRef} className="relative flex flex-col items-center h-64">
            <div className="flower-bud relative z-10">
              <div className="w-16 h-16 bg-yellow-300 rounded-full relative">
                {/* Petals */}
                <div className="petal absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-12 bg-pink-400 rounded-full"></div>
                <div className="petal absolute -right-4 top-1/2 transform -translate-y-1/2 w-12 h-8 bg-pink-400 rounded-full"></div>
                <div className="petal absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-12 bg-pink-400 rounded-full"></div>
                <div className="petal absolute -left-4 top-1/2 transform -translate-y-1/2 w-12 h-8 bg-pink-400 rounded-full"></div>
                <div className="petal absolute -top-3 -right-3 w-10 h-10 bg-pink-300 rounded-full"></div>
                <div className="petal absolute -top-3 -left-3 w-10 h-10 bg-pink-300 rounded-full"></div>
                <div className="petal absolute -bottom-3 -right-3 w-10 h-10 bg-pink-300 rounded-full"></div>
                <div className="petal absolute -bottom-3 -left-3 w-10 h-10 bg-pink-300 rounded-full"></div>
              </div>
            </div>
            <div className="flower-stem bg-green-400 w-2 rounded-full mt-0"></div>
          </div>

          {/* Bears Animation */}
          <div ref={bearsRef} className="relative flex items-center justify-center space-x-8 h-32">
            <div className="bear-left text-6xl">🧸</div>
            <div className="bear-right text-6xl">🧸</div>
          </div>

          {/* Message */}
          <div className="space-y-4 max-w-lg mx-auto">
            <p className="text-gray-700 text-lg italic">
              "Seperti bunga yang mekar dengan indah, cinta kita akan terus tumbuh dan berkembang."
            </p>
            <p className="font-dancing text-2xl text-pink-600">
              Dengan seluruh cinta,
            </p>
            <div className="text-4xl">💕</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gift;
