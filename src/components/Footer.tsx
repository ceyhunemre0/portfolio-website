const links = [
  { href: "https://www.github.com/ceyhunemre0", label: "GitHub" },
  { href: "https://www.linkedin.com/in/ceyhun-emre-top-85212b311", label: "LinkedIn" },
  { href: "https://www.instagram.com/only_emree/", label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/5 bg-[#111319] px-6 py-12 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
        <div className="font-headline text-lg font-bold text-white">Ceyhun Emre</div>
        <p className="font-tech text-sm uppercase tracking-widest text-slate-500">© 2026 Ceyhun Emre. Built with Precision.</p>
        <div className="flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-tech text-sm uppercase tracking-widest text-slate-500 transition-all hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
