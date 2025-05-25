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
        <section className="py-20 bg-gray-50 text-black" id="contact">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">İletişim</h2>
                    <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
                </div>
                <div className="flex flex-col md:flex-row gap-10">
                    <div className="md:w-1/2">
                        <form
                            onSubmit={handleSubmit}
                            method="POST"
                            className="space-y-6"
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
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300"
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
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300"
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
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300"
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
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300"
                                    placeholder="Mesajınızı buraya yazın..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-3 px-6 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition duration-300"
                            >
                                Mesaj Gönder
                            </button>
                        </form>
                    </div>
                    <div className="md:w-1/2">
                        <div className="bg-white p-8 rounded-xl shadow-md h-full">
                            <h3 className="text-2xl font-bold mb-6">İletişim Bilgileri</h3>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center contact-icon">
                                            <i className="fas fa-envelope text-indigo-600 text-xl"></i>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-semibold">E-posta</h4>
                                        <p className="text-gray-600">ceyhunemretop0@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center contact-icon">
                                            <i className="fas fa-phone text-indigo-600 text-xl"></i>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-semibold">Telefon</h4>
                                        <p className="text-gray-600">+90 506 122 22 65</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center contact-icon">
                                            <i className="fas fa-map-marker-alt text-indigo-600 text-xl"></i>
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
                                    <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-indigo-600 hover:text-white transition-all duration-300">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-indigo-600 hover:text-white transition-all duration-300">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                    <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-indigo-600 hover:text-white transition-all duration-300">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                    <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-indigo-600 hover:text-white transition-all duration-300">
                                        <i className="fab fa-behance"></i>
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