"use client";

import React, { useState } from "react";
import { FcCancel } from "react-icons/fc";
import { IoLogoWhatsapp } from "react-icons/io5";
const Floatters = () => {
  const [state, setState] = useState(false);
  const link = "wa.link/r0c00h";
  return (
    <div className=" bottom-20  z-100 right-5">
      {state && <div></div>}
      <div className="fixed flex justify-center  items-center gap-2">
        {!state && (
          <div className=" p-2 text-xs text-gray-600 bg-gray-200 rounded">
            Need Help? <b>Chat With Us</b>
          </div>
        )}

        <div className="bg-[#2DB742] size-12.5 flex cursor-pointer justify-center items-center rounded-full shadow-black/30 shadow-md">
          {state ? (
            <FcCancel color="whitw" size={30} />
          ) : (
            <IoLogoWhatsapp color="white" size={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Floatters;
