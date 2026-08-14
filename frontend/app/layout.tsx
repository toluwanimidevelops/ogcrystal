import type { Metadata } from "next";
import { Geist, Geist_Mono , Mulish} from "next/font/google";

import "./globals.css";
import Navbar from "@/components/Global/NavBar";
const mulish = Mulish({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mulish', // optional: CSS variable if using Tailwind or CSS variables
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | OgCrystal", // Plugs "Home" into %s
    default: "OgCrystal",
  },
  description:
    "OgCrystals provides information and resources about crystals...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${mulish.variable} bg-white h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}</body>
    </html>
  );
}
