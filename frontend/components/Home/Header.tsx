"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const data = [
  { images: "/001.jpg", text: "Better People" },
  { images: "/002.jpg", text: "Better Work" },
  { images: "/001.jpg", text: "Better Growth" },
];

export default function Header() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  // Track scroll position to trigger full-width expansion
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-advance image loop
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % data.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const currentSlide = data[currentIndex];

  return (
    <div
      className={`relative h-screen w-full transition-all duration-500 ease-out overflow-x-clip ${
        isScrolled ? "p-0" : "p-2"
      }`}
    >
      <div
        className={`relative bg-black  w-full h-full overflow-hidden transition-all duration-500 ease-out ${
          isScrolled ? "rounded-none" : "rounded-3xl"
        }`}
      >
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
            initial={{ x: "-100%" }} // Enters from left
            animate={{ x: "0%" }} // Settles in center
            exit={{ x: "100%" }} // Exits to right
            transition={{
              duration: 1.1,
              ease: [0.77, 0, 0.175, 1],
            }}
            className="absolute inset-0 w-full h-full overflow-hidden z-10"
          >
            <Image
              src={currentSlide.images}
              alt={currentSlide.text}
              fill
              priority
              className="object-cover"
            />

            {/* Dark Overlay for contrast */}
            <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/95 z-10" />

            {/* Centered Text */}
            <div className="absolute p-5 inset-0 flex items-center justify-center z-20">
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-white text-5xl md:text-9xl font-extrabold tracking-tighter drop-shadow-lg"
              >
                {currentSlide.text}
              </motion.p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Slide Indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-40">
          {data.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex ? "w-10 bg-white" : "w-2.5 bg-white/40"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
