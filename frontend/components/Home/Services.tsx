import React from "react";
import Title from "../Global/Title";
import ServicesCard from "./ServicesCard";


const Services = () => {
  return (
    <div className="mt-60">
      <Title small="what we do" title="Our Services" />
      <p className="text-center tracking-[0.3em] uppercase font-mulish mb-20 text-[10px] text-[#838280] font-medium">
        These are the three pillars of the Og Crystal Services
          </p>
          <div className="flex flex-col max-md:gap-10">
              <ServicesCard backgroundColor="bg-[#F8F6F1]" image="/001.jpg" imagePosition="left"/>
              <ServicesCard backgroundColor="bg-[#EAF2FB]" image="/002.jpg" imagePosition="right"/>
              <ServicesCard backgroundColor="bg-[#2F73C9]" image="/001.jpg" imagePosition="left"/>
          </div>
    </div>
  );
};

export default Services;
