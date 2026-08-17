import React from "react";
import Title from "../Global/Title";
import { LuShieldCheck } from "react-icons/lu";
import {
  TbAward,
  TbHeartHandshake,
  TbSeedling,
  TbCompass,
} from "react-icons/tb";

const OurValues = () => {
  let data = [
    {
      icon: (
        <LuShieldCheck size={35} strokeWidth={1} className="text-[#071A3D]" />
      ),
      title: "Integrity",
      description:
        "We build trust through honesty, consistency and doing what is right.",
    },
    {
      icon: <TbAward size={35} strokeWidth={1} className="text-[#2F73C9]" />,
      title: "Excellence",
      description:
        "We take our work seriously and continually raise the standard.",
    },
    {
      icon: (
        <TbHeartHandshake
          size={35}
          strokeWidth={1}
          className="text-[#303846]"
        />
      ),
      title: "People",
      
      description:
        "We treat people with dignity, respect and genuine consideration.",
    },
    {
      icon: <TbSeedling size={35} strokeWidth={1} className="text-[#B8944D]" />,
      title: "Growth",
      description:
        "We believe improvement is possible with the right support, structure and opportunity.",
    },
    {
      icon: (
        <TbCompass size={35} strokeWidth={1} className="text-[#B8944D]/50" />
      ),
      title: "Purpose",
      description:
        "We care about creating work and outcomes that have meaning beyond simply getting the job done.",
    },
  ];
  return (
    <div className="w-full mt-60 py-30 bg-[#071a3d]">
      <div className="max-w-full w-6xl px-5 mx-auto ">
        <Title
          small="our values"
          title="Values you will find here"
          smallTextColor="text-white"
          bigTextColor="text-white"
        />
        <div className="w-full  max-sm:grid-cols-1 max-md:grid-cols-2 gap-10 mt-20 mx-auto grid grid-cols-3 ">
          {data.map((item, index) => (
            <div key={index}>
              <div className={`size-15 flex items-center justify-center rounded-full bg-[#F8F6F1] `}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurValues;
