import Image from "next/image";

const tools = ["TypeScript", "Python", "React", "Next.js", "C#", "PostgreSQL", "LangChain", "Docker"];

export default function About() {
  return (
    <section className="about-section section-spacing" id="about">
      <div className="page-shell about-layout">
        <div className="about-portrait"><Image src="/about_image.png" alt="Ceyhun Emre Top" fill sizes="(max-width: 800px) 100vw, 38vw" /></div>
        <div className="about-copy">
          <p className="eyebrow">Hakkımda</p>
          <h2>Tek bir unvana<br /><em>sığmayan işler.</em></h2>
          <p className="about-lead">Balıkesir Üniversitesi Bilgisayar Mühendisliği mezunuyum. Profesyonel olarak full-stack ürünler, AI sistemleri ve otomasyonlar geliştiriyorum.</p>
          <p>Beni en çok, arayüzden veri katmanına kadar bütünü düşünmek; karmaşık teknik kararları kullanıcı için doğal hissettiren ürünlere dönüştürmek heyecanlandırıyor.</p>
          <div className="tools"><span>Sık kullandıklarım</span><p>{tools.join(" · ")}</p></div>
        </div>
      </div>
    </section>
  );
}
