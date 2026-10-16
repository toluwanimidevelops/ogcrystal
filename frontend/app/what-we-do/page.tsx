import Header from "@/components/About/Header";
import OurValues from "@/components/Home/OurValues";
import Services from "@/components/Home/Services";

import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Services - OG Crystal Services | People Advisory, HR & Career Growth",
};

const page = () => {
  return (
    <div>
      <Header small="What we do" text="Our Services" />
      <Services notitle />
      <OurValues />
    </div>
  );
};

export default page;
