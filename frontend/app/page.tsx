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
    openGraph: {
    title: 'OG Crystal Services | People Advisory, HR & Career Growth',
    description: 'OG Crystal Services provides practical people and business advisory for startups, SMEs, professionals and individuals, covering HR advisory, recruitment, culture, training, career guidance and professional growth.',
    url: 'https://www.ogcrystalservices.com',
    siteName: 'Og Crystal Services',
    images: [
      {
        url: 'https://ogcrystalservices.com/ceo.jpeg',
        width: 1200,
        height: 630,
        alt: 'Open Graph Image Alt Text',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
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
