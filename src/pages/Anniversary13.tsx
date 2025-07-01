import AudioPlayer from "../components/anniversary/AudioPlayer";
import FloatingParticles from "../components/anniversary/FloatingParticles";
import ScrollTopButton from "../components/anniversary/ScrollTopButton";
import AnniversarySection from "../components/anniversary/AnniversarySection";
import sections from "../data/anniversary13Content";
import { useAnniversaryAnimations } from "../hooks/useAnniversaryAnimations";
import dandelionsAudio from "../assets/dandelions.mp3";

const Anniversary13 = () => {
  // Section data with text and images
  const sectionsRef = useAnniversaryAnimations(sections);

  return (
    <div className="relative overflow-hidden">
      <AudioPlayer audioSrc={dandelionsAudio} />
      <FloatingParticles />
      <ScrollTopButton />

      {/* Sections */}
      {sections.map((section, index) => (
        <AnniversarySection
          key={section.id}
          ref={(el) => {
            sectionsRef.current[index] = el;
          }}
          section={section}
          index={index}
          totalSections={sections.length}
        />
      ))}
    </div>
  );
};

export default Anniversary13;
