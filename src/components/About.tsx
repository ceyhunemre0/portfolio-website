import Image from "next/image";

const pillars = [
  {
    icon: "architecture",
    title: "Sistem Mimarisi",
    text: "Üretim ortamına hazır backend akışları, entegrasyonlar ve sürdürülebilir yapı taşları kuruyorum.",
  },
  {
    icon: "palette",
    title: "Kullanıcı Deneyimi",
    text: "Teknik karmaşıklığı sade, hızlı ve güven veren arayüzlere dönüştürmeyi önceliklendiriyorum.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-[color:var(--surface-container-low)] px-6 py-24 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-16 md:flex-row md:items-start">
        <div className="w-full md:w-1/3">
          <h2 className="font-headline mb-6 text-4xl font-bold tracking-tight text-white">Hakkımda</h2>
          <div className="mb-8 h-1 w-20 bg-[#00F0FF]" />
          <div className="font-tech rounded-xl border border-white/5 bg-[color:var(--surface-container-lowest)] p-6 text-sm leading-relaxed text-[#00F0FF]/70">
            <span className="text-[#E00460]">const</span> profile = {'{'}
            <br />
            &nbsp;&nbsp;name: <span className="text-[#E1D2FF]">&apos;Ceyhun Emre&apos;</span>,
            <br />
            &nbsp;&nbsp;role: <span className="text-[#E1D2FF]">&apos;AI &amp; Full-Stack Developer&apos;</span>,
            <br />
            &nbsp;&nbsp;focus: [<span className="text-[#E1D2FF]">&apos;AI&apos;</span>, <span className="text-[#E1D2FF]">&apos;Automation&apos;</span>, <span className="text-[#E1D2FF]">&apos;Web&apos;</span>],
            <br />
            &nbsp;&nbsp;location: <span className="text-[#E1D2FF]">&apos;Türkiye&apos;</span>
            <br />
            {'}'};
          </div>
        </div>

        <div className="w-full md:w-2/3">
          <p className="text-2xl font-light leading-relaxed text-[color:var(--foreground)]">
            Benim için iyi ürün; sadece çalışan kod değil, aynı zamanda hızlı, anlaşılır ve güven veren bir deneyimdir. Bu yüzden hem teknik mimariyi hem de ekran üzerindeki hissi birlikte ele alıyorum.
          </p>

          <div className="glass-card relative mt-10 hidden overflow-hidden rounded-[2rem] border border-white/10 md:block">
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#00F0FF]/8 to-transparent" />
            <div className="grid min-h-[340px] grid-cols-[1.15fr_0.85fr] items-stretch">
              <div className="flex flex-col justify-between border-r border-white/8 p-8">
                <div>
                  <span className="font-tech text-xs uppercase tracking-[0.28em] text-[#00F0FF]">
                    Editorial Profile
                  </span>
                  <h3 className="font-headline mt-4 max-w-sm text-3xl font-bold leading-tight text-white">
                    Estetik ile mühendisliği aynı yüzeyde buluşturuyorum.
                  </h3>
                  <p className="mt-4 max-w-md text-base leading-7 text-[color:var(--foreground-muted)]">
                    Ürün geliştirirken yalnızca teknik doğruluğa değil; ritim, görsel denge ve kullanıcı hissine de odaklanıyorum.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border border-[#00F0FF]/20 bg-[#00F0FF]/8 px-3 py-1 font-tech text-xs uppercase tracking-[0.2em] text-[#00F0FF]">
                    Product Thinking
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-tech text-xs uppercase tracking-[0.2em] text-white/65">
                    Clean Systems
                  </span>
                </div>
              </div>

              <div className="relative m-4 overflow-hidden rounded-[1.5rem] bg-[color:var(--surface-container-lowest)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,240,255,0.08),transparent_45%)]" />
                <Image
                  src="/about_image.png"
                  alt="Ceyhun Emre hakkında görsel"
                  fill
                  className="object-contain object-center p-4 opacity-95"
                />
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="rounded-2xl bg-[color:var(--surface-container)] p-8 transition-all hover:bg-[color:var(--surface-bright)]">
                <span className="material-symbols-outlined mb-4 text-3xl text-[#00F0FF]">{pillar.icon}</span>
                <h3 className="font-headline text-xl font-bold text-white">{pillar.title}</h3>
                <p className="mt-2 text-sm text-[color:var(--foreground-muted)]">{pillar.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
