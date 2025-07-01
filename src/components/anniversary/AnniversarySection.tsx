
import { forwardRef } from "react";

export interface SectionData {
  id: number;
  title: string;
  text: string;
  image: string;
  background: string;
  layout: "center" | "left" | "right" | "stack" | "overlay";
}

interface AnniversarySectionProps {
  section: SectionData;
  index: number;
  totalSections: number;
}

const AnniversarySection = forwardRef<HTMLElement, AnniversarySectionProps>(
  ({ section, index, totalSections }, ref) => {
    const renderLayout = () => {
      switch (section.layout) {
        case "center":
          return (
            <div className="section-content text-center max-w-4xl mx-auto space-y-12">
              <div className="section-image relative mx-auto w-80 h-80">
                <div className="relative overflow-hidden rounded-full shadow-2xl transform hover:scale-105 transition-transform duration-500">
                  <img
                    src={section.image}
                    alt={`Memory ${section.id}`}
                    className="parallax-image w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
              <div className="section-text space-y-6">
                <div className="text-lg md:text-xl text-gray-700 leading-relaxed whitespace-pre-line font-medium max-w-3xl mx-auto">
                  {section.text}
                </div>
                {section.id === 8 && (
                  <div className="text-2xl md:text-3xl font-bold text-pink-600 mt-8 animate-pulse">
                    I love you more and more every single day! 💕
                  </div>
                )}
              </div>
            </div>
          );

        case "left":
          return (
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
              <div className="section-image relative">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
                  <img
                    src={section.image}
                    alt={`Memory ${section.id}`}
                    className="parallax-image w-full h-80 md:h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
              <div className="section-text space-y-6">
                <div className="text-lg md:text-xl text-gray-700 leading-relaxed whitespace-pre-line font-medium">
                  {section.text}
                </div>
              </div>
            </div>
          );

        case "right":
          return (
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
              <div className="section-text space-y-6 md:order-1">
                <div className="text-lg md:text-xl text-gray-700 leading-relaxed whitespace-pre-line font-medium">
                  {section.text}
                </div>
              </div>
              <div className="section-image relative md:order-2">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
                  <img
                    src={section.image}
                    alt={`Memory ${section.id}`}
                    className="parallax-image w-full h-80 md:h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </div>
          );

        case "stack":
          return (
            <div className="section-content max-w-4xl mx-auto space-y-12">
              <div className="section-text space-y-6 text-center">
                <div className="text-lg md:text-xl text-gray-700 leading-relaxed whitespace-pre-line font-medium">
                  {section.text}
                </div>
              </div>
              <div className="section-image relative mx-auto max-w-2xl">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
                  <img
                    src={section.image}
                    alt={`Memory ${section.id}`}
                    className="parallax-image w-full h-80 md:h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </div>
          );

        case "overlay":
          return (
            <div className="section-content relative max-w-5xl mx-auto">
              <div className="section-image relative h-96 md:h-[500px] overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src={section.image}
                  alt={`Memory ${section.id}`}
                  className="parallax-image w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="section-text absolute inset-0 flex items-center justify-center p-8">
                  <div className="text-white text-center space-y-6 max-w-3xl">
                    <div className="text-lg md:text-xl leading-relaxed whitespace-pre-line font-medium backdrop-blur-sm bg-white/10 p-6 rounded-2xl">
                      {section.text}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );

        default:
          return null;
      }
    };

    return (
      <section
        ref={ref}
        className={`min-h-screen relative overflow-hidden ${section.background}`}
      >
        {/* Title Section */}
        <div className="section-title-container py-16 flex items-center justify-center">
          <h2 className="section-title text-4xl md:text-5xl font-bold text-gray-800 text-center font-dancing">
            {section.title}
          </h2>
        </div>

        {/* Content Section */}
        <div className="content-container flex items-center justify-center min-h-[70vh] pb-16">
          <div className="container mx-auto px-6">
            {renderLayout()}
          </div>
        </div>

        {/* Floating hearts around sections */}
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute text-pink-500 text-2xl animate-bounce pointer-events-none"
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `${10 + Math.random() * 80}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: "3s",
            }}
          >
            💕
          </div>
        ))}

        {/* Section separator */}
        {index < totalSections - 1 && (
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-4xl animate-bounce text-pink-400">
            💕
          </div>
        )}
      </section>
    );
  }
);

AnniversarySection.displayName = "AnniversarySection";

export default AnniversarySection;
