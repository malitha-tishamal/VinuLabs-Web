'use client'
import React, { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'

const Footer: FC = () => {
  const { t } = useLanguage()

  return (
    <footer className='bg-[#07090e] relative z-1 border-t border-slate-800'>
      <div className='container mx-auto max-w-7xl px-6 py-16'>
        <div className='grid grid-cols-1 md:grid-cols-12 gap-12'>
          {/* Brand Column */}
          <div className='md:col-span-4 space-y-4'>
            <Link href='/' className='inline-flex items-center gap-3'>
              <Image
                src='/images/logo/logo.png'
                alt='VinuLabs'
                width={140}
                height={40}
                style={{ width: 'auto', height: 'auto' }}
                quality={85}
                loading='lazy'
              />
              <h2 className='text-2xl font-bold'>
                <span className='text-white'>Vinu</span>
                <span className='text-cyan-400'>Labs</span>
              </h2>
            </Link>
            <p className='text-slate-400 text-sm leading-relaxed max-w-xs'>
              {t.footerTagline}
            </p>
          </div>

          {/* Company Links */}
          <div className='md:col-span-2'>
            <h4 className='text-white font-bold text-sm mb-4'>{t.footerCompany}</h4>
            <ul className='space-y-3'>
              <li><Link href='/about' className='text-slate-400 text-sm hover:text-cyan-400 transition-colors'>{t.navAbout}</Link></li>
              <li><Link href='/#team' className='text-slate-400 text-sm hover:text-cyan-400 transition-colors'>{t.navTeam}</Link></li>
              <li><Link href='/contact' className='text-slate-400 text-sm hover:text-cyan-400 transition-colors'>{t.navContact}</Link></li>
            </ul>
          </div>

          {/* Services Links */}
          <div className='md:col-span-3'>
            <h4 className='text-white font-bold text-sm mb-4'>{t.footerServices}</h4>
            <ul className='space-y-3'>
              <li><Link href='/services' className='text-slate-400 text-sm hover:text-cyan-400 transition-colors'>{t.navServices}</Link></li>
              <li><Link href='/portfolio' className='text-slate-400 text-sm hover:text-cyan-400 transition-colors'>{t.navProducts}</Link></li>
              <li><Link href='/industries' className='text-slate-400 text-sm hover:text-cyan-400 transition-colors'>{t.navIndustries}</Link></li>
              <li><Link href='/talent-grooming' className='text-slate-400 text-sm hover:text-cyan-400 transition-colors'>{t.navTalentGrooming}</Link></li>
            </ul>
          </div>

          {/* Resources Links */}
          <div className='md:col-span-3'>
            <h4 className='text-white font-bold text-sm mb-4'>{t.footerResources}</h4>
            <ul className='space-y-3'>
              <li><Link href='/#approach' className='text-slate-400 text-sm hover:text-cyan-400 transition-colors'>{t.navApproach}</Link></li>
              <li><Link href='/blog' className='text-slate-400 text-sm hover:text-cyan-400 transition-colors'>{t.navBlog}</Link></li>
              <li><a href='https://www.linkedin.com/company/vinulab/' target='_blank' rel='noopener noreferrer' className='text-slate-400 text-sm hover:text-cyan-400 transition-colors'>LinkedIn ↗</a></li>
              <li><a href='https://www.facebook.com/share/17w2QSNZj1/?mibextid=wwXIfr' target='_blank' rel='noopener noreferrer' className='text-slate-400 text-sm hover:text-cyan-400 transition-colors'>Facebook ↗</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='border-t border-slate-800'>
        <div className='container mx-auto max-w-7xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4'>
          <p className='text-xs text-slate-500'>
            © {new Date().getFullYear()} VinuLabs Pvt Ltd. {t.footerRights}
          </p>
          <div className='flex items-center gap-6 text-xs text-slate-500'>
            <Link href='#' className='hover:text-cyan-400 transition-colors'>{t.footerPrivacy}</Link>
            <Link href='#' className='hover:text-cyan-400 transition-colors'>{t.footerTerms}</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
