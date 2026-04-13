"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { projects } from "@/lib/projects";

export default function Projects() {
  const containerRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const scrollElement = scrollRef.current;
      if (!scrollElement) return;

      const totalWidth = scrollElement.scrollWidth / 2;

      const animation = gsap.to(scrollElement, {
        x: -totalWidth,
        duration: 200,
        ease: "none",
        repeat: -1,
      });

      // Pause on hover
      scrollElement.addEventListener("mouseenter", () => animation.pause());
      scrollElement.addEventListener("mouseleave", () => animation.play());

      return () => {
        animation.kill();
      };
    },
    { scope: containerRef },
  );

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative w-full py-32 bg-white overflow-hidden"
    >
      <div className="max-w-8xl mx-auto px-8 mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <span className="text-[#08308E] font-black uppercase tracking-[0.3em] text-xs">
              Selected Works
            </span>
            <h2 className="text-6xl md:text-8xl font-black text-black tracking-tighter leading-none">
              RECENT <br /> <span className="text-neutral-300">PROJECTS.</span>
            </h2>
          </div>
                <div className="max-w-7xl mx-auto px-8 mt-24 flex justify-end">
        <Link
          href="/projects"
          className="group flex items-center gap-6 px-12 py-6 bg-black text-white rounded-full font-black uppercase tracking-[0.2em] hover:bg-[#08308E] transition-all transform active:scale-95 shadow-2xl"
        >
          View All Projects
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
            <ExternalLink size={20} />
          </div>
        </Link>
      </div>
          {/* <p className="max-w-md text-gray-500 font-medium italic text-lg border-l-4 border-[#08308E] pl-6 py-2">
            A curated selection of our digital experiments and high-impact
            design solutions.
          </p> */}
        </div>
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative flex items-center">
        <div ref={scrollRef} className="flex gap-3 px-4">
          {/* Render twice for seamless loop */}
          {[...projects, ...projects].map((project, i) => (
            <div
              key={i}
              className="group shrink-0 w-[400px] md:w-[850px] aspect-video relative overflow-hidden rounded-4xl bg-neutral-100 shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-transform duration-500 hover:-translate-y-4"
            >
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-30 group-hover:grayscale-0"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute inset-0 p-10 flex flex-col justify-end text-white">
                <div className="overflow-hidden mb-2">
                  <span className="block text-[#08308E] font-black uppercase tracking-widest text-xs translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    {project.category}
                  </span>
                </div>

                <div className="flex items-end justify-between">
                  <div className="space-y-3">
                    <h3 className="text-3xl md:text-4xl font-black tracking-tighter uppercase leading-none drop-shadow-lg">
                      {project.title.split(" ").map((word, idx) => (
                        <span key={idx} className="block">
                          {word}
                        </span>
                      ))}
                    </h3>
                    <p className="max-w-[280px] text-gray-300 text-sm font-medium italic translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Interactive border reveal */}
              <div className="absolute inset-0 border-4 border-[#08308E] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-4xl pointer-events-none" />
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Text background */}
      <div className="absolute bottom-0 left-0 w-full h-[30vh] pointer-events-none select-none overflow-hidden opacity-[0.03] flex items-end">
        {/* <h2 className="text-[25vw] font-black text-black leading-none -mb-10 whitespace-nowrap">
          CREATIVE STUDIO • CREATIVE STUDIO •
        </h2> */}
      </div>
    </section>
  );
}
