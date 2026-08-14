import React from "react";

const Title = ({ small, title }: { small: string; title: string }) => {
  return (
    <div>
      <p className="text-center tracking-[0.3em] uppercase font-mulish  text-xs text-[#838280] font-semibold">
        {small}
      </p>
      <h2 className="text-center text-[#071a3d] font-mulish text-[50px] max-md:text-[30px] my-10 max-md:my-5 leading-15 capitalize tracking-tighter font-bold  ">
        {title}
      </h2>
    </div>
  );
};

export default Title;
