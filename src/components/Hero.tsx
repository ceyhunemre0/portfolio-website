'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const roles = [
    '💡 AI Engineer',
    '🚀 Full-Stack Developer',
    '🤖 Automation Specialist',
    '📊 Data Engineer'
  ];

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setIsTransitioning(false);
      }, 1000);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
      {/* Animated Background Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-600/40 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600/40 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-slate-600/40 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-16 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 max-w-7xl mx-auto">
          
          {/* Left Content */}
          <div className={`flex-1 text-center lg:text-left transition-all duration-1000 px-4 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            
            {/* Greeting Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2 mb-6 animate-fade-in">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-white/90 text-sm font-medium">Yeni Projeler İçin Müsait</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
              Merhaba, Ben
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-blue-500 bg-clip-text text-transparent animate-gradient">
                Ceyhun Emre
              </span>
            </h1>

            {/* Animated Role Switcher */}
            <div className="h-16 mb-8 flex items-center justify-center lg:justify-start">
              <p className={`text-2xl md:text-3xl font-bold text-white/90 transition-all duration-1000 ease-in-out ${
                isTransitioning ? 'opacity-0 translate-y-2 scale-95' : 'opacity-100 translate-y-0 scale-100'
              }`}>
                {roles[currentRole]}
              </p>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Modern teknolojilerle inovatif çözümler üretiyorum. 
              <span className="text-blue-400 font-semibold"> AI, automation</span> ve 
              <span className="text-indigo-400 font-semibold"> web development</span> alanlarında uzmanım.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a 
                href="#projects" 
                className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Projelerimi Keşfet
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </a>
              
              <a 
                href="#contact" 
                className="group inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-full hover:bg-white/20 hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  İletişime Geç
                </span>
              </a>
            </div>

            {/* Social Stats */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-white/80">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div>
                <div className="text-left">
                  <p className="text-2xl font-bold text-white">7+</p>
                  <p className="text-sm">Projeler</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <span className="text-2xl">⭐</span>
                </div>
                <div className="text-left">
                  <p className="text-2xl font-bold text-white">3+</p>
                  <p className="text-sm">Yıl Deneyim</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <span className="text-2xl">💼</span>
                </div>
                <div className="text-left">
                  <p className="text-2xl font-bold text-white">5+</p>
                  <p className="text-sm">Mutlu Müşteri</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image with Effects */}
          <div className={`flex-1 flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative">
              
              {/* Glowing Rings */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-r from-blue-500/20 to-indigo-500/20 blur-3xl animate-pulse"></div>
              </div>
              
              {/* Rotating Border */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-600 animate-spin-slow"></div>
                <div className="absolute inset-1 rounded-full bg-gradient-to-br from-slate-900 to-gray-800 flex items-center justify-center">
                  
                  {/* Profile Image */}
                  <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-[22rem] lg:h-[22rem] rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                    <Image
                      src="/hero_icon.png"
                      alt="Ceyhun Emre"
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-500"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* Floating Tech Icons */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20 animate-float shadow-xl">
                <span className="text-3xl">🤖</span>
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20 animate-float animation-delay-2000 shadow-xl">
                <span className="text-3xl">💻</span>
              </div>
              <div className="absolute top-1/4 -right-8 w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20 animate-float animation-delay-4000 shadow-xl">
                <span className="text-2xl">⚡</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center gap-2 text-white/60 hover:text-white/90 transition-colors">
          <span className="text-sm font-medium">Aşağı Kaydır</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -50px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(50px, 50px) scale(1.05); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}
