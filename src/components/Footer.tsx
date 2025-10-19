export default function Footer() {
    return (
        <footer className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white py-16 overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
                    <div className="text-center md:text-left">
                        <a href="#" className="inline-block text-3xl font-black mb-3 hover:scale-105 transition-transform">
                            <span className="bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent">
                                Ceyhun Emre
                            </span>
                        </a>
                        <p className="text-white/80 text-lg font-medium">
                            Yaratıcı <span className="text-blue-300">Yapay Zeka</span> &amp; <span className="text-indigo-300">Backend</span> Çözümleri
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-6">
                        <a href="#" className="text-white/70 hover:text-white font-semibold transition duration-300 hover:scale-110">Anasayfa</a>
                        <a href="#about" className="text-white/70 hover:text-white font-semibold transition duration-300 hover:scale-110">Hakkımda</a>
                        <a href="#projects" className="text-white/70 hover:text-white font-semibold transition duration-300 hover:scale-110">Projelerim</a>
                        <a href="#skills" className="text-white/70 hover:text-white font-semibold transition duration-300 hover:scale-110">Yeteneklerim</a>
                        <a href="#pricing" className="text-white/70 hover:text-white font-semibold transition duration-300 hover:scale-110">Fiyatlandırma</a>
                        <a href="#contact" className="text-white/70 hover:text-white font-semibold transition duration-300 hover:scale-110">İletişim</a>
                    </div>
                </div>
                
                <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mb-8"></div>
                
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-white/60 text-sm">© 2025 Ceyhun Emre. Tüm Hakları Saklıdır.</p>
                    <div className="flex space-x-4">
                        <a 
                            href="https://www.instagram.com/only_emree/" 
                            className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-gradient-to-br hover:from-blue-500 hover:to-indigo-500 hover:scale-110 transition-all duration-300 border border-white/20"
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-instagram text-xl"></i>
                        </a>
                        <a 
                            href="https://www.linkedin.com/in/ceyhun-emre-top-85212b311" 
                            className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-gradient-to-br hover:from-indigo-500 hover:to-blue-600 hover:scale-110 transition-all duration-300 border border-white/20"
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-linkedin-in text-xl"></i>
                        </a>
                        <a 
                            href="https://www.github.com/ceyhunemre0" 
                            className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-gradient-to-br hover:from-slate-600 hover:to-gray-700 hover:scale-110 transition-all duration-300 border border-white/20"
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-github text-xl"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}