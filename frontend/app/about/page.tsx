import Header from "@/components/About/Header";
import About from "@/components/Home/About";
import Logo from "@/components/Home/Logo";
import React from "react";

const page = () => {
  return (
    <div>
      <Header />
      <Logo />
      <About titleNotNeeded exemptButton />{" "}
    </div>
  );
};

export default page;
