import React from "react";
import { ArrowUpRight } from "./Icons";

export function Footer() {
  return (
    <footer className="relative bg-[#04060a] text-slate-400 border-t border-white/10 pt-16 pb-12">
      <div className="section-wrapper py-0">
        
        {/* Top Footer Section */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          
          {/* Brand Info */}
          <div className="col-span-2 space-y-4">
            <a href="#top" className="flex items-center gap-3">
              <img
                src="/vinulabs-logo.jpeg"
                alt="VinuLabs Logo"
                className="h-10 w-auto rounded-lg object-cover"
              />
              <span className="font-bold text-xl text-white tracking-tight">VinuLabs</span>
            </a>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Smart strategy. Systems that scale. Ideas that create impact. VinuLabs solves complex technology challenges with AI strategy, enterprise architecture, and professional training.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#top" className="hover:text-cyan-400 transition-colors">About</a></li>
              <li><a href="#team" className="hover:text-cyan-400 transition-colors">Team</a></li>
              <li><a href="#careers" className="hover:text-cyan-400 transition-colors">Careers</a></li>
              <li><a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#expertise" className="hover:text-cyan-400 transition-colors">AI Strategy</a></li>
              <li><a href="#expertise" className="hover:text-cyan-400 transition-colors">Architecture</a></li>
              <li><a href="#expertise" className="hover:text-cyan-400 transition-colors">Training</a></li>
              <li><a href="#expertise" className="hover:text-cyan-400 transition-colors">Transformation</a></li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Resources
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#insights" className="hover:text-cyan-400 transition-colors">Blog</a></li>
              <li><a href="#research" className="hover:text-cyan-400 transition-colors">Research</a></li>
              <li><a href="#solutions" className="hover:text-cyan-400 transition-colors">Case Studies</a></li>
              <li><a href="#insights" className="hover:text-cyan-400 transition-colors">Insights</a></li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-4 text-slate-400">
            <span className="font-semibold text-cyan-400">Strategy · Technology · Capability</span>
            <span>|</span>
            <span>© 2026 VinuLabs Pvt Ltd. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4 text-slate-500">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300">Terms & Conditions</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
