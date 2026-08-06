import React from "react";

export function TechStack() {
  const stack = [
    {
      category: "Frontend",
      tools: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      color: "border-cyan-500/20 text-cyan-300",
    },
    {
      category: "Backend",
      tools: ["Node.js", "Laravel", "Python"],
      color: "border-violet-500/20 text-violet-300",
    },
    {
      category: "Database",
      tools: ["PostgreSQL", "MongoDB", "MySQL"],
      color: "border-emerald-500/20 text-emerald-300",
    },
    {
      category: "Cloud",
      tools: ["AWS", "Azure", "Docker", "Kubernetes", "Vercel"],
      color: "border-amber-500/20 text-amber-300",
    },
    {
      category: "AI",
      tools: ["OpenAI", "TensorFlow", "PyTorch", "LangChain"],
      color: "border-cyan-500/20 text-cyan-300",
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-[#07090e] via-[#090d19] to-[#07090e]">
      <div className="section-wrapper">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            Modern Tooling & Frameworks
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">
            Technology <span className="gradient-text-cyan">Stack.</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Battle-tested engineering technologies powering our enterprise solutions, cloud architectures, and intelligent systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {stack.map((group, i) => (
            <div
              key={i}
              className="glass-card p-6 border-white/10 hover:border-cyan-400/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <h3 className={`text-sm font-bold uppercase tracking-wider mb-4 pb-2 border-b border-white/5 ${group.color}`}>
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-lg bg-white/[0.05] border border-white/10 text-xs font-medium text-slate-200 hover:bg-cyan-500/20 hover:border-cyan-400/40 hover:text-white transition-all"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
