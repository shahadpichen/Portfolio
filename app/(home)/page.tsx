import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <div className="dark:bg-black bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2]">
        <div className="max-w-7xl mx-auto ">
          <Navbar />
          <HeroSection />
        </div>
        <div className="h-10 xl:h32 bg-gradient-to-t from-blck absolute -bottom-5 left-0 xl:bottom-0 w-full"></div>
      </div>
      <div className="max-w-7xl mx-auto p-5 mt-20">
        <Skills />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}
