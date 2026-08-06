"use client";

import React, { useState } from "react";
import { ChevronDown } from "./Icons";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What services do you offer?",
      a: "AI consulting, cloud architecture, engineering leadership, professional training, and digital transformation.",
    },
    {
      q: "Do you offer enterprise consulting?",
      a: "Yes. We partner with enterprise leaders to conduct technical audits, modernize legacy architecture, design cloud environments, and establish responsible AI governance frameworks.",
    },
    {
      q: "Do you provide customized training?",
      a: "Yes. We create tailored upskilling programs for organizations, covering AI literacy, cybersecurity, cloud engineering, software architecture, and technology leadership.",
    },
    {
      q: "Do you work with startups?",
      a: "Absolutely. We work with high-growth startups on AI product strategy, cloud architecture review, fast prototyping, and technical mentoring.",
    },
  ];

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="relative py-24 bg-[#07090e]">
      <div className="section-wrapper max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            Got Questions?
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">
            Frequently Asked <span className="gradient-text-cyan">Questions.</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="glass-card border-white/10 overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-lg text-white hover:text-cyan-300 transition-colors"
              >
                <span>{faq.q}</span>
                <div
                  className={`p-1.5 rounded-full bg-white/5 border border-white/10 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180 bg-cyan-500/20 text-cyan-300" : "text-slate-400"
                  }`}
                >
                  <ChevronDown className="w-5 h-5" />
                </div>
              </button>

              {openIndex === i && (
                <div className="px-6 pb-6 text-slate-300 text-sm leading-relaxed border-t border-white/5 pt-4 animate-fadeIn">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
