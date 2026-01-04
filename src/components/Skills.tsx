export default function Skills() {
  const skills = [
    {
      name: "TypeScript",
      iconClass: "devicon-typescript-plain",
      color: "neon-cyan",
    },
    { name: "FastAPI", iconClass: "devicon-fastapi-plain", color: "neon-cyan" },
    {
      name: "PostgreSQL",
      iconClass: "devicon-postgresql-plain",
      color: "neon-cyan",
    },
    { name: "HTML", iconClass: "devicon-html5-plain", color: "neon-orange" },

    {
      name: "Next.js",
      iconClass: "devicon-nextjs-original-wordmark",
      color: "retro-chrome",
    },
    {
      name: "Firebase",
      iconClass: "devicon-firebase-plain",
      color: "sunset-yellow",
    },
    { name: "CSS", iconClass: "devicon-css3-plain", color: "neon-cyan" },
    {
      name: "Express",
      iconClass: "devicon-express-original",
      color: "retro-chrome",
    },

    {
      name: "JavaScript",
      iconClass: "devicon-javascript-plain",
      color: "sunset-yellow",
    },
    { name: "GoLang", iconClass: "devicon-go-plain", color: "neon-cyan" },
    { name: "Git", iconClass: "devicon-git-plain", color: "neon-orange" },
    { name: "Docker", iconClass: "devicon-docker-plain", color: "neon-cyan" },

    { name: "Node.js", iconClass: "devicon-nodejs-plain", color: "neon-cyan" },
    {
      name: "LangChain",
      iconClass: "devicon-markdown-original",
      color: "neon-pink",
    },
    {
      name: "Flask",
      iconClass: "devicon-flask-original",
      color: "retro-chrome",
    },
    { name: "React", iconClass: "devicon-react-original", color: "neon-cyan" },

    {
      name: "Python",
      iconClass: "devicon-python-plain",
      color: "sunset-yellow",
    },
    {
      name: "WordPress",
      iconClass: "devicon-wordpress-plain",
      color: "neon-cyan",
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "neon-cyan":
        return {
          text: "text-neon-cyan",
          border: "border-neon-cyan/30",
          hoverBorder: "hover:border-neon-cyan/60",
          shadow: "hover:shadow-neon-cyan",
          bg: "hover:bg-neon-cyan/10",
        };
      case "neon-pink":
        return {
          text: "text-neon-pink",
          border: "border-neon-pink/30",
          hoverBorder: "hover:border-neon-pink/60",
          shadow: "hover:shadow-neon-pink",
          bg: "hover:bg-neon-pink/10",
        };
      case "neon-orange":
        return {
          text: "text-neon-orange",
          border: "border-neon-orange/30",
          hoverBorder: "hover:border-neon-orange/60",
          shadow: "hover:shadow-neon-pink",
          bg: "hover:bg-neon-orange/10",
        };
      case "sunset-yellow":
        return {
          text: "text-sunset-yellow",
          border: "border-sunset-yellow/30",
          hoverBorder: "hover:border-sunset-yellow/60",
          shadow: "hover:shadow-neon-pink",
          bg: "hover:bg-sunset-yellow/10",
        };
      default:
        return {
          text: "text-retro-chrome",
          border: "border-retro-chrome/30",
          hoverBorder: "hover:border-retro-chrome/60",
          shadow: "hover:shadow-chrome",
          bg: "hover:bg-retro-chrome/10",
        };
    }
  };

  return (
    <section
      className="relative bg-retro-black py-20 px-6 md:px-12 lg:px-16 overflow-hidden"
      id="skills"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,45,117,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,45,117,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        {/* Glow orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-neon-cyan/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-neon-pink/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 font-display tracking-tight">
            <span className="text-retro-chrome">&lt;</span>
            <span className="text-neon-cyan">Yeteneklerim</span>
            <span className="text-retro-chrome">/&gt;</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan via-neon-pink to-neon-cyan mx-auto rounded-full shadow-neon-cyan mb-4"></div>
          <p className="text-retro-chrome/70 max-w-2xl mx-auto text-lg font-mono">
            Projelerimi şekillendiren ve geliştirme sürecinde sıkça başvurduğum
            beceriler burada. Hepsi zamanla, deneme-yanılmayla ve bolca kahveyle
            gelişti.
          </p>
        </div>

        {/* Skills Grid - Dashboard Modules Style */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
          {skills.map((skill, index) => {
            const colors = getColorClasses(skill.color);
            return (
              <div
                key={skill.name}
                className={`group relative bg-retro-panel/80 backdrop-blur-md rounded-xl p-6 transition-all duration-300 hover:scale-110 border ${colors.border} ${colors.hoverBorder} ${colors.shadow} ${colors.bg} flex flex-col items-center justify-center gap-3`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Scanline effect on hover */}
                <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,240,255,0.02)_2px,rgba(0,240,255,0.02)_4px)] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

                {/* Icon */}
                <i
                  className={`${skill.iconClass} text-4xl relative z-10 ${colors.text} transition-all duration-300 group-hover:scale-110`}
                />

                {/* Name */}
                <span
                  className={`text-sm font-semibold font-mono relative z-10 ${colors.text} transition-colors duration-300`}
                >
                  {skill.name}
                </span>

                {/* Corner accent */}
                <div
                  className={`absolute top-1 right-1 w-2 h-2 ${
                    skill.color === "neon-cyan"
                      ? "bg-neon-cyan"
                      : skill.color === "neon-pink"
                      ? "bg-neon-pink"
                      : skill.color === "neon-orange"
                      ? "bg-neon-orange"
                      : skill.color === "sunset-yellow"
                      ? "bg-sunset-yellow"
                      : "bg-retro-chrome"
                  } rounded-full opacity-50 group-hover:opacity-100 transition-opacity`}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
