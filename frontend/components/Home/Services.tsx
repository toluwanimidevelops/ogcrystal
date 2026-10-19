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
      {!notitle ? <Title small="what we do" title="Our Services" /> : ""}
      {!notitle ? (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center tracking-[0.3em] uppercase font-mulish mb-20 text-[10px] text-[#838280] font-medium"
        >
          These are the Four pillars of the Og Crystal Services
        </motion.p>
      ) : (
        ""
      )}

      <div className="flex flex-col max-md:gap-10">
        <ServicesCard
          backgroundColor="bg-[#F8F6F1]"
          image="/009.jpg"
          imagePosition="left"
          text1="Og Crystal Services"
          text2="People Advisory and HR Consulting"
          text3="Help organisations build and strengthen their people function through HR strategy, recruitment, workforce planning, performance management, employee engagement, compensation structures, policies, processes, and organisational culture."
          buttons={
            <div className="flex justify-center gap-2 items-center">
              <Link
                aria-label="Learn more about People Advisory and HR Consulting"
                className="py-2 px-5 font-medium max-sm:text-[12px] text-white bg-[#071a3d] transition-transform hover:scale-105"
                href={"/what-we-do/hrPeoleAdvisory"}
              >
                Learn More
              </Link>
              <Link
                aria-label="Contact us about People Advisory and HR Consulting"
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
          text2="Career & Personal Growth Advisory"
          text3="Career growth is not always a straight line. There are moments when people need support to understand their strengths, make better career decisions, prepare for opportunities, navigate transitions or rebuild confidence."
          imagePosition="right"
          buttons={
            <div className="flex justify-center gap-2 items-center">
              <Link
                aria-label="Learn more about Career and Personal Growth Advisory"
                className="py-2 px-5 font-medium max-sm:text-[12px] text-white bg-[#071a3d] transition-transform hover:scale-105"
                href={"/what-we-do/career-personal-growth"}
              >
                Learn More
              </Link>
              <Link
                aria-label="Contact us about Career and Personal Growth Advisory"
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
          image="/010.jpg"
          imagePosition="left"
          text1="OG crystal Services"
          text2="Training & Facilitation"
          text3="Learning that moves people forward. Training should not simply fill a room and produce certificates. It should change something. We design and facilitate practical learning experiences that help people understand better, work better and perform better."
          buttons={
            <div className="flex justify-center gap-2 items-center">
              <Link
                aria-label="Learn more about Training and Facilitation"
                className="py-2 px-5 font-medium max-sm:text-[12px] text-white bg-[#071a3d] transition-transform hover:scale-105"
                href={"/what-we-do/training-facilitation"}
              >
                Learn More
              </Link>
              <Link
                aria-label="Contact us about Training and Facilitation"
                className="py-2 px-5 font-medium max-sm:text-[12px] text-white bg-[#B8944D] transition-transform hover:scale-105"
                href={"/contact"}
              >
                Contact Us
              </Link>
            </div>
          }
        />
        <ServicesCard
          backgroundColor="bg-[#f8f6f1]"
          image="/003.jpg"
          imagePosition="right"
          text1="OG crystal Services"
          text2="Customer Experience and Service Excellence"
          text3="Help businesses improve customer interactions, strengthen service standards, develop customer-focused teams, review service delivery processes, and create experiences that encourage trust, satisfaction, and loyalty."
          buttons={
            <div className="flex justify-center gap-2 items-center">
              <Link
                aria-label="Contact us about Customer Experience and Service Excellence"
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
