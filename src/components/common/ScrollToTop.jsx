import React, { useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa6";

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
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <div
          className="flex items-center justify-center cursor-pointer fixed bottom-8 right-8 w-12 h-12 rounded-full border border-brand-main text-brand-main bg-transparent hover:bg-brand-main hover:text-white transition-all duration-500 z-50"
          onClick={scrollToTop}
        >
          <FaAngleUp />
        </div>
      )}
    </>
  );
}
