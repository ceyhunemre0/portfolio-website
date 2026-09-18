const navLinks = [
  { href: "#work", label: "Projeler" },
  { href: "#now", label: "Şu sıralar" },
  { href: "#experience", label: "Deneyim" },
  { href: "#about", label: "Hakkımda" },
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner page-shell">
        <a className="wordmark" href="#top" aria-label="Sayfanın başına dön">Ceyhun Emre Top</a>
        <nav className="main-nav" aria-label="Ana menü">
          {navLinks.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
        </nav>
        <a className="header-contact" href="mailto:ceyhunemretop0@gmail.com">İletişim <span aria-hidden="true">↗</span></a>
      </div>
    </header>
  );
}
