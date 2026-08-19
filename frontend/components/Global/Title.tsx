"use client";

import React from "react";
import { motion } from "framer-motion";

interface TitleProps {
  small: string;
  title: string;
  smallTextColor?: string;
  bigTextColor?: string;
}

const Title = ({ small, title, smallTextColor, bigTextColor }: TitleProps) => {
  // Stagger animation variants for the small badge and main heading
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="flex flex-col justify-center items-center"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      <motion.p
        variants={itemVariants}
        className={`text-center px-4 py-2 rounded-2xl w-fit ${
          smallTextColor ? "bg-gray-400/10 " : "bg-gray-400/5 "
        } tracking-[0.3em] uppercase font-mulish text-[10px] ${
          smallTextColor ? smallTextColor : "text-[#838280]"
        } font-normal`}
      >
        {small}
      </motion.p>

      <motion.h2
        variants={itemVariants}
        className={`text-center ${
          bigTextColor ? bigTextColor : "text-[#071a3d]"
        } font-mulish text-[50px] max-md:text-[30px] my-5 mb-5 max-md:mb-5 max-md:my-5 leading-15 capitalize tracking-tighter font-semibold`}
      >
        {title}
      </motion.h2>
    </motion.div>
  );
};

export default Title;
