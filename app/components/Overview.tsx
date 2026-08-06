import React from "react";
import { CheckCircle } from "./Icons";

export function Overview() {
  const pillars = [
    {
      name: "Strategy",
      desc: "Aligning executive decisions with intelligent roadmap design.",
      color: "from-cyan-500/20 to-blue-500/20",
    },
    {
      name: "Technology",
      desc: "Building resilient cloud architecture & production-grade AI systems.",
      color: "from-violet-500/20 to-purple-500/20",
    },
    {
      name: "People",
      desc: "Upskilling teams with high-impact training and leadership capability.",
      color: "from-emerald-500/20 to-teal-500/20",
    },
  ];

  const highlights = [
    "3 complementary experts",
    "End-to-end delivery",
    "Industry + academia",
  ];

  return (
    <section className="relative py-20 bg-[#07090e]">
      <div className="section-wrapper">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & Description */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-semibold uppercase tracking-wider">
              Company Overview
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              Ideas to <span className="gradient-text-violet">impact.</span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              We help organisations make better technology decisions by connecting business strategy, intelligent systems, and human capability.
            </p>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Our work combines consultancy, engineering, and education to create sustainable growth and long-term value.
            </p>

            {/* Highlights list */}
            <div className="pt-4 flex flex-wrap gap-4">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-center gap-2 glass-pill bg-white/[0.03] text-slate-200">
                  <CheckCircle className="w-4 h-4 text-cyan-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Pillars Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 gap-4">
            {pillars.map((p, i) => (
              <div
                key={i}
                className="glass-card p-6 border-white/10 hover:border-violet-500/40 flex items-start gap-4 transition-all duration-300"
              >
                <div className={`p-3 rounded-xl bg-gradient-to-br ${p.color} border border-white/10 text-white font-bold text-lg`}>
                  0{i + 1}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">{p.name}</h3>
                  <p className="text-sm text-slate-300">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
