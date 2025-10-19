'use client';
export default function Header() {
 

    return (
        
        <header className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-200">
            <div className="mx-auto px-6 md:px-12 lg:px-16 py-4 flex justify-between items-center">


            <div className="flex items-center">
                <a href="#" className="text-2xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent hover:scale-105 transition-transform">
                    <span className="text-blue-500">
                        {`</`}
                    </span>
                    Ceyhun Emre
                    <span className="text-blue-500">{`>`}</span>
                </a>
            </div>

            <nav className="hidden md:flex space-x-8 mr-6">
                <a href="#" className="relative nav-link font-bold text-gray-700 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 hover:bg-clip-text
                after:content-[''] after:absolute after:w-0 after:h-[2px] after:-bottom-[2px] after:left-0 
                after:bg-gradient-to-r after:from-blue-600 after:to-indigo-600 after:transition-all after:duration-300 hover:after:w-full
                ">
                Anasayfa
                </a>
                <a href="#about" className="relative nav-link font-bold text-gray-700 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 hover:bg-clip-text
                after:content-[''] after:absolute after:w-0 after:h-[2px] after:-bottom-[2px] after:left-0 
                after:bg-gradient-to-r after:from-blue-600 after:to-indigo-600 after:transition-all after:duration-300 hover:after:w-full
                ">
                Hakkımda
                </a>
                <a href="#projects" className="relative nav-link font-bold text-gray-700 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 hover:bg-clip-text
                after:content-[''] after:absolute after:w-0 after:h-[2px] after:-bottom-[2px] after:left-0 
                after:bg-gradient-to-r after:from-blue-600 after:to-indigo-600 after:transition-all after:duration-300 hover:after:w-full
                ">
                Projelerim
                </a>
                <a href="#skills" className="relative nav-link font-bold text-gray-700 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 hover:bg-clip-text
                after:content-[''] after:absolute after:w-0 after:h-[2px] after:-bottom-[2px] after:left-0 
                after:bg-gradient-to-r after:from-blue-600 after:to-indigo-600 after:transition-all after:duration-300 hover:after:w-full
                ">
                Yeteneklerim
                </a>
                <a href="#pricing" className="relative nav-link font-bold text-gray-700 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 hover:bg-clip-text
                after:content-[''] after:absolute after:w-0 after:h-[2px] after:-bottom-[2px] after:left-0 
                after:bg-gradient-to-r after:from-blue-600 after:to-indigo-600 after:transition-all after:duration-300 hover:after:w-full
                ">
                Fiyatlandırma
                </a>
                <a href="#contact" className="relative nav-link font-bold text-gray-700 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 hover:bg-clip-text
                after:content-[''] after:absolute after:w-0 after:h-[2px] after:-bottom-[2px] after:left-0 
                after:bg-gradient-to-r after:from-blue-600 after:to-indigo-600 after:transition-all after:duration-300 hover:after:w-full
                ">
                İletişim
                </a>
            </nav>
            <button
                id="mobile-menu-button"
                className="md:hidden text-gray-700 focus:outline-none"
                onClick={() => {
                    const menu = document.getElementById("mobile-menu");
                    if (menu) {
                        menu.classList.toggle("hidden");
                    }
                }}
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
            
        </div>

            <div id="mobile-menu" className="md:hidden bg-white/95 backdrop-blur-md shadow-2xl absolute w-full hidden border-b border-purple-100">
            <div className="container mx-auto px-6 py-4 flex flex-col space-y-3">
                <a href="#" className="py-3 px-4 font-bold text-gray-700 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 rounded-lg hover:text-purple-600 transition-all">Anasayfa</a>
                <a href="#about" className="py-3 px-4 font-bold text-gray-700 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 rounded-lg hover:text-purple-600 transition-all">Hakkımda</a>
                <a href="#projects" className="py-3 px-4 font-bold text-gray-700 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 rounded-lg hover:text-purple-600 transition-all">Projeler</a>
                <a href="#skills" className="py-3 px-4 font-bold text-gray-700 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 rounded-lg hover:text-purple-600 transition-all">Yetenekler</a>
                <a href="#pricing" className="py-3 px-4 font-bold text-gray-700 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 rounded-lg hover:text-purple-600 transition-all">Fiyatlandırma</a>
                <a href="#contact" className="py-3 px-4 font-bold text-gray-700 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 rounded-lg hover:text-purple-600 transition-all">İletişim</a>
            </div>
            </div>
        </header>
    );

}