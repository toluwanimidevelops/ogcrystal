"use client";
import React from "react";

import { motion } from "framer-motion";

const AboutFounder = () => {
  // Animation variants for smooth staggered reveal
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  } as const;
  return (
    <div className="max-w-full  mx-auto">
      <div className="grid grid-cols-2 max-md:grid-cols-1 overflow-hidden">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: false ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className={` bg-[#EAF2FB]  p-5 min-h-150 max-md:min-h-75  gap-5 md:p-20 font-medium `}
        >
          <motion.p
            variants={itemVariants}
            className={` px-4 py-2 rounded-2xl   tracking-[0.3em] uppercase font-mulish text-[10px] 
                     text-[#838280]
                   font-normal`}
          >
            THE FOUNDER
          </motion.p>

          <motion.h2
            variants={itemVariants}
            className={`  text-[#071a3d]
                   font-mulish text-[50px] max-md:text-[30px]   leading-15 capitalize tracking-tighter font-semibold`}
          >
            Oghosa Praise Emmanuel
          </motion.h2>
          <p className="max-sm:text-[14px] font-medium max-lg:text-[16px] my-2 text-[#7a7a7a]">Founder | People Advisor | HR Professional | Facilitator</p>
          <p className="max-sm:text-[14px] font-light max-lg:text-[15px] text-[#7a7a7a]">
            With over 15 years of corporate experience, including more than 10
            years leading people and HR functions across diverse industries,
            Oghosa brings experience in people strategy, HR operations, talent
            management, workplace culture, performance, learning and
            development, and organizational growth. Beyond the technical side of
            HR, her strength lies in helping people think through what matters,
            gain perspective, see possibilities and find practical ways forward.
            That philosophy is at the heart of OG Crystal.
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: false ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className={false ? "order-first max-md:order-0" : "order-last max-md:order-first"}
        >
          <img
            src={"/ceo.jpeg"}
            alt="Service"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default AboutFounder;
