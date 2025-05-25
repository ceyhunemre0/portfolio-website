export default function About() {


    return (
        <div className="py-20 bg-white text-black" id="about">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Hakkımda</h2>
                <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
            </div>
            <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-10 md:mb-0">
                    <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden border-4 border-indigo-100 shadow-lg">
                        <img
                            src="pp.jpeg"
                            alt="Profil Fotoğrafı"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                {
                // TODO: edit about section text
                }
                <div className="md:w-1/2 md:pl-10">
                    <h3 className="text-2xl font-bold mb-4">Yapay Zeka &amp; <span className="text-indigo-600">Backend</span> <span className="text-purple-600">Geliştirici</span></h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        Merhaba! Ben Ceyhun Emre, yapay zeka ve backend geliştirme alanında tutkulu bir geliştiriciyim.
                        Yazılım dünyasına olan ilgim, beni sürekli olarak yeni teknolojiler öğrenmeye ve projeler geliştirmeye yönlendiriyor.
                    </p>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                        Eğitimim boyunca birçok projede yer aldım ve bu süreçte hem teknik becerilerimi geliştirdim hem de takım çalışması ve problem çözme yeteneklerimi pekiştirdim.
                        Şu anda, yapay zeka uygulamaları ve backend sistemleri üzerine çalışarak, kullanıcı deneyimini iyileştirmeyi ve verimli çözümler üretmeyi hedefliyorum.
                    </p>
                    
                    <div className="flex flex-wrap gap-4">
                        {
                        // TODO: edit twitter link to upwork link
                        }
                        <a
                            href="#"
                            className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 text-gray-600 hover:bg-indigo-600 hover:text-white transition-all duration-300"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a
                            href="https://www.instagram.com/only_emree/"
                            className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 text-gray-600 hover:bg-indigo-600 hover:text-white transition-all duration-300"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/ceyhun-emre-top-85212b311"
                            className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 text-gray-600 hover:bg-indigo-600 hover:text-white transition-all duration-300"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a
                            href="https://www.github.com/ceyhunemre0"
                            className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 text-gray-600 hover:bg-indigo-600 hover:text-white transition-all duration-300"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )

}