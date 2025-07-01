
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionData } from "../components/anniversary/AnniversarySection";

gsap.registerPlugin(ScrollTrigger);

export const useAnniversaryAnimations = (sections: SectionData[]) => {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    sectionsRef.current.forEach((section, index) => {
      if (section) {
        const sectionData = sections[index];

        // Animate title - separate from content
        gsap.fromTo(
          section.querySelector(".section-title"),
          { opacity: 0, y: -30, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 90%",
              end: "bottom 10%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Animate content based on layout with delays to avoid collisions
        if (sectionData.layout === "left" || sectionData.layout === "right") {
          const direction = sectionData.layout === "left" ? -100 : 100;

          gsap.fromTo(
            section.querySelector(".section-text"),
            { opacity: 0, x: direction },
            {
              opacity: 1,
              x: 0,
              duration: 1.2,
              ease: "power3.out",
              delay: 0.3,
              scrollTrigger: {
                trigger: section,
                start: "top 75%",
                end: "bottom 25%",
                toggleActions: "play none none reverse",
              },
            }
          );

          gsap.fromTo(
            section.querySelector(".section-image"),
            { opacity: 0, x: -direction, scale: 0.9 },
            {
              opacity: 1,
              x: 0,
              scale: 1,
              duration: 1.2,
              ease: "power3.out",
              delay: 0.6,
              scrollTrigger: {
                trigger: section,
                start: "top 75%",
                end: "bottom 25%",
                toggleActions: "play none none reverse",
              },
            }
          );
        } else if (sectionData.layout === "center") {
          gsap.fromTo(
            section.querySelector(".section-content"),
            { opacity: 0, y: 50, scale: 0.95 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 1.5,
              ease: "power2.out",
              delay: 0.4,
              scrollTrigger: {
                trigger: section,
                start: "top 75%",
                end: "bottom 25%",
                toggleActions: "play none none reverse",
              },
            }
          );
        } else if (sectionData.layout === "stack") {
          gsap.fromTo(
            section.querySelector(".section-text"),
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power2.out",
              delay: 0.3,
              scrollTrigger: {
                trigger: section,
                start: "top 70%",
                end: "bottom 30%",
                toggleActions: "play none none reverse",
              },
            }
          );

          gsap.fromTo(
            section.querySelector(".section-image"),
            { opacity: 0, scale: 0.8, rotation: 3 },
            {
              opacity: 1,
              scale: 1,
              rotation: 0,
              duration: 1.3,
              ease: "back.out(1.7)",
              delay: 0.7,
              scrollTrigger: {
                trigger: section,
                start: "top 70%",
                end: "bottom 30%",
                toggleActions: "play none none reverse",
              },
            }
          );
        } else if (sectionData.layout === "overlay") {
          gsap.fromTo(
            section.querySelector(".section-image"),
            { opacity: 0, scale: 1.1 },
            {
              opacity: 1,
              scale: 1,
              duration: 1.8,
              ease: "power2.out",
              delay: 0.2,
              scrollTrigger: {
                trigger: section,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
              },
            }
          );

          gsap.fromTo(
            section.querySelector(".section-text"),
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 1.2,
              ease: "power2.out",
              delay: 0.8,
              scrollTrigger: {
                trigger: section,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }

        // Parallax effect on images - lighter effect to avoid conflicts
        gsap.to(section.querySelector(".parallax-image"), {
          yPercent: 0,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      }
    });
  }, [sections]);

  return sectionsRef;
};
