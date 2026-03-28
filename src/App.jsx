import Nav from "./components/layout/Nav";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";

export default function Portfolio() {
  return (
    <div className="bg-[#0d0d14] min-h-screen text-white overflow-x-hidden">
      {/* Ambient background orbs */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-5%] w-96 h-96 rounded-full bg-violet-600/20 blur-[120px]" />
        <div className="absolute top-[30%] right-[-5%] w-80 h-80 rounded-full bg-orange-500/15 blur-[100px]" />
        <div className="absolute bottom-[10%] left-[20%] w-72 h-72 rounded-full bg-blue-600/15 blur-[100px]" />
      </div>
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
