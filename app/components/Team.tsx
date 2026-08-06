import React from "react";
import { ArrowUpRight } from "./Icons";

export function Team() {
  const members = [
    {
      name: "Chamil Jeewantha",
      role: "Co-Founder & Director",
      focus: "Technology Strategy · Architecture · Product Delivery",
      bio: "Software and technology leader focused on technical excellence, scalable platforms, product innovation, and long-term customer partnerships.",
      image: "/chamil-jeewantha.png",
      linkedIn: "https://www.linkedin.com/in/chamil/",
      tone: "from-violet-500/30 to-indigo-500/30 border-violet-500/40",
      initials: "CJ",
    },
    {
      name: "Thamara Rangana Waidyarathne",
      role: "Academic & AI Strategy Lead",
      focus: "AI Education · Training · Business Development",
      bio: "Academic leader, consultant, and AI researcher bringing together workforce development, responsible AI adoption, and industry-education collaboration.",
      image: "/thamara-waidyarathne.png",
      linkedIn: "https://www.linkedin.com/in/thamara-rangana-waidyarathne-74a38459/",
      tone: "from-cyan-500/30 to-blue-500/30 border-cyan-500/40",
      initials: "TW",
    },
    {
      name: "Dr. Sugandima Vidanagamachchi",
      role: "Applied AI & Research Lead",
      focus: "AI/ML · Cybersecurity · Research & Innovation",
      bio: "Computer science researcher and senior academic specialising in machine learning, deep learning, cybersecurity, bioinformatics, and accelerated computing.",
      image: null,
      linkedIn: "https://www.linkedin.com/in/sugandima-vidanagamachchi-75205921/",
      tone: "from-amber-500/30 to-orange-500/30 border-amber-500/40",
      initials: "SV",
    },
  ];

  return (
    <section id="team" className="relative py-24 bg-gradient-to-b from-[#07090e] via-[#0b0e1b] to-[#07090e]">
      <div className="section-wrapper">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            Leadership & Vision
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">
            Our <span className="gradient-text-cyan">Team.</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Three perspectives. One shared standard of technical and academic excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {members.map((person, i) => (
            <div
              key={i}
              className="glass-card p-8 border-white/10 hover:border-cyan-400/40 flex flex-col justify-between group transition-all duration-300"
            >
              <div>
                {/* Photo / Avatar Placeholder */}
                <div className="relative w-full h-64 rounded-xl overflow-hidden mb-6 bg-slate-900 border border-white/10 flex items-center justify-center">
                  {person.image ? (
                    <img
                      src={person.image}
                      alt={person.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${person.tone} flex items-center justify-center`}>
                      <span className="text-4xl font-extrabold text-white tracking-widest">
                        {person.initials}
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-transparent to-transparent opacity-60" />
                </div>

                <div className="text-xs uppercase font-bold text-cyan-400 tracking-wider mb-1">
                  {person.role}
                </div>
                <h3 className="text-xl font-extrabold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {person.name}
                </h3>
                <p className="text-xs text-cyan-300/80 font-medium mb-4">
                  {person.focus}
                </p>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {person.bio}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <a
                  href={person.linkedIn}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <span>LinkedIn Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
