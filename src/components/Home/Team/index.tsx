'use client'
import React from 'react'
import Image from 'next/image'
import { teamMembers } from '@/app/api/data'
import { useLanguage } from '@/context/LanguageContext'

const Team = () => {
  const { t } = useLanguage()

  return (
    <section className='py-28 bg-slate-100 dark:bg-[#07090e] transition-colors relative overflow-hidden' id='team'>
      {/* Dynamic Ambient Background Glows */}
      <div className='absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-cyan-500/15 via-emerald-500/15 to-violet-600/15 blur-[160px] pointer-events-none rounded-full' />
      <div className='absolute bottom-10 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none' />
      <div className='absolute top-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-[140px] pointer-events-none' />

      {/* Decorative Subtle Background Grid */}
      <div className='absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none' />

      <div className='container mx-auto max-w-7xl px-6 relative z-10'>
        {/* Section Header */}
        <div className='text-center max-w-3xl mx-auto space-y-5 mb-20'>
          <div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 uppercase shadow-sm'>
            <span className='w-2 h-2 rounded-full bg-cyan-400 animate-pulse' />
            {t.teamTag}
          </div>
          
          <h2 className='text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight' data-aos='fade-up' data-aos-duration='800'>
            Meet Our <span className='bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-emerald-400 to-blue-500'>Strengths</span>
          </h2>

          <p className='text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-normal' data-aos='fade-up' data-aos-delay='100' data-aos-duration='800'>
            {t.teamSubtitle}
          </p>
        </div>

        {/* 3-Column Strength Cards */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10'>
          {teamMembers.map((member, index) => (
            <div
              key={index}
              data-aos='fade-up'
              data-aos-delay={`${index * 150}`}
              data-aos-duration='800'
              className='group relative rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800/90 backdrop-blur-2xl hover:border-cyan-500/50 shadow-xl shadow-slate-200/50 dark:shadow-black/60 hover:shadow-2xl hover:shadow-cyan-500/15 hover:-translate-y-2 transition-all duration-300 flex flex-col overflow-hidden'>
              
              {/* Top Accent Gradient Bar */}
              <div className='h-1.5 w-full bg-gradient-to-r from-cyan-500 via-emerald-400 to-violet-500' />

              <div className='p-8 flex flex-col items-center flex-1 text-center'>
                {/* Profile Image with Glow Ring */}
                <div className='relative w-36 h-36 rounded-2xl overflow-hidden mb-6 ring-4 ring-slate-100 dark:ring-slate-800 group-hover:ring-cyan-500/50 shadow-xl transition-all duration-500 flex items-center justify-center bg-gradient-to-br from-cyan-500/20 via-blue-600/20 to-purple-600/20 shrink-0'>
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={t[member.nameKey as keyof typeof t]}
                      width={180}
                      height={180}
                      className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center w-full h-full bg-slate-800 text-cyan-400">
                      <span className="text-4xl font-extrabold font-mono tracking-wider">
                        {member.initials || 'SV'}
                      </span>
                    </div>
                  )}
                </div>

                {/* Role Pill */}
                <span className='inline-block text-[11px] px-3.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold border border-emerald-500/20 mb-3 tracking-wide uppercase'>
                  {t[member.roleKey as keyof typeof t]}
                </span>

                {/* Leader Name */}
                <h3 className='text-xl md:text-2xl font-black text-slate-900 dark:text-white mb-1 tracking-tight'>
                  {t[member.nameKey as keyof typeof t]}
                </h3>

                {/* Expertise Subtitle */}
                <p className='text-xs text-cyan-600 dark:text-cyan-400 font-mono font-semibold mb-4'>
                  {t[member.expertiseKey as keyof typeof t]}
                </p>

                {/* Core Pillar Highlight Badge */}
                {'badgeText' in member && (
                  <div className='w-full py-2 px-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 text-slate-700 dark:text-slate-300 text-xs font-semibold mb-4 flex items-center justify-center gap-1.5'>
                    <svg viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5 text-cyan-500 shrink-0">
                      <path fillRule="evenodd" d="M8 1.75a.75.75 0 01.692.462l1.41 3.393 3.664.293a.75.75 0 01.428 1.317l-2.791 2.39.854 3.589a.75.75 0 01-1.12.814L8 12.147l-3.137 1.86a.75.75 0 01-1.12-.814l.854-3.589-2.79-2.39a.75.75 0 01.427-1.317l3.664-.293L7.308 2.21A.75.75 0 018 1.75z" clipRule="evenodd"/>
                    </svg>
                    <span>{(member as any).badgeText}</span>
                  </div>
                )}

                {/* Detailed Bio */}
                <p className='text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6 flex-1 text-center'>
                  {member.bioKey ? t[member.bioKey as keyof typeof t] : 'Bio not available'}
                </p>

                {/* Competency Chips / Tags */}
                {'tags' in member && Array.isArray((member as any).tags) && (
                  <div className='w-full flex flex-wrap items-center justify-center gap-1.5 mb-6 pt-2 border-t border-slate-100 dark:border-slate-800/80'>
                    {((member as any).tags as string[]).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className='text-[11px] font-medium px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60 transition-colors group-hover:border-cyan-500/30'>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* LinkedIn Button CTA */}
                <a
                  href={member.linkedin}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-full py-2.5 px-4 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 border border-slate-200 dark:border-slate-700/80 hover:border-cyan-500/40 font-semibold text-xs flex items-center justify-center gap-2 transition-all group/btn mt-auto shadow-sm'>
                  <span>{t.linkedinProfile}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
