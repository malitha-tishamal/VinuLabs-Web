import React from "react";

export function HowWeWork() {
  const steps = [
    {
      step: "01",
      title: "Understand",
      desc: "We listen to your goals, customers, and constraints.",
    },
    {
      step: "02",
      title: "Shape",
      desc: "We transform complexity into a practical strategy.",
    },
    {
      step: "03",
      title: "Deliver",
      desc: "We work alongside your team to create outcomes.",
    },
    {
      step: "04",
      title: "Enable",
      desc: "We transfer knowledge and build capability.",
    },
    {
      step: "05",
      title: "Scale",
      desc: "We support long-term growth.",
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-[#07090e] via-[#0b101e] to-[#07090e]">
      <div className="section-wrapper">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-semibold uppercase tracking-wider mb-4">
            Our Methodology
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">
            How We <span className="gradient-text-violet">Work.</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            A structured 5-step engineering and consulting workflow that takes you from ambiguity to sustainable enterprise scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {steps.map((item, i) => (
            <div
              key={i}
              className="glass-card p-6 border-white/10 hover:border-violet-400/50 flex flex-col justify-between group transition-all duration-300 relative"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/30 text-violet-400 font-extrabold text-lg flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-violet-500 group-hover:text-white transition-all">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-violet-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 text-[10px] uppercase tracking-widest text-slate-500 font-semibold">
                Phase 0{i + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
