import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import anniversary from "../../assets/images/anniversary-14/1-anniversary.jpg";

const Section1Title = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.fromTo(
      section.querySelectorAll(".animate-text"),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power2.out",
        delay: 0.5,
      }
    );

    gsap.fromTo(
      section.querySelector(".photo"),
      { opacity: 0, scale: 0.8, rotation: -5 },
      {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 1.2,
        ease: "elastic.out(1, 0.5)",
        delay: 1,
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      data-section="title"
      className="min-h-screen flex items-center justify-center px-6 lg:px-12"
    >
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h1 className="animate-text text-4xl lg:text-6xl font-bold text-pink-700 font-serif">
          Happy Anniversary ke-14, Sayanggkuuu ❤️
        </h1>

        <div className="photo w-64 h-64 mx-auto rounded-full overflow-hidden shadow-2xl border-4 border-white">
          <img
            src={anniversary}
            alt="Our Memory"
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          />
        </div>

        <div className="animate-text max-w-2xl mx-auto">
          <p className="text-lg lg:text-xl text-gray-700 leading-relaxed font-medium bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            Selamat tanggal satu lagi, cantikku! Udah 14 bulan aja kita bareng,
            dan kali ini aku mau ngasih surat dengan tema yang beda dari
            biasanya heheee. Aku kepikiran, hubungan kita ini kayak lagi bikin
            kue yang enak banget buat masa depan, dan ini resepnya:
          </p>
        </div>

        <h2 className="animate-text text-3xl lg:text-4xl font-bold text-orange-600 font-serif">
          Resep Spesial: Kue Masa Depan Kita Berdua
        </h2>
      </div>
    </section>
  );
};

export default Section1Title;
