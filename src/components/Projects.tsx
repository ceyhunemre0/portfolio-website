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
    color: {
      bg: "bg-indigo-100",
      text: "text-indigo-600",
    },
    iconType: "document",
  },
  {
    title: "Statify+",
    category: "Web Geliştirme",
    description:
      "StatifyPlus, Python ve Flask ile geliştirilen bir Spotify veri analiz uygulamasıdır. Spotify API’si ile entegre çalışarak kullanıcı müzik alışkanlıklarını analiz eder ve bu verileri etkileşimli grafiklerle sunar.",
    tags: ["Flask", "Python", "Spotify API", "Html", "CSS"],
    link: "https://github.com/ceyhunemre0/StatifyPlus",
    image: "/statifyplus.png",
    color: {
      bg: "bg-purple-100",
      text: "text-purple-600",
    },
    iconType: "document",
  },
  {
    title: "Portfolio.",
    category: "Web Geliştirme",
    description:
      "Next.js, TypeScript ve Tailwind CSS kullanılarak geliştirilen modern kişisel portfolyo sitesidir. Performanslı, SEO uyumlu ve responsive yapısı ile profesyonel geliştirici kimliğini sergiler.",
    tags: ["NextJs", "TypeScript", "Tailwind CSS", "React"],
    link: "#",
    image: "/portfolio.png",
    color: {
      bg: "bg-pink-100",
      text: "text-pink-600",
    },
    iconType: "document",
  },
  {
    title: "SearchAgent",
    category: "Yapay Zekâ, Web Geliştirme",
    description:
      "Search Agent, Next.js, TypeScript ve LangChain kullanılarak geliştirilen akıllı arama destekli bir yapay zeka ajan uygulamasıdır. SERP API ile entegre çalışan bu sistem, kullanıcıdan gelen doğal dil sorularına çevrim içi bilgi kaynaklarını tarayarak doğru ve güncel yanıtlar üretir. Modüler yapısı sayesinde kolayca özelleştirilebilir ve farklı bilgi tabanlarına entegre edilebilir.",
    tags: ["TypeScript", "NextJs", "LangChain", "OpenAI"],
    link: "https://github.com/ceyhunemre0/SearchAgent",
    image: "/searchagent.png",
    color: {
      bg: "bg-indigo-100",
      text: "text-indigo-600",
    },
    iconType: "document",
  }
];

const getIcon = (type: string) => {
  switch (type) {
    case "document":
      return (
        <svg className="w-24 h-24 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    case "portfolio":
      return (
        <svg className="w-24 h-24 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      );
    default:
      return null;
  }
};

export default function Projects() {
  return (
    <section className="relative bg-white py-20 px-6 md:px-12 lg:px-16 text-gray-900 overflow-hidden" id="projects">
      {/* Decorative Background */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-indigo-50/50 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-900">
            Projelerim
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg">
            Üzerinde keyifle çalıştığım bazı projeler burada. Her biri farklı bir problemi çözmeye yönelik yaratıcı denemeler içeriyor.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-500 border border-gray-200"
            >
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={240}
                  className="w-full h-60 object-fit"
                />
              ) : (
                <div className={`h-60 flex items-center justify-center ${project.color.bg}`}>
                  {
                    getIcon(project.iconType)
                  }
                </div>
              )
              }
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider bg-blue-600 text-white rounded-full mb-3">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold mt-2 mb-3 text-gray-900">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium rounded-lg bg-gray-100 text-gray-700 border border-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 hover:shadow-lg transition-all duration-300"
                >
                  Detayları Gör 
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


