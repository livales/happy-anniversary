
import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const ScrollTopButton = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-pink-500 text-white rounded-full p-4 shadow-lg hover:bg-pink-600 transition-all duration-300 hover:scale-110"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </>
  );
};

export default ScrollTopButton;
