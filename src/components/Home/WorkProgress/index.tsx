'use client'
import React from 'react'

const steps = [
  { num: '01', title: 'Understand', desc: 'We listen to your goals, customers, and constraints.',
    from: 'from-cyan-500',    to: 'to-blue-500',    glow: 'hover:shadow-cyan-500/30',    border: 'hover:border-cyan-500/60' },
  { num: '02', title: 'Shape',      desc: 'We transform complexity into a practical strategy.',
    from: 'from-violet-500',  to: 'to-purple-600',  glow: 'hover:shadow-violet-500/30',  border: 'hover:border-violet-500/60' },
  { num: '03', title: 'Deliver',    desc: 'We work alongside your team to create outcomes.',
    from: 'from-emerald-500', to: 'to-teal-500',    glow: 'hover:shadow-emerald-500/30', border: 'hover:border-emerald-500/60' },
  { num: '04', title: 'Enable',     desc: 'We transfer knowledge and build capability.',
    from: 'from-orange-500',  to: 'to-rose-500',    glow: 'hover:shadow-orange-500/30',  border: 'hover:border-orange-500/60' },
  { num: '05', title: 'Scale',      desc: 'We support long-term growth and evolution.',
    from: 'from-sky-500',     to: 'to-indigo-500',  glow: 'hover:shadow-sky-500/30',     border: 'hover:border-sky-500/60' },
]

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

        {/* Quote block */}
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
              className={`group relative p-6 rounded-2xl overflow-hidden cursor-pointer
                bg-white dark:bg-slate-900/80
                border border-slate-200/80 dark:border-slate-800/80
                backdrop-blur-xl
                ${step.border}
                hover:shadow-2xl ${step.glow}
                hover:-translate-y-2
                transition-all duration-300 ease-out`}>

              {/* Top gradient accent bar */}
              <div className={`absolute top-0 left-0 right-0 h-[3px]
                bg-gradient-to-r ${step.from} ${step.to}
                opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              {/* Corner glow blob */}
              <div className={`absolute -top-6 -right-6 w-24 h-24 rounded-full
                bg-gradient-to-br ${step.from} ${step.to}
                opacity-0 group-hover:opacity-15 blur-xl
                transition-opacity duration-500`} />

              {/* Number badge */}
              <div className='relative z-10 mb-5'>
                <span className={`inline-flex items-center justify-center
                  w-10 h-10 rounded-xl text-sm font-extrabold font-mono
                  bg-gradient-to-br ${step.from} ${step.to}
                  text-white shadow-lg
                  scale-90 group-hover:scale-100
                  transition-transform duration-300`}>
                  {step.num}
                </span>
              </div>

              <h3 className='relative z-10 text-lg font-bold text-slate-900 dark:text-white mb-2
                group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:text-transparent
                transition-all duration-300'
                style={{ backgroundImage: undefined }}>
                {step.title}
              </h3>

              <p className='relative z-10 text-xs text-slate-500 dark:text-slate-400 leading-relaxed'>
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
