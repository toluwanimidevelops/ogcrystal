"use client";

import React from "react";
import Title from "../Global/Title";
import { motion, Variants } from "framer-motion";

export default function WhyOGCrystal() {
  const pillars = [
    {
      title: "We Listen Before We Advise",
      description:
        "We take time to understand the real issue—not just what is being presented on the surface.",
    },
    {
      title: "We Make Things Practical",
      description:
        "Good advice should be useful. Our recommendations are designed to be realistic and actionable.",
    },
    {
      title: "We See the Person Behind the Problem",
      description:
        "People challenges are rarely only about policies and processes. We address the underlying human dynamics.",
    },
    {
      title: "Professional Expertise with a Human Approach",
      description:
        "You get the structure and discipline of professional HR practice without losing the human element.",
    },
    {
      title: "We Think Beyond the Immediate Problem",
      description:
        "We don't just fix today's issue. We transform systems so the same problem doesn't keep repeating.",
    },
  ];

  // Container variants for staggering grid items
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  // Card animation variants
  const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  hover: {
    y: -5,
    transition: { duration: 0.2, ease: "easeOut" },
  },
};

  return (
    <section id="why-og-crystal" className="py-20 max-w-full w-7xl px-6 md:px-12 mx-auto overflow-hidden">
      <div>
        <Title small="The OG Crystal Difference" title="Why OG Crystal?" />

        {/* Subtitle description fade-in */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="text-gray-600 text-center leading-relaxed">
            We combine strategic HR discipline with authentic human insight to
            build resilient, high-performing workplace cultures.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-2 max-md:grid-cols-1 mt-10 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {pillars.map((item, index) => (
            <motion.div
              key={index}
              
              variants={cardVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
              className="p-6 rounded-2xl flex gap-4 border cursor-pointer border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="size-15 rounded-full flex shrink-0 font-bold justify-center items-center bg-[#EAF2FB] text-[#071a3d]">
                {index + 1}
              </div>
              <div>
                <h3 className="text-md font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}