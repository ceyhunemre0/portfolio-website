"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const scenes = [
  { name: "Başlangıç", title: "Ceyhun Emre Top", line: "Fikirleri çalışan dijital sistemlere dönüştürüyorum.", screen: "/danisan-takvimi.png", url: "", action: "" },
  { name: "Danışan Takvimi", title: "Danışan Takvimi", line: "Uzmanların zamanını, danışanların erişimini sadeleştirir.", detail: "10’dan fazla uzmanın aktif çalışma alanı.", screen: "/danisan-takvimi.png", url: "https://danisantakvimi.com.tr", action: "Ürünü incele ↗" },
  { name: "Yusuf Balcı Fotoğrafçılık", title: "Yusuf Balcı", line: "Düğün gününün ritmini doğal karelerle saklayan bir web deneyimi.", screen: "/yusuf-balci-wedding-01.webp", url: "https://yusufbalcifotografcilik.com", action: "Siteyi incele ↗" },
  { name: "Qarson", title: "Qarson", line: "Restoranların servis akışını tek yerde toplar.", screen: "/qarson.png", url: "https://qarson.com.tr", action: "Ürünü incele ↗" },
  { name: "SearchAgent", title: "Cevaptan sonrası", line: "Bir modelin cevap vermesi yetmez. Sistemin geri kalanıyla çalışması gerekir.", screen: "/searchagent.png", url: "https://github.com/ceyhunemre0/SearchAgent", action: "SearchAgent ↗" },
  { name: "Deneyler", title: "Merak ettiklerim", line: "Her şey ürüne dönüşmez. Bazı şeyleri nasıl çalıştığını merak ettiğim için yapıyorum.", screen: "/statifyplus-v2.png", url: "https://github.com/ceyhunemre0", action: "Diğer deneyler ↗" },
  { name: "Bağlantılar", title: "Ceyhun Emre Top", line: "", screen: "/danisan-takvimi.png", url: "", action: "" },
];

const haloParticles = Array.from({ length: 210 }, (_, i) => {
  const random = (seed: number) => {
    const value = Math.sin(seed * 127.1 + 78.233) * 43758.5453;
    return value - Math.floor(value);
  };
  const angle = ((i + (random(i + 1) - .5) * 1.8) / 210) * Math.PI * 2;
  const radius = 37 + (random(i + 211) - .5) * 18 + Math.sin(angle * 3) * 2;
  return {
    left: `${Number((50 + Math.cos(angle) * radius).toFixed(3))}%`,
    top: `${Number((50 + Math.sin(angle) * radius * .72).toFixed(3))}%`,
    width: random(i + 422) > .88 ? 3 : random(i + 633) > .5 ? 2 : 1,
    opacity: Number((.12 + random(i + 844) * .7).toFixed(3)),
  };
});

