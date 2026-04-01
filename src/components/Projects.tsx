import Image from "next/image";

const projects = [
  {
    title: "SearchAgent",
    description: "Doğal dil sorgularını canlı web verisiyle birleştiren, yanıt kalitesine odaklı akıllı arama ajanı.",
    tags: ["Next.js", "TypeScript", "LangChain", "OpenAI"],
    image: "/searchagent.png",
    link: "https://github.com/ceyhunemre0/SearchAgent",
  },
  {
    title: "AI Integrated Planner",
    description: "Focus mode, zaman takibi ve akıllı planlama akışlarını tek ürün deneyiminde birleştiren masaüstü uygulaması.",
    tags: ["Tauri", "React", "TypeScript", "PostgreSQL"],
    image: "/ai-planner.png",
    link: "https://github.com/ceyhunemre0/AI-integrated-planner",
  },
  {
    title: "Statify+",
    description: "Spotify verisini okunabilir içgörülere dönüştüren, veri görselleştirme odaklı analiz ürünü.",
    tags: ["Python", "Flask", "Spotify API", "Charts"],
    image: "/statifyplus-v2.png",
    link: "https://github.com/ceyhunemre0/StatifyPlus",
  },
  {
    title: "Portfolio",
    description: "Kişisel marka, performans ve görsel anlatıyı bir araya getiren modern portfolyo deneyimi.",
    tags: ["Next.js", "Tailwind", "SEO", "Responsive"],
    image: "/portfolio-v2.png",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="font-tech mb-2 block text-xs uppercase tracking-widest text-[#E00460]">Seçkin Çalışmalar</span>
            <h2 className="font-headline text-5xl font-bold tracking-tight text-white">Projeler</h2>
          </div>
          <a className="font-tech hidden text-sm text-[#00F0FF] transition-colors hover:text-white md:flex" href="#contact">
            İLETİŞİME GEÇ <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </a>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.title} className="glass-card group overflow-hidden rounded-2xl border border-white/10 transition-all duration-500 hover:border-[#00F0FF]/30">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-8">
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded border-l-2 border-[#00F0FF] bg-[color:var(--surface-container-high)] px-3 py-1 font-tech text-xs text-[#00F0FF]">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-headline text-2xl font-bold text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--foreground-muted)]">{project.description}</p>
                <a
                  href={project.link}
                  target={project.link.startsWith("http") ? "_blank" : undefined}
                  rel={project.link.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="font-headline mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:text-[#00F0FF]"
                >
                  İncele <span className="material-symbols-outlined text-sm">east</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
