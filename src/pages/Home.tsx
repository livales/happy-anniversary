import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import UniversalLoading from "../components/UniversalLoading";
import { usePageLoading } from "../hooks/usePageLoading";
import wallpaper from "../assets/images/wallpaper/wallpaper-profile.jpg";

const Home = () => {
  const letterRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { isLoading } = usePageLoading(3000);

  useEffect(() => {
    if (isLoading) return;

    const letter = letterRef.current;
    const container = containerRef.current;

    if (!letter || !container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -10;
      const rotateY = ((x - centerX) / centerX) * 10;

      gsap.to(letter, {
        duration: 0.3,
        rotateX: rotateX,
        rotateY: rotateY,
        transformPerspective: 1000,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(letter, {
        duration: 0.5,
        rotateX: 0,
        rotateY: 0,
        ease: "power2.out",
      });
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isLoading]);

  return (
    <>
      <UniversalLoading isLoading={isLoading} />
      <div
        className="min-h-screen pt-20 pb-16 px-4 relative overflow-hidden"
        style={{
          backgroundImage: `url(${wallpaper}),
                            linear-gradient(135deg, rgba(255, 238, 243, 0.9) 0%, rgba(243, 231, 240, 0.9) 25%, rgba(231, 213, 240, 0.9) 50%, rgba(220, 196, 232, 0.9) 75%, rgba(209, 179, 224, 0.9) 100%)`,
          backgroundBlendMode: "overlay",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Welcome Text */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="font-dancing text-5xl lg:text-6xl text-pink-700 mb-4 drop-shadow-sm">
                  Untuk Sayangku,
                </h1>
                <div className="space-y-4 text-gray-800 leading-relaxed">
                  <p className="text-lg font-medium bg-white/70 backdrop-blur-sm rounded-lg p-4">
                    Ini adalah ruang digital kecil kita, tempat aku menyimpan
                    semua surat dan kenangan untukmu di setiap langkah
                    perjalanan kita.
                  </p>
                  <p className="text-lg font-medium text-pink-700 bg-white/70 backdrop-blur-sm rounded-lg p-4">
                    Selamat datang di galeri hati kita.
                  </p>
                </div>
              </div>

              <div className="flex space-x-4">
                <div className="w-12 h-12 bg-pink-200/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-pink-600 text-xl">💕</span>
                </div>
                <div className="w-12 h-12 bg-purple-200/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-purple-600 text-xl">💌</span>
                </div>
                <div className="w-12 h-12 bg-pink-200/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-pink-600 text-xl">🌸</span>
                </div>
              </div>
            </div>

            {/* Right Side - Interactive Letter */}
            <div
              ref={containerRef}
              className="relative min-h-[24rem] lg:min-h-[32rem] perspective-1000 love-cursor"
            >
              <div
                ref={letterRef}
                className="love-cursor absolute inset-0 bg-gradient-to-br from-pink-50/90 to-purple-50/90 backdrop-blur-sm rounded-lg shadow-2xl p-4 sm:p-6 md:p-8 cursor-pointer transform-gpu border border-white/50"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="h-full border-2 border-dashed border-pink-300 rounded-lg p-3 sm:p-4 md:p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="font-dancing text-2xl sm:text-3xl text-pink-700 mb-4 drop-shadow-sm">
                      Surat Cinta
                    </h3>
                    <div className="space-y-3 text-gray-700">
                      <p className="italic font-medium text-sm sm:text-base">
                        Sayangku yang terkasih,
                      </p>
                      <p className="font-medium text-sm sm:text-base">
                        Setiap hari bersamamu adalah halaman baru dalam cerita
                        cinta kita yang indah...
                      </p>
                      <p className="font-medium text-sm sm:text-base">
                        Terima kasih telah menjadi alasan aku tersenyum setiap
                        hari.
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-script text-pink-700 sm:text-lg">
                      Dengan cinta,
                    </p>
                    <p className="font-script text-pink-700 text-lg sm:text-xl mt-2">
                      💕
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
