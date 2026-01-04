"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const roles = [
    { icon: "🤖", text: "AI Engineer", color: "text-neon-cyan" },
    { icon: "⚡", text: "Full-Stack Developer", color: "text-neon-pink" },
    { icon: "🧠", text: "Automation Specialist", color: "text-neon-purple" },
    { icon: "📊", text: "Data Engineer", color: "text-neon-orange" },
  ];

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setIsTransitioning(false);
      }, 600);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-retro-black">
      {/* Synthetic Sunset Background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-retro-black via-sunset-purple to-sunset-magenta opacity-60"></div>

        {/* Horizon glow */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-sunset-pink/30 via-sunset-orange/20 to-transparent"></div>

        {/* Grid perspective floor */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 overflow-hidden opacity-30">
          <div
            className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.3)_1px,transparent_1px)] bg-[size:60px_60px]"
            style={{
              transform: "perspective(300px) rotateX(60deg)",
              transformOrigin: "center top",
            }}
          ></div>
        </div>

        {/* Neon glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-pink/20 rounded-full blur-[100px] animate-neon-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-neon-cyan/20 rounded-full blur-[80px] animate-neon-pulse"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-neon-purple/15 rounded-full blur-[60px] animate-float-retro"></div>

        {/* Scanline overlay */}
        <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.1)_2px,rgba(0,0,0,0.1)_4px)] pointer-events-none"></div>
      </div>

      {/* Floating particles - using deterministic positions to avoid hydration mismatch */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[
          { left: 5, top: 10, delay: 0, duration: 10 },
          { left: 15, top: 30, delay: 1, duration: 12 },
          { left: 25, top: 60, delay: 2, duration: 14 },
          { left: 35, top: 20, delay: 0.5, duration: 11 },
          { left: 45, top: 80, delay: 3, duration: 15 },
          { left: 55, top: 15, delay: 1.5, duration: 13 },
          { left: 65, top: 45, delay: 2.5, duration: 16 },
          { left: 75, top: 70, delay: 0.8, duration: 12 },
          { left: 85, top: 35, delay: 3.5, duration: 14 },
          { left: 95, top: 55, delay: 1.2, duration: 10 },
          { left: 10, top: 85, delay: 4, duration: 18 },
          { left: 30, top: 5, delay: 2.2, duration: 11 },
          { left: 50, top: 95, delay: 0.3, duration: 13 },
          { left: 70, top: 25, delay: 3.8, duration: 15 },
          { left: 90, top: 75, delay: 1.8, duration: 17 },
          { left: 20, top: 50, delay: 4.2, duration: 12 },
          { left: 40, top: 40, delay: 0.7, duration: 14 },
          { left: 60, top: 65, delay: 2.8, duration: 16 },
          { left: 80, top: 90, delay: 1.4, duration: 11 },
          { left: 8, top: 72, delay: 3.2, duration: 19 },
        ].map((particle, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-neon-cyan/60 rounded-full animate-float-retro"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-16 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 max-w-7xl mx-auto">
          {/* Left Content */}
          <div
            className={`flex-1 text-center lg:text-left transition-all duration-1000 px-4 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Status Badge - Terminal Style */}
            <div className="inline-flex items-center gap-3 bg-retro-panel/80 backdrop-blur-md border border-neon-cyan/30 rounded-lg px-5 py-2.5 mb-8 shadow-neon-cyan">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-cyan opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-neon-cyan shadow-neon-cyan"></span>
              </span>
              <span className="text-neon-cyan text-sm font-mono tracking-wider">
                <span className="text-retro-chrome/60">STATUS:</span>{" "}
                AVAILABLE_FOR_PROJECTS
              </span>
            </div>

            {/* Main Heading - Chrome Effect */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight font-display tracking-tight">
              <span className="text-retro-chrome">Merhaba, Ben</span>
              <br />
              <span className="relative inline-block">
                <span
                  className="animate-chrome-shimmer"
                  style={{
                    background:
                      "linear-gradient(90deg, #ff2d75, #00f0ff, #ff2d75)",
                    backgroundSize: "200% auto",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Ceyhun Emre
                </span>
                {/* Neon underline */}
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-neon-cyan to-transparent"></span>
              </span>
            </h1>

            {/* Animated Role Switcher - Terminal Output */}
            <div className="h-20 mb-8 flex items-center justify-center lg:justify-start">
              <div className="bg-retro-panel/60 backdrop-blur-sm border border-retro-chrome/20 rounded-lg px-6 py-3">
                <div
                  className={`flex items-center gap-3 transition-all duration-700 ease-in-out ${
                    isTransitioning
                      ? "opacity-0 translate-y-2"
                      : "opacity-100 translate-y-0"
                  }`}
                >
                  <span className="text-neon-pink font-mono">&gt;</span>
                  <span className="text-3xl">{roles[currentRole].icon}</span>
                  <p
                    className={`text-2xl md:text-3xl font-bold font-display ${roles[currentRole].color}`}
                  >
                    {roles[currentRole].text}
                  </p>
                  <span className="w-3 h-6 bg-neon-cyan animate-pulse"></span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-retro-chrome/70 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-mono">
              Modern teknolojilerle inovatif çözümler üretiyorum.
              <span className="text-neon-cyan font-semibold">
                {" "}
                AI, automation
              </span>{" "}
              ve
              <span className="text-neon-pink font-semibold">
                {" "}
                web development
              </span>{" "}
              alanlarında uzmanım.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              {/* Primary CTA */}
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center px-8 py-4 font-bold font-mono tracking-wide text-retro-dark transition-all duration-500 bg-gradient-to-r from-neon-cyan to-neon-pink rounded-lg hover:shadow-neon-cyan-lg hover:scale-105 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-neon-pink to-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                <span className="relative z-10 flex items-center gap-2 whitespace-nowrap">
                  [ Projelerimi Keşfet ]
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
              </a>

              {/* Secondary CTA */}
              <a
                href="#contact"
                className="group inline-flex items-center justify-center px-6 py-3 font-bold font-mono tracking-wide text-neon-cyan transition-all duration-500 bg-transparent border border-neon-cyan/50 rounded-lg hover:bg-neon-cyan/10 hover:border-neon-cyan hover:shadow-neon-cyan hover:scale-105"
              >
                <span className="flex items-center gap-2 whitespace-nowrap">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  İletişime Geç
                </span>
              </a>
            </div>

            {/* Stats - Dashboard Gauges Style */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
              {[
                {
                  icon: "🚀",
                  value: "7+",
                  label: "Projeler",
                  glow: "shadow-neon-cyan",
                },
                {
                  icon: "⭐",
                  value: "3+",
                  label: "Yıl Deneyim",
                  glow: "shadow-neon-pink",
                },
                {
                  icon: "💼",
                  value: "5+",
                  label: "Mutlu Müşteri",
                  glow: "shadow-neon-cyan",
                },
              ].map((stat, index) => (
                <div key={index} className="flex items-center gap-3 group">
                  <div
                    className={`w-14 h-14 rounded-lg bg-retro-panel border border-neon-cyan/30 backdrop-blur-sm flex items-center justify-center group-hover:border-neon-cyan/60 transition-all duration-300 ${stat.glow}`}
                  >
                    <span className="text-2xl">{stat.icon}</span>
                  </div>
                  <div className="text-left">
                    <p className="text-2xl font-bold text-neon-cyan font-display">
                      {stat.value}
                    </p>
                    <p className="text-sm text-retro-chrome/60 font-mono">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Profile with Chrome Frame */}
          <div
            className={`flex-1 flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative">
              {/* Neon glow background */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-80 h-80 md:w-[28rem] md:h-[28rem] rounded-full bg-gradient-to-r from-neon-pink/30 to-neon-cyan/30 blur-[60px] animate-neon-pulse-slow"></div>
              </div>

              {/* Chrome Frame Container */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[26rem] lg:h-[26rem]">
                {/* Outer chrome border with neon glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-neon-pink via-neon-cyan to-neon-pink rounded-2xl animate-chrome-shimmer bg-[length:200%_auto] p-[3px] shadow-neon-cyan-lg">
                  <div className="w-full h-full bg-retro-dark rounded-2xl"></div>
                </div>

                {/* Inner container with CRT effect */}
                <div className="absolute inset-[6px] bg-retro-panel rounded-xl overflow-hidden border border-retro-chrome/20">
                  {/* Scanline overlay on image */}
                  <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_3px,rgba(0,240,255,0.02)_3px,rgba(0,240,255,0.02)_6px)] pointer-events-none z-10"></div>

                  {/* Profile Image */}
                  <Image
                    src="/hero_icon.png"
                    alt="Ceyhun Emre"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    priority
                  />

                  {/* Corner brackets */}
                  <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-neon-cyan/60"></div>
                  <div className="absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 border-neon-cyan/60"></div>
                  <div className="absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 border-neon-cyan/60"></div>
                  <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-neon-cyan/60"></div>
                </div>
              </div>

              {/* Floating Tech Icons - Holographic Panels */}
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-retro-panel/90 backdrop-blur-md rounded-lg flex items-center justify-center border border-neon-pink/40 animate-float-retro shadow-neon-pink">
                <span className="text-3xl">🤖</span>
              </div>
              <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-retro-panel/90 backdrop-blur-md rounded-lg flex items-center justify-center border border-neon-cyan/40 animate-float-retro-delayed shadow-neon-cyan">
                <span className="text-3xl">💻</span>
              </div>
              <div
                className="absolute top-1/4 -right-8 w-14 h-14 bg-retro-panel/90 backdrop-blur-md rounded-lg flex items-center justify-center border border-neon-purple/40 animate-float-retro shadow-neon-pink"
                style={{ animationDelay: "1s" }}
              >
                <span className="text-2xl">⚡</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
