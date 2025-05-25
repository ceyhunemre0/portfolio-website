// app/layout.tsx
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Welcome to My Personal Website",
  description: "This is my personal website where I showcase my projects and skills.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="bg-white text-black transition-colors duration-300">
          <Header />
          <Hero />
          <About />
          <Projects />
          <div className="flex flex-col items-center justify-center min-h-screen">
            {children}
          </div>
      </body>
    </html>
  );
}
