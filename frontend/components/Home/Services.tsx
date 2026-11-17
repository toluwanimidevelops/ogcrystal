"use client";

import React from "react";
import Title from "../Global/Title";
import ServicesCard from "./ServicesCard";
import Link from "next/link";
import { motion } from "framer-motion";

const Services = ({ notitle }: { notitle?: boolean }) => {
  return (
    // <section> instead of <div>: a distinct, labeled part of the page
    <section
      aria-label="Our services at OG Crystal Services"
      className={`${!notitle ? "mt-60" : ""}`}
    >
      {!notitle ? <Title title="Our Services" /> : ""}
      {!notitle ? (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center tracking-[0.3em] uppercase font-mulish mb-20 text-[10px] text-[#838280] font-medium"
        >
          These are the Three pillars of the Og Crystal Services
        </motion.p>
      ) : (
        ""
      )}

      <div className="flex flex-col max-md:gap-10">
        <ServicesCard
          backgroundColor="bg-[#F8F6F1]"
          image="/office.png"
          imagePosition="left"
          text1="Og Crystal Services"
          text2="Support For Life"
          text3="Support for individuals through wellness, counselling and coaching, helping them work through challenges and take positive steps towards a healthier and more balanced life."
          buttons={
            <div className="flex justify-center gap-2 items-center">
              <Link
                aria-label="Learn more about Clarity for Business"
                className="py-2 px-5 font-medium max-sm:text-[12px] text-white bg-[#071a3d] transition-transform hover:scale-105"
                href={"/what-we-do/support-for-life"}
              >
                Learn More
              </Link>
              <Link
                aria-label="Contact us about Clarity for Business"
                className="py-2 px-5 font-medium max-sm:text-[12px] text-white bg-[#B8944D] transition-transform hover:scale-105"
                href={"/contact"}
              >
                Contact Us
              </Link>
            </div>
          }
        />
        <ServicesCard
          backgroundColor="bg-[#F8F6F1]"
          image="/009.jpg"
          imagePosition="right"
          text1="Og Crystal Services"
          text2="Clarity for Business"
          text3="Practical support for businesses that want to improve their people practices, business direction, operations and customer experience."
          buttons={
            <div className="flex justify-center gap-2 items-center">
              <Link
                aria-label="Learn more about Clarity for Business"
                className="py-2 px-5 font-medium max-sm:text-[12px] text-white bg-[#071a3d] transition-transform hover:scale-105"
                href={"/what-we-do/clarity-for-business"}
              >
                Learn More
              </Link>
              <Link
                aria-label="Contact us about Clarity for Business"
                className="py-2 px-5 font-medium max-sm:text-[12px] text-white bg-[#B8944D] transition-transform hover:scale-105"
                href={"/contact"}
              >
                Contact Us
              </Link>
            </div>
          }
        />

        <ServicesCard
          backgroundColor="bg-[#EAF2FB]"
          image="/011.jpg"
          text1="Og Crystal Services"
          text2="Growth with Purpose"
          text3="Support for people who want to grow in their careers, develop their skills, build confidence and become better leaders."
          imagePosition="left"
          buttons={
            <div className="flex justify-center gap-2 items-center">
              <Link
                aria-label="Learn more about Growth with Purpose"
                className="py-2 px-5 font-medium max-sm:text-[12px] text-white bg-[#071a3d] transition-transform hover:scale-105"
                href={"/what-we-do/growth-with-purpose"}
              >
                Learn More
              </Link>
              <Link
                aria-label="Contact us about Growth with Purpose"
                className="py-2 px-5 font-medium max-sm:text-[12px] text-white bg-[#B8944D] transition-transform hover:scale-105"
                href={"/contact"}
              >
                Contact Us
              </Link>
            </div>
          }
        />
      </div>
    </section>
  );
};

export default Services;