export default function ScrollStory() {
  const track = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);
  const [reduced, setReduced] = useState(false);
  const [indexOpen, setIndexOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const [haloPaused, setHaloPaused] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReduced(preference.matches);
    const updateCompact = () => setCompact(window.innerWidth <= 700);
    updatePreference();
    updateCompact();
    preference.addEventListener("change", updatePreference);
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = track.current?.getBoundingClientRect();
        if (!rect) return;
        setProgress(Math.max(0, Math.min(1, -rect.top / (rect.height - window.innerHeight))));
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    window.addEventListener("resize", updateCompact);
    return () => { cancelAnimationFrame(frame); window.removeEventListener("scroll", update); window.removeEventListener("resize", update); window.removeEventListener("resize", updateCompact); preference.removeEventListener("change", updatePreference); };
  }, []);

  const position = progress * (scenes.length - 1);
  const active = Math.min(scenes.length - 1, Math.round(position));
  const visibility = (scene: number) => reduced ? Number(active === scene) : Math.max(0, Math.min(1, (0.48 - Math.abs(position - scene)) * 4));
  const stops = compact
    ? [[50, 46, .75], [50, 58, .85], [50, 57, .82], [50, 58, .85], [50, 57, .8], [50, 58, .82], [50, 46, .64]]
    : [[55, 51, .62], [62, 69, .76], [39, 68, .72], [62, 69, .78], [41, 68, .73], [60, 69, .76], [55, 51, .56]];
  const from = Math.floor(position);
  const to = Math.min(stops.length - 1, from + 1);
  const fraction = position - from;
  const move = (axis: number) => stops[from][axis] + (stops[to][axis] - stops[from][axis]) * fraction;
  const smooth = (start: number, end: number, value: number) => {
    const t = Math.max(0, Math.min(1, (value - start) / (end - start)));
    return t * t * (3 - 2 * t);
  };
  const arrival = smooth(0, 1, position);
  const departure = smooth(5.2, 6, position);
  const opening = reduced ? 1 : smooth(.08, .95, position) * (1 - smooth(5.15, 6, position));
  return <main ref={track} className="portfolio-track" id="top">
    <div className="portfolio-stage">
      <header className="portfolio-header"><a href="#top" aria-label="Ceyhun Emre Top ana sayfa"><Image src="/ce-mark.svg" alt="" width={48} height={48} priority /></a><nav aria-label="Ana menü"><a href="#work">İşler</a><button type="button" aria-expanded={indexOpen} aria-controls="portfolio-index" onClick={() => setIndexOpen(!indexOpen)}>İndeks</button></nav></header>

      <div className="portfolio-display-title" aria-hidden="true" style={{ opacity: Math.max(0, 1 - position * .65) }}>FULLSTACK<br /><em>DEVELOPER</em></div>
      <div className="portfolio-glow" aria-hidden="true" />
      <div className={`pulse-halo${haloPaused ? " pulse-halo--paused" : ""}`} aria-hidden="true">
        <div className="pulse-halo__dust">{haloParticles.map((particle, i) => <i key={i} style={particle} />)}</div>
      </div>
      <div className="macbook" style={{ left: `${move(0)}%`, top: `${move(1)}%`, opacity: reduced ? Number(active !== scenes.length - 1) : 1 - smooth(5.7, 6, position), transform: reduced ? `translateX(-50%) scale(${move(2)})` : `translateX(calc(-50% + ${110 * (1 - arrival + departure)}vw)) rotateX(${22 * (1 - opening)}deg) rotateY(${-8 * (1 - opening) + Math.sin(position * 1.4) * 2}deg) rotateZ(${19 * (1 - opening)}deg) scale(${move(2)})` }}>
        <div className="macbook__lid" style={{ transform: `rotateX(${-82 * (1 - opening)}deg)` }}><div className="macbook__camera" /><div className="macbook__display" style={{ opacity: Math.max(0, Math.min(1, (opening - .18) * 1.5)) }}>
          {scenes.map((scene, i) => <div className="macbook__screen" key={i} style={{ opacity: visibility(i) }} aria-hidden="true"><Image src={scene.screen} alt="" fill sizes="(max-width: 700px) 92vw, 72vw" priority={i === 0} /></div>)}
        </div><div className="macbook__closed-mark" style={{ opacity: 1 - opening }}>CE.</div></div>
        <div className="macbook__hinge" style={{ opacity: opening }} /><div className="macbook__deck" style={{ opacity: smooth(.15, .7, opening), transform: `rotateX(${88 - 15 * opening}deg)` }}><div className="macbook__keys" /><div className="macbook__trackpad" /></div>
      </div>
      <button className="halo-toggle" type="button" onClick={() => setHaloPaused(!haloPaused)} aria-label={haloPaused ? "Halka hareketini başlat" : "Halka hareketini durdur"}>{haloPaused ? "▶" : "Ⅱ"}</button>

      {scenes.map((scene, i) => <section className={`portfolio-copy ${i === 2 || i === 4 ? "portfolio-copy--right" : ""} ${i === 6 ? "portfolio-copy--final" : ""}`} key={scene.name} style={{ opacity: visibility(i), transform: reduced ? undefined : `translate3d(0, ${(i - position) * 24}px, 0)`, pointerEvents: active === i ? "auto" : "none" }} aria-hidden={active !== i}>
        <p className="portfolio-copy__name">{scene.name}</p><h1>{scene.title}</h1>{scene.line && <p>{scene.line}</p>}{scene.detail && <small>{scene.detail}</small>}
        {scene.url && <a href={scene.url} tabIndex={active === i ? 0 : -1} target="_blank" rel="noreferrer">{scene.action}</a>}
        {i === scenes.length - 1 && <div className="portfolio-links" aria-label="İletişim bağlantıları">
          <a href="https://github.com/ceyhunemre0" target="_blank" rel="noreferrer" tabIndex={active === i ? 0 : -1}><span>GitHub</span><small>Kodlar ve deneyler</small><b aria-hidden="true">↗</b></a>
          <a href="https://www.linkedin.com/in/ceyhunemre" target="_blank" rel="noreferrer" tabIndex={active === i ? 0 : -1}><span>LinkedIn</span><small>Bağlantı kuralım</small><b aria-hidden="true">↗</b></a>
          <a href="mailto:ceyhunemretop0@gmail.com" tabIndex={active === i ? 0 : -1}><span>Mail</span><small>Birlikte bir şey yapalım</small><b aria-hidden="true">↗</b></a>
        </div>}
      </section>)}
      {indexOpen && <div className="portfolio-index" id="portfolio-index"><button type="button" onClick={() => setIndexOpen(false)}>Kapat ×</button><nav aria-label="Proje indeksi">{scenes.map((scene, i) => <a key={scene.name} href={i === 0 ? "#top" : i === 1 ? "#work" : `#scene-${i}`} onClick={() => setIndexOpen(false)}>{scene.name}</a>)}</nav></div>}
    </div>
    {scenes.slice(1).map((scene, i) => <div className="portfolio-step" id={i === 0 ? "work" : `scene-${i + 1}`} key={scene.name} aria-hidden="true" />)}
  </main>;
}
