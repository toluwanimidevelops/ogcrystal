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
      <div className={`${backgroundColor} min-h-150 max-md:min-h-75`}></div>
      <div className={imagePosition === "left" ? "order-first" : "order-last"}>
        <img src={image} alt="Service" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default ServicesCard;
