import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import cake from "../../assets/images/anniversary-14/4-cake.jpg";

const Section6FinalResult = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Sprinkles animation
    gsap.to(section.querySelectorAll(".sprinkle"), {
      y: -20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      stagger: 0.1,
      ease: "power1.inOut",
    });

    ScrollTrigger.create({
      trigger: section,
      start: "top 60%",
      end: "bottom 40%",
      animation: gsap
        .timeline()
        .fromTo(
          section.querySelector(".final-cake-container"),
          { opacity: 0, scale: 0.5, rotation: -10 },
          {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 1.5,
            ease: "elastic.out(1, 0.5)",
          }
        )
        .fromTo(
          section.querySelectorAll(".text-animate"),
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.3,
            ease: "power2.out",
          }
        ),
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      data-section="final"
      className="min-h-screen flex items-center justify-center px-6 lg:px-12 py-20"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-animate text-3xl lg:text-5xl font-bold text-yellow-600 mb-12 font-serif">
          Hasil Akhir: Kue Kita 🍰
        </h2>

        <div className="final-cake-container relative mb-12">
          <div className="relative inline-block">
            <img
              src={cake}
              alt="Our Final Cake"
              className="w-80 h-80 object-cover rounded-full shadow-2xl border-8 border-white"
            />

            {/* Digital sprinkles */}
            <div className="absolute -top-4 -left-4 sprinkle text-2xl">🌟</div>
            <div className="absolute -top-2 right-8 sprinkle text-xl">✨</div>
            <div className="absolute top-4 -right-6 sprinkle text-2xl">💫</div>
            <div className="absolute bottom-8 -left-8 sprinkle text-xl">⭐</div>
            <div className="absolute -bottom-4 right-4 sprinkle text-2xl">
              🌠
            </div>
            <div className="absolute bottom-4 left-12 sprinkle text-xl">💖</div>

            {/* In Progress sign */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black px-4 py-2 rounded-full font-bold shadow-lg rotate-3">
              🚧 In Progress 🚧
            </div>
          </div>
        </div>

        <div className="text-animate space-y-6 max-w-3xl mx-auto">
          <p className="text-lg lg:text-xl text-gray-700 leading-relaxed font-medium bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            Kue kita ini mungkin belum matang sempurna, masih dalam oven LDR dan
            perjuangan. Tapi aku yakin banget, hasil akhirnya nanti bakalan jadi
            kue paling enak yang pernah ada.
          </p>
        </div>

        {/* Celebration elements */}
        <div className="text-animate flex justify-center space-x-4 mt-12">
          {["🎉", "🎊", "🍰", "❤️", "🎈"].map((emoji, index) => (
            <div
              key={index}
              className="text-4xl animate-bounce"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {emoji}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section6FinalResult;
