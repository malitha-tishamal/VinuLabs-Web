'use client'
import React from 'react'
import { Servicebox } from '@/app/api/data'
import { useLanguage } from '@/context/LanguageContext'

/* Per-card accent color palette — cycles across 6 vivid gradients */
const CARD_ACCENTS = [
  { from: 'from-cyan-500',   to: 'to-blue-500',    glow: 'hover:shadow-cyan-500/25',   border: 'hover:border-cyan-500/60',   num: 'group-hover:text-cyan-400',   tag: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',   dot: 'bg-cyan-400',   icon: 'text-cyan-400' },
  { from: 'from-violet-500', to: 'to-purple-600',  glow: 'hover:shadow-violet-500/25', border: 'hover:border-violet-500/60', num: 'group-hover:text-violet-400', tag: 'bg-violet-500/10 text-violet-400 border-violet-500/20', dot: 'bg-violet-400', icon: 'text-violet-400' },
  { from: 'from-emerald-500',to: 'to-teal-500',    glow: 'hover:shadow-emerald-500/25',border: 'hover:border-emerald-500/60',num: 'group-hover:text-emerald-400',tag: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',dot: 'bg-emerald-400',icon: 'text-emerald-400' },
  { from: 'from-orange-500', to: 'to-rose-500',    glow: 'hover:shadow-orange-500/25', border: 'hover:border-orange-500/60', num: 'group-hover:text-orange-400', tag: 'bg-orange-500/10 text-orange-400 border-orange-500/20',  dot: 'bg-orange-400', icon: 'text-orange-400' },
  { from: 'from-sky-500',    to: 'to-indigo-500',  glow: 'hover:shadow-sky-500/25',    border: 'hover:border-sky-500/60',    num: 'group-hover:text-sky-400',    tag: 'bg-sky-500/10 text-sky-400 border-sky-500/20',      dot: 'bg-sky-400',    icon: 'text-sky-400' },
  { from: 'from-pink-500',   to: 'to-fuchsia-600', glow: 'hover:shadow-pink-500/25',   border: 'hover:border-pink-500/60',   num: 'group-hover:text-pink-400',   tag: 'bg-pink-500/10 text-pink-400 border-pink-500/20',     dot: 'bg-pink-400',   icon: 'text-pink-400' },
]

const Services = () => {
  const { t } = useLanguage()

  return (
    <section className='bg-slate-50 dark:bg-[#0b0f17] transition-colors py-20' id='services'>
      <div className='container mx-auto max-w-7xl px-6'>
        <div className='text-center max-w-3xl mx-auto space-y-4 mb-16'>
          <span className='inline-block px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest text-cyan-500 dark:text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 uppercase'>
            {t.servicesTag}
          </span>
          <h2
            className='text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight'
            data-aos='fade-up'
            data-aos-duration='800'>
            {t.servicesTitle}<br/>
            <span className='bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>{t.servicesSubtitle}</span>
          </h2>
          <p className='text-slate-600 dark:text-slate-400 text-base md:text-lg max-w-2xl mx-auto'>
            {t.servicesDesc}
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {Servicebox.map((item, index) => {
            const accent = CARD_ACCENTS[index % CARD_ACCENTS.length]
            return (
              <div
                key={index}
                data-aos='fade-up'
                data-aos-delay={`${index * 100}`}
                data-aos-duration='800'
                className={`group relative p-8 rounded-2xl overflow-hidden
                  bg-white dark:bg-slate-900/80
                  border border-slate-200/80 dark:border-slate-800/80
                  backdrop-blur-xl
                  ${accent.border}
                  hover:shadow-2xl ${accent.glow}
                  hover:-translate-y-2
                  transition-all duration-400 ease-out
                  flex flex-col justify-between cursor-pointer`}>

                {/* Gradient top-edge accent bar */}
                <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${accent.from} ${accent.to} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* Corner glow blob */}
                <div className={`absolute -top-8 -right-8 w-32 h-32 rounded-full bg-gradient-to-br ${accent.from} ${accent.to} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500`} />

                <div className='space-y-5 relative z-10'>
                  {/* Number + arrow row */}
                  <div className='flex items-center justify-between'>
                    <span className={`text-5xl font-extrabold font-mono
                      text-slate-100 dark:text-slate-800/80
                      ${accent.num}
                      transition-all duration-300 group-hover:scale-110 origin-left`}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center
                      bg-gradient-to-br ${accent.from} ${accent.to}
                      text-white text-sm font-bold shadow-lg
                      opacity-0 group-hover:opacity-100
                      scale-75 group-hover:scale-100
                      transition-all duration-300`}>
                      ↗
                    </span>
                  </div>

                  <h3 className={`text-xl font-bold text-slate-900 dark:text-white
                    group-hover:bg-gradient-to-r group-hover:${accent.from} group-hover:${accent.to}
                    group-hover:bg-clip-text group-hover:text-transparent
                    transition-all duration-300`}>
                    {t[item.titleKey as keyof typeof t]}
                  </h3>

                  <p className='text-sm text-slate-500 dark:text-slate-400 leading-relaxed'>
                    {t[item.descriptionKey as keyof typeof t]}
                  </p>
                </div>

                {item.tagsKey && (
                  <div className='flex flex-wrap gap-2 mt-6 pt-5 border-t border-slate-100 dark:border-slate-800/60 relative z-10'>
                    {t[item.tagsKey as keyof typeof t].split(', ').map((tag: string, tIdx: number) => (
                      <span
                        key={tIdx}
                        className={`text-[11px] px-2.5 py-1 rounded-md font-semibold border
                          ${accent.tag}
                          transition-all duration-200 group-hover:scale-[1.03]`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
