import { useEffect, useRef } from "react";
import { useOptimizedAnimations } from "../../hooks/useOptimizedAnimations";
import AnimatedSection from "./AnimatedSection";

const Section3Instructions = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { createScrollAnimation } = useOptimizedAnimations();

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

  return (
    <AnimatedSection
      ref={sectionRef}
      sectionData="instructions"
      titleSelector=".section-title"
      itemSelector=".instruction-step"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-3xl lg:text-5xl font-bold text-center text-yellow-700 mb-16 font-serif">
          Cara Membuat:
        </h2>

        <div className="space-y-12 relative">
          {instructions.map((instruction, index) => (
            <div
              key={index}
              className={`instruction-step grid lg:grid-cols-2 gap-8 items-center relative ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/* Step number circle positioned on the line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-lg z-10 shadow-lg border-4 border-white">
                {instruction.step}
              </div>
              <div
                className={`space-y-4 ${
                  index % 2 === 1 ? "lg:col-start-2" : ""
                }`}
              >
                <div className="mt-12">
                  <p className="text-lg lg:text-xl text-gray-700 leading-relaxed font-medium bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                    {instruction.text}
                  </p>
                </div>
              </div>

              <div
                className={`${
                  index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                }`}
              >
                <div className="relative rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500 bg-gradient-to-br from-pink-100/80 to-purple-100/80 backdrop-blur-sm border border-white/50 h-64 lg:h-80 flex items-center justify-center overflow-hidden">
                  <div className="step-icon text-6xl lg:text-8xl animate-pulse">
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
    </AnimatedSection>
  );
};

export default Section3Instructions;
