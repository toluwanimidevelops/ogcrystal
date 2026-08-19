import AboutFounder from "@/components/About/AboutFounder";
import Header from "@/components/About/Header";
import About from "@/components/Home/About";
import Logo from "@/components/Home/Logo";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title:
    "About - OG Crystal Services | People Advisory, HR & Career Growth",
};
const page = () => {
  return (
    <div >
      <Header />
      <Logo />
      <About titleNotNeeded exemptButton />
      <AboutFounder/>
    </div>
  );
};

export default page;
