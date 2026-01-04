"use client";
import Image from "next/image";

const projects = [
  {
    title: "ChatFlowAI",
    category: "Yapay Zekâ, Web Geliştirme",
    description:
      "ChatFlowAI, TypeScript, Next.js ve LangChain kullanılarak geliştirilmiş dosya tabanlı bir chatbot uygulamasıdır. Kullanıcının yüklediği dokümanlardan doğal dil işleme ile yanıt üreten, özelleştirilebilir ve modern bir yapay zekâ çözümüdür.",
    tags: ["TypeScript", "NextJs", "LangChain", "OpenAI"],
    link: "https://github.com/ceyhunemre0/rag-chatbot",
    image: null,
    accentColor: "neon-cyan",
  },
  {
    title: "Statify+",
    category: "Web Geliştirme",
    description:
      "StatifyPlus, Python ve Flask ile geliştirilen bir Spotify veri analiz uygulamasıdır. Spotify API'si ile entegre çalışarak kullanıcı müzik alışkanlıklarını analiz eder ve bu verileri etkileşimli grafiklerle sunar.",
    tags: ["Flask", "Python", "Spotify API", "Html", "CSS"],
    link: "https://github.com/ceyhunemre0/StatifyPlus",
    image: "/statifyplus.png",
    accentColor: "neon-pink",
  },
  {
    title: "Portfolio",
    category: "Web Geliştirme",
    description:
      "Next.js, TypeScript ve Tailwind CSS kullanılarak geliştirilen modern kişisel portfolyo sitesidir. Performanslı, SEO uyumlu ve responsive yapısı ile profesyonel geliştirici kimliğini sergiler.",
    tags: ["NextJs", "TypeScript", "Tailwind CSS", "React"],
    link: "#",
    image: "/portfolio.png",
    accentColor: "neon-purple",
  },
  {
    title: "SearchAgent",
    category: "Yapay Zekâ, Web Geliştirme",
    description:
      "Search Agent, Next.js, TypeScript ve LangChain kullanılarak geliştirilen akıllı arama destekli bir yapay zeka ajan uygulamasıdır. SERP API ile entegre çalışan bu sistem, kullanıcıdan gelen doğal dil sorularına çevrim içi bilgi kaynaklarını tarayarak doğru ve güncel yanıtlar üretir.",
    tags: ["TypeScript", "NextJs", "LangChain", "OpenAI"],
    link: "https://github.com/ceyhunemre0/SearchAgent",
    image: "/searchagent.png",
    accentColor: "neon-cyan",
  },
  {
    title: "AI-Integrated Planner",
    category: "Yapay Zekâ, Masaüstü Uygulama",
    description:
      "Modern görev yönetimi ve verimlilik platformu. Focus mode, saatlik zaman takibi, detaylı analitik ve akıllı notlar özelliklerine sahip. Tauri 2.0, React 19, TypeScript ve PostgreSQL ile geliştirilmiş cross-platform masaüstü uygulaması.",
    tags: ["Tauri", "React", "TypeScript", "PostgreSQL", "Rust"],
    link: "https://github.com/ceyhunemre0/AI-integrated-planner",
    image: "/ai-planner.png",
    accentColor: "neon-pink",
  },
];

const getProjectIcon = () => (
  <svg
    className="w-20 h-20 text-neon-cyan"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1"
      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

export default function Projects() {
  return (
    <section
      className="relative bg-retro-dark py-20 px-6 md:px-12 lg:px-16 overflow-hidden"
      id="projects"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

        {/* Glow orbs */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-neon-cyan/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-neon-pink/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 font-display tracking-tight">
            <span className="text-retro-chrome">&lt;</span>
            <span className="text-neon-pink">Projelerim</span>
            <span className="text-retro-chrome">/&gt;</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-pink via-neon-cyan to-neon-pink mx-auto rounded-full shadow-neon-pink mb-4"></div>
          <p className="text-retro-chrome/70 max-w-2xl mx-auto text-lg font-mono">
            Üzerinde keyifle çalıştığım bazı projeler burada. Her biri farklı
            bir problemi çözmeye yönelik yaratıcı denemeler içeriyor.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative holo-card rounded-xl overflow-hidden transition-all duration-500 hover:scale-[1.02]"
            >
              {/* Project Image / Placeholder */}
              {project.image ? (
                <div className="relative h-52 overflow-hidden">
                  {/* Scanline overlay */}
                  <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,240,255,0.03)_2px,rgba(0,240,255,0.03)_4px)] pointer-events-none z-10"></div>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={240}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-retro-dark via-transparent to-transparent"></div>
                </div>
              ) : (
                <div className="h-52 flex items-center justify-center bg-gradient-to-br from-retro-panel to-retro-dark border-b border-neon-cyan/20">
                  {getProjectIcon()}
                </div>
              )}

              {/* Content */}
              <div className="p-6">
                {/* Category badge */}
                <span
                  className={`inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider rounded font-mono mb-3 ${
                    project.accentColor === "neon-cyan"
                      ? "bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/30"
                      : project.accentColor === "neon-pink"
                      ? "bg-neon-pink/20 text-neon-pink border border-neon-pink/30"
                      : "bg-neon-purple/20 text-neon-purple border border-neon-purple/30"
                  }`}
                >
                  {project.category}
                </span>

                {/* Title */}
                <h3
                  className={`text-2xl font-bold mt-2 mb-3 font-display ${
                    project.accentColor === "neon-cyan"
                      ? "text-neon-cyan"
                      : project.accentColor === "neon-pink"
                      ? "text-neon-pink"
                      : "text-neon-purple"
                  }`}
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-retro-chrome/70 mb-4 leading-relaxed text-sm font-mono">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-mono rounded bg-retro-panel text-retro-chrome/80 border border-retro-chrome/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA Link */}
                <a
                  href={project.link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-5 py-2.5 font-semibold font-mono text-sm rounded-lg transition-all duration-300 border group/btn ${
                    project.accentColor === "neon-cyan"
                      ? "border-neon-cyan/50 text-neon-cyan hover:bg-neon-cyan/20 hover:shadow-neon-cyan"
                      : project.accentColor === "neon-pink"
                      ? "border-neon-pink/50 text-neon-pink hover:bg-neon-pink/20 hover:shadow-neon-pink"
                      : "border-neon-purple/50 text-neon-purple hover:bg-neon-purple/20"
                  }`}
                >
                  [ Detayları Gör ]
                  <svg
                    className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </a>
              </div>

              {/* Hover border glow */}
              <div
                className={`absolute inset-0 rounded-xl border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
                  project.accentColor === "neon-cyan"
                    ? "border-neon-cyan/50"
                    : project.accentColor === "neon-pink"
                    ? "border-neon-pink/50"
                    : "border-neon-purple/50"
                }`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
