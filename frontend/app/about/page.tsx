import AboutFounder from "@/components/About/AboutFounder";
import Header from "@/components/About/Header";
import About from "@/components/Home/About";
import Logo from "@/components/Home/Logo";
import OurValues from "@/components/Home/OurValues";
import { Metadata } from "next";

// Replace with your real domain (or set NEXT_PUBLIC_SITE_URL in .env)
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://ogcrystalservices.com/";

export const metadata: Metadata = {
  title: "About - OG Crystal Services | People Advisory, HR & Career Growth",
  description:
    "Learn about OG Crystal Services Limited, a people advisory business combining HR consulting, customer experience, and learning and development, founded by Oghosa Praise Emmanuel.",
  alternates: { canonical: `${SITE_URL}/about` },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Oghosa Praise Emmanuel",
  jobTitle: "Founder",
  description:
    "Founder, People Advisor, HR Professional and Facilitator with over 15 years of corporate experience.",
  image: `${SITE_URL}/ceo.jpeg`,
  url: `${SITE_URL}/about`,
  worksFor: {
    "@type": "Organization",
    name: "OG Crystal Services Limited",
    url: SITE_URL,
  },
};

const page = () => {
  return (
    <div aria-label="About OG Crystal Services and its founder, Oghosa Praise Emmanuel">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          // Escaping "<" is the standard guard against breaking out of the script tag
          __html: JSON.stringify(personSchema).replace(/</g, "\\u003c"),
        }}
      />
      <Header image="/010.jpg" small="Who we are" text="About Us" />
      <Logo />
      <About titleNotNeeded exemptButton />
      <AboutFounder />
      <div className="mt-10" />
      <OurValues noPadding />
    </div>
  );
};

export default page;
