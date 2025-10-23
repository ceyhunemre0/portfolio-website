'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function About() {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <div className="relative py-20 bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100 text-gray-900 overflow-hidden" id="about">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100/40 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-900">
                        Hakkımda
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
                </div>
                
                <div className="flex flex-col lg:flex-row items-center gap-12 max-w-7xl mx-auto">
                    {/* Profile Image Section */}
                    <div className="lg:w-1/2 mb-10 lg:mb-0">
                        <div className="relative group">
                            {/* Rotating Gradient Border */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl opacity-60 blur-xl group-hover:opacity-100 transition-opacity duration-500"></div>
                            
                            {/* Image Container */}
                            <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto rounded-3xl overflow-hidden border-4 border-white shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                                <Image
                                    src="/about_image.png"
                                    alt="Profil Fotoğrafı"
                                    fill
                                    className={`object-cover transition-all duration-700 ${imageLoaded ? 'scale-100 opacity-100' : 'scale-110 opacity-0'}`}
                                    onLoad={() => setImageLoaded(true)}
                                    priority
                                />
                            </div>

                            {/* Floating Stats Cards */}
                            <div className="absolute -top-6 -right-6 bg-white backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-gray-200">
                                <p className="text-3xl font-bold text-blue-600">3+</p>
                                <p className="text-xs text-gray-600">Yıl Deneyim</p>
                            </div>
                            
                            <div className="absolute -bottom-6 -left-6 bg-white backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-gray-200">
                                <p className="text-3xl font-bold text-indigo-600">15+</p>
                                <p className="text-xs text-gray-600">Projeler</p>
                            </div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="lg:w-1/2 space-y-6">
                        <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-gray-200">
                            <h3 className="text-3xl font-bold mb-6 text-gray-900">
                                <span className="text-blue-600">Yapay Zeka</span>
                                <span> & </span>
                                <span className="text-indigo-600">Backend</span>
                                <span> Geliştirici</span>
                            </h3>
                            
                            <div className="space-y-4 text-gray-600 leading-relaxed">
                                <p>
                                    Merhaba! Ben <span className="font-semibold text-gray-900">Ceyhun Emre</span>, yapay zeka ve backend geliştirme alanında tutkulu bir geliştiriciyim.
                                    Yazılım dünyasına olan ilgim, beni sürekli olarak yeni teknolojiler öğrenmeye ve projeler geliştirmeye yönlendiriyor.
                                </p>
                                <p>
                                    <span className="font-semibold text-blue-600">3 yıldır</span> bir startupta full stack geliştirici olarak çalışıyorum ve bu süreçte hem frontend hem de backend teknolojileri üzerinde deneyim kazandım.
                                    Bilgisayar mühendisliği eğitimi alarak, teorik bilgileri pratik uygulamalarla birleştirmeyi öğrendim.
                                </p>
                                <p>
                                    <span className="font-semibold text-indigo-600">AI agentlar</span>, yapay zeka destekli chatbotlar ve web geliştirme üzerine projeler geliştirdim.
                                    Amacım, yazılım dünyasında yenilikçi çözümler üreterek, kullanıcıların hayatını kolaylaştırmak ve teknolojiyi daha erişilebilir hale getirmektir.
                                </p>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                            <a
                                href="https://www.instagram.com/only_emree/"
                                className="group flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-pink-500 to-rose-600 text-white shadow-md hover:shadow-xl hover:scale-110 transition-all duration-300"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-instagram text-xl"></i>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/ceyhun-emre-top-85212b311"
                                className="group flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-md hover:shadow-xl hover:scale-110 transition-all duration-300"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-linkedin-in text-xl"></i>
                            </a>
                            <a
                                href="https://www.github.com/ceyhunemre0"
                                className="group flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-gray-700 to-gray-900 text-white shadow-md hover:shadow-xl hover:scale-110 transition-all duration-300"
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
