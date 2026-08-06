'use client'
import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-[999]">
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="scroll to top"
          className="back-to-top flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl bg-cyan-600/90 text-white shadow-lg backdrop-blur-md transition duration-300 ease-in-out hover:bg-cyan-500"
        >
          <span className="mt-[4px] h-3 w-3 rotate-45 border-l-2 border-t-2 border-white"></span>
        </button>
      )}
    </div>
  );
}
