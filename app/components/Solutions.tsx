"use client";

import React, { useState } from "react";
import { CheckCircle } from "./Icons";

export function Solutions() {
  const [activeTab, setActiveTab] = useState<"enterprise" | "ai" | "cloud">("enterprise");

  const categoryData = {
    enterprise: {
      title: "Enterprise Solutions",
      desc: "Robust, mission-critical business platforms built for performance and durability.",
      items: [
        { name: "ERP Systems", desc: "Integrated enterprise resource planning tailored for operational workflows." },
        { name: "CRM Platforms", desc: "Customer relationship management systems with deep integration capabilities." },
        { name: "Customer Portals", desc: "Secure, high-touch portals for self-service and partner engagement." },
        { name: "Business Intelligence", desc: "Real-time analytics dashboards and data warehouse integrations." },
      ],
      glowColor: "from-blue-500/20 to-cyan-500/20",
    },
    ai: {
      title: "AI Solutions",
      desc: "Intelligent automation and predictive systems that turn raw data into decisions.",
      items: [
        { name: "Chatbots & Conversational AI", desc: "Context-aware AI assistants trained on enterprise knowledge bases." },
        { name: "Recommendation Systems", desc: "Personalized engines boosting customer retention and discovery." },
        { name: "Predictive Analytics", desc: "Machine learning models forecasting trends, demand, and risks." },
        { name: "Process Automation", desc: "End-to-end intelligent document and workflow automation." },
      ],
      glowColor: "from-violet-500/20 to-purple-500/20",
    },
    cloud: {
      title: "Cloud Solutions",
      desc: "Modern infrastructure engineering built for continuous uptime and cost efficiency.",
      items: [
        { name: "Cloud Migration", desc: "Seamless refactoring and lift-and-shift strategies to AWS, Azure & Vercel." },
        { name: "Infrastructure as Code", desc: "Automated, scalable cloud provisioning via Terraform and Kubernetes." },
        { name: "DevOps & CI/CD Pipelines", desc: "High-frequency deployment pipelines with strict quality gates." },
        { name: "Cost & Performance Optimization", desc: "Audit and optimization of cloud spend and architecture efficiency." },
      ],
      glowColor: "from-emerald-500/20 to-teal-500/20",
    },
  };

  const activeSolution = categoryData[activeTab];

  return (
    <section id="solutions" className="relative py-24 bg-[#07090e]">
      <div className="section-wrapper">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            Custom Product Offerings
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">
            Tailored <span className="gradient-text-cyan">Solutions.</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            From enterprise platforms to intelligent AI engines and cloud backbones, we build solutions engineered for scale.
          </p>
        </div>

        {/* Tabs Switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-full bg-white/[0.04] border border-white/10 gap-2">
            <button
              onClick={() => setActiveTab("enterprise")}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeTab === "enterprise"
                  ? "bg-cyan-500 text-white shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Enterprise Solutions
            </button>
            <button
              onClick={() => setActiveTab("ai")}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeTab === "ai"
                  ? "bg-violet-500 text-white shadow-[0_0_20px_rgba(139,92,246,0.4)]"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              AI Solutions
            </button>
            <button
              onClick={() => setActiveTab("cloud")}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeTab === "cloud"
                  ? "bg-emerald-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.4)]"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Cloud Solutions
            </button>
          </div>
        </div>

        {/* Tab Content Display */}
        <div className="glass-card p-8 sm:p-12 border-white/10 relative overflow-hidden">
          <div className={`absolute -top-32 -right-32 w-80 h-80 rounded-full bg-gradient-to-br ${activeSolution.glowColor} blur-3xl opacity-50 pointer-events-none`} />

          <div className="mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              {activeSolution.title}
            </h3>
            <p className="text-slate-300 text-sm sm:text-base">
              {activeSolution.desc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activeSolution.items.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-cyan-400/40 hover:bg-white/[0.06] transition-all duration-300 flex items-start gap-4"
              >
                <CheckCircle className="w-5 h-5 text-cyan-400 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-white text-base mb-1">{item.name}</h4>
                  <p className="text-xs text-slate-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
