import React from 'react'
import { Servicebox } from '@/app/api/data'

const Services = () => {
  return (
    <section className='bg-slate-50 dark:bg-[#0b0f17] transition-colors py-20' id='services'>
      <div className='container mx-auto max-w-7xl px-6'>
        <div className='text-center max-w-3xl mx-auto space-y-4 mb-16'>
          <span className='inline-block px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest text-cyan-500 dark:text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 uppercase'>
            Our Capabilities
          </span>
          <h2
            className='text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight'
            data-aos='fade-up'
            data-aos-duration='800'>
            End-to-End Expertise.<br/>
            <span className='bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>Connected outcomes.</span>
          </h2>
          <p className='text-slate-600 dark:text-slate-400 text-base md:text-lg max-w-2xl mx-auto'>
            Focused capabilities designed to solve immediate technical barriers while laying the groundwork for long-term growth.
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {Servicebox.map((item, index) => (
            <div
              key={index}
              data-aos='fade-up'
              data-aos-delay={`${index * 100}`}
              data-aos-duration='800'
              className='group relative p-8 rounded-2xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800/80 backdrop-blur-xl hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between'>
              
              <div className='space-y-5'>
                <div className='flex items-center justify-between'>
                  <span className='text-4xl font-extrabold text-slate-200 dark:text-slate-800 group-hover:text-cyan-500/30 transition-colors font-mono'>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className='text-cyan-500 dark:text-cyan-400 text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform'>↗</span>
                </div>

                <h3 className='text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-500 transition-colors'>
                  {item.title}
                </h3>

                <p className='text-sm text-slate-500 dark:text-slate-400 leading-relaxed'>
                  {item.description}
                </p>
              </div>

              {item.tags && (
                <div className='flex flex-wrap gap-2 mt-6 pt-5 border-t border-slate-100 dark:border-slate-800/80'>
                  {item.tags.map((tag: string, tIdx: number) => (
                    <span
                      key={tIdx}
                      className='text-[11px] px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700 font-medium'>
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
