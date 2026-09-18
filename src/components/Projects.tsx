import Image from "next/image";

const featured = [
  {
    number: "01", type: "SaaS · 2026", title: "Qarson",
    description: "Kafe ve restoranlar için QR menü, masadan sipariş, canlı masa takibi ve adisyon yönetimini tek akışta buluşturan bir SaaS ürünü.",
    image: "/qarson.png", alt: "Qarson ürününün ana sayfası", href: "https://qarson.com.tr",
    capabilities: ["Product design", "Full-stack", "Operations"],
  },
  {
    number: "02", type: "SaaS · 2026", title: "Danışan Takvimi",
    description: "Psikolog, diyetisyen ve terapistler için müsaitlik, randevu ve danışan iletişimini sadeleştiren online çalışma alanı.",
    image: "/danisan-takvimi.png", alt: "Danışan Takvimi ürününün ana sayfası", href: "https://danisantakvimi.com.tr",
    capabilities: ["Product design", "Scheduling", "SaaS architecture"],
  },
];

const selected = [
  {
    number: "03", title: "AI Integrated Planner",
    description: "Odak modu, zaman takibi ve akıllı planlama akışlarını bir masaüstü ürününde birleştiren cross-platform uygulama.",
    image: "/ai-planner.png", href: "https://github.com/ceyhunemre0/AI-integrated-planner",
    meta: "Tauri · TypeScript · PostgreSQL",
  },
  {
    number: "04", title: "SearchAgent",
    description: "Doğal dil sorgularını canlı web verisiyle buluşturan, kaynak odaklı bir araştırma ve yanıt ajanı.",
    image: "/searchagent.png", href: "https://github.com/ceyhunemre0/SearchAgent",
    meta: "Next.js · LangChain · OpenAI",
  },
];

export default function Projects() {
  return (
    <section className="work-section section-spacing" id="work">
      <div className="page-shell">
        <div className="section-heading">
          <p className="eyebrow">Seçili işler</p>
          <h2>Üzerinde düşündüğüm,<br />tasarladığım ve geliştirdiğim ürünler.</h2>
        </div>
        <div className="featured-work">
          {featured.map((project) => (
            <article className="project-feature" key={project.title}>
              <a className="project-visual" href={project.href} target="_blank" rel="noreferrer" aria-label={`${project.title} sitesini aç`}>
                <Image src={project.image} alt={project.alt} fill sizes="(max-width: 900px) 100vw, 75vw" />
              </a>
              <div className="project-copy">
                <div className="project-index"><span>{project.number}</span><span>{project.type}</span></div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul aria-label="Proje kapsamı">{project.capabilities.map((item) => <li key={item}>{item}</li>)}</ul>
                <a className="text-link" href={project.href} target="_blank" rel="noreferrer">Canlı ürünü gör <span aria-hidden="true">↗</span></a>
              </div>
            </article>
          ))}
        </div>
        <div className="selected-work">
          {selected.map((project) => (
            <article className="project-small" key={project.title}>
              <a className="project-small__visual" href={project.href} target="_blank" rel="noreferrer">
                <Image src={project.image} alt={`${project.title} arayüzü`} fill sizes="(max-width: 700px) 100vw, 50vw" />
              </a>
              <div className="project-small__heading"><span>{project.number}</span><h3>{project.title}</h3></div>
              <p>{project.description}</p>
              <div className="project-small__footer"><span>{project.meta}</span><a href={project.href} target="_blank" rel="noreferrer" aria-label={`${project.title} GitHub sayfasını aç`}>↗</a></div>
            </article>
          ))}
        </div>
        <a className="archive-link" href="https://github.com/ceyhunemre0" target="_blank" rel="noreferrer">Tüm GitHub arşivini gör <span aria-hidden="true">↗</span></a>
      </div>
    </section>
  );
}
