"use client";

import React, { useState } from "react";

import { IoLogoWhatsapp } from "react-icons/io5";
import { LiaTimesSolid } from "react-icons/lia";
const Floatters = () => {
  const [state, setState] = useState(false);
  const link = "https://wa.link/r0c00h";
  return (
    <div className="fixed flex flex-col gap-5 justify-end items-end bottom-20  z-100 right-5">
      {state && (
        <div className="w-80 max-w-full cursor-pointer shadow-lg hover:shadow-2xl duration-500 bg-white overflow-hidden rounded-md">
          <div className="bg-[#2DB742] gap-2 p-5  flex">
            <IoLogoWhatsapp color="white" size={50} />
            <div className="flex flex-col gap-2">
              <h1 className="text-white text-xl">
                Start a WhatsApp Conversation
              </h1>
              <p className="text-xs text-white">
                Hi! Click one of our member below to chat on <b> WhatsApp</b>
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 p-5">
            <p className="text-xs text-gray-600">
              The team typically replies in a few minutes.
            </p>
            <a
              href={link}
              target="_blank"
              className="w-full px-2  rounded-md bg-gray-200 min-h-17 justify-between items-center flex gap-3 border-l-3 hover:bg-white hover:shadow-md duration-500 border-[#2DB742]"
            >
              <span className="flex items-center gap-2">
                <span className="bg-[#2DB742]  size-12 flex cursor-pointer justify-center items-center rounded-full shadow-black/30 shadow-md">
                  <IoLogoWhatsapp color="white" size={30} />
                </span>
                <p className="text-sm">Og Crystal Groups</p>
              </span>
              <IoLogoWhatsapp color="#2DB742" size={20} />
            </a>
          </div>
        </div>
      )}
      <div
        onClick={() => setState((prev) => !prev)}
        className=" flex justify-center  items-center gap-2"
      >
        {!state && (
          <div className=" p-2 text-xs text-gray-600 bg-gray-200 rounded">
            Need Help? <b>Chat With Us</b>
          </div>
        )}

        <div className="bg-[#2DB742]  size-12.5 flex cursor-pointer justify-center items-center rounded-full shadow-black/30 shadow-md">
          {state ? (
            <LiaTimesSolid color="white" size={30} />
          ) : (
            <IoLogoWhatsapp color="white" size={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Floatters;
