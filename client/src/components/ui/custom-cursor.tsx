import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add small delay to avoid cursor flash on initial page load
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    // Handle different cursor states
    const handleLinkEnter = () => setCursorVariant("link");
    const handleLinkLeave = () => setCursorVariant("default");
    const handleTextEnter = () => setCursorVariant("text");
    const handleImageEnter = () => setCursorVariant("image");

    // Query for all interactive elements
    const links = document.querySelectorAll('a, button, .interactive');
    links.forEach(link => {
      link.addEventListener('mouseenter', handleLinkEnter);
      link.addEventListener('mouseleave', handleLinkLeave);
    });

    // Special handling for text areas
    const textAreas = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span');
    textAreas.forEach(text => {
      text.addEventListener('mouseenter', handleTextEnter);
      text.addEventListener('mouseleave', handleLinkLeave);
    });

    // Special handling for images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      img.addEventListener('mouseenter', handleImageEnter);
      img.addEventListener('mouseleave', handleLinkLeave);
    });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", mouseMove);
      
      links.forEach(link => {
        link.removeEventListener('mouseenter', handleLinkEnter);
        link.removeEventListener('mouseleave', handleLinkLeave);
      });
      
      textAreas.forEach(text => {
        text.removeEventListener('mouseenter', handleTextEnter);
        text.removeEventListener('mouseleave', handleLinkLeave);
      });
      
      images.forEach(img => {
        img.removeEventListener('mouseenter', handleImageEnter);
        img.removeEventListener('mouseleave', handleLinkLeave);
      });
    };
  }, []);

  // Core cursor
  const mainCursorVariants = {
    default: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      opacity: 0.7,
      scale: 1,
    },
    link: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      opacity: 1,
      scale: 1,
    },
    text: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      opacity: 0.7,
      scale: 1,
    },
    image: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      opacity: 0.5,
      scale: 1,
    },
  };

  // Outer cursor ring
  const ringCursorVariants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      opacity: 0.35,
      scale: 1,
    },
    link: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      opacity: 0.5,
      scale: 1.8,
    },
    text: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      opacity: 0.2,
      scale: 1.5,
    },
    image: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      opacity: 0.3,
      scale: 2,
    },
  };

  if (!isVisible) {
    return null;
  }

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed w-2 h-2 bg-[var(--gold)] rounded-full pointer-events-none z-50"
        variants={mainCursorVariants}
        animate={cursorVariant}
        transition={{ duration: 0.05, ease: "easeOut" }}
      />
      
      {/* Outer cursor ring */}
      <motion.div
        className="fixed w-8 h-8 border border-[var(--gold)] rounded-full pointer-events-none z-50"
        variants={ringCursorVariants}
        animate={cursorVariant}
        transition={{ duration: 0.15, ease: "easeOut" }}
      />
    </>
  );
}
