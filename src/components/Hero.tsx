import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-[921px] items-center overflow-hidden px-6 pt-24 md:px-8">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-20 h-96 w-96 rounded-full bg-[#00F0FF]/10 blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 h-96 w-96 rounded-full bg-[#E00460]/10 blur-[120px]" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div>
          <span className="font-tech mb-4 block text-sm uppercase tracking-[0.3em] text-[#00F0FF]">
            System.init(Portfolio)
          </span>
          <h1 className="font-headline text-6xl font-bold leading-[0.9] tracking-tighter text-white md:text-8xl">
            Merhaba, Ben <span className="neon-gradient-text">Ceyhun Emre</span>
          </h1>
          <p className="mt-6 max-w-lg text-xl leading-relaxed text-[color:var(--foreground-muted)]">
            AI & Full-Stack Developer olarak modern, ölçeklenebilir ve kullanıcı odaklı dijital ürünler geliştiriyorum.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#projects" className="rounded-lg bg-[#00F0FF] px-8 py-4 font-headline text-sm font-bold uppercase tracking-widest text-[#00363A] transition-all hover:brightness-110">
              Projeleri İncele
            </a>
            <a href="#contact" className="rounded-lg border border-white/15 px-8 py-4 font-headline text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-white/5">
              İletişime Geç
            </a>
          </div>
        </div>

        <div className="relative group">
          <div className="glass-card relative aspect-square overflow-hidden rounded-2xl border border-white/10 p-2">
            <Image
              alt="Ceyhun Emre"
              src="/hero_icon.png"
              fill
              priority
              className="rounded-xl object-cover transition-all duration-700"
            />
          </div>
          <div className="glass-card absolute -bottom-6 -left-6 rounded-xl border border-white/15 px-6 py-5 shadow-2xl">
            <div className="flex items-center gap-4">
              <span className="font-headline text-4xl font-bold text-[#00F0FF]">3+</span>
              <div className="font-tech text-xs uppercase tracking-widest text-slate-400">Yıllık<br />Deneyim</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
