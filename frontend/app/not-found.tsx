"use client";

import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-md"
      >
        <span className="text-7xl font-extrabold text-[#071a3d]">404</span>
        <h1 className="text-2xl font-bold text-gray-900 mt-4">
          Page Not Found
        </h1>
        <p className="text-gray-600 mt-2 text-sm leading-relaxed">
          The page you are looking for doesn't exist or has been moved.
        </p>

        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#071a3d] text-white text-sm font-medium hover:bg-opacity-90 transition-all duration-200 shadow-sm"
          >
            Back to Home
          </Link>
        </div>
      </motion.div>
    </div>
  );
}