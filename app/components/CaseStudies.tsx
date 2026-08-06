import React from "react";
import { ArrowUpRight } from "./Icons";

export function CaseStudies() {
  const cases = [
    {
      title: "Healthcare AI Transformation",
      highlight: "Reduced operational workload by 70%",
      stat: "70%",
      statLabel: "Workload Reduction",
      desc: "Deployed intelligent clinical workflow automation and triage models across major hospital networks.",
      tag: "AI & Healthcare",
    },
    {
      title: "Cloud Modernization",
      highlight: "Improved scalability and reduced infrastructure costs",
      stat: "45%",
      statLabel: "Infrastructure Cost Savings",
      desc: "Refactored legacy monoliths into cloud-native microservices with Kubernetes & terraform automation.",
      tag: "Cloud & Architecture",
    },
    {
      title: "Workforce Upskilling",
      highlight: "Trained more than 1000 professionals",
      stat: "1000+",
      statLabel: "Engineers Trained",
      desc: "Designed and delivered custom enterprise AI & cybersecurity academies for tier-1 enterprises.",
      tag: "Capability Development",
    },
  ];

  return (
    <section className="relative py-24 bg-[#07090e]">
      <div className="section-wrapper">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
              Proven Results
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
              Featured <span className="gradient-text-cyan">Case Studies.</span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm sm:text-base max-w-md">
            Real-world impact across AI adoption, cloud migration, and workforce enablement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((c, i) => (
            <div
              key={i}
              className="glass-card p-8 border-white/10 hover:border-cyan-400/40 flex flex-col justify-between group transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="glass-pill text-cyan-300 text-xs">{c.tag}</span>
                  <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {c.title}
                </h3>
                <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                  {c.desc}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20 mt-6">
                <div className="text-3xl font-extrabold text-cyan-300">{c.stat}</div>
                <div className="text-xs text-slate-300 font-medium mt-0.5">{c.highlight}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
