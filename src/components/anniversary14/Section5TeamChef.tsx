
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Section5TeamChef = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    ScrollTrigger.create({
      trigger: section,
      start: 'top 60%',
      end: 'bottom 40%',
      animation: gsap.timeline()
        .fromTo(
          section.querySelectorAll('.animate-in'),
          { opacity: 0, scale: 0.9 },
          {
            opacity: 1,
            scale: 1,
            duration: 1,
            stagger: 0.2,
            ease: 'back.out(1.7)'
          }
        )
    });
  }, []);

  return (
    <section 
      ref={sectionRef}
      data-section="team"
      className="min-h-screen flex items-center justify-center px-6 lg:px-12 py-20"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="animate-in text-3xl lg:text-5xl font-bold text-green-700 mb-12 font-serif">
          Tim Koki yang Hebat 👨‍🍳👩‍🍳
        </h2>
        
        <div className="animate-in mb-12">
          <div className="relative overflow-hidden rounded-full w-80 h-80 mx-auto shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=500&h=500&fit=crop&auto=format"
              alt="Team Chef"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>

        <div className="animate-in space-y-6 max-w-3xl mx-auto">
          <p className="text-lg lg:text-xl text-gray-700 leading-relaxed font-medium bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            Aku seneng banget kita jadi tim koki yang hebat buat resep ini. Kamu jago banget nambahin 'kegigihan' dan 'kesabaran', sementara aku mungkin lebih sering jadi yang bagian ngicipin hehe, atau kadang malah bikin adonannya berantakan.
          </p>
          <p className="text-lg lg:text-xl text-gray-700 leading-relaxed font-medium bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            Tapi yang paling penting, kita selalu bisa beresin semuanya bareng-bareng.
          </p>
        </div>

        {/* Chef badges */}
        <div className="animate-in flex justify-center space-x-8 mt-12">
          <div className="bg-yellow-400 rounded-full p-4 shadow-lg transform hover:scale-110 transition-transform">
            <div className="text-3xl">👨‍🍳</div>
          </div>
          <div className="bg-pink-400 rounded-full p-4 shadow-lg transform hover:scale-110 transition-transform">
            <div className="text-3xl">❤️</div>
          </div>
          <div className="bg-green-400 rounded-full p-4 shadow-lg transform hover:scale-110 transition-transform">
            <div className="text-3xl">👩‍🍳</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5TeamChef;
