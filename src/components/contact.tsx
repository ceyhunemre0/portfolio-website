'use client';
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
        <section className="relative py-20 bg-gradient-to-br from-gray-50 to-slate-100 text-gray-900 overflow-hidden" id="contact">
            {/* Decorative Background */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-900">
                        İletişim
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-4"></div>
                    <p className="text-gray-700 max-w-2xl mx-auto text-lg">Projeler, iş birlikleri ya da sadece sohbet etmek için bana ulaşabilirsin.</p>
                </div>
                <div className="flex flex-col lg:flex-row gap-10 max-w-7xl mx-auto">
                    <div className="lg:w-1/2">
                        <form
                            onSubmit={handleSubmit}
                            method="POST"
                            className="space-y-6 bg-white/70 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-gray-200"
                        >
                            {/* Redirect after submit */}
                            <input type="hidden" name="_next" value="https://localhost:3000" />
                            {/* Disable CAPTCHA */}
                            <input type="hidden" name="_captcha" value="false" />

                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Adınız</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                                    placeholder="Adınız Soyadınız"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-posta Adresiniz</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                                    placeholder="ornek@email.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Konu</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                                    placeholder="Mesajınızın konusu"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mesajınız</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                                    placeholder="Mesajınızı buraya yazın..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300"
                            >
                                Mesaj Gönder
                            </button>
                        </form>
                    </div>
                    <div className="lg:w-1/2">
                        <div className="bg-white/70 backdrop-blur-md p-8 rounded-3xl shadow-xl h-full border border-gray-200">
                            <h3 className="text-2xl font-bold mb-6">İletişim Bilgileri</h3>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center shadow-lg">
                                            <i className="fas fa-envelope text-white text-xl"></i>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-semibold">E-posta</h4>
                                        <p className="text-gray-600">ceyhunemretop0@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center shadow-lg">
                                            <i className="fas fa-phone text-white text-xl"></i>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-semibold">Telefon</h4>
                                        <p className="text-gray-600">Detaylar için iletişime geçin.</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg">
                                            <i className="fas fa-map-marker-alt text-white text-xl"></i>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-semibold">Konum</h4>
                                        <p className="text-gray-600">Balıkesir, Türkiye</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8">
                                <h4 className="text-lg font-semibold mb-4">Sosyal Medya</h4>
                                <div className="flex space-x-4">
                                    <a
                                        href="https://www.instagram.com/only_emree/"
                                        className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 text-white shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="fab fa-instagram text-xl"></i>
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/ceyhun-emre-top-85212b311"
                                        className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 text-white shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="fab fa-linkedin-in text-xl"></i>
                                    </a>
                                    <a
                                        href="https://www.github.com/ceyhunemre0"
                                        className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-slate-600 to-gray-700 text-white shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300"
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
    )
}