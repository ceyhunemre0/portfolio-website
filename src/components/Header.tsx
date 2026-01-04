"use client";
import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#", label: "Anasayfa" },
    { href: "#about", label: "Hakkımda" },
    { href: "#projects", label: "Projelerim" },
    { href: "#skills", label: "Yeteneklerim" },
    { href: "#pricing", label: "Fiyatlandırma" },
    { href: "#contact", label: "İletişim" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-retro-dark/95 backdrop-blur-xl border-b border-neon-cyan/20 shadow-lg shadow-neon-cyan/5"
          : "bg-transparent"
      }`}
    >
      {/* Scanline effect on scroll */}
      {scrolled && (
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,240,255,0.03)_2px,rgba(0,240,255,0.03)_4px)]"></div>
        </div>
      )}

      <div className="mx-auto px-6 md:px-12 lg:px-16 py-4 flex justify-between items-center relative z-10">
        {/* Logo - Chrome Retro Style */}
        <div className="flex items-center">
          <a
            href="#"
            className="group flex items-center gap-3 transition-transform hover:scale-105"
          >
            {/* Neon Logo Icon */}
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-pink to-neon-cyan rounded-lg opacity-80 group-hover:opacity-100 transition-opacity group-hover:shadow-neon-cyan animate-neon-pulse-slow"></div>
              <div className="absolute inset-[2px] bg-retro-dark rounded-lg flex items-center justify-center">
                <span className="text-neon-cyan font-bold text-lg font-mono">
                  CE
                </span>
              </div>
            </div>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative px-4 py-2 font-medium text-retro-chrome/80 hover:text-neon-cyan transition-all duration-300 group font-mono text-sm tracking-wide"
            >
              <span className="relative z-10">{link.label}</span>
              {/* Neon underline animation */}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-neon-pink via-neon-cyan to-neon-pink group-hover:w-3/4 transition-all duration-300 shadow-neon-cyan"></span>
              {/* Hover glow background */}
              <span className="absolute inset-0 bg-neon-cyan/5 rounded scale-0 group-hover:scale-100 transition-transform duration-300"></span>
            </a>
          ))}
        </nav>

        {/* CTA Button - Desktop */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="relative group inline-flex items-center gap-2 px-6 py-2.5 font-semibold font-mono text-sm tracking-wide rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 power-on-scan"
          >
            {/* Button background */}
            <span className="absolute inset-0 bg-gradient-to-r from-neon-pink to-neon-cyan opacity-90 group-hover:opacity-100"></span>
            {/* Inner dark layer */}
            <span className="absolute inset-[1px] bg-retro-dark rounded-lg group-hover:bg-transparent transition-colors duration-300"></span>
            {/* Text */}
            <span className="relative z-10 text-neon-cyan group-hover:text-retro-dark transition-colors duration-300">
              [ İLETİŞİME GEÇ ]
            </span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden relative w-10 h-10 flex items-center justify-center text-neon-cyan focus:outline-none"
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-5">
            <span
              className={`absolute left-0 w-full h-0.5 bg-current rounded-full transition-all duration-300 shadow-neon-cyan ${
                mobileMenuOpen ? "top-2 rotate-45" : "top-0"
              }`}
            ></span>
            <span
              className={`absolute left-0 top-2 w-full h-0.5 bg-current rounded-full transition-all duration-300 ${
                mobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`absolute left-0 w-full h-0.5 bg-current rounded-full transition-all duration-300 shadow-neon-cyan ${
                mobileMenuOpen ? "top-2 -rotate-45" : "top-4"
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu - Holographic Slide Down */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-retro-dark/98 backdrop-blur-xl border-b border-neon-cyan/20 transition-all duration-500 overflow-hidden ${
          mobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {/* Scanline overlay for mobile menu */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,240,255,0.05)_2px,rgba(0,240,255,0.05)_4px)]"></div>
        </div>

        <div className="container mx-auto px-6 py-6 flex flex-col space-y-2 relative z-10">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="py-3 px-4 text-retro-chrome/80 hover:text-neon-cyan font-mono text-sm tracking-wide rounded-lg hover:bg-neon-cyan/10 transition-all duration-300 border border-transparent hover:border-neon-cyan/30"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <span className="text-neon-pink mr-2">&gt;</span>
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-4 py-3 px-6 bg-gradient-to-r from-neon-pink to-neon-cyan text-retro-dark font-semibold font-mono rounded-lg text-center hover:shadow-neon-cyan transition-all duration-300"
          >
            [ İLETİŞİME GEÇ ]
          </a>
        </div>
      </div>
    </header>
  );
}
