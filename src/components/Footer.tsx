export default function Footer() {
  return (
    <footer className="relative bg-retro-black text-retro-chrome py-16 overflow-hidden border-t border-neon-cyan/20">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        {/* Decorative glow */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-neon-cyan/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-neon-pink/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <a
              href="#"
              className="inline-block text-3xl font-black mb-3 hover:scale-105 transition-transform font-display"
            >
              <span className="bg-gradient-to-r from-neon-cyan via-retro-chrome-bright to-neon-pink bg-clip-text text-transparent">
                CEYHUN EMRE
              </span>
            </a>
            <p className="text-retro-chrome/80 text-lg font-mono">
              Yaratıcı <span className="text-neon-cyan">Yapay Zeka</span> &amp;{" "}
              <span className="text-neon-pink">Backend</span> Çözümleri
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="#"
              className="text-retro-chrome/70 hover:text-neon-cyan font-mono text-sm transition duration-300 hover:scale-110"
            >
              Anasayfa
            </a>
            <a
              href="#about"
              className="text-retro-chrome/70 hover:text-neon-cyan font-mono text-sm transition duration-300 hover:scale-110"
            >
              Hakkımda
            </a>
            <a
              href="#projects"
              className="text-retro-chrome/70 hover:text-neon-cyan font-mono text-sm transition duration-300 hover:scale-110"
            >
              Projelerim
            </a>
            <a
              href="#skills"
              className="text-retro-chrome/70 hover:text-neon-cyan font-mono text-sm transition duration-300 hover:scale-110"
            >
              Yeteneklerim
            </a>
            <a
              href="#pricing"
              className="text-retro-chrome/70 hover:text-neon-cyan font-mono text-sm transition duration-300 hover:scale-110"
            >
              Fiyatlandırma
            </a>
            <a
              href="#contact"
              className="text-retro-chrome/70 hover:text-neon-cyan font-mono text-sm transition duration-300 hover:scale-110"
            >
              İletişim
            </a>
          </div>
        </div>

        {/* Divider with neon effect */}
        <div className="h-px bg-gradient-to-r from-transparent via-neon-cyan/50 to-transparent mb-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <p className="text-retro-chrome/60 text-sm font-mono">
            <span className="text-neon-cyan">&gt;</span> © 2025 Ceyhun Emre.{" "}
            <span className="text-neon-pink">Tüm Hakları Saklıdır.</span>
          </p>

          {/* Social Links */}
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/only_emree/"
              className="w-12 h-12 rounded-lg bg-retro-panel backdrop-blur-sm flex items-center justify-center text-neon-pink border border-neon-pink/30 hover:bg-neon-pink/20 hover:border-neon-pink hover:shadow-neon-pink hover:scale-110 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram text-lg"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/ceyhun-emre-top-85212b311"
              className="w-12 h-12 rounded-lg bg-retro-panel backdrop-blur-sm flex items-center justify-center text-neon-cyan border border-neon-cyan/30 hover:bg-neon-cyan/20 hover:border-neon-cyan hover:shadow-neon-cyan hover:scale-110 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in text-lg"></i>
            </a>
            <a
              href="https://www.github.com/ceyhunemre0"
              className="w-12 h-12 rounded-lg bg-retro-panel backdrop-blur-sm flex items-center justify-center text-retro-chrome border border-retro-chrome/30 hover:bg-retro-chrome/20 hover:border-retro-chrome hover:shadow-chrome hover:scale-110 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github text-lg"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
