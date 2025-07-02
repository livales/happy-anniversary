import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Section2Ingredients = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const ingredients = [
    {
      text: "Cinta dan sayang tanpa takaran",
      icon: "❤️",
      desc: "(ini bahan dasarnya, harus melimpah!)",
    },
    {
      text: "2 liter kesabaran",
      icon: "⏳",
      desc: "(terutama buat ngadepin aku yang kadang keras kepala wkwk)",
    },
    {
      text: "500 gram kegigihan",
      icon: "💪",
      desc: "(porsimu di sini lebih banyak, aku bangga banget liat kamu berjuang)",
    },
    {
      text: "Semangkuk besar dukungan dan kepercayaan",
      icon: "🤝",
      desc: "(semangat semangatt cantikkuuu!!)",
    },
    {
      text: "Taburan rindu secukupnya",
      icon: "💭",
      desc: "(ehh malah kelebihan, efek samping LDR, bikin kue-nya makin dinanti)",
    },
    {
      text: "Beberapa sendok kemarahan",
      icon: "😤",
      desc: "(biar ada rasa-rasanya dikit, tapi jangan kebanyakan hehe)",
    },
    {
      text: "Tawa dan canda sebanyak-banyaknya",
      icon: "😂",
      desc: "(ini yang bikin kuenya ngembang sempurna!)",
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
          section.querySelectorAll(".ingredient-item"),
          { opacity: 0, x: -50, scale: 0.9 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "back.out(1.7)",
          }
        ),
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      data-section="ingredients"
      className="min-h-screen flex items-center justify-center px-6 lg:px-12 py-20"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title text-3xl lg:text-5xl font-bold text-center text-orange-700 mb-12 font-serif">
          Bahan-bahan Utama:
        </h2>

        <div className="space-y-6">
          {ingredients.map((ingredient, index) => (
            <div
              key={index}
              className="ingredient-item flex items-start space-x-4 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div
                className="text-4xl flex-shrink-0 animate-bounce"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {ingredient.icon}
              </div>
              <div className="flex-1">
                <p className="text-lg lg:text-xl font-semibold text-gray-800 mb-1">
                  {ingredient.text}
                </p>
                {ingredient.desc && (
                  <p className="text-sm lg:text-base text-gray-600 italic">
                    {ingredient.desc}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section2Ingredients;
