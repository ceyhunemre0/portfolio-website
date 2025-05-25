export default function Hero() {
  return (
    <section className="py-20 md:py-32 bg-indigo-400 text-white" >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Merhaba, Ben
              <span className="text-yellow-300"> Ceyhun Emre</span>
            </h1>
            <p className="text-xl font-bold text-white leading-tight mb-6">
              Yapay Zeka çalışmalarımı keşfedin ve benimle iletişime geçin!
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#projects" className="bg-white text-indigo-600 font-medium py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300 text-center">
                Projelerimi Gör
              </a>
              <a href="#contact" className="bg-transparent border-2 border-white text-white font-medium py-3 px-8 rounded-full hover:bg-white/10 transition duration-300 text-center">
                İletişime Geç
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative">
              <svg className="w-64 h-64 md:w-80 md:h-80 text-white/10" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor" d="M40.8,-70.7C52.1,-64.5,60.4,-51.6,67.7,-38.1C75,-24.6,81.3,-10.5,81.9,4.1C82.5,18.7,77.5,33.8,68.3,45.9C59.2,58,45.9,67.1,31.7,72.4C17.5,77.7,2.3,79.2,-13.4,77.5C-29.1,75.8,-45.3,71,-57.8,60.8C-70.3,50.7,-79.1,35.3,-82.6,18.8C-86.1,2.3,-84.3,-15.3,-77.4,-30.2C-70.5,-45.1,-58.5,-57.3,-44.8,-62.8C-31.1,-68.3,-15.5,-67.1,-0.2,-66.8C15.2,-66.5,30.4,-67,40.8,-70.7Z" transform="translate(100 100)"></path>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="/pp.jpeg"
                  alt="Ceyhun Emre"
                  className="w-40 h-40 md:w-51 md:h-51 rounded-full object-cover border-2 border-white shadow-lg"
                />
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}