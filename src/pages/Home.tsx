
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Home = () => {
  const letterRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const letter = letterRef.current;
    const container = containerRef.current;
    
    if (!letter || !container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / centerY * -10;
      const rotateY = (x - centerX) / centerX * 10;
      
      gsap.to(letter, {
        duration: 0.3,
        rotateX: rotateX,
        rotateY: rotateY,
        transformPerspective: 1000,
        ease: "power2.out"
      });
    };

    const handleMouseLeave = () => {
      gsap.to(letter, {
        duration: 0.5,
        rotateX: 0,
        rotateY: 0,
        ease: "power2.out"
      });
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="min-h-screen pt-20 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Welcome Text */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="font-dancing text-5xl lg:text-6xl text-pink-600 mb-4">
                Untuk Sayangku,
              </h1>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  Ini adalah ruang digital kecil kita, tempat aku menyimpan semua surat dan kenangan untukmu di setiap langkah perjalanan kita.
                </p>
                <p className="text-lg font-medium text-pink-600">
                  Selamat datang di galeri hati kita.
                </p>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                <span className="text-pink-600 text-xl">💕</span>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 text-xl">💌</span>
              </div>
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                <span className="text-pink-600 text-xl">🌸</span>
              </div>
            </div>
          </div>

          {/* Right Side - Interactive Letter */}
          <div ref={containerRef} className="relative h-96 lg:h-[500px] perspective-1000">
            <div
              ref={letterRef}
              className="absolute inset-0 bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg shadow-2xl p-8 cursor-pointer transform-gpu"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="h-full border-2 border-dashed border-pink-200 rounded-lg p-6 flex flex-col justify-between">
                <div>
                  <h3 className="font-dancing text-3xl text-pink-600 mb-4">
                    Surat Cinta
                  </h3>
                  <div className="space-y-3 text-gray-600">
                    <p className="italic">Sayangku yang terkasih,</p>
                    <p>Setiap hari bersamamu adalah halaman baru dalam cerita cinta kita yang indah...</p>
                    <p>Terima kasih telah menjadi alasan aku tersenyum setiap hari.</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-script text-pink-600 text-lg">Dengan cinta,</p>
                  <p className="font-script text-pink-600 text-xl mt-2">💕</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
