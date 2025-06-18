// app/layout.tsx
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Ceyhun Emre Top | Yazılım Geliştirici',
  description: 'Yazılım projeleri, kişisel blog ve portfolyo. Ceyhun Emre Top\'un resmi web sitesi.',
  keywords: ['ceyhun emre top', 'yazılım geliştirici', 'next.js', 'typescript', 'kişisel web sitesi'],
  openGraph: {
    title: 'Ceyhun Emre Top',
    description: 'Projeler, makaleler ve yazılım odaklı içerikler.',
    url: 'https://www.ceyhunemre.net.tr',
    siteName: 'Ceyhun Emre Top',
    images: [
      {
        url: 'https://www.ceyhunemre.net.tr/images/hero_icon.png',
        width: 1200,
        height: 630,
        alt: 'Ceyhun Emre Top'
      }
    ],
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ceyhun Emre Top',
    description: 'Yazılım odaklı içerikler ve portfolyo.',
    images: ['https://www.ceyhunemre.net.tr/images/hero_icon.png'],
  },
  robots: 'index, follow',

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="bg-white text-black transition-colors duration-300">
        <div className="">
          <Analytics />
          {children}
        </div>
      </body>
    </html>
  );
}
