"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import Link from "next/link";

const SLIDE_DURATION = 5000;
const EASE_IN_OUT = [0.77, 0, 0.175, 1] as const;
const EASE_OUT = [0.22, 1, 0.36, 1] as const;

const data = [
  {
    images: "/007.jpg",
    text: "People",
    subText:
      "We help individuals care for their well-being and personal growth. We also help businesses strengthen their people, improve customer experience and build for better performance.",
  },
  {
    images: "/012.jpg",
    text: "Performance",
    subText:
      "We help individuals care for their well-being and personal growth. We also help businesses strengthen their people, improve customer experience and build for better performance.",
  },
  {
    images: "/growth.jpg",
    text: "Purpose",
    subText:
      "We help individuals care for their well-being and personal growth. We also help businesses strengthen their people, improve customer experience and build for better performance.",
  },
];

// Slide wrapper: direction-aware (forward = enters from left, exits right, like before)
const slideVariants: Variants = {
  enter: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%" }),
  center: { x: "0%" },
  exit: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%" }),
};

// Reduced-motion fallback: simple fade
const fadeVariants: Variants = {
  enter: { opacity: 0 },
  center: { opacity: 1 },
  exit: { opacity: 0 },
};

// Text block: stagger children after the slide has mostly settled
const contentVariants: Variants = {
  enter: {},
  center: { transition: { delayChildren: 0.55, staggerChildren: 0.12 } },
  exit: {},
};

const itemVariants: Variants = {
  enter: { opacity: 0, y: 30 },
  center: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE_OUT },
  },
  exit: { opacity: 0, transition: { duration: 0.25 } },
};

export default function Header() {
  const [[currentIndex, direction], setSlide] = useState<[number, number]>([0, 1]);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const reduceMotion = useReducedMotion();

  // Scroll -> full-width expansion
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goTo = useCallback((index: number) => {
    setSlide(([current]) => (index === current ? [current, 1] : [index, index > current ? 1 : -1]));
  }, []);

  // Auto-advance. Depends on currentIndex so manual clicks restart the 5s timer.
  useEffect(() => {
    const timer = setTimeout(() => {
      setSlide(([current]) => [(current + 1) % data.length, 1]);
    }, SLIDE_DURATION);
    return () => clearTimeout(timer);
  }, [currentIndex]);

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
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={reduceMotion ? fadeVariants : slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={
              reduceMotion
                ? { duration: 0.4 }
                : { duration: 1.1, ease: EASE_IN_OUT }
            }
            className="absolute inset-0 w-full h-full overflow-hidden z-10"
          >
            {/* Slow zoom-out on the image (Ken Burns) */}
            <motion.div
              className="absolute inset-0"
              initial={{ scale: reduceMotion ? 1 : 1.12 }}
              animate={{ scale: 1 }}
              transition={{ duration: 6, ease: "easeOut" }}
            >
              <Image
                src={currentSlide.images}
                alt={currentSlide.text}
                fill
                sizes="100vw"
                priority={currentIndex === 0}
                className="object-cover"
              />
            </motion.div>

            {/* Dark Overlay for contrast */}
            <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/95 z-10" />

            {/* Text + buttons, staggered */}
            <motion.div
              variants={contentVariants}
              className="absolute pt-5 inset-0 flex pb-20 flex-col items-start justify-end max-w-7xl mx-auto px-6 md:px-12  z-20"
            >
              <motion.p
                variants={itemVariants}
                className="text-white text-5xl mb-2  md:text-5xl font-extrabold  text-left tracking-tighter drop-shadow-lg"
              >
                {currentSlide.text}
              </motion.p>
              <motion.p
                variants={itemVariants}
                className="font-mulish max-w-2xl text-[17px] text-left text-white font-normal"
              >
                {currentSlide.subText}
              </motion.p>
              <motion.div variants={itemVariants} className="flex gap-3 mt-5">
                <Link
                  href="/contact"
                  className="bg-[#B8944D]  text-white py-2 px-6 cursor-pointer text-md hover:bg-[#a89268] transition-colors"
                >
                  Explore Our Services
                </Link>
                <Link
                  href="/contact"
                  className="bg-[#2F73C9]  text-white py-2 px-6 cursor-pointer text-md hover:bg-[#a89268] transition-colors"
                >
                  Let's Talk
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Slide Indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-40">
          {data.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
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