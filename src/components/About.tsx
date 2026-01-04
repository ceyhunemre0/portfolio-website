"use client";
import Image from "next/image";
import { useState } from "react";

export default function About() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      className="relative py-20 bg-retro-black text-retro-chrome-bright overflow-hidden"
      id="about"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        {/* Neon glow orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-neon-pink/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-cyan/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 font-display tracking-tight">
            <span className="text-retro-chrome">&lt;</span>
            <span className="text-neon-cyan">Hakkımda</span>
            <span className="text-retro-chrome">/&gt;</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-pink via-neon-cyan to-neon-pink mx-auto rounded-full shadow-neon-cyan"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-7xl mx-auto">
          {/* Profile Image Section */}
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <div className="relative group">
              {/* Neon glow background */}
              <div className="absolute inset-0 bg-gradient-to-r from-neon-pink/40 to-neon-cyan/40 rounded-2xl blur-[40px] group-hover:blur-[50px] transition-all duration-500"></div>

              {/* Chrome frame */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto rounded-2xl overflow-hidden border-2 border-neon-cyan/40 shadow-neon-cyan-lg transform group-hover:scale-[1.02] transition-transform duration-500">
                {/* Scanline overlay */}
                <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_3px,rgba(0,240,255,0.02)_3px,rgba(0,240,255,0.02)_6px)] pointer-events-none z-10"></div>

                <Image
                  src="/about_image.png"
                  alt="Profil Fotoğrafı"
                  fill
                  className={`object-cover transition-all duration-700 ${
                    imageLoaded
                      ? "scale-100 opacity-100"
                      : "scale-110 opacity-0"
                  }`}
                  onLoad={() => setImageLoaded(true)}
                  priority
                />

                {/* Corner brackets */}
                <div className="absolute top-3 left-3 w-8 h-8 border-l-2 border-t-2 border-neon-cyan"></div>
                <div className="absolute top-3 right-3 w-8 h-8 border-r-2 border-t-2 border-neon-cyan"></div>
                <div className="absolute bottom-3 left-3 w-8 h-8 border-l-2 border-b-2 border-neon-cyan"></div>
                <div className="absolute bottom-3 right-3 w-8 h-8 border-r-2 border-b-2 border-neon-cyan"></div>
              </div>

              {/* Floating Stats Cards - Dashboard Style */}
              <div className="absolute -top-6 -right-6 bg-retro-panel/95 backdrop-blur-md rounded-lg p-4 shadow-neon-cyan border border-neon-cyan/30">
                <p className="text-3xl font-bold text-neon-cyan font-display">
                  3+
                </p>
                <p className="text-xs text-retro-chrome/70 font-mono">
                  YIL_DENEYİM
                </p>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-retro-panel/95 backdrop-blur-md rounded-lg p-4 shadow-neon-pink border border-neon-pink/30">
                <p className="text-3xl font-bold text-neon-pink font-display">
                  15+
                </p>
                <p className="text-xs text-retro-chrome/70 font-mono">
                  PROJELER
                </p>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:w-1/2 space-y-6">
            {/* Terminal-style content card */}
            <div className="holo-card rounded-xl p-8 transition-all duration-500">
              {/* Terminal header */}
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-retro-chrome/10">
                <div className="w-3 h-3 rounded-full bg-neon-pink"></div>
                <div className="w-3 h-3 rounded-full bg-sunset-yellow"></div>
                <div className="w-3 h-3 rounded-full bg-neon-cyan"></div>
                <span className="ml-4 text-retro-chrome/50 font-mono text-sm">
                  about_me.tsx
                </span>
              </div>

              <h3 className="text-3xl font-bold mb-6 font-display">
                <span className="text-neon-cyan">Yapay Zeka</span>
                <span className="text-retro-chrome"> & </span>
                <span className="text-neon-pink">Backend</span>
                <span className="text-retro-chrome"> Geliştirici</span>
              </h3>

              <div className="space-y-4 text-retro-chrome/80 leading-relaxed font-mono text-sm">
                <p>
                  <span className="text-neon-pink">const</span>{" "}
                  <span className="text-neon-cyan">developer</span> = &#123;
                </p>
                <p className="pl-4">
                  <span className="text-sunset-yellow">name:</span>{" "}
                  <span className="text-neon-cyan">
                    &quot;Ceyhun Emre&quot;
                  </span>
                  ,
                </p>
                <p className="pl-4">
                  <span className="text-sunset-yellow">passion:</span>{" "}
                  <span className="text-neon-cyan">
                    &quot;AI & Backend Development&quot;
                  </span>
                  ,
                </p>
                <p className="pl-4">
                  <span className="text-sunset-yellow">experience:</span>{" "}
                  <span className="text-neon-cyan">
                    &quot;3+ yıl startup deneyimi&quot;
                  </span>
                  ,
                </p>
                <p className="pl-4">
                  <span className="text-sunset-yellow">focus:</span> [
                  <span className="text-neon-cyan">&quot;AI Agents&quot;</span>,{" "}
                  <span className="text-neon-cyan">&quot;Chatbots&quot;</span>,{" "}
                  <span className="text-neon-cyan">&quot;Web Dev&quot;</span>]
                </p>
                <p>&#125;;</p>

                <p className="mt-6 text-retro-chrome/70">
                  <span className="text-retro-chrome/40">//</span> Amacım,
                  yazılım dünyasında yenilikçi çözümler üreterek, kullanıcıların
                  hayatını kolaylaştırmak ve teknolojiyi daha erişilebilir hale
                  getirmek.
                </p>
              </div>
            </div>

            {/* Social Links - Holographic Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="https://www.instagram.com/only_emree/"
                className="group flex items-center justify-center w-14 h-14 rounded-lg bg-retro-panel border border-neon-pink/40 text-neon-pink shadow-neon-pink hover:bg-neon-pink/20 hover:scale-110 transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/ceyhun-emre-top-85212b311"
                className="group flex items-center justify-center w-14 h-14 rounded-lg bg-retro-panel border border-neon-cyan/40 text-neon-cyan shadow-neon-cyan hover:bg-neon-cyan/20 hover:scale-110 transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
              <a
                href="https://www.github.com/ceyhunemre0"
                className="group flex items-center justify-center w-14 h-14 rounded-lg bg-retro-panel border border-retro-chrome/40 text-retro-chrome shadow-chrome hover:bg-retro-chrome/20 hover:scale-110 transition-all duration-300"
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
  );
}
