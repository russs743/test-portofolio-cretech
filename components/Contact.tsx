"use client";

import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Globe, MessageSquare, Loader2, CheckCircle2, AlertCircle, ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { sendMail } from "@/app/actions/sendMail";
import Image from "next/image";

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true);
    setStatus(null);

    const result = await sendMail(formData);
    
    if ("error" in result && result.error) {
      setStatus({ type: "error", message: result.error as string });
    } else {
      setStatus({ type: "success", message: "Your message has been sent!" });
      // Reset after 5 seconds
      setTimeout(() => setStatus(null), 5000);
    }
    
    setIsSubmitting(false);
  };

  return (
    <section
      id="contact"
      ref={containerRef}
      className="relative w-full overflow-hidden bg-white"
    >
      {/* 2. Main Contact Area Split Screen */}
      <div className="flex flex-col lg:flex-row min-h-screen bg-white">
        {/* Left Side: Form */}
        <div className="w-full lg:w-[45%] flex flex-col p-8 md:p-16 lg:px-24 lg:py-16 justify-center">
          <div className="max-w-md w-full mx-auto lg:mx-0">
            {/* Logo / Brand Name */}
            <div className="flex items-center gap-2 font-bold text-base mb-16">
              <div className="w-3 h-3 rounded-full bg-black"></div>
              <span>Cretech</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-2">Let's partner up</h2>
            <p className="text-gray-500 mb-10 text-base">Let's level up your brand, together.</p>

            {status && (
                <div 
                  className={`p-4 mb-6 rounded-xl flex items-center gap-3 font-semibold text-sm ${
                    status.type === "success" 
                    ? "bg-green-50 text-green-700 border border-green-200" 
                    : "bg-red-50 text-red-700 border border-red-200"
                  }`}
                >
                  {status.type === "success" ? <CheckCircle2 size={20} /> : <AlertCircle size={20} />}
                  {status.message}
                </div>
            )}

            <form action={handleSubmit} className="flex flex-col gap-6">
              <div>
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Name" 
                  className="w-full border-b border-gray-200 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-black transition-colors bg-transparent text-sm md:text-base" 
                  required 
                />
              </div>
              <div>
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Email" 
                  className="w-full border-b border-gray-200 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-black transition-colors bg-transparent text-sm md:text-base" 
                  required 
                />
              </div>

              <div>
                <textarea 
                  name="message" 
                  placeholder="How can we help?" 
                  rows={1}
                  className="w-full border-b border-gray-200 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-black transition-colors resize-none bg-transparent text-sm md:text-base mt-2" 
                  required 
                ></textarea>
              </div>

              <button 
                disabled={isSubmitting} 
                className="w-full bg-[#111827] text-white py-4 rounded font-medium hover:bg-gray-600 transition-colors disabled:opacity-70 mt-4 flex justify-center items-center gap-2"
              >
                  {isSubmitting ? <Loader2 className="animate-spin" size={20} /> : "Send Message"}
              </button>
            </form>
            
            <div className="mt-8 mb-8 md:mb-0 text-center text-sm text-gray-500">
              Prefer email? <a href="mailto:cretechdevelop@gmail.com" className="text-black font-medium underline underline-offset-4 hover:text-blue-600 transition-colors">cretechdevelop@gmail.com</a>
            </div>
          </div>
        </div>

        {/* Right Side: Image and Overlay */}
        <div className="w-full lg:w-[55%] relative bg-black min-h-[600px] lg:min-h-screen border-l border-gray-100 flex flex-col justify-end">
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full">
            <Image 
              src="https://ik.imagekit.io/bhiaoqt1n/WhatsApp%20Image%202026-04-10%20at%208.24.49%20AM.jpeg" 
              alt="Partnership and collaboration" 
              fill
              className="object-cover opacity-70 sepia-[.2]"
              priority
            />
            {/* Gradient Overlays for better text readability */}
            <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent"></div>
          </div>
          
          {/* Overlay Content */}
          <div className="relative z-10 w-full px-8 pb-12 pt-24 md:p-16 flex flex-col text-white mt-auto">
            <h3 className="text-3xl lg:text-4xl font-medium leading-tight mb-8 max-w-2xl font-serif">
              "Saya pokoknya mau bisnis ayam yang beranak terus beranak lagi trus beranak lagi trus beranak lagi"
            </h3>
            
            {/* <div className="flex gap-4 mb-10 xl:mb-16">
              <button className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <ArrowLeft size={20} />
              </button>
              <button className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <ArrowRight size={20} />
              </button>
            </div> */}

            {/* <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 text-sm border-t border-white/20 pt-8 xl:pt-12">
              <div className="flex flex-col gap-6">
                <div>
                  <p className="text-white/60 mb-2 flex items-center gap-1">Partner <ArrowUpRight size={14} /></p>
                  <p className="font-semibold text-base">Catalog</p>
                </div>
                <div>
                  <p className="text-white/60 mb-2 flex items-center gap-1">Website <ArrowUpRight size={14} /></p>
                  <a href="#" className="font-semibold text-base hover:underline">getcatalog.io</a>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <div>
                  <p className="text-white/60 mb-2 flex items-center gap-1">Year <ArrowUpRight size={14} /></p>
                  <p className="font-semibold text-base">February 2022</p>
                </div>
                <div>
                  <p className="text-white/60 mb-2 flex items-center gap-1">Investment <ArrowUpRight size={14} /></p>
                  <p className="font-semibold text-base">$40,000,000</p>
                </div>
              </div>

              <div className="col-span-2 flex flex-col justify-between">
                <div>
                  <p className="text-white/60 mb-3 flex items-center gap-1">Services <ArrowUpRight size={14} /></p>
                  <ul className="text-white/90 space-y-1.5 font-medium">
                    <li>Brand Strategy</li>
                    <li>Website Design</li>
                    <li>Marketing Assets</li>
                    <li>Pitch Deck Design</li>
                    <li>Webflow Development</li>
                  </ul>
                </div>
                <div className="flex items-center gap-3 mt-8 lg:mt-0 lg:self-end">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="white" fillOpacity="0.2"/>
                      <path d="M15.5 10.5C15.5 12.433 13.933 14 12 14C10.067 14 8.5 12.433 8.5 10.5C8.5 8.567 10.067 7 12 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="font-bold text-xl tracking-tight">Catalog</span>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
