"use client";

import Title from "../Global/Title";
import { motion } from "framer-motion";
import { Users, HeartHandshake, Compass } from "lucide-react";
import { useRouter } from "next/navigation";

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

  const blocks = [
    {
      icon: Users,
      heading: "Who We Are",
      text: "Crystal Services is a professional services firm committed to improving lives and strengthening businesses. Through professional counselling, wellness support, and business advisory, we provide individuals and organisations with the guidance, care, and strategic insight they need to thrive.",
    },
    {
      icon: HeartHandshake,
      heading: "What We Do",
      text: "We provide professional counselling and wellness support to help individuals navigate life's challenges, build emotional resilience, and achieve greater personal well-being. We also offer strategic business advisory services that help organisations overcome challenges, make informed decisions, improve performance, and pursue sustainable growth.",
    },
    {
      icon: Compass,
      heading: "What We Believe",
      text: "We believe that healthy people build stronger communities and that purposeful leadership drives thriving businesses. We believe lasting progress happens when people receive the support they need, decisions are informed by clarity, and growth is guided by purpose.",
    },
  ];
  const router = useRouter();
  return (
    <section
      aria-label="About Crystal Services"
      className="max-w-full w-7xl px-6 md:px-12 mx-auto"
    >
      <motion.article
        className="font-mulish text-[17px] text-left text-[#7a7a7a] font-normal"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2
          variants={itemVariants}
          className={`  text-[#071a3d]
                 font-mulish text-[50px] max-md:text-[30px] text-left my-5 mb-5 max-md:mb-5 max-md:my-5 leading-15 capitalize tracking-tighter font-semibold`}
        >
          About Og Crystal
        </motion.h2>
        {/* Intro */}
        <motion.p className="max-w-3xl" variants={itemVariants}>
          We bring people-centred support, professional counselling, wellness
          solutions, and strategic business insight together to help individuals
          thrive and organisations move forward with clarity and confidence.
        </motion.p>

        {/* Content blocks with icons */}
        <div className="mt-8 grid grid-cols-3 gap-8 max-lg:grid-cols-1">
          {blocks.map(({ icon: Icon, heading, text }) => (
            <motion.div key={heading} variants={itemVariants}>
              <div className="flex items-center gap-3 mb-3">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#B8944D]/10 text-[#B8944D]">
                  <Icon size={24} strokeWidth={1.75} aria-hidden="true" />
                </span>
                <h3 className="text-xl font-semibold text-[#333]">{heading}</h3>
              </div>
              <p>{text}</p>
            </motion.div>
          ))}
        </div>

        {!exemptButton && (
          <motion.button
            onClick={() => router.push("/about")}
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-[#B8944D] mt-8 text-white py-2 px-6 cursor-pointer text-md hover:bg-[#a89268] transition-colors"
          >
            Learn More
          </motion.button>
        )}
      </motion.article>

      {/* Animated Image Container */}
      <motion.figure
        className="w-full p-2 my-15"
        initial={{ opacity: 0, scale: 0.95, y: 40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="w-full max-h-170 bg-gray-200 rounded-tl-[170px] overflow-hidden rounded-br-[170px] max-md:rounded-br-[100px] max-md:rounded-tl-[100px] max-sm:rounded-tl-[70px] max-sm:rounded-br-[70px]">
          <img
            src="/ceol.png"
            alt="Crystal Services team providing counselling, wellness support and business advisory"
            width={1600}
            height={900}
            loading="lazy"
            decoding="async"
            className="object-cover w-full h-full"
          />
        </div>
      </motion.figure>
    </section>
  );
};

export default About;
