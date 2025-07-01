import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Section4Challenge = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Heat wave effect
    gsap.to(section.querySelector(".heat-wave"), {
      scaleY: 1.1,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    ScrollTrigger.create({
      trigger: section,
      start: "top 60%",
      end: "bottom 40%",
      animation: gsap
        .timeline()
        .fromTo(
          section.querySelectorAll(".animate-in"),
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.3,
            ease: "power2.out",
          }
        )
        .to(section.querySelector(".challenge-bg"), {
          scale: 1.05,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        }),
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      data-section="challenge"
      className="min-h-screen flex items-center justify-center px-6 lg:px-12 py-20 relative overflow-hidden"
    >
      {/* Heat wave background effect */}
      <div className="heat-wave absolute inset-0 opacity-30 bg-gradient-to-br from-red-200 via-orange-200 to-yellow-200"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="animate-in text-3xl lg:text-5xl font-bold text-center text-red-700 mb-12 font-serif">
          Proses Memanggang & Tantangan LDR
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="animate-in bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed font-medium mb-6">
                Tentu aja, proses manggangnya ga selalu mulus. Kadang oven
                LDR-nya kepanasan dan bikin kita hampir gosong wkwk. Di saat
                gitu, kita harus pinter-pinter nurunin suhunya pake 'komunikasi'
                dan 'pengertian'.
              </p>
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed font-medium">
                Kadang juga adonannya terasa hambar, nah di situ kita harus
                tambahin 'kejutan-kejutan kecil' atau 'panggilan telepon
                tiba-tiba' biar rasanya manis lagi.
              </p>
            </div>
          </div>

          <div className="animate-in">
            <div className="challenge-bg relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=400&fit=crop&auto=format"
                alt="Challenge"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-600/40 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-6xl mb-4 animate-pulse">🔥</div>
                  <p className="text-xl font-bold bg-black/50 rounded-lg px-4 py-2">
                    Oven LDR Mode: ON
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4Challenge;
