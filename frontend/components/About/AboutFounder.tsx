"use client";
import React from "react";

import { motion } from "framer-motion";
import Title from "../Global/Title";

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
      <Title title="Meet Our Founder"/>
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
          <p className="max-sm:text-[14px] font-medium max-lg:text-[16px] my-2 text-[#7a7a7a]">
            Founder | People Advisor | HR Professional | Facilitator
          </p>
          <p className="max-sm:text-[14px] font-light max-lg:text-[15px] text-[#7a7a7a]">
            With over 15 years of corporate experience, including more than a
            decade in core Human Resources, Oghosa Praise Emmanuel has built her
            career at the intersection of people, service, and business
            performance.
            <span className="mt-2 block">
              Her professional journey began in customer service and customer
              support, where she developed a strong appreciation for listening,
              understanding people's needs, resolving concerns, and creating
              experiences that build trust. Her experience across industries and
              professional environments in Nigeria and internationally broadened
              her perspective on what organisations need to serve people well
              and perform effectively.
            </span>
            <span className="mt-2 block">
              As her career evolved into HR leadership and people management,
              she began to see more clearly how closely the employee experience
              is connected to the customer experience. Capable people need
              effective leadership, the right support, relevant training, and
              clear processes to do their best work. When organisations invest
              in these foundations, they are better equipped to deliver
              consistent service, build trust, and grow.
            </span>
            <span className="mt-2 block">
              These experiences helped shape her vision for OG Crystal Services
              Limited: an advisory business that brings people management and
              customer experience together, helping organisations strengthen
              their HR practices, improve service delivery, and build the
              capabilities needed for lasting growth.
            </span>
            <span className="mt-2 block">
              Alongside her work with organisations, Oghosa is passionate about
              coaching, training, facilitation, and professional development.
              Her approach is practical and people-centred, grounded in
              listening carefully, understanding the challenge, and helping turn
              insight into meaningful action.
            </span>
            <span className="mt-2 block">
              Through OG Crystal Services, she is building a business that
              brings together expertise and practical guidance to help
              organisations and individuals make progress that lasts.
            </span>
            <q className="mt-2 text-[#071a3d] font-semibold block">
              <i>
                Her guiding belief: better-supported people can create better
                experiences, and better experiences can contribute to lasting
                growth.
              </i>
            </q>
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: false ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className={
            false
              ? "order-first max-md:order-0"
              : "order-last max-md:order-first"
          }
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
