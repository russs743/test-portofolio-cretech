import Hero from "@/components/Hero";
import BrandTicker from "@/components/BrandTicker";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="w-full font-sans bg-white">
      {/* Container dengan tinggi ekstra (180vh) ini menahan Brand Ticker agar tidak langsung menabrak ke atas. Ini memberi waktu bagi GSAP scroll trigger di 3dasset untuk selesai dimainkan! */}
      <div className="relative w-full h-[250vh]">
        <div
          id="home"
          data-theme="light"
          className="sticky top-0 h-screen w-full overflow-hidden"
        >
          <Hero />
        </div>
      </div>

      {/* Brand Ticker scrolls OVER the sticky Hero naturally */}
      <div className="relative z-10 w-full">
        <BrandTicker />
      </div>

      <div
        id="about"
        data-theme="dark"
        className="sticky -top-24 md:-top-40 z-10 w-full bg-[#08308E] pb-24 md:pb-60"
      >
        <About />
      </div>

      {/* Spacer untuk "menahan" (delay) scroll supaya About & Buntut Birunya dinikmati dulu sebelum Services nabrak */}
      <div className="h-[50vh] w-full invisible pointer-events-none"></div>

      {/* The Services section that scrolls OVER the about and is black */}
      <div
        id="services"
        data-theme="dark"
        className="sticky -top-24 md:-top-30 z-20 w-full bg-[#000000] shadow-[0_-20px_50px_rgba(0,0,0,0.3)] pb-24 md:pb-60 pt-15"
      >
        <Services />
      </div>

      {/* Spacer untuk "menahan" (delay) scroll supaya Services dibaca dulu sebelum Projects nabrak */}
      <div className="h-[50vh] w-full invisible pointer-events-none"></div>

      {/* The Projects section - Changed background to black for cinematic 3D tunnel */}
      <div id="projects-container" className="relative z-30 w-full">
        <div
          id="projects"
          data-theme="light"
          className="relative w-full bg-black rounded-t-[3rem] md:rounded-t-[4rem] shadow-[0_-20px_50px_rgba(0,0,0,0.5)]"
        >
          <Projects />
        </div>
      </div>

      {/* 5. Contact Section - Final Reveal OVER Projects */}
      <div id="contact" data-theme="light" className="relative z-40 w-full">
        <div className="w-full bg-black overflow-hidden">
          <Contact />
        </div>
      </div>
    </div>
  );
}
