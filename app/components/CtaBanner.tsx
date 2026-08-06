import React from "react";
import { ArrowUpRight } from "./Icons";

export function CtaBanner() {
  return (
    <section className="relative py-24 bg-gradient-to-r from-cyan-950/60 via-[#07090e] to-violet-950/60 border-y border-white/10 overflow-hidden">
      <div className="ambient-glow glow-cyan w-[400px] h-[400px] -top-20 left-1/4 animate-pulse-glow" />
      <div className="ambient-glow glow-violet w-[400px] h-[400px] -bottom-20 right-1/4 animate-pulse-glow" />

      <div className="section-wrapper relative z-10 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-6">
          Ready for Transformation?
        </div>

        <h2 className="text-4xl sm:text-6xl font-extrabold text-white mb-6 leading-tight">
          Have a challenge <span className="gradient-text-cyan">worth solving?</span>
        </h2>

        <p className="text-slate-300 text-base sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Let&apos;s explore what a focused strategy, the right architecture, and an enabled team could make possible.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#contact" className="btn-primary py-3.5 px-8 text-base">
            <span>Schedule a Consultation</span>
          </a>
          <a
            href="https://www.linkedin.com/company/vinulab/"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary py-3.5 px-8 text-base flex items-center gap-2"
          >
            <span>Talk to VinuLabs</span>
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
