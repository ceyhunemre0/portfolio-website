"use client";
import { useState } from "react";

type PricingTier = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  cta: string;
};

type Category = {
  id: string;
  name: string;
  icon: string;
  tiers: PricingTier[];
};

const pricingData: Category[] = [
  {
    id: "web",
    name: "Web Geliştirme",
    icon: "🌐",
    tiers: [
      {
        name: "Basic",
        price: "₺5,000",
        period: "Proje Başına",
        description: "Küçük işletmeler ve kişisel projeler için ideal",
        features: [
          "1-5 Sayfalık Modern Web Sitesi",
          "Responsive (Mobil Uyumlu) Tasarım",
          "İletişim Formu Entegrasyonu",
          "SEO Optimizasyonu (Temel)",
          "1 Ay Teknik Destek",
          "Domain & Hosting Kurulum Desteği",
        ],
        cta: "Hemen Başla",
      },
      {
        name: "Professional",
        price: "₺12,000",
        period: "Proje Başına",
        description: "Büyüyen işletmeler için güçlü çözümler",
        features: [
          "5-10 Sayfalık Dinamik Web Sitesi",
          "Modern UI/UX Tasarım",
          "CMS Entegrasyonu (İçerik Yönetimi)",
          "API Entegrasyonları",
          "İleri SEO & Analytics",
          "3 Ay Teknik Destek & Güncelleme",
          "Performans Optimizasyonu",
        ],
        popular: true,
        cta: "En Popüler",
      },
      {
        name: "Enterprise",
        price: "₺25,000+",
        period: "Proje Başına",
        description: "Kurumsal çözümler ve karmaşık projeler",
        features: [
          "Sınırsız Sayfa & Özel Mimari",
          "Full-Stack Geliştirme",
          "Özel API & Mikroservis Mimarisi",
          "Gerçek Zamanlı Özellikler (WebSocket)",
          "Çoklu Dil Desteği",
          "Admin Panel & Dashboard",
          "6 Ay Premium Destek",
          "DevOps & CI/CD Pipeline",
        ],
        cta: "İletişime Geç",
      },
    ],
  },
  {
    id: "scraping",
    name: "Data Scraping",
    icon: "🕷️",
    tiers: [
      {
        name: "Basic",
        price: "₺1,500",
        period: "Proje Başına",
        description: "Basit veri toplama ihtiyaçları için",
        features: [
          "Tek Kaynak Veri Çekimi",
          "1000 Kayıt/Gün Limit",
          "CSV/JSON Export",
          "Temel Temizleme & Filtreleme",
          "1 Ay Güncelleme & Destek",
        ],
        cta: "Hemen Başla",
      },
      {
        name: "Professional",
        price: "₺8,000",
        period: "Proje Başına",
        description: "Çoklu kaynaklardan sürekli veri akışı",
        features: [
          "Çoklu Kaynak Scraping",
          "10,000 Kayıt/Gün Limit",
          "İleri Veri İşleme & Temizleme",
          "Proxy Rotasyonu & Anti-Bot Bypass",
          "Database Entegrasyonu",
          "API Endpoint Sunumu",
          "3 Ay Destek & Optimizasyon",
        ],
        popular: true,
        cta: "En Popüler",
      },
      {
        name: "Enterprise",
        price: "₺18,000+",
        period: "Proje Başına",
        description: "Büyük ölçekli veri toplama operasyonları",
        features: [
          "Sınırsız Kaynak & Veri",
          "Dağıtık Scraping Altyapısı",
          "Gerçek Zamanlı Veri Pipeline",
          "Machine Learning ile Veri Zenginleştirme",
          "Özel Bypass Stratejileri",
          "Bulut Altyapısı Entegrasyonu",
          "Monitoring & Alerting Dashboard",
          "6 Ay Premium Destek",
        ],
        cta: "İletişime Geç",
      },
    ],
  },
  {
    id: "ai",
    name: "AI Automations",
    icon: "🤖",
    tiers: [
      {
        name: "Basic",
        price: "₺6,000",
        period: "Proje Başına",
        description: "Basit AI destekli otomasyon çözümleri",
        features: [
          "Chatbot Entegrasyonu (WhatsApp/Web)",
          "Temel NLP İşlemleri",
          "Form/Email Otomasyonu",
          "Veri Kategorilendirme",
          "1000 İşlem/Ay Limit",
          "1 Ay Eğitim & Destek",
        ],
        cta: "Hemen Başla",
      },
      {
        name: "Professional",
        price: "₺15,000",
        period: "Proje Başına",
        description: "Akıllı otomasyon ve AI agent çözümleri",
        features: [
          "Özel AI Agent Geliştirme",
          "Multi-channel Chatbot (WhatsApp, Telegram, Web)",
          "Duygu Analizi & İçerik Üretimi",
          "RAG (Retrieval Augmented Generation)",
          "Workflow Otomasyonu",
          "Özel Model Fine-tuning",
          "10,000 İşlem/Ay",
          "3 Ay Optimizasyon & Destek",
        ],
        popular: true,
        cta: "En Popüler",
      },
      {
        name: "Enterprise",
        price: "₺30,000+",
        period: "Proje Başına",
        description: "Kurumsal AI çözümleri ve custom modeller",
        features: [
          "Tam Özelleştirilmiş AI Sistemleri",
          "Multi-Agent Orkestrasyon",
          "Özel LLM Fine-tuning & Deployment",
          "Computer Vision Entegrasyonu",
          "Ses/Konuşma İşleme",
          "Enterprise API & Ölçeklenebilir Altyapı",
          "Sınırsız İşlem",
          "On-Premise Deployment Seçeneği",
          "6 Ay Premium Destek & SLA",
        ],
        cta: "İletişime Geç",
      },
    ],
  },
];

