import React from "react";
import { SparklesIcon } from "./Icons";

export function Research() {
  const areas = [
    { name: "Artificial Intelligence", desc: "Generative AI, Large Language Models & Autonomous Agents", icon: "🧠" },
    { name: "Cybersecurity", desc: "Zero-Trust Architecture, Threat Modeling & Defensive AI", icon: "🔐" },
    { name: "Data Science", desc: "Advanced Statistical Modeling, Big Data & Time Series", icon: "📊" },
    { name: "Bioinformatics", desc: "Accelerated Genomic Computing & Health Informatics", icon: "🧬" },
    { name: "High-Performance Computing", desc: "Parallel GPU Clusters & Scalable Distributed Systems", icon: "⚡" },
  ];

  return (
    <section id="research" className="relative py-24 bg-[#07090e]">
      <div className="section-wrapper">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-semibold uppercase tracking-wider mb-4">
            Academic & R&D Excellence
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">
            Research-Driven <span className="gradient-text-violet">Innovation.</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Bridging cutting-edge academic discovery with production-ready enterprise systems.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {areas.map((area, i) => (
            <div
              key={i}
              className="glass-card p-6 border-white/10 hover:border-violet-400/50 group transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {area.icon}
                </div>
                <h3 className="font-bold text-white text-lg mb-2 group-hover:text-violet-300 transition-colors">
                  {area.name}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {area.desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-1.5 text-[11px] text-violet-400 font-semibold">
                <SparklesIcon className="w-3.5 h-3.5" />
                <span>R&D Focus</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
