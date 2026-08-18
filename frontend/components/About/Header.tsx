import React from "react";

const Header = () => {
  return (
    <div className="h-[70vh] relative overflow-hidden w-full ">
      <img
        src="/001.jpg"
        className="w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/95 z-10" />
      <div className="absolute inset-0 w-full flex justify-center items-center h-ful z-20">
        <div className="w-7xl  max-w-full h-full flex flex-col justify-center   mx-auto px-6 md:px-12 ">
          <p
            className={`text-center px-4 py-2 rounded-2xl w-fit bg-white/20   tracking-[0.3em] uppercase font-mulish  text-[10px]  text-white  font-medium`}
          >
            Who we Are
          </p>
          <h2 className="text-white text-6xl ">About Us</h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
