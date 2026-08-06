import React from "react";
import { ArrowUpRight } from "./Icons";

export function Insights() {
  const insights = [
    { title: "The future of AI", category: "Artificial Intelligence", date: "August 2026", readTime: "5 min read" },
    { title: "Cloud-native transformation", category: "Architecture", date: "July 2026", readTime: "7 min read" },
    { title: "Cybersecurity trends", category: "Security", date: "July 2026", readTime: "4 min read" },
    { title: "Enterprise architecture", category: "Engineering Strategy", date: "June 2026", readTime: "6 min read" },
    { title: "Responsible AI", category: "Governance & Ethics", date: "June 2026", readTime: "5 min read" },
  ];

  return (
    <section id="insights" className="relative py-24 bg-gradient-to-b from-[#07090e] via-[#0b101f] to-[#07090e]">
      <div className="section-wrapper">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
              Thought Leadership
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
              Latest <span className="gradient-text-cyan">Insights.</span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm sm:text-base max-w-md">
            Perspectives from our engineering directors, AI researchers, and academic consultants.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {insights.map((item, i) => (
            <article
              key={i}
              className="glass-card p-6 border-white/10 hover:border-cyan-400/50 flex flex-col justify-between group transition-all duration-300 cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-cyan-400">
                    {item.category}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-300 transition-colors" />
                </div>

                <h3 className="font-bold text-white text-lg mb-3 group-hover:text-cyan-300 transition-colors leading-snug">
                  {item.title}
                </h3>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                <span>{item.date}</span>
                <span>{item.readTime}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
