'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

interface TechItem {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'cloud' | 'ai';
  icon: string;
  description: string;
  level: string;
}

const techItems: TechItem[] = [
  // Frontend
  { name: 'React 19', category: 'frontend', icon: '⚛️', description: 'Server Components & Hooks', level: 'Core' },
  { name: 'Next.js 15', category: 'frontend', icon: '▲', description: 'Full-stack Turbopack framework', level: 'Core' },
  { name: 'TypeScript', category: 'frontend', icon: '📘', description: 'Strongly typed JavaScript', level: 'Core' },
  { name: 'Tailwind CSS v4', category: 'frontend', icon: '🎨', description: 'Utility-first CSS engine', level: 'Core' },

  // Backend
  { name: 'Node.js', category: 'backend', icon: '🟢', description: 'Async high-throughput runtime', level: 'Core' },
  { name: 'Python', category: 'backend', icon: '🐍', description: 'Data, FastAPI & AI model pipelines', level: 'Core' },
  { name: 'Laravel', category: 'backend', icon: '🔴', description: 'PHP enterprise APIs', level: 'Advanced' },
  { name: 'Go (Golang)', category: 'backend', icon: '🐹', description: 'Concurrency microservices', level: 'Advanced' },

  // Database
  { name: 'PostgreSQL', category: 'database', icon: '🐘', description: 'Relational DB with pgvector', level: 'Core' },
  { name: 'MongoDB', category: 'database', icon: '🍃', description: 'Distributed NoSQL document store', level: 'Core' },
  { name: 'Redis', category: 'database', icon: '⚡', description: 'In-memory cache & pub/sub', level: 'Advanced' },

  // Cloud & DevOps
  { name: 'AWS', category: 'cloud', icon: '☁️', description: 'Cloud infra & Lambda serverless', level: 'Core' },
  { name: 'Docker', category: 'cloud', icon: '🐳', description: 'Containerized microservices', level: 'Core' },
  { name: 'Kubernetes', category: 'cloud', icon: '☸️', description: 'Multi-cloud orchestration', level: 'Advanced' },
  { name: 'Vercel', category: 'cloud', icon: '🚀', description: 'Edge deployment & CI/CD', level: 'Core' },

  // AI & Data Science
  { name: 'OpenAI GPT-4o', category: 'ai', icon: '🤖', description: 'LLM agents & RAG pipelines', level: 'Specialist' },
  { name: 'PyTorch & TensorFlow', category: 'ai', icon: '🔥', description: 'Deep learning & neural nets', level: 'Specialist' },
  { name: 'LangChain & LlamaIndex', category: 'ai', icon: '🦜', description: 'Enterprise vector search engines', level: 'Specialist' },
];

const TechStack = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<'all' | 'frontend' | 'backend' | 'database' | 'cloud' | 'ai'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Stack' },
    { id: 'frontend', label: t.techFrontend },
    { id: 'backend', label: t.techBackend },
    { id: 'database', label: t.techDatabase },
    { id: 'cloud', label: t.techCloud },
    { id: 'ai', label: t.techAI },
  ];

  const filteredTech = techItems.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-16 bg-slate-50 dark:bg-[#0b0f17] transition-colors relative overflow-hidden">
      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-8">
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider text-cyan-500 dark:text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 uppercase">
            {t.modernTooling}
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.techTitle}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-xs md:text-sm">
            {t.techSubtitle}
          </p>
        </div>

        {/* Category Tabs & Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-6">
          <div className="flex flex-wrap justify-center gap-1.5 bg-slate-200/60 dark:bg-slate-900/80 p-1 rounded-xl border border-slate-300 dark:border-slate-800 backdrop-blur-md">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-300/40 dark:hover:bg-slate-800/50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-52">
            <input
              type="text"
              placeholder="Search tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-3 py-1.5 text-xs rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-cyan-500"
            />
          </div>
        </div>

        {/* Compact Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {filteredTech.map((tech, index) => (
            <div
              key={index}
              className="group p-3 rounded-xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800/80 backdrop-blur-xl hover:border-cyan-500/50 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xl group-hover:scale-110 transition-transform">{tech.icon}</span>
                <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-cyan-600 dark:text-cyan-400 border border-slate-200 dark:border-slate-700 uppercase">
                  {tech.level}
                </span>
              </div>

              <div>
                <h3 className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-cyan-500 transition-colors">
                  {tech.name}
                </h3>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 leading-tight line-clamp-2">
                  {tech.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {filteredTech.length === 0 && (
          <div className="text-center py-8 text-xs text-slate-500">
            No technologies found matching "{searchQuery}".
          </div>
        )}
      </div>
    </section>
  );
};

export default TechStack;
