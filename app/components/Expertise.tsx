import React from "react";
import { ArrowUpRight } from "./Icons";

export function Expertise() {
  const services = [
    {
      num: "01",
      title: "AI Strategy & Adoption",
      summary: "Turn AI ambition into measurable business value.",
      tags: ["AI readiness", "Roadmaps", "Governance", "Automation", "Responsible AI"],
      glow: "border-cyan-500/20 hover:border-cyan-400",
    },
    {
      num: "02",
      title: "Architecture & Engineering",
      summary: "Design scalable and secure systems.",
      tags: ["Cloud architecture", "Platform engineering", "Technical reviews", "Security", "DevOps"],
      glow: "border-violet-500/20 hover:border-violet-400",
    },
    {
      num: "03",
      title: "Business Transformation",
      summary: "Connect customer needs with technology.",
      tags: ["Discovery", "Process optimization", "Innovation", "Customer experience", "Product strategy"],
      glow: "border-emerald-500/20 hover:border-emerald-400",
    },
    {
      num: "04",
      title: "Professional Training",
      summary: "Build capable teams.",
      tags: ["AI literacy", "Cybersecurity", "Software engineering", "Leadership", "Upskilling"],
      glow: "border-amber-500/20 hover:border-amber-400",
    },
    {
      num: "05",
      title: "Applied AI & Research",
      summary: "Bridge research and industry.",
      tags: ["Machine learning", "Deep learning", "Data science", "Research", "Prototyping"],
      glow: "border-cyan-500/20 hover:border-cyan-400",
    },
    {
      num: "06",
      title: "Delivery Leadership",
      summary: "Strengthen execution.",
      tags: ["Project governance", "Team mentoring", "Technical oversight", "Quality assurance", "Agile delivery"],
      glow: "border-violet-500/20 hover:border-violet-400",
    },
  ];

  return (
    <section id="expertise" className="relative py-24 bg-[#07090e]">
      <div className="section-wrapper">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
              Our Capabilities
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
              End-to-End <span className="gradient-text-cyan">Expertise.</span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm sm:text-base max-w-md">
            Focused capabilities designed to solve immediate technical barriers while laying the groundwork for long-term growth.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((item, i) => (
            <div
              key={i}
              className={`glass-card p-8 border ${item.glow} flex flex-col justify-between group transition-all duration-300`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-black text-slate-500 group-hover:text-cyan-400 transition-colors">
                    {item.num}
                  </span>
                  <div className="p-2 rounded-full bg-white/5 group-hover:bg-cyan-500/20 group-hover:text-cyan-300 text-slate-400 transition-all">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                  {item.summary}
                </p>
              </div>

              {/* Sub-bullets / Tags */}
              <div className="pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
                {item.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-white/[0.04] text-slate-400 group-hover:text-slate-200 group-hover:bg-white/[0.08] transition-all"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
