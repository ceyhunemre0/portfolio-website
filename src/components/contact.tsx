"use client";

import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

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
      setStatus("Mesajın başarıyla gönderildi.");
      e.currentTarget.reset();
    } else {
      setStatus(result.error || "Bir hata oluştu.");
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="relative overflow-hidden px-6 py-24 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
        <div>
          <h2 className="font-headline mb-6 text-5xl font-bold tracking-tight text-white">İletişime Geç</h2>
          <p className="mb-10 max-w-md text-lg text-[color:var(--foreground-muted)]">
            Yeni bir ürün, freelance iş birliği ya da teknik fikir alışverişi için bana yazabilirsin.
          </p>

          <div className="space-y-6">
            <div className="glass-card flex items-center gap-6 rounded-xl border border-white/10 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#00F0FF]/10 text-[#00F0FF]">
                <span className="material-symbols-outlined">mail</span>
              </div>
              <div>
                <p className="font-tech text-xs uppercase tracking-widest text-slate-500">Email</p>
                <p className="font-medium text-white">ceyhunemretop0@gmail.com</p>
              </div>
            </div>

            <div className="glass-card flex items-center gap-6 rounded-xl border border-white/10 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#00F0FF]/10 text-[#00F0FF]">
                <span className="material-symbols-outlined">location_on</span>
              </div>
              <div>
                <p className="font-tech text-xs uppercase tracking-widest text-slate-500">Konum</p>
                <p className="font-medium text-white">Balıkesir, Türkiye · Remote</p>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="glass-card rounded-2xl border border-white/15 p-10 shadow-2xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Field label="Adınız" name="name" type="text" placeholder="John Doe" />
            <Field label="Email" name="email" type="email" placeholder="john@example.com" />
          </div>

          <div className="mt-6">
            <Field label="Konu" name="subject" type="text" placeholder="Proje hakkında" />
          </div>

          <div className="mt-6">
            <label className="mb-2 block font-tech text-xs uppercase tracking-widest text-slate-400" htmlFor="message">
              Mesajınız
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              placeholder="Mesajınızı buraya yazın..."
              className="w-full rounded-lg border border-white/10 bg-[color:var(--surface-container-high)] px-4 py-3 text-white placeholder:text-slate-600 focus:border-[#00F0FF] focus:outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-[#00F0FF] py-4 font-headline text-sm font-bold uppercase tracking-widest text-[#00363A] transition-all hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? "Gönderiliyor" : "Gönder"}
            <span className="material-symbols-outlined">send</span>
          </button>

          {status && <p className="mt-4 text-sm text-white/70">{status}</p>}
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type,
  placeholder,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
}) {
  return (
    <div>
      <label className="mb-2 block font-tech text-xs uppercase tracking-widest text-slate-400" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={name !== "subject"}
        placeholder={placeholder}
        className="w-full rounded-lg border border-white/10 bg-[color:var(--surface-container-high)] px-4 py-3 text-white placeholder:text-slate-600 focus:border-[#00F0FF] focus:outline-none"
      />
    </div>
  );
}