export default function Pricing() {
  const [activeCategory, setActiveCategory] = useState<string>("web");

  const currentCategory =
    pricingData.find((cat) => cat.id === activeCategory) || pricingData[0];

  return (
    <section
      className="relative py-20 bg-retro-dark overflow-hidden"
      id="pricing"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

        {/* Glow orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-neon-pink/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-cyan/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-4 font-display tracking-tight">
            <span className="text-retro-chrome">&lt;</span>
            <span className="text-neon-pink">Hizmetler</span>
            <span className="text-retro-chrome"> & </span>
            <span className="text-neon-cyan">Fiyatlandırma</span>
            <span className="text-retro-chrome">/&gt;</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-pink via-neon-cyan to-neon-pink mx-auto rounded-full shadow-neon-cyan mb-4"></div>
          <p className="text-retro-chrome/70 text-lg max-w-2xl mx-auto font-mono">
            İhtiyacınıza uygun profesyonel çözümler. Projelerinizi hayata
            geçirmek için en uygun paketi seçin.
          </p>
        </div>

        {/* Category Tabs - Terminal Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {pricingData.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center gap-2 font-mono ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-neon-pink to-neon-cyan text-retro-dark shadow-neon-cyan scale-105"
                  : "bg-retro-panel backdrop-blur-md text-retro-chrome/80 hover:text-neon-cyan border border-retro-chrome/20 hover:border-neon-cyan/50"
              }`}
            >
              <span className="text-2xl">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto pt-8">
          {currentCategory.tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative holo-card rounded-xl transition-all duration-500 hover:scale-[1.02] ${
                tier.popular
                  ? "border-2 border-neon-cyan/60 md:scale-105 shadow-neon-cyan"
                  : "border border-retro-chrome/20"
              }`}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="bg-gradient-to-r from-neon-pink to-neon-cyan text-retro-dark px-4 py-2 text-center text-sm font-bold font-mono rounded-t-xl">
                  ⭐ RECOMMENDED
                </div>
              )}

              {/* Scanline overlay */}
              <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_3px,rgba(0,240,255,0.01)_3px,rgba(0,240,255,0.01)_6px)] rounded-xl pointer-events-none"></div>

              <div className="p-8 relative z-10">
                {/* Tier Name */}
                <h3 className="text-2xl font-bold font-display mb-2">
                  <span
                    className={
                      tier.popular ? "text-neon-cyan" : "text-retro-chrome"
                    }
                  >
                    {tier.name}
                  </span>
                </h3>
                <p className="text-retro-chrome/60 text-sm mb-6 min-h-[40px] font-mono">
                  {tier.description}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span
                      className={`text-4xl font-bold font-display ${
                        tier.popular ? "text-neon-cyan" : "text-neon-pink"
                      }`}
                    >
                      {tier.price}
                    </span>
                  </div>
                  <span className="text-retro-chrome/50 text-sm font-mono">
                    {tier.period}
                  </span>
                </div>

                {/* CTA Button */}
                <a
                  href="#contact"
                  className={`block w-full text-center py-4 px-6 rounded-lg font-bold font-mono transition-all duration-300 mb-8 ${
                    tier.popular
                      ? "bg-gradient-to-r from-neon-cyan to-neon-pink text-retro-dark hover:shadow-neon-cyan-lg hover:scale-105"
                      : "bg-retro-panel text-neon-cyan border border-neon-cyan/40 hover:bg-neon-cyan/10 hover:border-neon-cyan hover:shadow-neon-cyan"
                  }`}
                >
                  [ {tier.cta} ]
                </a>

                {/* Features */}
                <div className="space-y-4">
                  <p className="text-xs font-semibold text-retro-chrome/50 uppercase tracking-wide font-mono">
                    PAKET_İÇERİĞİ:
                  </p>
                  <ul className="space-y-3">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-neon-cyan mr-3 font-mono">✓</span>
                        <span className="text-retro-chrome/80 text-sm font-mono">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12">
          <p className="text-retro-chrome/60 text-sm font-mono">
            <span className="text-neon-cyan">💡</span> Tüm fiyatlar başlangıç
            seviyesidir ve projenin kapsamına göre değişkenlik gösterebilir.{" "}
            <br />
            Özel ihtiyaçlarınız için{" "}
            <a
              href="#contact"
              className="text-neon-pink hover:text-neon-cyan hover:underline font-semibold transition-colors"
            >
              iletişime geçin
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
