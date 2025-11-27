"use client";
import { useEffect, useState } from "react";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const firstSectionHeight = document.getElementById("first-section")?.offsetHeight || 300;
      setShowButton(window.scrollY > firstSectionHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    showButton && (
      <div
        className="  bottom-10 sm:right-8 right-6 w-[35px] h-[35px] bg-[#CE0613] rounded-full flex items-center justify-center shadow-md  cursor-pointer 
        fixed z-50"
        onClick={scrollToTop}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-[30px] w-8 text-[#FFFFFF] "
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 12.707a1 1 0 011.414 0L10 9.414l3.293 3.293a1 1 0 001.414-1.414l-4-4a1 1 0 00-1.414 0l-4 4a1 1 0 000 1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    )
  );
};

export default ScrollToTopButton;