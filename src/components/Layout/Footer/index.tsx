import React, { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getImgPath } from '@/utils/image'

const Footer: FC = () => {
  return (
    <footer className='bg-[#07090e] relative z-1 border-t border-slate-800'>
      <div className='container mx-auto max-w-7xl px-6 py-16'>
        <div className='grid grid-cols-1 md:grid-cols-12 gap-12'>
          {/* Brand Column */}
          <div className='md:col-span-4 space-y-4'>
            <Link href='/' className='inline-block'>
              <Image
                src={getImgPath('/images/logo/logo-white.svg')}
                alt='VinuLabs'
                width={140}
                height={40}
                style={{ width: 'auto', height: 'auto' }}
                quality={85}
                loading='lazy'
              />
            </Link>
            <p className='text-slate-400 text-sm leading-relaxed max-w-xs'>
              Smart strategy. Systems that scale. Ideas that create impact. VinuLabs solves complex technology challenges with AI strategy, enterprise architecture, and professional training.
            </p>
          </div>

          {/* Company Links */}
          <div className='md:col-span-2'>
            <h4 className='text-white font-bold text-sm mb-4'>Company</h4>
            <ul className='space-y-3'>
              <li><Link href='/#about' className='text-slate-400 text-sm hover:text-cyan-400 transition-colors'>About</Link></li>
              <li><Link href='/#team' className='text-slate-400 text-sm hover:text-cyan-400 transition-colors'>Team</Link></li>
              <li><Link href='/#contact' className='text-slate-400 text-sm hover:text-cyan-400 transition-colors'>Contact</Link></li>
            </ul>
          </div>

          {/* Services Links */}
          <div className='md:col-span-3'>
            <h4 className='text-white font-bold text-sm mb-4'>Services</h4>
            <ul className='space-y-3'>
              <li><Link href='/#services' className='text-slate-400 text-sm hover:text-cyan-400 transition-colors'>AI Strategy</Link></li>
              <li><Link href='/#services' className='text-slate-400 text-sm hover:text-cyan-400 transition-colors'>Architecture</Link></li>
              <li><Link href='/#services' className='text-slate-400 text-sm hover:text-cyan-400 transition-colors'>Training</Link></li>
              <li><Link href='/#services' className='text-slate-400 text-sm hover:text-cyan-400 transition-colors'>Transformation</Link></li>
            </ul>
          </div>

          {/* Resources Links */}
          <div className='md:col-span-3'>
            <h4 className='text-white font-bold text-sm mb-4'>Resources</h4>
            <ul className='space-y-3'>
              <li><Link href='/#approach' className='text-slate-400 text-sm hover:text-cyan-400 transition-colors'>Methodology</Link></li>
              <li><a href='https://www.linkedin.com/company/vinulab/' target='_blank' rel='noopener noreferrer' className='text-slate-400 text-sm hover:text-cyan-400 transition-colors'>LinkedIn ↗</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='border-t border-slate-800'>
        <div className='container mx-auto max-w-7xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4'>
          <p className='text-xs text-slate-500'>
            Strategy · Technology · Capability &nbsp;|&nbsp; © {new Date().getFullYear()} VinuLabs Pvt Ltd. All rights reserved.
          </p>
          <div className='flex items-center gap-6 text-xs text-slate-500'>
            <Link href='#' className='hover:text-cyan-400 transition-colors'>Privacy Policy</Link>
            <Link href='#' className='hover:text-cyan-400 transition-colors'>Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
