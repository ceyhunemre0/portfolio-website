import { describe } from "node:test";

const projects = [
  {
    title: "ChatFlowAI",
    category: "Yapay Zekâ, Web Geliştirme",
    description: "ChatFlowAI, TypeScript, Next.js ve LangChain kullanılarak geliştirilmiş bir dosya tabanlı chatbot uygulamasıdır. Projenin arka yapısında LangChain ile döküman tabanlı doğal dil işleme sağlanırken, TypeScript ile güvenli ve sürdürülebilir bir kod yapısı oluşturulmuştur. Next.js, hem hızlı sayfa geçişleri hem de SEO uyumlu yapısıyla projeye güçlü bir temel sunar. Kullanıcı arayüzü, yüklenen dökümanlara dayalı olarak etkileşimli yanıtlar sunacak şekilde tasarlanmıştır. Bu proje, yapay zeka, dosya işleme ve modern web teknolojilerinin birleşimiyle etkili ve özelleştirilebilir bir sohbet deneyimi sağlar.",
    tags: ["TypeScript", "NextJs", "LangChain", "OpenAI"],
    link: "https://github.com/ceyhunemre0/Document_Bot",
    color: {
      bg: "bg-indigo-100",
      text: "text-indigo-600",
    },
    icon: (
      <svg className="w-24 h-24 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "Statify+",
    category: "Web Geliştirme",
    description: "StatifyPlus, Python ile geliştirilmiş bir Spotify veri analiz projesidir. Projenin arka ucunda Python kullanılırken, ön yüz tasarımı HTML, CSS ve JavaScript ile oluşturulmuştur. Python, Spotify API’sinden veri çekme ve analiz işlemlerini gerçekleştirir. Kullanıcı arayüzü, müzik verilerini görselleştirmek için dinamik ve etkileşimli yapıda tasarlanmıştır. Proje, veri işleme, API entegrasyonu ve web teknolojilerinin birlikte kullanılmasıyla kapsamlı bir çözüm sunar.",
    tags: ["Flask", "Python", "Spotify API", "Html", "CSS"],
    link:"https://github.com/ceyhunemre0/StatifyPlus",
    color: {
      bg: "bg-purple-100",
      text: "text-purple-600",

    },
    icon: (
      <img src="/statifyplus.png" alt="StatifyPlus Logo" className="w-100 h-100 object-contain" />
    )
  },
  {
    title: "Portfolio.",
    category: "Web Geliştirme",
    description:"Portfolio., Next.js, Tailwind CSS ve TypeScript kullanılarak geliştirilmiş bir kişisel portfolyo websitesidir. Projenin arka yapısında TypeScript ile güvenli ve ölçeklenebilir bir kod yapısı oluşturulurken, kullanıcı arayüzü Tailwind CSS ile modern ve responsive bir şekilde tasarlanmıştır. Next.js sayesinde sayfa geçişleri hızlıdır ve SEO uyumluluğu sağlanmıştır. Portfolyo sitesi, projeleri, kullanılan teknolojileri ve kişisel bilgileri dinamik ve sade bir yapıda sunar. Bu proje, modern web teknolojilerinin birlikte kullanılmasıyla performanslı ve etkileyici bir tanıtım aracı sunar.",
    tags: ["NextJs", "TypeScript", "Tailwind CSS", "React"],
    link:"#",
    color: {
      bg: "bg-pink-100",
      text: "text-pink-600",

    },
    icon: (
      <svg className="w-24 h-24 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    )
  }
];


export default function ProjectSection() {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 text-black" id='projects'>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projelerim</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto ">Üzerinde keyifle çalıştığım bazı projeler burada. Her biri farklı bir problemi çözmeye yönelik yaratıcı denemeler içeriyor.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300"
            >
              <div className={`h-60 flex items-center justify-center ${project.color.bg}`}>
                {project.icon}
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
                  className={`inline-block font-medium transition duration-300 ${project.color.text} ${project.color.text}`}
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
}
