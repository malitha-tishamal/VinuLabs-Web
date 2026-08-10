'use client'
import { getImgPath } from '@/utils/image'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'

/* ─── Orbital background diagram (matches the provided design screenshots) ─── */
const OrbitalDiagram = () => (
  <div className="relative w-full max-w-[520px] aspect-square select-none" aria-hidden="true">

    {/* ── Dark-mode glow layer ── */}
    <div className="absolute inset-0 rounded-full bg-gradient-radial-dark dark:opacity-100 opacity-0 transition-opacity duration-500
      [background:radial-gradient(circle_at_60%_40%,rgba(99,102,241,0.18)_0%,transparent_65%),radial-gradient(circle_at_30%_70%,rgba(6,182,212,0.18)_0%,transparent_60%)]" />

    {/* ── Light-mode glow layer ── */}
    <div className="absolute inset-0 rounded-full opacity-100 dark:opacity-0 transition-opacity duration-500
      [background:radial-gradient(circle_at_50%_50%,rgba(196,181,253,0.35)_0%,rgba(224,231,255,0.2)_40%,transparent_70%)]" />

    {/* SVG rings + dots + labels */}
    <svg
      viewBox="0 0 520 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 w-full h-full"
    >
      {/* ── Concentric rings (dark) ── */}
      {/* Outer ring – solid */}
      <circle cx="260" cy="260" r="230"
        className="stroke-slate-700/40 dark:stroke-slate-500/30"
        strokeWidth="1" />
      {/* Middle ring – dashed */}
      <circle cx="260" cy="260" r="165"
        className="stroke-slate-600/50 dark:stroke-slate-400/25"
        strokeWidth="1" strokeDasharray="6 5" />
      {/* Inner ring – solid */}
      <circle cx="260" cy="260" r="100"
        className="stroke-slate-500/40 dark:stroke-slate-400/20"
        strokeWidth="1" />

      {/* ── Center orb ── */}
      {/* Dark mode center */}
      <circle cx="260" cy="260" r="72"
        className="fill-[#0d1117] dark:fill-[#0b0d1a] stroke-slate-700/50 dark:stroke-indigo-700/50"
        strokeWidth="1.5" />
      {/* Light mode center fill override */}
      <circle cx="260" cy="260" r="72"
        className="fill-white/90 dark:fill-transparent stroke-slate-200/80 dark:stroke-transparent"
        strokeWidth="1.5" />

      {/* ── Orbital dots – Cyan ── */}
      {/* Top-left cyan (on middle ring) */}
      <circle cx="140" cy="165" r="6"
        className="fill-cyan-400 dark:fill-cyan-400"
        filter="url(#glowCyan)" />
      {/* Right-mid cyan (on outer ring) */}
      <circle cx="420" cy="290" r="5.5"
        className="fill-cyan-400 dark:fill-cyan-300"
        filter="url(#glowCyan)" />
      {/* Bottom-right cyan (on inner ring) */}
      <circle cx="340" cy="342" r="5"
        className="fill-cyan-400 dark:fill-cyan-400"
        filter="url(#glowCyan)" />

      {/* ── Orbital dots – Purple / Violet ── */}
      {/* Center-left purple (on middle ring) */}
      <circle cx="120" cy="290" r="5.5"
        className="fill-violet-500 dark:fill-violet-400"
        filter="url(#glowPurple)" />
      {/* Top-right purple (on inner ring) */}
      <circle cx="310" cy="162" r="5"
        className="fill-violet-400 dark:fill-violet-400"
        filter="url(#glowPurple)" />
      {/* Bottom-right larger purple (on outer ring) */}
      <circle cx="390" cy="390" r="6"
        className="fill-violet-500 dark:fill-violet-400"
        filter="url(#glowPurple)" />

      {/* ── Glow filters ── */}
      <defs>
        <filter id="glowCyan" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="3.5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="glowPurple" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
    </svg>

    {/* ── Center text ── */}
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
      <span className="text-[10px] font-bold tracking-[0.25em] uppercase
        text-cyan-500 dark:text-cyan-400 mb-1">
        VINULABS
      </span>
      <p className="text-slate-800 dark:text-white font-bold text-xl leading-snug">
        Ideas to<br />impact.
      </p>
    </div>

    {/* ── Floating label pills ── */}
    {/* Strategy – top right */}
    <div className="absolute top-[12%] right-[6%] flex items-center gap-1.5 px-3 py-1.5
      rounded-full border shadow-sm text-xs font-semibold
      bg-white/90 dark:bg-slate-800/80
      border-slate-200 dark:border-slate-700/60
      text-slate-700 dark:text-slate-200
      backdrop-blur-md">
      <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
      Strategy
    </div>
    {/* People – left */}
    <div className="absolute top-[38%] left-[2%] flex items-center gap-1.5 px-3 py-1.5
      rounded-full border shadow-sm text-xs font-semibold
      bg-white/90 dark:bg-slate-800/80
      border-slate-200 dark:border-slate-700/60
      text-slate-700 dark:text-slate-200
      backdrop-blur-md">
      <span className="w-2 h-2 rounded-full bg-violet-400 shrink-0" />
      People
    </div>
    {/* Technology – bottom center-left */}
    <div className="absolute bottom-[14%] left-[16%] flex items-center gap-1.5 px-3 py-1.5
      rounded-full border shadow-sm text-xs font-semibold
      bg-white/90 dark:bg-slate-800/80
      border-slate-200 dark:border-slate-700/60
      text-slate-700 dark:text-slate-200
      backdrop-blur-md">
      <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
      Technology
    </div>
  </div>
)

