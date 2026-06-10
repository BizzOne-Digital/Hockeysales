"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About Us", href: "/about" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`bg-white border-b border-[#c5c6cd] sticky top-0 z-50 shadow-sm transition-all duration-300 ${scrolled ? "h-16" : "h-20"}`}>
      <div className="flex justify-between items-center w-full px-20 h-full max-w-[1280px] mx-auto">
        <Link href="/" className="font-montserrat text-2xl font-extrabold text-black tracking-tighter">
          Strides Hockey Sales
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-inter text-sm font-semibold tracking-wide transition-colors duration-200 ${
                  isActive
                    ? "text-black font-bold border-b-2 border-black pb-1"
                    : "text-[#44474d] hover:text-black"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-6">
          <button className="material-symbols-outlined text-[#44474d] hover:text-black hidden md:block">
            search
          </button>
          <Link
            href="/products"
            className="bg-black text-white font-inter text-sm font-semibold tracking-wide px-6 py-3 rounded hover:bg-[#006399] active:scale-95 transition-all duration-150"
          >
            Shop Now
          </Link>
          <button
            className="md:hidden material-symbols-outlined text-[#44474d]"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? "close" : "menu"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-[#c5c6cd] px-6 py-4 space-y-3">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block font-inter text-sm font-semibold py-2 tracking-wide transition-colors ${
                  isActive ? "text-black font-bold" : "text-[#44474d]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
