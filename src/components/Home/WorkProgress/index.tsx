'use client'
import React from 'react'

const steps = [
  { num: '01', title: 'Understand', desc: 'We listen to your goals, customers, and constraints.' },
  { num: '02', title: 'Shape', desc: 'We transform complexity into a practical strategy.' },
  { num: '03', title: 'Deliver', desc: 'We work alongside your team to create outcomes.' },
  { num: '04', title: 'Enable', desc: 'We transfer knowledge and build capability.' },
  { num: '05', title: 'Scale', desc: 'We support long-term growth and evolution.' },
];

const Progresswork = ({ isColorMode }: { isColorMode: Boolean }) => {
  return (
    <section className='py-20 bg-white dark:bg-[#07090e] transition-colors relative overflow-hidden' id='approach'>
      <div className='absolute top-1/3 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none' />

      <div className='container mx-auto max-w-7xl px-6'>
        <div className='text-center max-w-3xl mx-auto space-y-4 mb-16'>
          <span className='inline-block px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest text-purple-500 dark:text-purple-400 bg-purple-500/10 border border-purple-500/30 uppercase'>
            Our Methodology
          </span>
          <h2 className='text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight' data-aos='fade-up' data-aos-duration='800'>
            How We Work.
          </h2>
          <p className='text-slate-600 dark:text-slate-400 text-base md:text-lg max-w-2xl mx-auto'>
            A structured 5-step engineering and consulting workflow that takes you from ambiguity to sustainable enterprise scale.
          </p>
        </div>

        <div className='max-w-3xl mx-auto mb-16 p-8 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 text-center' data-aos='fade-up' data-aos-duration='600'>
          <p className='text-lg md:text-xl font-semibold text-slate-700 dark:text-slate-200 italic leading-relaxed'>
            &ldquo;Technology creates impact when strategy, systems and people move together.&rdquo;
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6'>
          {steps.map((step, index) => (
            <div
              key={index}
              data-aos='fade-up'
              data-aos-delay={`${index * 120}`}
              data-aos-duration='800'
              className='group relative p-6 rounded-2xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800/80 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1 transition-all duration-300'>
              <span className='text-4xl font-extrabold text-slate-100 dark:text-slate-800 group-hover:text-purple-500/30 transition-colors font-mono block mb-4'>
                {step.num}
              </span>
              <h3 className='text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-purple-500 transition-colors'>
                {step.title}
              </h3>
              <p className='text-xs text-slate-500 dark:text-slate-400 leading-relaxed'>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Progresswork
