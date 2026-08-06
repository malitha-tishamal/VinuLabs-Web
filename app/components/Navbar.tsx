"use client";

import React, { useState } from "react";
import { ArrowUpRight, MenuIcon, CloseIcon } from "./Icons";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#top" },
    { name: "Expertise", href: "#expertise" },
    { name: "Solutions", href: "#solutions" },
    { name: "Industries", href: "#industries" },
    { name: "Research", href: "#research" },
    { name: "Insights", href: "#insights" },
    { name: "Team", href: "#team" },
    { name: "Careers", href: "#careers" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 nav-glass transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Left Side: VinuLabs Logo */}
          <a href="#top" className="flex items-center gap-3 group">
            <div className="relative p-1 rounded-xl bg-gradient-to-r from-cyan-500/20 to-violet-500/20 border border-white/10 group-hover:border-cyan-400/40 transition-all duration-300">
              <img
                src="/vinulabs-logo.jpeg"
                alt="VinuLabs Logo"
                className="h-10 w-auto rounded-lg object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                VinuLabs
              </span>
              <span className="text-[10px] text-cyan-400/80 font-medium tracking-wider uppercase">
                Strategy · Tech
              </span>
            </div>
          </a>

          {/* Center Menu (Desktop) */}
          <nav className="hidden xl:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-cyan-400 rounded-full hover:bg-white/[0.05] transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Side Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#contact"
              className="px-4 py-2 text-xs font-semibold text-slate-200 hover:text-white rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
            >
              Schedule a Call
            </a>
            <a
              href="https://www.linkedin.com/company/vinulab/"
              target="_blank"
              rel="noreferrer"
              className="btn-primary py-2 px-4 text-xs font-semibold flex items-center gap-1"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden px-4 pt-2 pb-6 bg-[#090d16]/95 backdrop-blur-xl border-b border-white/10 space-y-3">
          <div className="grid grid-cols-2 gap-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-200 hover:text-cyan-400 rounded-lg hover:bg-white/5 transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 text-xs font-semibold text-slate-200 rounded-xl bg-white/5 border border-white/10"
            >
              Schedule a Call
            </a>
            <a
              href="https://www.linkedin.com/company/vinulab/"
              target="_blank"
              rel="noreferrer"
              className="w-full text-center btn-primary py-2.5 text-xs font-semibold flex items-center justify-center gap-1"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
