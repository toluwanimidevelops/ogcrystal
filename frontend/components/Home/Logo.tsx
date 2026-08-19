"use client";

import { motion } from "framer-motion";

const Logo = () => {
  return (
    <div className="text-2xl lg:px-40 mx-auto flex justify-center items-center font-bold max-w-6xl min-h-[400px] py-20 max-sm:py-10 px-10">
      <motion.img
        src="/logo/ogcrystal2.png"
        alt="Logo"
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
    </div>
  );
};

export default Logo;