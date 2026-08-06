import React from "react";

export function Industries() {
  const industries = [
    { name: "Healthcare", icon: "🩺", desc: "Clinical AI workflows & patient telemetry scale" },
    { name: "Education", icon: "🎓", desc: "Digital learning platforms & workforce upskilling" },
    { name: "Banking", icon: "🏦", desc: "Core banking modernization & risk analytics" },
    { name: "Insurance", icon: "🛡️", desc: "Automated underwriting & claim processing" },
    { name: "Retail", icon: "🛍️", desc: "Predictive inventory & customer analytics" },
    { name: "Manufacturing", icon: "🏭", desc: "IoT monitoring & automated quality inspection" },
    { name: "Government", icon: "🏛️", desc: "Secure public sector cloud & citizen portals" },
    { name: "Tourism", icon: "✈️", desc: "Smart booking engines & personalized recommendation" },
    { name: "Logistics", icon: "🚚", desc: "Supply chain tracking & route optimization" },
    { name: "Telecommunications", icon: "📡", desc: "High-throughput network AI & data analytics" },
  ];

  return (
    <section id="industries" className="relative py-20 bg-gradient-to-b from-[#07090e] via-[#090e1a] to-[#07090e]">
      <div className="section-wrapper">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-4">
            Domain Expertise
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">
            Industries We <span className="gradient-text-gold">Serve</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Deep domain knowledge tailored to meet strict regulatory, architectural, and operational standards.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {industries.map((ind, i) => (
            <div
              key={i}
              className="glass-card p-6 text-center border-white/10 hover:border-emerald-400/40 group transition-all duration-300 flex flex-col items-center justify-between"
            >
              <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300">
                {ind.icon}
              </div>
              <div>
                <h3 className="font-bold text-white text-base mb-1 group-hover:text-emerald-300 transition-colors">
                  {ind.name}
                </h3>
                <p className="text-[11px] text-slate-400 font-normal leading-snug">
                  {ind.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
