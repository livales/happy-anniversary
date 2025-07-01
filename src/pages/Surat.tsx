import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { Calendar, Lock } from "lucide-react";

import image1 from "../assets/images/1-anniversary.jpg";

const Surat = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      const handleMouseEnter = () => {
        gsap.to(card, {
          duration: 0.3,
          y: -10,
          scale: 1.02,
          boxShadow: "0 20px 40px rgba(236, 72, 153, 0.2)",
          ease: "power2.out",
        });
      };

      const handleMouseLeave = () => {
        gsap.to(card, {
          duration: 0.3,
          y: 0,
          scale: 1,
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
          ease: "power2.out",
        });
      };

      card.addEventListener("mouseenter", handleMouseEnter);
      card.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        card.removeEventListener("mouseenter", handleMouseEnter);
        card.removeEventListener("mouseleave", handleMouseLeave);
      };
    });
  }, []);

  return (
    <div className="min-h-screen pt-20 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-dancing text-5xl lg:text-6xl text-pink-600 mb-4">
            Koleksi Surat Cinta
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Setiap surat adalah rekaman perjalanan cinta kita, tersimpan dengan
            penuh kasih sayang
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1: 13th Anniversary Letter */}
          <Link to="/surat/anniversary-13">
            <div
              ref={(el) => (cardsRef.current[0] = el)}
              className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-pink-200 to-purple-200 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl">
                    <img src={image1} alt="Anniversary ke-13 image" />
                  </span>
                </div>
                <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full">
                  <Calendar className="w-4 h-4 text-pink-600 inline mr-2" />
                  <span className="text-sm font-medium text-pink-600">
                    13 Bulan
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-dancing text-2xl text-pink-600 mb-2">
                  Anniversary ke-13
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Surat spesial untuk merayakan 13 bulan perjalanan cinta kita
                  yang penuh kebahagiaan dan kenangan indah...
                </p>
                <div className="mt-4 text-pink-500 text-sm font-medium">
                  Baca Selengkapnya →
                </div>
              </div>
            </div>
          </Link>

          {/* Card 2: Next Letter (Placeholder) */}
          <div
            ref={(el) => (cardsRef.current[1] = el)}
            className="bg-white/60 rounded-xl shadow-lg overflow-hidden cursor-not-allowed relative"
          >
            <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <Lock className="w-12 h-12 text-gray-400" />
              </div>
              <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full">
                <Calendar className="w-4 h-4 text-gray-500 inline mr-2" />
                <span className="text-sm font-medium text-gray-500">
                  14 Bulan
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-dancing text-2xl text-gray-500 mb-2">
                Anniversary ke-14
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Surat berikutnya akan segera hadir untuk melengkapi koleksi
                kenangan indah kita...
              </p>
              <div className="mt-4 text-gray-400 text-sm font-medium">
                Segera Hadir...
              </div>
            </div>
            <div className="absolute inset-0 bg-white/30 backdrop-blur-[1px] flex items-center justify-center">
              <div className="bg-white px-4 py-2 rounded-full shadow-lg">
                <span className="text-gray-600 font-medium">Segera Hadir</span>
              </div>
            </div>
          </div>

          {/* Card 3: Future Letter (Placeholder) */}
          <div
            ref={(el) => (cardsRef.current[2] = el)}
            className="bg-white/40 rounded-xl shadow-lg overflow-hidden cursor-not-allowed relative"
          >
            <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl text-gray-300">💌</span>
              </div>
              <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full">
                <Calendar className="w-4 h-4 text-gray-400 inline mr-2" />
                <span className="text-sm font-medium text-gray-400">Soon</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-dancing text-2xl text-gray-400 mb-2">
                Surat Berikutnya...
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Cerita cinta kita akan terus berlanjut dengan surat-surat indah
                lainnya...
              </p>
              <div className="mt-4 text-gray-300 text-sm font-medium">
                Coming Soon...
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Surat;
