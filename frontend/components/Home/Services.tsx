"use client";

import React from "react";
import Title from "../Global/Title";
import ServicesCard from "./ServicesCard";
import Link from "next/link";
import { motion } from "framer-motion";

const Services = ({ notitle }: { notitle?: boolean }) => {
  return (
    <div className={`${!notitle ? "mt-60" : ""}`}>
      {!notitle ? <Title small="what we do" title="Our Services" /> : ""}
      {!notitle ? (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center tracking-[0.3em] uppercase font-mulish mb-20 text-[10px] text-[#838280] font-medium"
        >
          These are the three pillars of the Og Crystal Services
        </motion.p>
      ) : (
        ""
      )}

      <div className="flex flex-col max-md:gap-10">
        <ServicesCard
          backgroundColor="bg-[#F8F6F1]"
          image="/001.jpg"
          imagePosition="left"
          text1="Og Crystal Services"
          text2="HR & People Advisory"
          text3="Helping growing businesses build the people side of their business properly. Growing businesses often reach a point where informal ways of managing people are no longer enough."
          buttons={
            <div className="flex justify-center gap-2 items-center">
              <Link
                className="py-2 px-5 font-medium max-sm:text-[12px] text-white bg-[#071a3d] transition-transform hover:scale-105"
                href={"/what-we-do/hrPeoleAdvisory"}
              >
                Learn More
              </Link>
              <Link
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
          image="/002.jpg"
          text1="Og Crystal Services"
          text2="Career & Personal Growth Advisory"
          text3="Career growth is not always a straight line. There are moments when people need support to understand their strengths, make better career decisions, prepare for opportunities, navigate transitions or rebuild confidence."
          imagePosition="right"
          buttons={
            <div className="flex justify-center gap-2 items-center">
              <Link
                className="py-2 px-5 font-medium max-sm:text-[12px] text-white bg-[#071a3d] transition-transform hover:scale-105"
                href={"/what-we-do/career-personal-growth"}
              >
                Learn More
              </Link>
              <Link
                className="py-2 px-5 font-medium max-sm:text-[12px] text-white bg-[#B8944D] transition-transform hover:scale-105"
                href={"/contact"}
              >
                Contact Us
              </Link>
            </div>
          }
        />

        <ServicesCard
          backgroundColor="bg-[#2F73C9]/30"
          image="/001.jpg"
          imagePosition="left"
          text1="OG crystal Services"
          text2="Training & Facilitation"
          text3="Learning that moves people forward. Training should not simply fill a room and produce certificates. It should change something. We design and facilitate practical learning experiences that help people understand better, work better and perform better."
          buttons={
            <div className="flex justify-center gap-2 items-center">
              <Link
                className="py-2 px-5 font-medium max-sm:text-[12px] text-white bg-[#071a3d] transition-transform hover:scale-105"
                href={"/what-we-do/training-facilitation"}
              >
                Learn More
              </Link>
              <Link
                className="py-2 px-5 font-medium max-sm:text-[12px] text-white bg-[#B8944D] transition-transform hover:scale-105"
                href={"/contact"}
              >
                Contact Us
              </Link>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default Services;
