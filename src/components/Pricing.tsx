'use client';
import { useState } from 'react';

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
    id: 'web',
    name: 'Web Geliştirme',
    icon: '🌐',
    tiers: [
      {
        name: 'Basic',
        price: '₺5,000',
        period: 'Proje Başına',
        description: 'Küçük işletmeler ve kişisel projeler için ideal',
        features: [
          '5 Sayfalık Modern Web Sitesi',
          'Responsive (Mobil Uyumlu) Tasarım',
          'İletişim Formu Entegrasyonu',
          'SEO Optimizasyonu (Temel)',
          '1 Ay Teknik Destek',
          'Domain & Hosting Kurulum Desteği'
        ],
        cta: 'Hemen Başla'
      },
      {
        name: 'Professional',
        price: '₺12,000',
        period: 'Proje Başına',
        description: 'Büyüyen işletmeler için güçlü çözümler',
        features: [
          '10+ Sayfalık Dinamik Web Sitesi',
          'Modern UI/UX Tasarım',
          'CMS Entegrasyonu (İçerik Yönetimi)',
          'API Entegrasyonları',
          'İleri SEO & Analytics',
          'E-Ticaret Modülü (Opsiyonel)',
          '3 Ay Teknik Destek & Güncelleme',
          'Performans Optimizasyonu'
        ],
        popular: true,
        cta: 'En Popüler'
      },
      {
        name: 'Enterprise',
        price: '₺25,000+',
        period: 'Proje Başına',
        description: 'Kurumsal çözümler ve karmaşık projeler',
        features: [
          'Sınırsız Sayfa & Özel Mimari',
          'Full-Stack Geliştirme',
          'Özel API & Mikroservis Mimarisi',
          'Gerçek Zamanlı Özellikler (WebSocket)',
          'Çoklu Dil Desteği',
          'Admin Panel & Dashboard',
          'Yük Dengeleme & Ölçeklenebilirlik',
          '6 Ay Premium Destek',
          'DevOps & CI/CD Pipeline'
        ],
        cta: 'İletişime Geç'
      }
    ]
  },
  {
    id: 'scraping',
    name: 'Data Scraping',
    icon: '🕷️',
    tiers: [
      {
        name: 'Basic',
        price: '₺3,000',
        period: 'Proje Başına',
        description: 'Basit veri toplama ihtiyaçları için',
        features: [
          'Tek Kaynak Veri Çekimi',
          '1000 Kayıt/Gün Limit',
          'CSV/JSON Export',
          'Temel Temizleme & Filtreleme',
          'Haftalık Otomatik Çalışma',
          '1 Ay Güncelleme & Destek'
        ],
        cta: 'Hemen Başla'
      },
      {
        name: 'Professional',
        price: '₺8,000',
        period: 'Proje Başına',
        description: 'Çoklu kaynaklardan sürekli veri akışı',
        features: [
          'Çoklu Kaynak Scraping',
          '10,000 Kayıt/Gün Limit',
          'İleri Veri İşleme & Temizleme',
          'Proxy Rotasyonu & Anti-Bot Bypass',
          'Database Entegrasyonu',
          'Günlük/Saatlik Otomasyonlar',
          'API Endpoint Sunumu',
          '3 Ay Destek & Optimizasyon'
        ],
        popular: true,
        cta: 'En Popüler'
      },
      {
        name: 'Enterprise',
        price: '₺18,000+',
        period: 'Proje Başına',
        description: 'Büyük ölçekli veri toplama operasyonları',
        features: [
          'Sınırsız Kaynak & Veri',
          'Dağıtık Scraping Altyapısı',
          'Gerçek Zamanlı Veri Pipeline',
          'Machine Learning ile Veri Zenginleştirme',
          'Özel Bypass Stratejileri',
          'Bulut Altyapısı Entegrasyonu',
          'Monitoring & Alerting Dashboard',
          '6 Ay Premium Destek',
          'SLA Garantisi'
        ],
        cta: 'İletişime Geç'
      }
    ]
  },
  {
    id: 'ai',
    name: 'AI Automations',
    icon: '🤖',
    tiers: [
      {
        name: 'Basic',
        price: '₺6,000',
        period: 'Proje Başına',
        description: 'Basit AI destekli otomasyon çözümleri',
        features: [
          'Chatbot Entegrasyonu (WhatsApp/Web)',
          'Temel NLP İşlemleri',
          'Form/Email Otomasyonu',
          'Veri Kategorilendirme',
          '1000 İşlem/Ay Limit',
          '1 Ay Eğitim & Destek'
        ],
        cta: 'Hemen Başla'
      },
      {
        name: 'Professional',
        price: '₺15,000',
        period: 'Proje Başına',
        description: 'Akıllı otomasyon ve AI agent çözümleri',
        features: [
          'Özel AI Agent Geliştirme',
          'Multi-channel Chatbot (WhatsApp, Telegram, Web)',
          'Duygu Analizi & İçerik Üretimi',
          'RAG (Retrieval Augmented Generation)',
          'Workflow Otomasyonu',
          'Özel Model Fine-tuning',
          '10,000 İşlem/Ay',
          '3 Ay Optimizasyon & Destek'
        ],
        popular: true,
        cta: 'En Popüler'
      },
      {
        name: 'Enterprise',
        price: '₺30,000+',
        period: 'Proje Başına',
        description: 'Kurumsal AI çözümleri ve custom modeller',
        features: [
          'Tam Özelleştirilmiş AI Sistemleri',
          'Multi-Agent Orkestrasyon',
          'Özel LLM Fine-tuning & Deployment',
          'Computer Vision Entegrasyonu',
          'Ses/Konuşma İşleme',
          'Enterprise API & Ölçeklenebilir Altyapı',
          'Sınırsız İşlem',
          'On-Premise Deployment Seçeneği',
          '6 Ay Premium Destek & SLA'
        ],
        cta: 'İletişime Geç'
      }
    ]
  }
];