const Hero = () => {
  const { t } = useLanguage()

  return (
    <section className='relative md:pt-28 pt-24 pb-16 overflow-hidden transition-colors
      bg-white dark:bg-[#07090e]'>

      {/* ── Background ambient glows (section-level) ── */}
      {/* Dark mode: blue glow top-left */}
      <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full pointer-events-none
        bg-blue-900/60 dark:bg-blue-900/40 blur-[120px] opacity-0 dark:opacity-100 transition-opacity duration-500" />
      {/* Dark mode: purple glow top-right */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none
        bg-purple-800/40 blur-[100px] opacity-0 dark:opacity-60 transition-opacity duration-500" />

      {/* Light mode: lavender glow top-left */}
      <div className="absolute -top-10 -left-10 w-96 h-96 rounded-full pointer-events-none
        bg-indigo-200/60 blur-[100px] opacity-100 dark:opacity-0 transition-opacity duration-500" />
      {/* Light mode: light blue glow right */}
      <div className="absolute top-10 right-20 w-72 h-72 rounded-full pointer-events-none
        bg-purple-200/50 blur-[80px] opacity-100 dark:opacity-0 transition-opacity duration-500" />

      <div className='container mx-auto max-w-7xl px-6 grid grid-cols-12 gap-8 items-center relative z-10'>

        {/* ── Left Column: Hero Content ── */}
        <div
          className='lg:col-span-6 col-span-12 space-y-6 flex flex-col items-start justify-center'
          data-aos='fade-right'
          data-aos-duration='800'>

          <div className='inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-md'>
            <span className='w-2 h-2 rounded-full bg-cyan-400 animate-pulse' />
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
              {t.heroCtaPrimary}
            </Link>
            <button
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                  setTimeout(() => {
                    window.dispatchEvent(new CustomEvent('openConversationModal'));
                  }, 800);
                }
              }}
              className='py-3.5 px-8 rounded-full bg-slate-100 dark:bg-slate-800/80 text-slate-800 dark:text-white font-semibold border border-slate-300 dark:border-slate-700/80 hover:bg-slate-200 dark:hover:bg-slate-700/80 transition-all duration-200'>
              {t.heroCtaSecondary}
            </button>
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
              <Image
                src={getImgPath('/Dr.Sugandima.jpeg')}
                alt='Dr. Sugandima Vidanagamachchi'
                width={40}
                height={40}
                className='inline-block h-10 w-10 rounded-full ring-2 ring-white dark:ring-slate-900 object-cover'
              />
            </div>
            <div>
              <p className='text-xs text-slate-500 dark:text-slate-400 font-medium'>
                {t.expertiseTitle}
              </p>
            </div>
          </div>
        </div>

        {/* ── Right Column: Orbital Diagram ── */}
        <div
          className="lg:col-span-6 col-span-12 flex justify-center items-center py-8"
          data-aos='fade-left'
          data-aos-duration='800'>
          <OrbitalDiagram />
        </div>

      </div>
    </section>
  )
}

export default Hero
