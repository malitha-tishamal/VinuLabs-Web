import React from 'react'

const stats = [
  { value: '50+', label: 'Projects Delivered', color: 'text-cyan-400' },
  { value: '20+', label: 'Industry Partners', color: 'text-purple-400' },
  { value: '5000+', label: 'Professionals Trained', color: 'text-emerald-400' },
  { value: '10+', label: 'Years of Experience', color: 'text-amber-400' },
];

const Counter = ({ isColorMode }: { isColorMode: Boolean }) => {
  return (
    <section className='py-14 bg-white dark:bg-[#07090e] border-y border-slate-200 dark:border-slate-800 transition-colors'>
      <div className='container mx-auto max-w-7xl px-6'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
          {stats.map((item, index) => (
            <div
              key={index}
              className='text-center space-y-1'
              data-aos='fade-up'
              data-aos-delay={`${index * 100}`}
              data-aos-duration='800'>
              <span className={`text-4xl md:text-5xl font-extrabold font-mono ${item.color}`}>
                {item.value}
              </span>
              <p className='text-xs md:text-sm text-slate-500 dark:text-slate-400 font-medium'>
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Counter
