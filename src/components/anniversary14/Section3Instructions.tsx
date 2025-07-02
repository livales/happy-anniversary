import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Section3Instructions = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const instructions = [
    {
      step: 1,
      text: "Pertama, siapkan wadah paling besar, yaitu hati kita berdua. Tuang cinta dan sayang sebagai fondasi utama. Aduk terus sampai merata, jangan biarkan ada gumpalan keraguan.",
    },
    {
      step: 2,
      text: "Masukkan 2 liter kesabaran pelan-pelan, terutama pas aku lagi keras kepala dan bikin kamu kesel. Maaf yaa sayang, adonan ini kadang susah diatur, tapi makasih kamu selalu sabar ngaduknya.",
    },
    {
      step: 3,
      text: "Tambahkan 500 gram kegigihanmu. Aku selalu liat dari jauh sini gimana kamu ga pernah nyerah, itu yang bikin adonan kita jadi makin kuat dan ga gampang hancur.",
    },
    {
      step: 4,
      text: "Campurkan semangkuk besar dukungan. Ini penting banget, apalagi pas kita lagi sama-sama cape. Kita aduk bareng-bareng biar saling nguatin.",
    },
    {
      step: 5,
      text: "Jangan lupa taburkan rindu secukupnya. Emang kadang bikin nyesek, tapi justru ini yang bikin setiap obrolan dan pertemuan kita (walaupun online) jadi terasa manis banget.",
    },
    {
      step: 6,
      text: "Terakhir, masukkan tawa dan canda sebanyak-banyaknya biar adonan kita ringan dan hepii.",
    },
  ];

  const getStepEmoji = (step: number) => {
    const emojis = ["💝", "⏳", "💪", "🤝", "💌", "😄"];
    return emojis[step - 1] || "❤️";
  };

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    ScrollTrigger.create({
      trigger: section,
      start: "top 60%",
      end: "bottom 40%",
      animation: gsap
        .timeline()
        .fromTo(
          section.querySelector(".section-title"),
          { opacity: 0, y: -30 },
          { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
        )
        .fromTo(
          section.querySelectorAll(".instruction-step"),
          { opacity: 0, y: 50 },
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
      data-section="instructions"
      className="min-h-screen flex items-center justify-center px-6 lg:px-12 py-20"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-3xl lg:text-5xl font-bold text-center text-yellow-700 mb-16 font-serif">
          Cara Membuat:
        </h2>

        <div className="space-y-12">
          {instructions.map((instruction, index) => (
            <div
              key={index}
              className={`instruction-step grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              <div
                className={`space-y-4 ${
                  index % 2 === 1 ? "lg:col-start-2" : ""
                }`}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {instruction.step}
                  </div>
                  <div className="h-1 flex-1 bg-gradient-to-r from-yellow-400 to-transparent rounded"></div>
                </div>
                <p className="text-lg lg:text-xl text-gray-700 leading-relaxed font-medium bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                  {instruction.text}
                </p>
              </div>

              <div
                className={`${
                  index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                }`}
              >
                <div className="relative rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500 bg-gradient-to-br from-pink-100/80 to-purple-100/80 backdrop-blur-sm border border-white/50 h-64 lg:h-80 flex items-center justify-center overflow-hidden">
                  <div className="text-6xl lg:text-8xl animate-pulse">
                    {getStepEmoji(instruction.step)}
                  </div>
                  <div className="absolute inset-0 pointer-events-none">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div
                        key={i}
                        className="absolute animate-float"
                        style={{
                          left: `${Math.random() * 80 + 10}%`,
                          top: `${Math.random() * 80 + 10}%`,
                          animationDelay: `${i * 0.5}s`,
                          animationDuration: `${3 + Math.random() * 2}s`,
                        }}
                      >
                        <span className="text-2xl opacity-60">
                          {i % 2 === 0 ? "💕" : "🌸"}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section3Instructions;
