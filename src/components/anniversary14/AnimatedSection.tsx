import { useEffect, useRef, ReactNode, forwardRef } from "react";
import { useOptimizedAnimations } from "../../hooks/useOptimizedAnimations";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  titleSelector?: string;
  itemSelector?: string;
  sectionData?: string;
}

const AnimatedSection = forwardRef<HTMLDivElement, AnimatedSectionProps>(({ 
  children, 
  className = "", 
  titleSelector = ".section-title", 
  itemSelector = ".animated-item",
  sectionData 
}, ref) => {
  const internalRef = useRef<HTMLDivElement>(null);
  const { createScrollAnimation, createStaggerAnimation, cleanup } = useOptimizedAnimations();

  useEffect(() => {
    const section = internalRef.current;
    if (!section) return;

    // Animate title
    const title = section.querySelector(titleSelector);
    if (title) {
      createScrollAnimation(
        title,
        { opacity: 0, y: -30 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
        {
          trigger: section,
          start: "top 60%",
          end: "bottom 40%",
        }
      );
    }

    // Animate items
    const items = section.querySelectorAll(itemSelector);
    if (items.length > 0) {
      createStaggerAnimation(
        items,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out", stagger: 0.3 },
        {
          trigger: section,
          start: "top 70%",
          end: "bottom 30%",
        }
      );
    }

    return cleanup;
  }, [titleSelector, itemSelector, createScrollAnimation, createStaggerAnimation, cleanup]);

  return (
    <section
      ref={ref || internalRef}
      data-section={sectionData}
      className={`min-h-screen flex items-center justify-center px-6 lg:px-12 py-20 ${className}`}
    >
      {children}
    </section>
  );
});

export default AnimatedSection;