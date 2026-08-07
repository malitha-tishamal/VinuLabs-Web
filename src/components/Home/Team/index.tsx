import React from 'react'
import Image from 'next/image'
import { teamMembers } from '@/app/api/data'

const Team = () => {
  return (
    <section className='py-20 bg-slate-50 dark:bg-[#0b0f17] transition-colors relative overflow-hidden' id='team'>
      <div className='absolute bottom-0 left-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none' />

      <div className='container mx-auto max-w-7xl px-6 relative z-10'>
        <div className='text-center max-w-3xl mx-auto space-y-4 mb-16'>
          <span className='inline-block px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest text-emerald-500 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 uppercase'>
            Leadership & Vision
          </span>
          <h2 className='text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight' data-aos='fade-up' data-aos-duration='800'>
            Our Team.
          </h2>
          <p className='text-slate-600 dark:text-slate-400 text-base md:text-lg max-w-2xl mx-auto'>
            Three perspectives. One shared standard of technical and academic excellence.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {teamMembers.map((member, index) => (
            <div
              key={index}
              data-aos='fade-up'
              data-aos-delay={`${index * 150}`}
              data-aos-duration='800'
              className='group p-8 rounded-2xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800/80 backdrop-blur-xl hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center'>
              
              <div className='w-40 h-40 rounded-2xl overflow-hidden mb-6 ring-2 ring-slate-200 dark:ring-slate-700 group-hover:ring-emerald-500/50 transition-all flex items-center justify-center bg-gradient-to-br from-cyan-500/20 via-blue-600/20 to-purple-600/20'>
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={150}
                    height={150}
                    className='w-full h-full object-cover'
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center w-full h-full bg-slate-800 text-cyan-400">
                    <span className="text-4xl font-extrabold font-mono tracking-wider">
                      {member.initials || 'SV'}
                    </span>
                  </div>
                )}
              </div>

              <span className='text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold border border-emerald-500/20 mb-3'>
                {member.role}
              </span>

              <h3 className='text-lg font-bold text-slate-900 dark:text-white mb-1'>
                {member.name}
              </h3>

              <p className='text-xs text-cyan-600 dark:text-cyan-400 font-mono mb-4'>
                {member.expertise}
              </p>

              <p className='text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6'>
                {member.bio}
              </p>

              <a
                href={member.linkedin}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-1 text-sm text-cyan-500 hover:text-cyan-400 font-semibold transition-colors mt-auto'>
                LinkedIn Profile ↗
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
