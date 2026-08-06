import React from "react";
import { ArrowDown, ArrowUpRight, SparklesIcon } from "./Icons";

export function Hero() {
  const stats = [
    { value: "50+", label: "Projects Delivered" },
    { value: "20+", label: "Industry Partners" },
    { value: "5000+", label: "Professionals Trained" },
    { value: "10+", label: "Years of Experience" },
  ];

  return (
    <section id="top" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-12 pb-20">
      {/* Background Glowing Ambient Orbs */}
      <div className="ambient-glow glow-cyan w-[500px] h-[500px] -top-20 -left-20 animate-pulse-glow" />
      <div className="ambient-glow glow-violet w-[600px] h-[600px] top-1/3 -right-20 animate-pulse-glow" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="section-wrapper relative z-10 text-center flex flex-col items-center">
        
        {/* Tag Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs sm:text-sm font-medium mb-8 animate-float-slow shadow-[0_0_20px_rgba(6,182,212,0.15)]">
          <SparklesIcon className="w-4 h-4 text-cyan-400" />
          <span>AI · Cloud · Architecture · Capability</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white max-w-5xl leading-[1.1] mb-8">
          Smart strategy. <br />
          <span className="gradient-text-cyan">Systems that scale.</span> <br />
          <span className="gradient-text-violet">Ideas that create impact.</span>
        </h1>

        {/* Description */}
        <p className="text-slate-300 text-base sm:text-xl max-w-3xl leading-relaxed mb-10 font-normal">
          VinuLabs helps organisations solve complex challenges through AI strategy, enterprise architecture, engineering leadership, digital transformation, and professional capability development.
          <br className="hidden sm:inline" />
          <span className="text-slate-400 text-sm sm:text-base mt-2 block">
            We combine strategic thinking with practical execution to build systems that deliver measurable outcomes.
          </span>
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
          <a href="#expertise" className="btn-primary">
            <span>Explore Our Expertise</span>
            <ArrowDown className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/company/vinulab/"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
          >
            <span>Start a Conversation</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Hero Statistics */}
        <div className="w-full max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="glass-card p-6 text-center border-white/10 hover:border-cyan-500/40 group transition-all duration-300"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400 group-hover:scale-105 transition-transform">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-400 mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
