"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { href: "#about", label: "Hakkımda" },
  { href: "#projects", label: "Projeler" },
  { href: "#skills", label: "Yetenekler" },
  { href: "#contact", label: "İletişim" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "top-shell" : "bg-[#111319]/70 backdrop-blur-xl"}`}>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-8">
        <a href="#" className="font-headline text-2xl font-bold tracking-tighter text-[#00F0FF]">
          Ceyhun Emre
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="font-headline text-sm font-medium text-slate-400 transition-colors duration-300 hover:text-[#00F0FF]">
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-lg bg-gradient-to-r from-[#00F0FF] to-[#E1D2FF] px-6 py-2.5 font-headline text-sm font-bold uppercase tracking-wider text-[#00363A] transition-transform hover:scale-[1.02] md:inline-flex"
        >
          İletişime Geç
        </a>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl md:hidden"
          aria-label="Menüyü aç"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((prev) => !prev)}
        >
          <span className="material-symbols-outlined text-[#00F0FF]">{mobileMenuOpen ? "close" : "menu"}</span>
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="mx-4 mb-4 rounded-2xl glass-card ghost-border p-4 md:hidden">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-xl px-4 py-3 font-headline text-sm text-white/80 transition-colors hover:bg-white/5 hover:text-[#00F0FF]"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 rounded-xl bg-gradient-to-r from-[#00F0FF] to-[#E1D2FF] px-4 py-3 text-center font-headline text-xs font-bold uppercase tracking-[0.25em] text-[#00363A]"
              onClick={() => setMobileMenuOpen(false)}
            >
              İletişime Geç
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
