"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/projects";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Scroll handling is now managed globally by SmoothScroll component
  }, [slug]);

  useGSAP(
    () => {
      if (!project) return;

      // Hero image parallax
      const heroImg = document.querySelector(".hero-parallax");
      if (heroImg) {
        gsap.to(heroImg, {
          yPercent: 20,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero-section",
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
      }

      // Fade in sections
      const sections = gsap.utils.toArray<HTMLElement>(".reveal-section");
      sections.forEach((section) => {
        gsap.fromTo(
          section,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      return () => ScrollTrigger.getAll().forEach((t) => t.kill());
    },
    { scope: containerRef, dependencies: [slug] }
  );

  if (!project) {
    return (
      <div className="min-h-screen bg-[#f0f0f0] flex flex-col items-center justify-center text-center px-8">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase">
          Project
          <br />
          <span className="text-neutral-300">Not Found.</span>
        </h1>
        <Link
          href="/projects"
          className="mt-12 inline-flex items-center gap-3 px-8 py-4 bg-black text-white rounded-full font-black uppercase tracking-widest text-sm hover:bg-[#08308E] transition-colors"
        >
          <ArrowLeft size={16} />
          Back to Archive
        </Link>
      </div>
    );
  }

  // Find next and previous projects
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const prevProject =
    projects[(currentIndex - 1 + projects.length) % projects.length];

  return (
    <div ref={containerRef} className="bg-[#f0f0f0] text-black">
      {/* ======== HERO ======== */}
      <section className="hero-section relative h-[85vh] md:h-screen overflow-hidden">
        {/* Full-bleed Image */}
        <img
          src={project.image}
          alt={project.title}
          className="hero-parallax absolute inset-0 w-full h-[120%] object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16 lg:p-24 text-white">
          <div className="max-w-5xl space-y-6">
            <div className="flex items-center gap-6 text-xs font-black uppercase tracking-[0.3em]">
              <span
                className="px-4 py-2 rounded-full border"
                style={{ borderColor: project.color, color: project.color }}
              >
                {project.category}
              </span>
              <span className="opacity-60">{project.year}</span>
            </div>

            <h1 className="text-6xl md:text-9xl lg:text-[11rem] font-black tracking-tighter leading-[0.85] uppercase">
              {project.title}
            </h1>
          </div>
        </div>

        {/* Back Button */}
        <Link
          href="/projects"
          className="absolute top-28 left-8 md:left-16 group inline-flex items-center gap-3 text-sm font-black uppercase tracking-widest text-white/60 hover:text-white transition-colors z-10"
        >
          <ArrowLeft
            size={16}
            className="group-hover:-translate-x-2 transition-transform"
          />
          Archive
        </Link>
      </section>

      {/* ======== OVERVIEW ======== */}
      <section className="reveal-section max-w-7xl mx-auto px-8 md:px-16 py-24 md:py-40">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24">
          {/* Description */}
          <div className="md:col-span-7 space-y-8">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-tight">
              About the
              <br />
              <span className="text-[#08308E]">project.</span>
            </h2>
            <p className="text-neutral-600 text-lg md:text-xl leading-relaxed font-medium">
              {project.longDescription}
            </p>
          </div>

          {/* Meta Info */}
          <div className="md:col-span-5 space-y-12">
            <div className="space-y-4">
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-neutral-400">
                Client
              </h3>
              <p className="text-2xl font-black tracking-tight">
                {project.client}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-neutral-400">
                Year
              </h3>
              <p className="text-2xl font-black tracking-tight">
                {project.year}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-neutral-400">
                Services
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.services.map((service) => (
                  <span
                    key={service}
                    className="px-4 py-2 border border-black/10 rounded-full text-sm font-bold"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-neutral-400">
                Category
              </h3>
              <span
                className="inline-block px-5 py-2.5 rounded-full text-sm font-black uppercase tracking-wider"
                style={{
                  backgroundColor: project.color + "15",
                  color: project.color,
                }}
              >
                {project.category}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ======== FULL IMAGE ======== */}
      <section className="reveal-section px-4 md:px-16 pb-24 md:pb-40">
        <div className="relative overflow-hidden rounded-3xl aspect-video max-w-7xl mx-auto">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0 mix-blend-color opacity-20"
            style={{ backgroundColor: project.color }}
          />
        </div>
      </section>

      {/* ======== MASSIVE QUOTE ======== */}
      <section className="reveal-section relative py-24 md:py-40 overflow-hidden">
        <div className="max-w-6xl mx-auto px-8 md:px-16 text-center">
          <p className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-tight italic">
            &ldquo;{project.description}&rdquo;
          </p>
          <div className="mt-8 flex items-center justify-center gap-4 text-xs font-black uppercase tracking-[0.3em] text-neutral-400">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: project.color }}
            />
            {project.client}
          </div>
        </div>

        {/* Massive background text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <h2 className="text-[30vw] font-black text-black uppercase leading-none whitespace-nowrap opacity-[0.02]">
            {project.category}
          </h2>
        </div>
      </section>

      {/* ======== NEXT / PREV NAVIGATION ======== */}
      <section className="border-t border-black/10">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Previous */}
          <Link
            href={`/projects/${prevProject.slug}`}
            className="group relative flex flex-col justify-center p-12 md:p-20 border-b md:border-b-0 md:border-r border-black/10 hover:bg-black hover:text-white transition-all duration-700 min-h-[300px]"
          >
            <span className="text-xs font-black uppercase tracking-[0.3em] text-neutral-400 group-hover:text-white/40 mb-4 transition-colors">
              ← Previous
            </span>
            <h3 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-none group-hover:text-white transition-colors">
              {prevProject.title}
            </h3>
            <span
              className="block mt-4 text-sm font-bold uppercase tracking-widest opacity-50"
              style={{ color: prevProject.color }}
            >
              {prevProject.category}
            </span>
          </Link>

          {/* Next */}
          <Link
            href={`/projects/${nextProject.slug}`}
            className="group relative flex flex-col justify-center items-end text-right p-12 md:p-20 hover:bg-[#08308E] hover:text-white transition-all duration-700 min-h-[300px]"
          >
            <span className="text-xs font-black uppercase tracking-[0.3em] text-neutral-400 group-hover:text-white/40 mb-4 transition-colors">
              Next →
            </span>
            <h3 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-none group-hover:text-white transition-colors">
              {nextProject.title}
            </h3>
            <span
              className="block mt-4 text-sm font-bold uppercase tracking-widest opacity-50"
              style={{ color: nextProject.color }}
            >
              {nextProject.category}
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
