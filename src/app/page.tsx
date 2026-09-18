import About from "@/components/About";
import Currently from "@/components/Currently";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <Currently />
        <Experience />
        <About />
      </main>
      <Footer />
    </>
  );
}
