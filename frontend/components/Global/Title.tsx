import React from "react";

const Title = ({
  small,
  title,
  smallTextColor,
  bigTextColor,
}: {
  small: string;
  title: string;
  smallTextColor?: string;
  bigTextColor?: string;
}) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className={`text-center px-4 py-2 rounded-2xl w-fit ${smallTextColor ? "bg-gray-400/10  ": "bg-gray-400/5 "} tracking-[0.3em] uppercase font-mulish  text-[10px] ${smallTextColor? smallTextColor : "text-[#838280]"}  font-medium`}>
        {small}
      </p>
      <h2 className={`text-center ${bigTextColor ? bigTextColor: "text-[#071a3d]"}  font-mulish text-[50px] max-md:text-[30px] my-5 mb-5 max-md:mb-5 max-md:my-5 leading-15 capitalize tracking-tighter font-semibold  `}>
        {title}
      </h2>
    </div>
  );
};

export default Title;
