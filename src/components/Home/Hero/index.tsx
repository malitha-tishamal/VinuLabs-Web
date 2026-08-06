'use client'
import { getImgPath } from '@/utils/image'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'

const Hero = () => {
  const { t } = useLanguage()

  return (
    <section className='relative md:pt-28 pt-24 pb-16 bg-white dark:bg-[#07090e] transition-colors overflow-hidden'>
      {/* Background ambient glowing orbs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className='container mx-auto max-w-7xl px-6 grid grid-cols-12 gap-8 items-center relative z-10'>
        {/* Left Column: Side-Aligned Hero Content */}
        <div
          className='lg:col-span-6 col-span-12 space-y-6 flex flex-col items-start justify-center'
          data-aos='fade-right'
          data-aos-duration='800'>
          
          <div className='inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-md'>
            <span className='w-2 h-2 rounded-full bg-cyan-400 animate-pulse'></span>
            <span className='font-semibold text-xs text-cyan-600 dark:text-cyan-300 tracking-wide uppercase'>
              {t.heroTagline}
            </span>
          </div>

          <h1 className='text-slate-900 dark:text-white font-extrabold text-4xl sm:text-5xl lg:text-5xl leading-[1.15] tracking-tight'>
            {t.heroTitleLine1} <br />
            <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              {t.heroTitleLine2}
            </span> <br />
            <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-violet-500 bg-clip-text text-transparent">
              {t.heroTitleLine3}
            </span>
          </h1>

          <p className='text-slate-600 dark:text-slate-300 text-lg leading-relaxed max-w-xl'>
            {t.heroDesc}
          </p>

          <div className='flex gap-4 flex-wrap pt-2'>
            <Link
              href='#services'
              className='py-3.5 px-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all duration-200'>
              Explore Our Expertise ↓
            </Link>
            <a
              href='https://www.linkedin.com/company/vinulab/'
              target='_blank'
              rel='noopener noreferrer'
              className='py-3.5 px-8 rounded-full bg-slate-100 dark:bg-slate-800/80 text-slate-800 dark:text-white font-semibold border border-slate-300 dark:border-slate-700/80 hover:bg-slate-200 dark:hover:bg-slate-700/80 transition-all duration-200'>
              Start a Conversation ↗
            </a>
          </div>

          {/* Trust stats & profiles */}
          <div className='flex items-center pt-6 gap-4 border-t border-slate-200 dark:border-slate-800/80 w-full max-w-lg'>
            <div className='flex -space-x-3 overflow-hidden'>
              <Image
                src={getImgPath('/chamil-jeewantha.png')}
                alt='Chamil Jeewantha'
                width={40}
                height={40}
                className='inline-block h-10 w-10 rounded-full ring-2 ring-white dark:ring-slate-900 object-cover'
              />
              <Image
                src={getImgPath('/thamara-waidyarathne.png')}
                alt='Thamara Rangana Waidyarathne'
                width={40}
                height={40}
                className='inline-block h-10 w-10 rounded-full ring-2 ring-white dark:ring-slate-900 object-cover'
              />
              <div className='inline-flex h-10 w-10 items-center justify-center rounded-full ring-2 ring-white dark:ring-slate-900 bg-slate-800 text-cyan-400 font-mono font-bold text-xs'>
                SV
              </div>
            </div>
            <div>
              <p className='text-xs text-slate-500 dark:text-slate-400 font-medium'>
                Strategy · Technology · Capability &nbsp;&bull;&nbsp; 3 Complementary Experts
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Clean Hero Image Illustration */}
        <div
          className="lg:col-span-6 col-span-12 flex justify-center items-center"
          data-aos='fade-left'
          data-aos-duration='800'>
          <div className="relative w-full max-w-lg p-2 rounded-3xl bg-slate-900/40 dark:bg-slate-900/60 border border-slate-700/40 backdrop-blur-xl shadow-2xl overflow-hidden">
            <Image
              src={getImgPath('/images/hero/hero-image.png')}
              alt='VinuLabs Enterprise Technology Solutions'
              width={500}
              height={320}
              priority
              className='w-full h-auto object-cover rounded-2xl'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
