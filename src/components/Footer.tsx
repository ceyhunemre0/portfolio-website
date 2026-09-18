const links = [
  { href: "https://github.com/ceyhunemre0", label: "GitHub" },
  { href: "https://www.linkedin.com/in/ceyhunemre", label: "LinkedIn" },
  { href: "https://medium.com/@ceyhunemre0", label: "Medium" },
];

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="page-shell">
        <p className="eyebrow">Birlikte çalışalım</p>
        <div className="footer-cta"><h2>İyi bir fikir mi var?</h2><a href="mailto:ceyhunemretop0@gmail.com">Konuşalım <span aria-hidden="true">↗</span></a></div>
        <div className="footer-bottom">
          <p>© 2026 Ceyhun Emre Top</p>
          <div>{links.map((link) => <a key={link.label} href={link.href} target="_blank" rel="noreferrer">{link.label}</a>)}</div>
          <a href="#top">Başa dön ↑</a>
        </div>
      </div>
    </footer>
  );
}
