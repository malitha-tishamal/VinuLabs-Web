import React from "react";
import { SparklesIcon } from "./Icons";

export function TrustedBy() {
  const categories = [
    { title: "Universities", subtitle: "Academic Partnerships & Upskilling", icon: "🎓" },
    { title: "Healthcare Institutions", subtitle: "AI Workload & Data Modernization", icon: "🏥" },
    { title: "Enterprises", subtitle: "Architecture & Scale Transformation", icon: "🏢" },
    { title: "Startups", subtitle: "AI Strategy & Fast MVP Execution", icon: "🚀" },
    { title: "Research Centers", subtitle: "Applied AI & R&D Innovation", icon: "🔬" },
  ];

  return (
    <section className="relative py-16 border-y border-white/5 bg-white/[0.01]">
      <div className="section-wrapper py-4">
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-2">
            Global Impact & Trust
          </p>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-200 max-w-3xl mx-auto">
            Trusted by organisations, universities, startups, and industry leaders.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="glass-card p-5 text-center flex flex-col items-center justify-center group hover:bg-cyan-500/10 transition-all duration-300"
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">
                {cat.icon}
              </div>
              <h3 className="text-sm font-semibold text-slate-100 mb-1 group-hover:text-cyan-300">
                {cat.title}
              </h3>
              <p className="text-[11px] text-slate-400 font-normal">
                {cat.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
