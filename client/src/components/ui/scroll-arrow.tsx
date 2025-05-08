import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface ScrollArrowProps {
  color?: string;
  targetId?: string;
}

export default function ScrollArrow({ color = "white", targetId }: ScrollArrowProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hide the arrow after scrolling down a bit
      if (window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Scroll down a standard amount if no target is provided
      window.scrollBy({
        top: window.innerHeight * 0.8,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ 
        opacity: isVisible ? 1 : 0,
        y: isVisible ? [0, 10, 0] : 0
      }}
      transition={{ 
        duration: 2,
        repeat: isVisible ? Infinity : 0,
        repeatType: "loop"
      }}
      className={`fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50 cursor-pointer ${
        !isVisible ? "pointer-events-none" : ""
      }`}
      onClick={handleClick}
    >
      <div className="flex flex-col items-center">
        <span className="text-sm font-medium mb-2" style={{ color }}>
          Scroll Down
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mb-1"
        >
          <path d="M12 5v14"></path>
          <path d="m19 12-7 7-7-7"></path>
        </svg>
      </div>
    </motion.div>
  );
}