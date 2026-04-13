"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowLeft, ArrowUpRight, Search, X } from "lucide-react";
import { projects, categories } from "@/lib/projects";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState(0);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredView, setFilteredView] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const filteredProjects = searchQuery
    ? projects.filter(
        (p) =>
          p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.description.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : projects;

  // Group projects by category for section display
  const groupedCategories = categories.filter((c) => c !== "All");
  const projectsByCategory = groupedCategories
    .map((cat) => ({
      category: cat,
      items: projects.filter((p) => p.category === cat),
    }))
    .filter((g) => g.items.length > 0);

  useEffect(() => {
    if (searchOpen) {
      document.body.style.overflow = "hidden";
      if (searchInputRef.current) {
        searchInputRef.current.focus();
      }
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [searchOpen]);

  useGSAP(
    () => {
      if (filteredView) return;

      const sections = gsap.utils.toArray<HTMLElement>(".work-section");

      sections.forEach((section, i) => {
        // Parallax on images
        const images = section.querySelectorAll(".parallax-img");
        images.forEach((img) => {
          gsap.fromTo(
            img,
            { yPercent: -15 },
            {
              yPercent: 15,
              ease: "none",
              scrollTrigger: {
                trigger: section,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
              },
            },
          );
        });

        // Category text reveal
        const bigText = section.querySelector(".massive-text");
        if (bigText) {
          gsap.fromTo(
            bigText,
            { xPercent: -5, opacity: 0.03 },
            {
              xPercent: 5,
              opacity: 0.08,
              ease: "none",
              scrollTrigger: {
                trigger: section,
                start: "top bottom",
                end: "bottom top",
                scrub: 2,
              },
            },
          );
        }

        // Track active section for dot nav
        ScrollTrigger.create({
          trigger: section,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActiveSection(i),
          onEnterBack: () => setActiveSection(i),
        });
      });

      return () => ScrollTrigger.getAll().forEach((t) => t.kill());
    },
    { scope: containerRef, dependencies: [filteredView] },
  );

  const scrollToSection = (i: number) => {
    const sections = document.querySelectorAll(".work-section");
    if (sections[i]) {
      sections[i].scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-[#f0f0f0] text-black selection:bg-[#08308E] selection:text-white relative"
    >
      {/* Side Dot Navigation */}
      {!filteredView && (
        <div className="fixed left-6 md:left-10 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
          {projectsByCategory.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToSection(i)}
              className={`w-3 h-3 rounded-full border-2 transition-all duration-500 ${
                activeSection === i
                  ? "bg-black border-black scale-125"
                  : "bg-transparent border-black/30 hover:border-black hover:scale-110"
              }`}
            />
          ))}
        </div>
      )}

      {/* Back Button (Top Left) */}
      <Link
        href="/"
        className="fixed top-8 left-8 md:top-12 md:left-16 z-50 group inline-flex items-center gap-3 text-sm font-black uppercase tracking-widest text-[#08308E]/60 hover:text-[#08308E] transition-colors"
      >
        <ArrowLeft
          size={16}
          className="group-hover:-translate-x-2 transition-transform"
        />
        Home
      </Link>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 z-50 flex items-center gap-3">
        <button
          onClick={() => {
            setSearchOpen(!searchOpen);
            if (searchOpen) {
              setSearchQuery("");
              setFilteredView(false);
            }
          }}
          className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-[#08308E] transition-colors"
          title="Search Projects"
        >
          {searchOpen ? <X size={18} /> : <Search size={18} />}
        </button>
      </div>

      {/* Search Overlay */}
      <div
        data-lenis-prevent="true"
        className={`fixed inset-0 z-60 bg-[#f0f0f0] overflow-y-auto transition-all duration-700 ${
          searchOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => {
            setSearchOpen(false);
            setSearchQuery("");
            setFilteredView(false);
          }}
          className="fixed top-28 right-8 md:right-16 z-70 w-14 h-14 bg-black text-white rounded-full flex items-center justify-center hover:bg-[#08308E] transition-colors shadow-xl"
        >
          <X size={20} />
        </button>

        {/* Input Area (No longer sticky for better scrolling space) */}
        <div className="w-full pt-40 pb-12 px-8 flex flex-col items-center bg-[#f0f0f0]/95 z-10">
          <div className="w-full max-w-5xl flex flex-col items-center">
            <input
              ref={searchInputRef}
              type="text"
              placeholder="TYPE TO SEARCH..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setFilteredView(e.target.value.length > 0);
              }}
              className="w-full text-5xl md:text-8xl font-black tracking-tighter text-black bg-transparent border-none outline-none placeholder:text-neutral-200 text-center uppercase"
            />
            <div className="h-1 w-full max-w-lg bg-neutral-200 mt-8 rounded-full overflow-hidden">
              <div
                className="h-full bg-black rounded-full transition-all duration-500"
                style={{ width: searchQuery ? "100%" : "0%" }}
              />
            </div>
          </div>
        </div>

        {/* Results Area */}
        <div className="w-full px-8">
          <div className="max-w-5xl mx-auto w-full">
            {searchQuery && (
              <div className="mt-12 w-full max-w-4xl pb-24">
                <p className="text-xs font-black uppercase tracking-[0.3em] text-neutral-400 mb-8">
                  {filteredProjects.length} result
                  {filteredProjects.length !== 1 ? "s" : ""} found
                </p>
                <div className="space-y-0">
                  {filteredProjects.map((project, idx) => (
                    <Link
                      key={idx}
                      href={`/projects/${project.slug}`}
                      onClick={() => {
                        setSearchOpen(false);
                        setSearchQuery("");
                        setFilteredView(false);
                      }}
                      className="group flex items-center justify-between py-8 border-b border-neutral-200 hover:bg-white hover:px-8 rounded-2xl transition-all duration-300"
                    >
                      <div className="flex items-center gap-8">
                        <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                          />
                        </div>
                        <div>
                          <h3 className="text-2xl md:text-3xl font-black tracking-tight uppercase group-hover:text-[#08308E] transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-neutral-400 text-sm font-medium mt-1">
                            {project.category} — {project.year} —{" "}
                            {project.client}
                          </p>
                        </div>
                      </div>
                      <div className="w-12 h-12 rounded-full border-2 border-neutral-200 flex items-center justify-center group-hover:bg-black group-hover:border-black group-hover:text-white transition-all duration-500 shrink-0">
                        <ArrowUpRight size={18} />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ======== MAIN CONTENT: Category Sections ======== */}
      {!filteredView && (
        <>
          {projectsByCategory.map((group, groupIdx) => (
            <section
              key={group.category}
              className="work-section relative min-h-screen overflow-hidden"
            >
              {/* Massive Background Category Text */}
              <div className="massive-text absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
                <h2 className="text-[28vw] font-black text-black uppercase leading-none whitespace-nowrap opacity-[0.05]">
                  {group.category}
                </h2>
              </div>

              {/* Section Content */}
              <div className="relative z-10 min-h-screen flex flex-col justify-center px-12 md:px-24 lg:px-32 py-32">
                {/* Category Label */}
                <div className="mb-16">
                  <span className="text-[#08308E] text-xs font-black uppercase tracking-[0.5em]">
                    {(groupIdx + 1).toString().padStart(2, "0")} /{" "}
                    {projectsByCategory.length.toString().padStart(2, "0")}
                  </span>
                  <h2 className="text-[clamp(4rem,12vw,14rem)] font-black tracking-tighter leading-[0.85] uppercase mt-2">
                    {group.category}
                  </h2>
                </div>

                {/* Projects in this category - Asymmetric Layout */}
                <div className="space-y-24">
                  {group.items.map((project, itemIdx) => {
                    const isEven = itemIdx % 2 === 0;
                    return (
                      <Link
                        href={`/projects/${project.slug}`}
                        key={project.title}
                        className={`group relative flex flex-col cursor-pointer ${
                          isEven
                            ? "md:flex-row items-start"
                            : "md:flex-row-reverse items-start"
                        } gap-8 md:gap-16`}
                      >
                        {/* Image */}
                        <div
                          className={`relative overflow-hidden rounded-2xl ${
                            isEven
                              ? "w-full md:w-[55%] aspect-video"
                              : "w-full md:w-[45%] aspect-video"
                          }`}
                        >
                          <img
                            src={project.image}
                            alt={project.title}
                            className="parallax-img absolute inset-0 w-full h-[130%] object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />

                          {/* Hover arrow */}
                          <div className="absolute bottom-6 right-6 w-14 h-14 bg-white rounded-full flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 shadow-xl">
                            <ArrowUpRight size={22} className="text-black" />
                          </div>
                        </div>

                        {/* Info */}
                        <div
                          className={`flex flex-col justify-end ${
                            isEven ? "md:w-[40%]" : "md:w-[50%]"
                          } ${isEven ? "md:pt-24" : "md:pt-12"}`}
                        >
                          <div className="space-y-4">
                            <h3 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase leading-[0.9] group-hover:text-[#08308E] transition-colors duration-500">
                              {project.title}
                            </h3>
                            <p className="text-neutral-500 text-base md:text-lg font-medium max-w-md leading-relaxed">
                              {project.description}
                            </p>
                          </div>

                          <div className="flex items-center gap-8 mt-8 text-xs font-black uppercase tracking-[0.3em] text-neutral-400">
                            <span className="text-[#08308E]">
                              {project.year}
                            </span>
                            <span className="w-8 h-px bg-neutral-300" />
                            <span>{project.client}</span>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Section divider line */}
              {groupIdx < projectsByCategory.length - 1 && (
                <div className="relative z-10 px-12 md:px-24 lg:px-32">
                  <div className="h-px bg-black/10 w-full" />
                </div>
              )}
            </section>
          ))}

          {/* Bottom CTA */}
          <section className="relative min-h-[60vh] flex flex-col items-center justify-center text-center px-8 overflow-hidden">
            <div className="massive-text absolute inset-0 flex items-center justify-center pointer-events-none select-none">
              <h2 className="text-[30vw] font-black text-black uppercase leading-none whitespace-nowrap opacity-[0.03]">
                MORE
              </h2>
            </div>
            <div className="relative z-10 space-y-8">
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">
                Got a project
                <br />
                <span className="text-[#08308E]">in mind?</span>
              </h2>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-4 px-10 py-5 bg-black text-white rounded-full font-black uppercase tracking-widest text-sm hover:bg-[#08308E] transition-colors"
              >
                Let&apos;s Talk
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </section>
        </>
      )}
    </div>
  );
}
