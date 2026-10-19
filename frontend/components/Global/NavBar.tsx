"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const [isLightTheme, setIsLightTheme] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      // 1. Check Scroll Position for translucent background
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // 2. Check for sections with data-nav-theme="light" passing under the navbar
      const lightElements = document.querySelectorAll(
        '[data-nav-theme="light"]',
      );
      let foundLightSection = false;

      const navThreshold = 80; // Height of navbar area to check

      lightElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= navThreshold && rect.bottom >= navThreshold) {
          foundLightSection = true;
        }
      });

      setIsLightTheme(foundLightSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check on load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#071A3D]/90 backdrop-blur-md lg:py-4  shadow-lg border-b border-[#2F73C9]/20"
          : "bg-transparent py-6 mt-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 max-lg:py-4 flex items-center justify-between">
        {/* Logo: the link label and the alt text both name the brand */}
        <Link
          href="/"
          aria-label="OG Crystal Services - Home"
          className="text-2xl font-bold tracking-tight"
        >
          <img
            src={
              !isScrolled ? "/logo/ogcrystal.png" : "/logo/ogcrystalwhite.png"
            }
            width={60}
            height={60}
            className="w-15"
            alt="OG Crystal Services logo"
          />
        </Link>

        {/* Desktop Links */}
        <nav
          aria-label="Main navigation"
          className="hidden lg:flex items-center gap-8"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
              className={`text-sm font-medium transition-colors duration-200 ${
                isLightTheme && !isScrolled
                  ? "text-black hover:text-[#2F73C9]"
                  : "text-[#EAF2FB]/80 hover:text-white"
              }`}
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
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`lg:hidden p-2 focus:outline-none ${
            isLightTheme && !isScrolled ? "text-black" : "text-white"
          }`}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden border-b px-6 py-8 flex flex-col gap-6 animate-in slide-in-from-top duration-200 bg-[#071A3D] border-[#2F73C9]/20"
        >
          <nav aria-label="Mobile navigation" className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                aria-current={pathname === link.href ? "page" : undefined}
                className="text-lg font-medium transition-colors text-[#EAF2FB] hover:text-[#B8944D]"
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
