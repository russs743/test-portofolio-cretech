"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Wifi, ShieldCheck, Fan, Laptop } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Wifi,
    title: "Enterprise Wi-Fi",
    description:
      "High-speed, seamless wireless networks deployed securely across your entire office with zero dead zones.",
  },
  {
    icon: ShieldCheck,
    title: "Smart Surveillance",
    description:
      "24/7 crystal-clear CCTV systems with cloud recording and mobile access to secure your assets.",
  },
  {
    icon: Fan,
    title: "AC Infrastructure",
    description:
      "Professional air conditioning setup and maintenance for optimal server rooms and staff ambient cooling.",
  },
  {
    icon: Laptop,
    title: "Web & Social Ecosystem",
    description:
      "Custom web development and full-scale social media management to skyrocket your brand presence.",
  },
];

export default function Services() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Fade up animations for title and items
      gsap.fromTo(
        ".service-title",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          },
        },
      );

      gsap.fromTo(
        ".service-item",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".services-grid",
            start: "top 80%",
          },
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="w-full max-w-8xl mx-auto px-6 py-32 md:py-48 text-white min-h-screen flex flex-col justify-center"
    >
      {/* Title */}
      <div className="text-center md:text-left mb-20 md:mb-32">
        <h2 className="service-title text-[2.5rem] md:text-5xl lg:text-[3.5rem] font-medium leading-[1.1] tracking-tight">
          Cretech is a simple <br className="hidden md:block" /> tech solution
          for your company
        </h2>
      </div>

      {/* 4 Column Grid */}
      <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={index}
              className="service-item flex flex-col items-center md:items-start text-center md:text-left"
            >
              {/* Icon Container strictly mimicking Pleo's hand-drawn/line aesthetic */}
              <div className="mb-6 flex items-center justify-center md:justify-start w-12 h-12 text-white/90">
                <Icon strokeWidth={1.5} className="w-10 h-10" />
              </div>

              <h3 className="text-[1.15rem] font-bold mb-3 tracking-wide">
                {service.title}
              </h3>

              <p className="text-[1.05rem] text-white/60 leading-relaxed font-normal">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
