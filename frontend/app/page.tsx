import Navbar from "@/components/Global/NavBar";
import About from "@/components/Home/About";
import Header from "@/components/Home/Header";
import Logo from "@/components/Home/Logo";
import OurValues from "@/components/Home/OurValues";
import Services from "@/components/Home/Services";
import WhyOGCrystal from "@/components/Home/Whyus";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Main Home - OG Crystal Services | People Advisory, HR & Career Growth",
};

export default function Page() {
  return (
    <main className="relative">
      {/* Fixed Hero Header in background (z-0) */}
      <Header />

      {/* Invisible spacer to hold height for the initial 100vh view */}
      {/* <div className="h-screen pointer-events-none" /> */}

      {/* Content Section sliding up over the header (z-10) */}
      <Logo />
      <About />
      <Services />
      <OurValues />
      <WhyOGCrystal />
    </main>
  );
}
