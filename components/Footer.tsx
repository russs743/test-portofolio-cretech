"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Globe, Mail, Phone, MessageSquare } from "lucide-react";

const footerLinks = [
  {
    title: "Features",
    links: [
      { name: "Features", href: "#" },
      { name: "Payment Link", href: "#" },
      { name: "Recurring Billing", href: "#" },
      { name: "Invoicing", href: "#" },
      { name: "Checkout", href: "#" },
      { name: "Integrations", href: "#" },
      { name: "Pricing", href: "#" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { name: "Solutions", href: "#" },
      { name: "eCommerce", href: "#" },
      { name: "Finance Automation", href: "#" },
      { name: "Crypto", href: "#" },
      { name: "Global Business", href: "#" },
      { name: "Marketplaces", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Resources", href: "#" },
      { name: "Tutorials", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Community", href: "#" },
      { name: "Privacy Policy", href: "#" },
    ],
  },
  {
    title: "About",
    links: [
      { name: "About", href: "#" },
      { name: "Company", href: "#" },
      { name: "Careers", href: "#" },
      { name: "FAQ", href: "#" },
      { name: "Contact Us", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      className="w-full bg-white transition-colors duration-500"
      data-theme="light"
    >
      {/* 2. DARK LINKS AREA */}
      <div
        className="w-full bg-[#000000] text-white pt-24 pb-12 relative z-10"
        data-theme="dark"
      >
        <div className="max-w-10xl mx-1 px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 mb-24">
            {/* Logo & Brand Column */}
            <div className="md:col-span-4 flex flex-col gap-8">
              <div className="flex items-center gap-3">
                <Image
                  src="https://ik.imagekit.io/df125g9cz/Logo%20CRETIVOX/svgviewer-png-output.png"
                  alt="Cretech Logo"
                  width={150}
                  height={40}
                  className="h-9 w-auto object-contain invert brightness-0"
                  unoptimized
                />
              </div>
              <p className="text-gray-500 text-lg font-medium max-w-xs">
                Empowering brands through innovative digital experiences and
                cutting-edge technology.
              </p>
              <div className="flex gap-4">
                {[Globe, Mail, Phone, MessageSquare].map((Icon, idx) => (
                  <Link
                    key={idx}
                    href="#"
                    className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#08308E] hover:border-[#08308E] transition-all group"
                  >
                    <Icon
                      size={20}
                      className="text-gray-400 group-hover:text-white transition-colors"
                    />
                  </Link>
                ))}
              </div>
            </div>

            {/* Links Columns */}
            <div className="md:col-span-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
                {footerLinks.map((column) => (
                  <div key={column.title} className="flex flex-col gap-6">
                    <h4 className="text-white font-bold text-sm uppercase tracking-[0.2em]">
                      {column.title}
                    </h4>
                    <ul className="flex flex-col gap-4">
                      {column.links.map((link) => (
                        <li key={link.name}>
                          <Link
                            href={link.href}
                            className="text-gray-500 hover:text-white transition-colors text-base font-medium flex items-center group/link"
                          >
                            <span className="w-0 group-hover/link:w-2 h-px bg-[#08308E] mr-0 group-hover/link:mr-2 transition-all duration-300 opacity-0 group-hover/link:opacity-100"></span>
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 3. COPYRIGHT */}
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-6 text-gray-500 text-sm font-semibold">
              <p>© {new Date().getFullYear()} Cretech. All right reserved.</p>
              <div className="hidden md:block w-1 h-1 bg-gray-800 rounded-full"></div>
              <Link href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <div className="hidden md:block w-1 h-1 bg-gray-800 rounded-full"></div>
              <Link href="#" className="hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-white text-xs font-black tracking-tighter uppercase">
                Cretech
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
