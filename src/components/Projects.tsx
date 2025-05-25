"use client";
import Image from "next/image";

const projects = [
  {
    title: "ChatFlowAI",
    category: "Yapay Zekâ, Web Geliştirme",
    description:
      "ChatFlowAI, TypeScript, Next.js ve LangChain kullanılarak geliştirilmiş dosya tabanlı bir chatbot uygulamasıdır. Kullanıcının yüklediği dokümanlardan doğal dil işleme ile yanıt üreten, özelleştirilebilir ve modern bir yapay zekâ çözümüdür.",
    tags: ["TypeScript", "NextJs", "LangChain", "OpenAI"],
    link: "https://github.com/ceyhunemre0/Document_Bot",
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
    color: {
      bg: "bg-purple-100",
      text: "text-purple-600",
    },
    iconType: "image",
  },
  {
    title: "Portfolio.",
    category: "Web Geliştirme",
    description:
      "Next.js, TypeScript ve Tailwind CSS kullanılarak geliştirilen modern kişisel portfolyo sitesidir. Performanslı, SEO uyumlu ve responsive yapısı ile profesyonel geliştirici kimliğini sergiler.",
    tags: ["NextJs", "TypeScript", "Tailwind CSS", "React"],
    link: "#",
    color: {
      bg: "bg-pink-100",
      text: "text-pink-600",
    },
    iconType: "portfolio",
  },
];

const getIcon = (type: string) => {
  switch (type) {
    case "document":
      return (
        <svg className="w-24 h-24 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    case "image":
      return (
        <Image
          src="/statifyplus.png"
          alt="StatifyPlus Logo"
          width={96}
          height={96}
          className="object-contain"
        />
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
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 text-black" id="projects">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projelerim</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Üzerinde keyifle çalıştığım bazı projeler burada. Her biri farklı bir problemi çözmeye yönelik yaratıcı denemeler içeriyor.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300"
            >
              <div className={`h-60 flex items-center justify-center ${project.color.bg}`}>
                {getIcon(project.iconType)}
              </div>
              <div className="p-6">
                <span className={`text-xs font-semibold uppercase tracking-wider ${project.color.text}`}>
                  {project.category}
                </span>
                <h3 className="text-xl font-bold mt-2 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 text-xs rounded-full ${project.color.bg} ${project.color.text}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-block font-medium transition duration-300 ${project.color.text}`}
                >
                  Detayları Gör <i className="fas fa-arrow-right ml-1"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


