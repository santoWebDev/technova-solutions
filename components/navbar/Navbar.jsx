"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "About", href: "#about" },
    { name: "Capabilities", href: "#services" },
    { name: "Insights", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f4f6f8]/90 backdrop-blur-md">
      <div className="container flex h-20 items-center justify-between">
        
        <a
          href="#"
          className="text-xl font-black tracking-[-0.04em]"
        >
          TECHNOVA<span className="text-blue-600">.</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-600 transition hover:text-black"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            className="rounded-full bg-[#0b1220] px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-600"
          >
            Start a project
          </a>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          <span className="text-2xl">☰</span>
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-black/10 bg-[#f4f6f8] p-5 md:hidden">
          <div className="flex flex-col gap-5">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}