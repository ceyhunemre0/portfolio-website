export default function Skills() {
    const skills = [
        { name: "TypeScript", iconClass: "devicon-typescript-plain colored", bg: "bg-blue-50", text: "text-blue-700", border: "border border-blue-200" },
        { name: "FastAPI", iconClass: "devicon-fastapi-plain colored", bg: "bg-green-50", text: "text-green-800", border: "border border-green-200" },
        { name: "PostgreSQL", iconClass: "devicon-postgresql-plain colored", bg: "bg-blue-50", text: "text-blue-800", border: "border border-blue-200" },
        { name: "HTML", iconClass: "devicon-html5-plain colored", bg: "bg-orange-50", text: "text-orange-700", border: "border border-orange-200" },

        { name: "Next.js", iconClass: "devicon-nextjs-original-wordmark colored", bg: "bg-gray-100", text: "text-gray-900", border: "border border-gray-200" },
        { name: "Firebase", iconClass: "devicon-firebase-plain colored", bg: "bg-yellow-50", text: "text-yellow-700", border: "border border-yellow-200" },
        { name: "CSS", iconClass: "devicon-css3-plain colored", bg: "bg-blue-50", text: "text-blue-700", border: "border border-blue-200" },
        { name: "Express", iconClass: "devicon-express-original", bg: "bg-gray-100", text: "text-gray-900", border: "border border-gray-300" },

        { name: "JavaScript", iconClass: "devicon-javascript-plain colored", bg: "bg-yellow-50", text: "text-yellow-800", border: "border border-yellow-200" },
        { name: "GoLang", iconClass: "devicon-go-plain colored", bg: "bg-cyan-50", text: "text-cyan-700", border: "border border-cyan-200" },
        { name: "Git", iconClass: "devicon-git-plain colored", bg: "bg-orange-50", text: "text-orange-700", border: "border border-orange-200" },
        { name: "Docker", iconClass: "devicon-docker-plain colored", bg: "bg-blue-50", text: "text-blue-700", border: "border border-blue-200" },

        { name: "Node.js", iconClass: "devicon-nodejs-plain colored", bg: "bg-green-50", text: "text-green-800", border: "border border-green-200" },
        { name: "LangChain", iconClass: "devicon-markdown-original", bg: "bg-gray-100", text: "text-gray-800", border: "border border-gray-300" },
        { name: "Flask", iconClass: "devicon-flask-original", bg: "bg-gray-100", text: "text-gray-800", border: "border border-gray-300" },
        { name: "React", iconClass: "devicon-react-original colored", bg: "bg-cyan-50", text: "text-cyan-800", border: "border border-cyan-200" },

        { name: "Python", iconClass: "devicon-python-plain colored", bg: "bg-blue-50", text: "text-blue-800", border: "border border-blue-200" },
        { name: "WordPress", iconClass: "devicon-wordpress-plain colored", bg: "bg-blue-50", text: "text-blue-900", border: "border border-blue-200" },
    ];


    return (
        <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 text-black" id='skills'>
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Yeteneklerim</h2>
                    <div className="w-20 h-1 bg-indigo-600 mx-auto mb-4"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto ">Projelerimi şekillendiren ve geliştirme sürecinde sıkça başvurduğum beceriler burada. Hepsi zamanla, deneme-yanılmayla ve bolca kahveyle gelişti.</p>
                </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3 mb-4 justify-center">
                {skills.map(skill => (
                    <section
                        key={skill.name}
                        className={`flex items-center gap-2 px-3 py-1 text-xs rounded-full transition-transform duration-200 hover:scale-110 ${skill.bg} ${skill.text} ${skill.border}`}
                    >
                        <i className={`${skill.iconClass} text-2xl`} />
                        <span>{skill.name}</span>
                    </section>
                ))}
            </div>
        </section>
    )
}