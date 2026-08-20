"use client";

import React from "react";
import { motion } from "framer-motion";
import Cta from "./Cta";

const Footer = () => {
  // Stagger animation configuration for footer columns
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
  } as const;

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap');
          footer a, footer p, footer h3, footer li, footer ul, footer h1 {
            font-family: "Geist", sans-serif;
          }
        `}
      </style>

      {/* Quote Container */}
      <div className="px-4 md:px-12 overflow-hidden">
        <Cta/>
      </div>

      {/* Footer Main Section */}
      <div className="bg-[#071A3D]/20 pt-20 rounded-t-3xl px-4 overflow-hidden">
        <footer className="bg-white w-full max-w-337.5 mx-auto text-black pt-8 lg:pt-12 px-4 sm:px-8 md:px-16 lg:px-28 rounded-tl-3xl rounded-tr-3xl overflow-hidden">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-6 gap-8 md:gap-12"
          >
            {/* Left Column: Brand Info */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-3  space-y-6"
            >
              <a href="/" className="block">
                <img
                  className="w-15"
                  src="/logo/ogcrystalblack.png"
                  alt="Logo"
                   loading="lazy"
                />
              </a>
              <p className="text-sm/6 text-neutral-600 max-w-96">
                OG Crystal Services: People. Performance. Purpose. Growth is
                built by people. Every business begins with people. Every career
                is shaped by decisions.
              </p>

              {/* Social Links */}
              <div className="flex gap-5 md:gap-6 order-1 md:order-2">
                {/* Twitter */}
                <motion.a
                  whileHover={{ y: -3 }}
                  href="#"
                  className="text-neutral-600 hover:text-neutral-900 transition-colors"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                  </svg>
                </motion.a>

                {/* Linkedin */}
                <motion.a
                  whileHover={{ y: -3 }}
                  href="#"
                  className="text-neutral-600 hover:text-neutral-900 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </motion.a>

                {/* Youtube */}
                <motion.a
                  whileHover={{ y: -3 }}
                  href="#"
                  className="text-neutral-600 hover:text-neutral-900 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                    <path d="m10 15 5-3-5-3z" />
                  </svg>
                </motion.a>

                {/* Instagram */}
                <motion.a
                  whileHover={{ y: -3 }}
                  href="#"
                  className="text-neutral-600 hover:text-neutral-900 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>

            {/* Links Columns */}
            <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 lg:gap-28 items-start">
              {/* Products */}
              <motion.div variants={itemVariants}>
                <h3 className="font-medium text-sm mb-4">Products</h3>
                <ul className="space-y-3 text-sm text-neutral-800">
                  <li>
                    <a
                      href="#"
                      className="hover:text-neutral-500 transition-colors"
                    >
                      Components
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-neutral-500 transition-colors"
                    >
                      Templates
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-neutral-500 transition-colors"
                    >
                      Icons
                    </a>
                  </li>
                </ul>
              </motion.div>

              {/* Resources */}
              <motion.div variants={itemVariants}>
                <h3 className="font-medium text-sm mb-4">Resources</h3>
                <ul className="space-y-3 text-sm text-neutral-800">
                  <li>
                    <a
                      href="#"
                      className="hover:text-neutral-500 transition-colors"
                    >
                      PrebuiltUI
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-neutral-500 transition-colors"
                    >
                      Templates
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-neutral-500 transition-colors"
                    >
                      Components
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-neutral-500 transition-colors"
                    >
                      Blogs
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-neutral-500 transition-colors"
                    >
                      Store
                    </a>
                  </li>
                </ul>
              </motion.div>

              {/* Company */}
              <motion.div
                variants={itemVariants}
                className="col-span-2 md:col-span-1"
              >
                <h3 className="font-medium text-sm mb-4">Company</h3>
                <ul className="space-y-3 text-sm text-neutral-800">
                  <li>
                    <a
                      href="#"
                      className="hover:text-neutral-500 transition-colors"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-neutral-500 transition-colors"
                    >
                      Vision
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <a
                      href="#"
                      className="hover:text-neutral-500 transition-colors"
                    >
                      Careers
                    </a>
                    <span className="text-[11px] px-2 py-0.5 rounded-full bg-neutral-50 border border-neutral-400 text-neutral-700">
                      HIRING
                    </span>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-neutral-500 transition-colors"
                    >
                      Privacy policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-neutral-500 transition-colors"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>

          {/* Bottom Bar */}
          <div className="max-w-7xl mx-auto mt-12 pt-4 border-t border-neutral-300 flex justify-between items-center">
            <p className="text-neutral-600 text-sm">© 2026 Og Crystal Design</p>
            <p className="text-sm text-neutral-600">All right reserved.</p>
          </div>

          {/* Large Watermark Heading */}
          <div className="relative overflow-hidden">
            <div className="absolute inset-x-0 bottom-0 mx-auto w-full max-w-3xl h-full max-h-64 bg-slate-100 rounded-full blur-[100px] pointer-events-none" />
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center font-extrabold leading-[0.7] text-transparent text-[clamp(2rem,8vw,6rem)] [-webkit-text-stroke:1px_#D4D4D4] mt-6 select-none"
            >
              OGCRYSTAL
            </motion.h1>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
