import Navbar from "@/components/Global/NavBar";
import About from "@/components/Home/About";
import Header from "@/components/Home/Header";
import Logo from "@/components/Home/Logo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
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
      <About/>
    </main>
  );
}