export default function Pricing() {
  const [activeCategory, setActiveCategory] = useState<string>('web');

  const currentCategory = pricingData.find(cat => cat.id === activeCategory) || pricingData[0];

  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-50 to-gray-100 overflow-hidden" id="pricing">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-900">
            Hizmetler & Fiyatlandırma
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            İhtiyacınıza uygun profesyonel çözümler. Projelerinizi hayata geçirmek için en uygun paketi seçin.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {pricingData.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center gap-2 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg scale-105'
                  : 'bg-white/70 backdrop-blur-md text-gray-700 hover:bg-white hover:shadow-md border border-gray-200'
              }`}
            >
              <span className="text-2xl">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {currentCategory.tiers.map((tier, index) => (
            <div
              key={tier.name}
              className={`relative bg-white/70 backdrop-blur-md rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 ${
                tier.popular
                  ? 'border-4 border-blue-400 md:scale-105 bg-white/80'
                  : 'border-2 border-gray-200'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-full text-sm font-bold shadow-xl animate-pulse">
                    ⭐ Popüler Seçim
                  </span>
                </div>
              )}

              <div className="p-8">
                {/* Tier Name */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                <p className="text-gray-600 text-sm mb-6 min-h-[40px]">{tier.description}</p>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-blue-600">{tier.price}</span>
                  </div>
                  <span className="text-gray-500 text-sm">{tier.period}</span>
                </div>

                {/* CTA Button */}
                <a
                  href="#contact"
                  className={`block w-full text-center py-4 px-6 rounded-xl font-bold transition-all duration-300 mb-8 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-2xl hover:scale-105'
                      : 'bg-gradient-to-r from-slate-100 to-gray-200 text-gray-900 hover:from-slate-200 hover:to-gray-300 hover:scale-105 border border-gray-300'
                  }`}
                >
                  {tier.cta}
                </a>

                {/* Features */}
                <div className="space-y-4">
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                    Paket İçeriği:
                  </p>
                  <ul className="space-y-3">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-700 text-sm">{feature}</span>
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
          <p className="text-gray-600 text-sm">
            💡 Tüm fiyatlar başlangıç seviyesidir ve projenin kapsamına göre değişkenlik gösterebilir. <br />
            Özel ihtiyaçlarınız için <a href="#contact" className="text-indigo-600 hover:underline font-semibold">iletişime geçin</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
