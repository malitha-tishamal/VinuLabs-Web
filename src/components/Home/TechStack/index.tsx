'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

interface TechItem {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'cloud' | 'ai';
  icon: string;
  simpleDescription: string;
}

const techItems: TechItem[] = [
  // Frontend
  { name: 'React 19 & Next.js 15', category: 'frontend', icon: '⚛️', simpleDescription: 'Lightning-fast modern web interfaces' },
  { name: 'TypeScript', category: 'frontend', icon: '📘', simpleDescription: 'Reliable, error-free client application code' },
  { name: 'Tailwind CSS v4', category: 'frontend', icon: '🎨', simpleDescription: 'Responsive, elegant custom designs' },

  // Backend
  { name: 'Node.js & Express', category: 'backend', icon: '🟢', simpleDescription: 'High-speed, scalable backend servers' },
  { name: 'Python & FastAPI', category: 'backend', icon: '🐍', simpleDescription: 'Powerful data processing & AI backend APIs' },
  { name: 'Go (Golang) & Laravel', category: 'backend', icon: '⚡', simpleDescription: 'Secure, high-concurrency microservices' },

  // Database
  { name: 'PostgreSQL', category: 'database', icon: '🐘', simpleDescription: 'Rock-solid relational data storage' },
  { name: 'MongoDB', category: 'database', icon: '🍃', simpleDescription: 'Flexible, high-volume document databases' },
  { name: 'Redis Cache', category: 'database', icon: '🚀', simpleDescription: 'Ultra-fast in-memory data caching' },

  // Cloud & DevOps
  { name: 'Amazon Web Services (AWS)', category: 'cloud', icon: '☁️', simpleDescription: 'Global enterprise cloud infrastructure' },
  { name: 'Docker & Kubernetes', category: 'cloud', icon: '🐳', simpleDescription: 'Automated container deployment & scale' },
  { name: 'Vercel Edge Cloud', category: 'cloud', icon: '🌐', simpleDescription: 'Instant worldwide content delivery' },

  // AI & Data Science
  { name: 'OpenAI GPT-4o & LLMs', category: 'ai', icon: '🤖', simpleDescription: 'Smart AI assistants & automated agents' },
  { name: 'PyTorch & Machine Learning', category: 'ai', icon: '🔥', simpleDescription: 'Predictive intelligence & neural models' },
  { name: 'LangChain & Search', category: 'ai', icon: '🧠', simpleDescription: 'Intelligent search across enterprise data' },
];

const valuePillars = [
  { icon: '⚡', title: 'High Performance', desc: 'Fast load times & seamless responsiveness' },
  { icon: '🔒', title: 'Enterprise Security', desc: 'Protected data & robust architecture' },
  { icon: '📈', title: 'Infinite Scale', desc: 'Grows smoothly with your business' },
  { icon: '🤖', title: 'AI-Powered', desc: 'Smart automation & modern intelligence' },
];

const TechStack = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<'all' | 'frontend' | 'backend' | 'database' | 'cloud' | 'ai'>('all');

  const categories = [
    { id: 'all', label: 'All Capabilities' },
    { id: 'frontend', label: t.techFrontend },
    { id: 'backend', label: t.techBackend },
    { id: 'database', label: t.techDatabase },
    { id: 'cloud', label: t.techCloud },
    { id: 'ai', label: t.techAI },
  ];

  const filteredTech = techItems.filter(item => activeCategory === 'all' || item.category === activeCategory);

  return (
    <section className="py-20 bg-slate-50 dark:bg-[#0b0f17] transition-colors relative overflow-hidden">
      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 uppercase">
            {t.modernTooling}
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Technology <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-emerald-400 to-blue-500">Stack</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            {t.techSubtitle}
          </p>
        </div>

        {/* Business Value Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {valuePillars.map((pillar, idx) => (
            <div key={idx} className="relative overflow-hidden p-4 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 shadow-sm text-center flex flex-col items-center">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-emerald-400 to-violet-500" />
              <span className="text-2xl mb-2 mt-1">{pillar.icon}</span>
              <h4 className="text-xs font-extrabold text-slate-900 dark:text-white uppercase tracking-wider mb-1">{pillar.title}</h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">{pillar.desc}</p>
            </div>
          ))}
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap justify-center gap-2 bg-slate-200/70 dark:bg-slate-900/80 p-1.5 rounded-2xl border border-slate-300 dark:border-slate-800 backdrop-blur-md">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-300/40 dark:hover:bg-slate-800/50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Simplified Tech Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredTech.map((tech, index) => (
            <div
              key={index}
              className="group relative overflow-hidden p-5 rounded-2xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800/80 backdrop-blur-xl hover:border-cyan-500/50 hover:shadow-lg transition-all duration-200 flex items-center gap-4"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-emerald-400 to-violet-500 opacity-60 group-hover:opacity-100 transition-opacity" />
              <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 flex items-center justify-center text-2xl shrink-0 group-hover:scale-110 transition-transform">
                {tech.icon}
              </div>

              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-cyan-500 transition-colors">
                  {tech.name}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-snug">
                  {tech.simpleDescription}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechStack;
