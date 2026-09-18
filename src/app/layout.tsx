import type { Metadata } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ceyhunemre.net.tr"),
  title: "Ceyhun Emre Top — Computer Engineer",
  description:
    "Yazılım ürünleri, AI sistemleri ve otomasyonlar geliştiren Computer Engineer Ceyhun Emre Top'un seçili çalışmaları.",
  keywords: ["Ceyhun Emre Top", "Computer Engineer", "Full Stack Developer", "AI Automation", "SaaS", "Next.js"],
  openGraph: {
    title: "Ceyhun Emre Top — Computer Engineer",
    description: "Yazılım ürünleri, AI sistemleri ve otomasyonlar.",
    url: "/",
    siteName: "Ceyhun Emre Top",
    images: [{ url: "/qarson.png", width: 1440, height: 1000 }],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ceyhun Emre Top — Computer Engineer",
    description: "Yazılım ürünleri, AI sistemleri ve otomasyonlar.",
    images: ["/qarson.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className={`${inter.variable} ${geistMono.variable}`}>
      <body>
        <Analytics />
        {children}
      </body>
    </html>
  );
}
