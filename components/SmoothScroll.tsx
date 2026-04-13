"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Expose lenis globally so Header can call scrollTo()
declare global {
  interface Window {
    __smoothScrollLenis: Lenis | null;
  }
}

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);

    // Initialize Lenis for smooth momentum scrolling
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    // Expose globally
    window.__smoothScrollLenis = lenis;

    // Make ScrollTrigger sync with Lenis
    lenis.on("scroll", ScrollTrigger.update);

    // Provide Lenis ticker to GSAP animation frame
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    // Disable GSAP lag smoothing to prefer Lenis
    gsap.ticker.lagSmoothing(0);

    return () => {
      window.__smoothScrollLenis = null;
      lenis.destroy();
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
    };
  }, []);

  useEffect(() => {
    const lenis = window.__smoothScrollLenis;
    if (lenis) {
      // immediate: true to skip the smooth animation and jump to top
      lenis.scrollTo(0, { immediate: true });
    }
  }, [pathname]);

  return <>{children}</>;
}
