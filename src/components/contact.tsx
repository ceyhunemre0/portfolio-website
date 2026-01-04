"use client";
export default function Contact() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (res.ok) {
      alert("Mesaj gönderildi!");
    } else {
      alert(`Hata: ${result.error}`);
    }
  };

  return (
    <section
      className="relative py-20 bg-retro-black overflow-hidden"
      id="contact"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,45,117,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,45,117,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        {/* Glow orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-neon-cyan/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-neon-pink/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 font-display tracking-tight">
            <span className="text-retro-chrome">&lt;</span>
            <span className="text-neon-cyan">İletişim</span>
            <span className="text-retro-chrome">/&gt;</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan via-neon-pink to-neon-cyan mx-auto rounded-full shadow-neon-cyan mb-4"></div>
          <p className="text-retro-chrome/70 max-w-2xl mx-auto text-lg font-mono">
            Projeler, iş birlikleri ya da sadece sohbet etmek için bana
            ulaşabilirsin.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 max-w-7xl mx-auto">
          {/* Contact Form - Terminal Style */}
          <div className="lg:w-1/2">
            <form
              onSubmit={handleSubmit}
              method="POST"
              className="holo-card rounded-xl p-8 transition-all duration-500"
            >
              {/* Terminal header */}
              <div className="flex items-center gap-2 mb-8 pb-4 border-b border-retro-chrome/10">
                <div className="w-3 h-3 rounded-full bg-neon-pink"></div>
                <div className="w-3 h-3 rounded-full bg-sunset-yellow"></div>
                <div className="w-3 h-3 rounded-full bg-neon-cyan"></div>
                <span className="ml-4 text-retro-chrome/50 font-mono text-sm">
                  contact_form.tsx
                </span>
              </div>

              {/* Hidden fields */}
              <input
                type="hidden"
                name="_next"
                value="https://localhost:3000"
              />
              <input type="hidden" name="_captcha" value="false" />

              <div className="space-y-6">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-mono text-neon-cyan mb-2"
                  >
                    <span className="text-neon-pink">&gt;</span> Adınız_
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-retro-panel border border-retro-chrome/20 rounded-lg focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan/50 focus:shadow-neon-cyan transition-all duration-300 text-retro-chrome-bright font-mono placeholder:text-retro-chrome/40"
                    placeholder="Adınız Soyadınız"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-mono text-neon-cyan mb-2"
                  >
                    <span className="text-neon-pink">&gt;</span> E-posta_
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-retro-panel border border-retro-chrome/20 rounded-lg focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan/50 focus:shadow-neon-cyan transition-all duration-300 text-retro-chrome-bright font-mono placeholder:text-retro-chrome/40"
                    placeholder="ornek@email.com"
                  />
                </div>

                {/* Subject Field */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-mono text-neon-cyan mb-2"
                  >
                    <span className="text-neon-pink">&gt;</span> Konu_
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 bg-retro-panel border border-retro-chrome/20 rounded-lg focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan/50 focus:shadow-neon-cyan transition-all duration-300 text-retro-chrome-bright font-mono placeholder:text-retro-chrome/40"
                    placeholder="Mesajınızın konusu"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-mono text-neon-cyan mb-2"
                  >
                    <span className="text-neon-pink">&gt;</span> Mesaj_
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 bg-retro-panel border border-retro-chrome/20 rounded-lg focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan/50 focus:shadow-neon-cyan transition-all duration-300 text-retro-chrome-bright font-mono placeholder:text-retro-chrome/40 resize-none"
                    placeholder="Mesajınızı buraya yazın..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 px-6 bg-gradient-to-r from-neon-cyan to-neon-pink text-retro-dark rounded-lg font-bold font-mono hover:shadow-neon-cyan-lg hover:scale-[1.02] transition-all duration-300"
                >
                  [ MESAJ_GÖNDER ] →
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info - System Readouts */}
          <div className="lg:w-1/2">
            <div className="holo-card p-8 rounded-xl h-full transition-all duration-500">
              {/* Terminal header */}
              <div className="flex items-center gap-2 mb-8 pb-4 border-b border-retro-chrome/10">
                <div className="w-3 h-3 rounded-full bg-neon-pink"></div>
                <div className="w-3 h-3 rounded-full bg-sunset-yellow"></div>
                <div className="w-3 h-3 rounded-full bg-neon-cyan"></div>
                <span className="ml-4 text-retro-chrome/50 font-mono text-sm">
                  system_info.tsx
                </span>
              </div>

              <h3 className="text-2xl font-bold mb-6 font-display text-neon-cyan">
                İletişim Bilgileri
              </h3>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start group">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-lg bg-retro-panel flex items-center justify-center border border-neon-cyan/40 shadow-neon-cyan group-hover:border-neon-cyan transition-all duration-300">
                      <i className="fas fa-envelope text-neon-cyan text-xl"></i>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold font-display text-retro-chrome">
                      E-posta
                    </h4>
                    <p className="text-neon-cyan font-mono text-sm">
                      ceyhunemretop0@gmail.com
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start group">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-lg bg-retro-panel flex items-center justify-center border border-neon-pink/40 shadow-neon-pink group-hover:border-neon-pink transition-all duration-300">
                      <i className="fas fa-phone text-neon-pink text-xl"></i>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold font-display text-retro-chrome">
                      Telefon
                    </h4>
                    <p className="text-retro-chrome/60 font-mono text-sm">
                      Detaylar için iletişime geçin.
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start group">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-lg bg-retro-panel flex items-center justify-center border border-neon-purple/40 group-hover:border-neon-purple transition-all duration-300">
                      <i className="fas fa-map-marker-alt text-neon-purple text-xl"></i>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold font-display text-retro-chrome">
                      Konum
                    </h4>
                    <p className="text-retro-chrome/60 font-mono text-sm">
                      Balıkesir, Türkiye
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-retro-chrome/10">
                <h4 className="text-lg font-semibold mb-4 font-display text-retro-chrome">
                  Sosyal Medya
                </h4>
                <div className="flex space-x-4">
                  <a
                    href="https://www.instagram.com/only_emree/"
                    className="flex items-center justify-center w-14 h-14 rounded-lg bg-retro-panel text-neon-pink border border-neon-pink/40 hover:bg-neon-pink/20 hover:shadow-neon-pink hover:scale-110 transition-all duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-instagram text-xl"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ceyhun-emre-top-85212b311"
                    className="flex items-center justify-center w-14 h-14 rounded-lg bg-retro-panel text-neon-cyan border border-neon-cyan/40 hover:bg-neon-cyan/20 hover:shadow-neon-cyan hover:scale-110 transition-all duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin-in text-xl"></i>
                  </a>
                  <a
                    href="https://www.github.com/ceyhunemre0"
                    className="flex items-center justify-center w-14 h-14 rounded-lg bg-retro-panel text-retro-chrome border border-retro-chrome/40 hover:bg-retro-chrome/20 hover:shadow-chrome hover:scale-110 transition-all duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github text-xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
