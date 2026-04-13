import Image from "next/image";
import Asset3D from "./3dasset";

export default function Hero() {
  return (
    <section className="relative w-full h-full min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Side Content */}
          <div className="flex flex-col items-start text-left w-full lg:w-[55%]">
            <h1 className="text-[2.5rem] sm:text-5xl lg:text-[4rem] font-medium leading-[1.15] tracking-tight text-gray-900 mb-6">
              We handle the tech. <br className="hidden sm:block" />
              <span className="text-[#08308E]">You handle the hype.</span>
            </h1>

            <p className="text-lg text-gray-600 mb-10 max-w-xl leading-relaxed">
              Welcome to{" "}
              <span className="font-semibold text-gray-800">Cretech</span>—the
              official IT backbone of Cretivox. We don&apos;t just build killer
              websites and run socials. We engineer the entire ecosystem. Pure
              seamless performance. No cap.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 w-full mt-4">
              <div>
                <div className="flex text-[#F5C518] mb-1.5">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm font-medium text-gray-500">
                  Powering the{" "}
                  <span className="text-gray-900 font-bold">Cretivox HQ</span>
                </p>
              </div>

              <div>
                <div className="flex text-[#F5C518] mb-1.5">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm font-medium text-gray-500">
                  100% Uptime for{" "}
                  <span className="text-gray-900 font-bold">
                    Digital & Physical
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Spacer to keep flex layout wide on desktop */}
          <div className="hidden lg:block lg:w-[45%]"></div>
        </div>
      </div>

      {/* Cinematic 3D Asset (Replaces Static Images) */}
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-full lg:w-[60vw] xl:w-[55vw] h-full lg:h-[120%] z-0 pointer-events-none">
        <Asset3D />
      </div>
    </section>
  );
}
