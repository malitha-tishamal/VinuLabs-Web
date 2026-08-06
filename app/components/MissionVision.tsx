import React from "react";

export function MissionVision() {
  const values = [
    { name: "Innovation", desc: "Pushing technical boundaries with research-led engineering." },
    { name: "Excellence", desc: "Setting high standards for architecture, governance, and delivery." },
    { name: "Integrity", desc: "Transparent, honest consulting tailored to your true business needs." },
    { name: "Collaboration", desc: "Working alongside your team to build long-term capabilities." },
    { name: "Impact", desc: "Delivering measurable, scalable, and sustainable business outcomes." },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-[#07090e] via-[#0b101d] to-[#07090e]">
      <div className="section-wrapper">
        
        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="glass-card p-8 border-cyan-500/20 hover:border-cyan-400/50 relative group">
            <div className="text-xs uppercase font-bold text-cyan-400 tracking-wider mb-2">
              Our Mission
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              To empower organisations with intelligent technology, strategic thinking, and practical innovation.
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              We bridge the gap between forward-looking academic research and practical enterprise execution.
            </p>
          </div>

          <div className="glass-card p-8 border-violet-500/20 hover:border-violet-400/50 relative group">
            <div className="text-xs uppercase font-bold text-violet-400 tracking-wider mb-2">
              Our Vision
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              To become a globally trusted partner in AI, engineering, and digital transformation.
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Creating world-class technology solutions and empowering future leaders through high-caliber training.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="text-center mb-10">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
            Core Values That Drive Us
          </h3>
          <p className="text-slate-400 text-sm">
            Guiding principles behind our engineering, consulting, and education work.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {values.map((val, i) => (
            <div
              key={i}
              className="glass-card p-5 border-white/10 hover:border-cyan-400/40 text-center transition-all duration-300"
            >
              <div className="w-10 h-10 mx-auto rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-bold flex items-center justify-center mb-3">
                {i + 1}
              </div>
              <h4 className="font-bold text-white mb-1">{val.name}</h4>
              <p className="text-xs text-slate-400">{val.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
