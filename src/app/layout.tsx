// app/layout.tsx
import { Geist_Mono, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ceyhun Emre Top | AI & Full-Stack Developer",
  description:
    "AI ve full-stack odaklı yazılım projeleri, portfolyo ve modern ürün geliştirme çalışmaları.",
  keywords: [
    "ceyhun emre top",
    "yazılım geliştirici",
    "next.js",
    "typescript",
    "kişisel web sitesi",
    "ai full-stack developer",
    "AI engineer",
    "full-stack developer",
  ],
  openGraph: {
    title: "Ceyhun Emre Top",
    description: "AI ve full-stack odaklı projeler, ürünler ve yazılım çalışmaları.",
    url: "https://www.ceyhunemre.net.tr",
    siteName: "Ceyhun Emre Top",
    images: [
      {
        url: "https://www.ceyhunemre.net.tr/images/hero_icon.png",
        width: 1200,
        height: 630,
        alt: "Ceyhun Emre Top",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ceyhun Emre Top",
    description: "AI ve full-stack odaklı içerikler ve portfolyo.",
    images: ["https://www.ceyhunemre.net.tr/images/hero_icon.png"],
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="tr"
      className={`${geistMono.variable} ${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className="bg-background text-foreground font-body transition-colors duration-300">
        <Analytics />
        {children}
      </body>
    </html>
  );
}
