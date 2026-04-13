"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Timeline for top text blocks
      const tlTop = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%", // Start animating when top of container hits 60% of viewport
          end: "bottom bottom",
          toggleActions: "play none none reverse",
        },
      });

      tlTop
        .from(".reveal-heading-line", {
          x: -100,
          opacity: 0,
          duration: 1.2,
          stagger: 0.2, // Stagger effect per line
          ease: "power4.out",
        })
        .from(
          ".reveal-text",
          {
            y: 40,
            opacity: 0,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
          },
          "-=0.8",
        );

      // Separate animation for the bottom columns so it waits until scrolled into view
      gsap.from(".reveal-col", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".reveal-col-container",
          start: "top 85%", // Triggers only when this specific container hits the bottom of the screen
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="w-full max-w-8xl mx-auto px-6 py-12 md:py-20 text-white min-h-screen flex flex-col justify-center"
    >
      {/* Top Main Text */}
      <div className="flex flex-col lg:flex-row justify-between mb-16 md:mb-24 gap-12 lg:gap-24">
        {/* Huge Heading */}
        <div className="w-full lg:w-[60%] overflow-hidden">
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] font-bold leading-[0.95] tracking-tighter uppercase flex flex-col gap-2">
            <span className="reveal-heading-line">
              WE&apos;RE REVOLUTIONIZING
            </span>
            <span className="reveal-heading-line">THE WAY GOOD WORK GETS</span>
            <span className="reveal-heading-line">DONE.</span>
          </h2>
        </div>

        {/* Side Paragraphs */}
        <div className="w-full lg:w-[40%] flex flex-col gap-8 md:pt-4">
          <p className="reveal-text text-lg md:text-xl text-gray-300 font-medium leading-relaxed">
            You don&apos;t need theoretical tech.
            <br />
            You don&apos;t need legacy apps disguised as innovation.
          </p>
          <p className="reveal-text text-lg md:text-xl text-gray-300 font-medium leading-relaxed">
            You need &quot;real&quot; infrastructure that works now—tech that
            delivers real value to your ecosystem today, no matter where you are
            on your digital transformation journey.
          </p>
        </div>
      </div>

      {/* 3 Columns Stats/Words */}
      <div className="reveal-col-container grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 pt-12 md:pt-16 border-t border-white/10">
        <div className="reveal-col flex flex-col items-start overflow-hidden">
          <h3 className="text-6xl md:text-7xl font-black mb-6 tracking-tight">
            TECH.
          </h3>
          <p className="text-lg text-white font-medium leading-relaxed">
            The infrastructure everyone needs but most struggle to implement
            securely, understand fully, or maintain effectively.
          </p>
        </div>

        <div className="reveal-col flex flex-col items-start overflow-hidden">
          <h3 className="text-6xl md:text-7xl font-black mb-6 tracking-tight">
            HASSLE.
          </h3>
          <p className="text-lg text-white font-medium leading-relaxed">
            The messy gap between brilliant ideas, fragmented skills and
            stretched people resources.
          </p>
        </div>

        <div className="reveal-col flex flex-col items-start overflow-hidden">
          <h3 className="text-6xl md:text-7xl font-black mb-6 tracking-tight">
            SOLVED.
          </h3>
          <p className="text-lg text-white font-medium leading-relaxed">
            Real solutions. Real engineers. Real ecosystem outcomes.
          </p>
        </div>
      </div>
    </section>
  );
}
