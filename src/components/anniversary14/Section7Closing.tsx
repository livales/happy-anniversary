
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Section7Closing = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Floating hearts
    gsap.to(section.querySelectorAll('.floating-heart'), {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      stagger: 0.5,
      ease: 'power1.inOut'
    });

    ScrollTrigger.create({
      trigger: section,
      start: 'top 60%',
      end: 'bottom 40%',
      animation: gsap.timeline()
        .fromTo(
          section.querySelectorAll('.fade-in'),
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.3,
            ease: 'power2.out'
          }
        )
    });
  }, []);

  return (
    <section 
      ref={sectionRef}
      data-section="closing"
      className="min-h-screen flex items-center justify-center px-6 lg:px-12 py-20"
    >
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <h2 className="fade-in text-3xl lg:text-5xl font-bold text-pink-700 font-serif">
          Thank You, My Love 💕
        </h2>
        
        <div className="fade-in relative">
          <img 
            src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=500&h=400&fit=crop&auto=format"
            alt="Our romantic moment"
            className="w-full h-80 object-cover rounded-3xl shadow-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-3xl"></div>
        </div>

        <div className="fade-in space-y-6">
          <p className="text-lg lg:text-xl text-gray-700 leading-relaxed font-medium bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            Terima kasih yaa sayang, udah mau jadi koki terbaik buat hubungan kita. Semangat terus yaa buat semua yang lagi kamu kerjain.
          </p>
          
          <p className="text-2xl lg:text-3xl font-bold text-pink-600">
            I love you more than anything, cantikkuu. ❤️
          </p>
        </div>

        {/* Song section */}
        <div className="fade-in bg-gradient-to-r from-purple-100 to-pink-100 rounded-3xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-purple-700 mb-4 font-serif">
            🎵 Ini lagu yang cocok buat kita yang lagi "masak" masa depan bareng:
          </h3>
          
          <div className="text-xl font-semibold text-purple-600 mb-4">
            "I Like Me Better" - Lauv
          </div>
          
          <div className="text-lg text-gray-700 italic leading-relaxed">
            <p>I like me better when I'm with you</p>
            <p>I knew from the first time, I'd stay for a long time 'cause</p>
            <p>I like me better when I'm with you</p>
          </div>
        </div>

        <div className="fade-in text-3xl font-bold text-pink-600 relative">
          Aku sayang kamu selaluuuu!
          
          {/* Floating hearts */}
          <div className="floating-heart absolute -top-8 -left-8 text-2xl">💖</div>
          <div className="floating-heart absolute -top-4 right-4 text-xl">💕</div>
          <div className="floating-heart absolute top-2 right-4 text-2xl">💝</div>
          <div className="floating-heart absolute -bottom-6 left-8 text-xl">💗</div>
          <div className="floating-heart absolute -bottom-8 -right-4 text-2xl">💓</div>
        </div>
      </div>
    </section>
  );
};

export default Section7Closing;
