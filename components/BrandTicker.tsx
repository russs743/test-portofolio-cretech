"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const brands = [
  "HEZKY",
  "NAULI",
  "HYUNDAI",
  "GOJEK",
  "SAMSUNG",
  "TOKOPEDIA",
  "MCDONALD'S",
  "COCA-COLA",
  "NETFLIX",
  "SPOTIFY",
  "UBAY",
];

export default function BrandTicker() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Brand Ticker Animation
      [0, 1].forEach((i) => {
        const direction = i % 2 === 0 ? -1 : 1;
        const movePercent = 100 / 6;

        if (direction === 1) {
          gsap.set(`.brand-row-${i}`, { xPercent: -movePercent });
          gsap.to(`.brand-row-${i}`, {
            xPercent: 0,
            repeat: -1,
            duration: 50 + i * 15,
            ease: "none",
          });
        } else {
          gsap.to(`.brand-row-${i}`, {
            xPercent: -movePercent,
            repeat: -1,
            duration: 50 + i * 15,
            ease: "none",
          });
        }
      });
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="relative z-10 pt-0 pb-0 bg-black"
      data-theme="white"
    >
      <div className="flex flex-col gap-0">
        {[0, 1].map((rowIndex) => (
          <div
            key={rowIndex}
            className={`py-8 md:py-8 overflow-hidden flex whitespace-nowrap ${
              rowIndex === 1 ? "bg-[#08308E]" : "bg-white"
            }`}
          >
            <div
              className={`brand-row-${rowIndex} flex gap-12 md:gap-24 items-center`}
            >
              {[...Array(6)].map((_, groupIndex) => (
                <div
                  key={groupIndex}
                  className="flex gap-12 md:gap-2 items-center"
                >
                  {(rowIndex === 0
                    ? brands
                    : [...brands.slice(5), ...brands.slice(0, 5)]
                  ).map((brand) => (
                    <span
                      key={brand}
                      className={`text-6xl md:text-5xl font-black tracking-tighter uppercase leading-none selection:bg-blue-500 ${
                        rowIndex === 1 ? "text-white" : "text-black"
                      }`}
                    >
                      {brand}{" "}
                      <span
                        className={`mx-4 opacity-20 ${
                          rowIndex === 1 ? "text-white" : "text-black"
                        }`}
                      >
                        •
                      </span>
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
