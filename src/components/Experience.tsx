const experience = [
  { date: "2023 — 2026", company: "AIFINEX", role: "Full Stack Developer", description: "React ve TypeScript arayüzlerini LangChain ve LlamaIndex tabanlı AI iş akışlarıyla buluşturan ürünler geliştirdim." },
  { date: "2026", company: "BEST", role: "Software & AI Development", description: "Gerçek zamanlı üretim verisi, sinyal işleme, bilgisayarlı görü ve C# tabanlı endüstriyel sistemler üzerinde çalıştım." },
  { date: "2025", company: "BT10", role: "Developer Intern · File10", description: "Kurumsal dosyalar için işleme, indeksleme ve içerik tabanlı sorgu bileşenlerine Python ve Java ile katkı sağladım." },
  { date: "2024", company: "Ahlatcı Teknoloji · Çorum Gaz", role: "AI Chatbot Project", description: "Yüklenen dokümanlardan bağlama dayalı yanıtlar üreten bir doküman soru-cevap sistemi geliştirdim." },
];

export default function Experience() {
  return (
    <section className="experience-section section-spacing" id="experience">
      <div className="page-shell">
        <div className="section-heading section-heading--row">
          <div><p className="eyebrow">Deneyim</p><h2>Ürün, AI ve<br />endüstriyel yazılım.</h2></div>
          <p>Farklı bağlamlar, aynı yaklaşım: problemi anlamak ve sürdürülebilir bir sistem kurmak.</p>
        </div>
        <div className="experience-list">
          {experience.map((item) => (
            <article key={`${item.company}-${item.date}`}>
              <time>{item.date}</time>
              <div><h3>{item.company}</h3><p className="experience-role">{item.role}</p></div>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
