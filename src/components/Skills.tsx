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
        <section className="relative bg-gradient-to-br from-gray-50 to-slate-100 py-20 px-6 md:px-12 lg:px-16 text-gray-900 overflow-hidden" id='skills'>
            {/* Decorative Background */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-900">
                        Yeteneklerim
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-4"></div>
                    <p className="text-gray-700 max-w-2xl mx-auto text-lg">
                        Projelerimi şekillendiren ve geliştirme sürecinde sıkça başvurduğum beceriler burada. Hepsi zamanla, deneme-yanılmayla ve bolca kahveyle gelişti.
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
                    {skills.map(skill => (
                        <div
                            key={skill.name}
                            className="group relative bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 border border-gray-200 hover:border-blue-300 flex flex-col items-center justify-center gap-3"
                        >
                            {/* Gradient glow on hover */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300"></div>
                            
                            <i className={`${skill.iconClass} text-5xl relative z-10 text-slate-700 group-hover:text-blue-600 transition-colors duration-300`} />
                            <span className="text-sm font-semibold text-gray-800 group-hover:text-blue-600 relative z-10 transition-colors duration-300">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}