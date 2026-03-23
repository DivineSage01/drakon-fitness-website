"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "Memberships", href: "#memberships" },
  { label: "Programs", href: "#programs" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0a]/95 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.6)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
            className="flex flex-col leading-none group"
          >
            <span
              className="text-[#d4af37] font-black text-2xl tracking-[0.2em] uppercase"
              style={{ fontFamily: "var(--font-cinzel), serif" }}
            >
              DRAKON
            </span>
            <span className="text-[#a0a0a0] text-[10px] tracking-[0.5em] uppercase font-light group-hover:text-[#d4af37] transition-colors duration-300">
              FITNESS
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="text-[#a0a0a0] text-sm tracking-widest uppercase font-medium hover:text-[#d4af37] transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#d4af37] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
              className="ml-4 px-6 py-2.5 bg-[#d4af37] text-black text-sm font-bold tracking-widest uppercase hover:bg-[#f0c040] transition-colors duration-300"
            >
              Join Now
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2 group"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-7 h-0.5 bg-[#d4af37] transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-7 h-0.5 bg-[#d4af37] transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-7 h-0.5 bg-[#d4af37] transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#111111] border-t border-[#d4af37]/20 px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className="text-[#a0a0a0] text-sm tracking-widest uppercase font-medium hover:text-[#d4af37] transition-colors duration-300 py-2 border-b border-white/5"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
            className="mt-2 px-6 py-3 bg-[#d4af37] text-black text-sm font-bold tracking-widest uppercase text-center hover:bg-[#f0c040] transition-colors duration-300"
          >
            Join Now
          </a>
        </div>
      </div>
    </nav>
  );
}
