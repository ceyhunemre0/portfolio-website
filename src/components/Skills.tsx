const skills = [
  { title: "Frontend Stack", items: ["React", "Next.js", "TypeScript"] },
  { title: "Backend", items: ["Node.js", "FastAPI", "PostgreSQL", "Supabase"] },
  { title: "AI Tooling", items: ["OpenAI", "Claude Code", "OpenCode", "n8n"] },
  { title: "Cloud & DevOps", items: ["AWS", "Docker", "Git", "Deployments"] },
  { title: "Data", items: ["Python", "Analytics", "Automation"] },
  { title: "Product", items: ["UX Thinking", "Performance", "SEO", "AI Workflows"] },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-[color:var(--surface-container-low)] px-6 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="font-headline text-5xl font-bold tracking-tight text-white">Teknik Yetenekler</h2>
          <p className="mx-auto mt-4 max-w-2xl text-[color:var(--foreground-muted)]">
            Farklı ürün katmanlarında rahat çalışmamı sağlayan çekirdek yetenek alanlarım.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6 auto-rows-[minmax(140px,_1fr)]">
          {skills.map((skill, index) => (
            <article
              key={skill.title}
              className={`rounded-2xl p-6 ${
                index === 0
                  ? "col-span-2 row-span-2 bg-[color:var(--surface-container-high)]"
                  : index === 4
                    ? "col-span-2 bg-[color:var(--surface-container-high)]"
                    : "bg-[color:var(--surface-container)]"
              }`}
            >
              <h3 className="font-headline text-xl font-bold text-white">{skill.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span key={item} className="font-tech rounded-full bg-black/20 px-3 py-1 text-xs uppercase tracking-widest text-white/70">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
