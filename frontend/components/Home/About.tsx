"use client";

import React from "react";
import Title from "../Global/Title";
import { motion } from "framer-motion";

const About = ({
  titleNotNeeded,
  exemptButton,
}: {
  titleNotNeeded?: boolean;
  exemptButton?: boolean;
}) => {
  // Animation variants for smooth staggered reveal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  } as const;

  return (
    <div className="max-w-full w-7xl px-6 md:px-12 mx-auto">
      <Title small="who we are" title="Og Crystal Services" />

      <motion.div
        className="flex gap-5 font-mulish text-[17px] text-[#7a7a7a] font-normal max-md:flex-col"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Left Column */}
        <motion.div className="flex-1" variants={itemVariants}>
          <p>
            At OG Crystal Services Limited, we believe that lasting business
            growth begins with people and is strengthened by the experiences
            organisations create.
          </p>
          <p className="mt-2">
            Every successful organisation needs more than good ideas and
            ambitious goals. It needs capable people, effective leadership,
            sound processes, and a clear understanding of how its people and
            customers experience the business. When these elements work
            together, organisations are better positioned to perform, build
            trust, and grow sustainably.
          </p>
          <p className="mt-2">
            We partner with business owners, founders, and leadership teams to
            make that happen.
          </p>
          <p className="mt-2">
            Through our integrated approach to Human Resources Consulting,
            People Advisory, Customer Experience, and Learning and Development,
            we help organisations address people and business challenges with
            practical solutions that create meaningful, lasting value.
          </p>
          <p className="mt-2">
            Our work spans the employee and customer experience. We help
            businesses strengthen their HR foundations, improve recruitment and
            talent management, develop leaders, build effective teams, establish
            people policies and processes, and nurture workplace cultures where
            people can contribute and thrive.
          </p>
          {!exemptButton && (
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-[#B8944D] mt-4 text-white py-2 px-6 cursor-pointer text-md hover:bg-[#a89268] transition-colors"
            >
              Learn More
            </motion.button>
          )}
        </motion.div>

        {/* Right Column */}
        <motion.div className="flex-1" variants={itemVariants}>
         
          <p>
            We also help organisations improve customer service, strengthen
            service delivery, and create customer experiences that build
            confidence, encourage loyalty, and support long-term business
            relationships. The way people are led, supported, and equipped to
            work has a direct influence on the experiences they deliver.
          </p>
          <p className="mt-2">
            Beyond organisational consulting, we support individual and
            professional development through coaching, training, and
            facilitation. Our goal is to equip people with the knowledge,
            skills, and confidence to grow, lead more effectively, and make a
            meaningful contribution wherever they work.
          </p>
          <p className="mt-2">
            We recognise that every organisation has its own realities,
            priorities, and ambitions. That is why we take a thoughtful,
            practical, and tailored approach to our work, focusing on solutions
            that address real challenges, strengthen capabilities, and support
            measurable progress.
          </p>
          <p className="mt-2">
            At OG Crystal Services Limited, our commitment is to provide trusted
            guidance, practical expertise, and meaningful support that help
            organisations get more from their people, create better experiences
            for their customers, and build for the future.
          </p>
        </motion.div>
      </motion.div>

      {/* Animated Image Container */}
      <motion.div
        className="w-full p-2 my-15"
        initial={{ opacity: 0, scale: 0.95, y: 40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="w-full max-h-170 bg-gray-200 rounded-tl-[170px] overflow-hidden rounded-br-[170px] max-md:rounded-br-[100px] max-md:rounded-tl-[100px] max-sm:rounded-tl-[70px] max-sm:rounded-br-[70px]">
          <img
            src={"/002.jpg"}
            alt={"About"}
            className="object-cover w-full h-full"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default About;
