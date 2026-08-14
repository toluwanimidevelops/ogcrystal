"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "What we Do", href: "/what-we-do" },
  { name: "Our Approach", href: "/our-approach" },
  { name: "Insights", href: "/insights" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#071A3D]/90 backdrop-blur-md py-4 shadow-lg border-b border-[#2F73C9]/20"
          : "bg-transparent py-6 mt-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-tight text-white">
          OgCrystal<span className="text-[#B8944D]">.</span>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-[#EAF2FB]/80 hover:text-white transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-[#2F73C9] rounded-full hover:bg-[#255eb3] transition-all duration-200 shadow-sm hover:shadow-md"
          >
            Start A Conversation
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-white p-2 focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#071A3D] border-b border-[#2F73C9]/20 px-6 py-8 flex flex-col gap-6 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-[#EAF2FB] hover:text-[#B8944D] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="pt-4 border-t border-[#2F73C9]/20">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center px-5 py-3 text-base font-semibold text-white bg-[#2F73C9] rounded-full hover:bg-[#255eb3] transition-all"
            >
              Start A Conversation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}