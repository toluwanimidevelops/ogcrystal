import type { Metadata } from "next";
import { Geist, Geist_Mono, Mulish } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/Global/NavBar";
import Footer from "@/components/Global/Footer";
import { Toaster } from "react-hot-toast";
import { AppProvider } from "@/context/AppContext";
const mulish = Mulish({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mulish", // optional: CSS variable if using Tailwind or CSS variables
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | OG Crystal Services | People Advisory, HR & Career Growth", // Plugs "Home" into %s
    default: "OG Crystal Services | People Advisory, HR & Career Growth",
  },
  description:
    "OG Crystal Services provides practical people and business advisory for startups, SMEs, professionals and individuals, covering HR advisory, recruitment, culture, training, career guidance and professional growth.",
  icons: {
    icon: "/logo/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.className} ${geist.className} ${geistMono.variable} ${mulish.className} ${geistMono.variable} ${mulish.variable} bg-white h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Toaster />
        <AppProvider>
          <Navbar />
          {children}
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
