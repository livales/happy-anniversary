import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Section3Instructions = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const instructions = [
    {
      step: 1,
      text: "Pertama, siapkan wadah paling besar, yaitu hati kita berdua. Tuang cinta dan sayang sebagai fondasi utama. Aduk terus sampai merata, jangan biarkan ada gumpalan keraguan.",
      image:
        "https://images.unsplash.com/photo-1556909114-5d1c80b1ee7e?w=400&h=300&fit=crop&auto=format",
    },
    {
      step: 2,
      text: "Masukkan 2 liter kesabaran pelan-pelan, terutama pas aku lagi keras kepala dan bikin kamu kesel. Maaf yaa sayang, adonan ini kadang susah diatur, tapi makasih kamu selalu sabar ngaduknya.",
      image:
        "https://images.unsplash.com/photo-1516627145497-ae4099cbf553?w=400&h=300&fit=crop&auto=format",
    },
    {
      step: 3,
      text: "Tambahkan 500 gram kegigihanmu. Aku selalu liat dari jauh sini gimana kamu ga pernah nyerah, itu yang bikin adonan kita jadi makin kuat dan ga gampang hancur.",
      image:
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=300&fit=crop&auto=format",
    },
    {
      step: 4,
      text: "Campurkan semangkuk besar dukungan. Ini penting banget, apalagi pas kita lagi sama-sama cape. Kita aduk bareng-bareng biar saling nguatin.",
      image:
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=300&fit=crop&auto=format",
    },
    {
      step: 5,
      text: "Jangan lupa taburkan rindu secukupnya. Emang kadang bikin nyesek, tapi justru ini yang bikin setiap obrolan dan pertemuan kita (walaupun online) jadi terasa manis banget.",
      image:
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=300&fit=crop&auto=format",
    },
    {
      step: 6,
      text: "Terakhir, masukkan tawa dan canda sebanyak-banyaknya biar adonan kita ringan dan hepii.",
      image:
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=300&fit=crop&auto=format",
    },
  ];

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
                <div className="relative overflow-hidden rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
                  <img
                    src={instruction.image}
                    alt={`Step ${instruction.step}`}
                    className="w-full h-64 lg:h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
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
