import React from "react";

const ServicesCard = ({
  backgroundColor,
  imagePosition,
  text1,
  text2,
  text3,
  buttons,
  image,
}: {
  backgroundColor: string;
  imagePosition: string;
  text1?: string;
  text2?: string;
  text3?: string;
  buttons?: React.ReactNode;
  image: string;
}) => {
  return (
    <div className="grid grid-cols-2 max-md:grid-cols-1">
      <div
        className={`${backgroundColor} text-center p-5  min-h-150 max-md:min-h-75 flex flex-col gap-5 md:p-15 font-medium justify-center items-center`}
      >
        <p className="text-[#B8944D] uppercase text-[12px] font-medium">{text1}</p>
        <h1 className="font-serif text-[#071a3d] max-sm:text-3xl max-lg:text-4xl  text-5xl">{text2}</h1>
        <p className="max-sm:text-[14px] max-lg:text-[15px] text-[#7a7a7a]">{text3}</p>
        {buttons}
      </div>
      <div className={imagePosition === "left" ? "order-first" : "order-last"}>
        <img src={image} alt="Service" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default ServicesCard;
