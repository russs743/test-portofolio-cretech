"use client";

import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";
import { Mail } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Projects", id: "projects" },
];

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Shared ref: cached absolute document positions for every section.
  // Using a ref so both scrollToSection and the scroll listener share the same data.
  const sectionTopsRef = useRef<{ id: string; top: number }[]>([]);

  // Rebuild the cache. Must be called at scroll=0 (mount) or after resize,
  // because sticky elements' getBoundingClientRect is unreliable mid-scroll.
  const cacheSectionPositions = useCallback(() => {
    const tops: { id: string; top: number }[] = [];
    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      // Temporarily get position relative to current scroll to derive absolute doc position
      const rect = el.getBoundingClientRect();
      tops.push({ id, top: rect.top + window.scrollY });
    });
    // also cache "contact" for the Kontak button
    const contactEl = document.getElementById("contact");
    if (contactEl) {
      tops.push({ id: "contact", top: contactEl.getBoundingClientRect().top + window.scrollY });
    }
    tops.sort((a, b) => a.top - b.top);
    sectionTopsRef.current = tops;
  }, []);

  // Smooth scroll to a section by its id — uses cached absolute positions
  const scrollToSection = useCallback((id: string) => {
    const lenis = window.__smoothScrollLenis;

    if (id === "home") {
      lenis ? lenis.scrollTo(0, { duration: 1.4 }) : window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // Find cached absolute position and scroll to it as a number.
    // This avoids Lenis misreading sticky element positions mid-scroll.
    const cached = sectionTopsRef.current.find((s) => s.id === id);
    if (cached !== undefined) {
      const target = Math.max(0, cached.top); // never negative
      lenis ? lenis.scrollTo(target, { duration: 1.4 }) : window.scrollTo({ top: target, behavior: "smooth" });
      return;
    }

    // Fallback: direct element scroll (only if cache isn't populated yet)
    const el = document.getElementById(id);
    if (!el) return;
    lenis ? lenis.scrollTo(el, { offset: 0, duration: 1.4 }) : el.scrollIntoView({ behavior: "smooth" });
  }, [cacheSectionPositions]);

  useEffect(() => {
    // Wait for Next.js layout to finish before capturing positions
    const t = setTimeout(cacheSectionPositions, 400);

    const detectActive = () => {
      const scrollY = window.scrollY;
      const OFFSET = 120;

      // Active section: last cached section whose top is <= scrollY + OFFSET
      const tops = sectionTopsRef.current.filter((s) => NAV_ITEMS.some((n) => n.id === s.id));
      let bestId = "home";
      for (let i = tops.length - 1; i >= 0; i--) {
        if (tops[i].top <= scrollY + OFFSET) {
          bestId = tops[i].id;
          break;
        }
      }
      setActiveSection(bestId);

      // Theme detection
      const HEADER_MID = 40;
      let currentTheme = "light";
      document.querySelectorAll("[data-theme]").forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= HEADER_MID && rect.bottom > HEADER_MID) {
          currentTheme = section.getAttribute("data-theme") || "light";
        }
      });
      setIsDark(currentTheme === "dark");
    };

    window.addEventListener("scroll", detectActive, { passive: true });
    window.addEventListener("resize", cacheSectionPositions, { passive: true });
    detectActive();

    return () => {
      clearTimeout(t);
      window.removeEventListener("scroll", detectActive);
      window.removeEventListener("resize", cacheSectionPositions);
    };
  }, [cacheSectionPositions]);

  // Hide header on projects page and project detail pages
  if (pathname.startsWith("/projects")) {
    return null;
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center px-6 bg-transparent">
      {/* 3-column grid: logo | nav | action — nav is always perfectly centered */}
      <div className="w-full grid grid-cols-[1fr_auto_1fr] items-center">

        {/* Left: Logo */}
        <div className="flex items-center">
          <Image
            src="https://ik.imagekit.io/df125g9cz/Logo%20CRETIVOX/svgviewer-png-output.png"
            alt="Cretivox Logo"
            width={120}
            height={32}
            className={`h-8 w-auto object-contain transition-all duration-300 ${
              isDark ? "invert brightness-0" : ""
            }`}
            unoptimized
          />
        </div>

        {/* Center: Nav pill */}
        <nav
          className={`hidden md:flex items-center rounded-full px-2 py-1.5 border backdrop-blur-md transition-all duration-300 group ${
            isDark
              ? "bg-white/10 border-white/20"
              : "bg-white/70 border-black/10"
          }`}
        >
          {NAV_ITEMS.map(({ label, id }) => {
            const isActive = activeSection === id;
            return (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`px-5 py-2 text-[14.5px] rounded-full opacity-80 transition-all duration-200 cursor-pointer
                  group-hover:opacity-40 hover:opacity-100!
                  ${isActive
                    ? isDark
                      ? "text-white opacity-100"
                      : "text-black opacity-100"
                    : isDark
                    ? "text-white/80 font-medium"
                    : "text-black/80 font-medium"
                  }`}
              >
                {label}
              </button>
            );
          })}
        </nav>

        {/* Right: Kontak + mobile toggle */}
        <div className="flex items-center gap-4 justify-end">
          <button
            onClick={() => scrollToSection("contact")}
            className={`hidden md:inline-flex items-center justify-center p-2.5 rounded-full transition-all duration-300 shadow-md active:scale-95 cursor-pointer ${
              isDark
                ? "bg-white text-black hover:bg-gray-100"
                : "bg-black text-white hover:bg-black/85"
            }`}
            aria-label="Contact"
          >
            <Mail size={18} />
          </button>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden flex p-2 items-center justify-center rounded-md transition-colors ${
              isDark ? "text-white hover:bg-white/10" : "text-black hover:bg-black/10"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" y1="12" x2="20" y2="12"></line>
                <line x1="4" y1="6" x2="20" y2="6"></line>
                <line x1="4" y1="18" x2="20" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg md:hidden flex flex-col p-4 z-40">
          <nav className="flex flex-col gap-2">
            {NAV_ITEMS.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => {
                  scrollToSection(id);
                  setIsMobileMenuOpen(false);
                }}
                className={`px-4 py-3 text-[15px] font-medium rounded-lg transition-colors text-left ${
                  activeSection === id
                    ? "bg-black text-white"
                    : "text-gray-800 hover:bg-gray-100"
                }`}
              >
                {label}
              </button>
            ))}
            <button
              onClick={() => {
                scrollToSection("contact");
                setIsMobileMenuOpen(false);
              }}
              className="mt-4 flex justify-center items-center px-4 py-3 text-white bg-[#08308E] rounded-lg hover:bg-[#08308E]/90 transition-colors"
              aria-label="Contact"
            >
              <Mail size={20} />
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
