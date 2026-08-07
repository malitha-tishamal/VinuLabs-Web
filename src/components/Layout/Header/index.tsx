'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { headerData } from '../Header/Navigation/menuData'
import Logo from './Logo'
import HeaderLink from '../Header/Navigation/HeaderLink'
import MobileHeaderLink from '../Header/Navigation/MobileHeaderLink'
import { useTheme } from 'next-themes'
import { useLanguage, Language } from '@/context/LanguageContext'

const Header: React.FC = () => {
  const pathUrl = usePathname()
  const { theme, setTheme, resolvedTheme } = useTheme()
  const { language, setLanguage, t } = useLanguage()

  const [mounted, setMounted] = useState(false)
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [sticky, setSticky] = useState(false)

  const mobileMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleScroll = () => {
    setSticky(window.scrollY >= 80)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target as Node) &&
      navbarOpen
    ) {
      setNavbarOpen(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [navbarOpen])

  useEffect(() => {
    if (navbarOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [navbarOpen])

  const isDark = mounted && (theme === 'dark' || resolvedTheme === 'dark')

  return (
    <header
      className={`fixed h-20 top-0 py-1 z-50 w-full transition-all ${
        sticky
          ? 'shadow-lg bg-white/90 backdrop-blur-md dark:shadow-dark-md dark:bg-slate-900/90'
          : 'bg-transparent shadow-none'
      }`}>
      <div className='container mx-auto max-w-7xl flex items-center justify-between px-6 py-4'>
        <Logo />
        <nav className='hidden lg:flex grow items-center justify-center gap-6'>
          {headerData.map((item, index) => (
            <HeaderLink key={index} item={item} />
          ))}
        </nav>

        <div className='flex items-center gap-3'>
          {/* Admin Link – right-aligned */}
          <Link
            href="/admin/login"
            className="hidden lg:inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-full border border-cyan-500/40 text-cyan-500 dark:text-cyan-400 hover:bg-cyan-500/10 transition-colors"
          >
            <svg viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5"><path d="M8 8a3 3 0 100-6 3 3 0 000 6zm0 2c-3.866 0-7 1.79-7 4v.5h14V14c0-2.21-3.134-4-7-4z"/></svg>
            {t.navAdmin}
          </Link>
          {/* Language Selector */}
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value as Language)}
            className="bg-slate-100 dark:bg-slate-800 text-xs text-slate-800 dark:text-white border border-slate-300 dark:border-slate-700 rounded-lg px-2 py-1.5 focus:outline-none focus:ring-1 focus:ring-cyan-500 cursor-pointer"
            aria-label="Select Language"
          >
            <option value="en">🇬🇧 EN</option>
            <option value="si">🇱🇰 SI</option>
            <option value="ta">🇱🇰 TA</option>
            <option value="ja">🇯🇵 JP</option>
          </select>

          {/* Theme Toggle */}
          <button
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            className='flex h-9 w-9 items-center justify-center duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-lg border border-slate-300 dark:border-slate-700/50 bg-slate-100 dark:bg-slate-800/40 hover:bg-slate-200 dark:hover:bg-slate-700/50'>
            {mounted ? (
              isDark ? (
                <svg viewBox='0 0 16 16' className='h-5 w-5 fill-amber-300'>
                  <path d='M4.50663 3.2267L3.30663 2.03337L2.36663 2.97337L3.55996 4.1667L4.50663 3.2267ZM2.66663 7.00003H0.666626V8.33337H2.66663V7.00003ZM8.66663 0.366699H7.33329V2.33337H8.66663V0.366699V0.366699ZM13.6333 2.97337L12.6933 2.03337L11.5 3.2267L12.44 4.1667L13.6333 2.97337ZM11.4933 12.1067L12.6866 13.3067L13.6266 12.3667L12.4266 11.1734L11.4933 12.1067ZM13.3333 7.00003V8.33337H15.3333V7.00003H13.3333ZM7.99996 3.6667C5.79329 3.6667 3.99996 5.46003 3.99996 7.6667C3.99996 9.87337 5.79329 11.6667 7.99996 11.6667C10.2066 11.6667 12 9.87337 12 7.6667C12 5.46003 10.2066 3.6667 7.99996 3.6667ZM7.33329 14.9667H8.66663V13H7.33329V14.9667ZM2.36663 12.36L3.30663 13.3L4.49996 12.1L3.55996 11.16L2.36663 12.36Z' />
                </svg>
              ) : (
                <svg viewBox='0 0 23 23' className='h-5 w-5 fill-slate-700'>
                  <path d='M16.6111 15.855C17.591 15.1394 18.3151 14.1979 18.7723 13.1623C16.4824 13.4065 14.1342 12.4631 12.6795 10.4711C11.2248 8.47905 11.0409 5.95516 11.9705 3.84818C10.8449 3.9685 9.72768 4.37162 8.74781 5.08719C5.7759 7.25747 5.12529 11.4308 7.29558 14.4028C9.46586 17.3747 13.6392 18.0253 16.6111 15.855Z' />
                </svg>
              )
            ) : (
              <span className="w-5 h-5" />
            )}
          </button>

          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className='block lg:hidden p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary'
            aria-label={navbarOpen ? 'Close mobile menu' : 'Open mobile menu'}
            aria-expanded={navbarOpen}
            aria-controls='mobile-menu'>
            <span className='block w-6 h-0.5 bg-black dark:bg-white'></span>
            <span className='block w-6 h-0.5 bg-black dark:bg-white mt-1.5'></span>
            <span className='block w-6 h-0.5 bg-black dark:bg-white mt-1.5'></span>
          </button>
        </div>
      </div>

      {navbarOpen && (
        <div className='fixed top-0 left-0 w-full h-full bg-black/50 z-40' onClick={() => setNavbarOpen(false)} />
      )}

      <div
        id="mobile-menu"
        ref={mobileMenuRef}
        className={`lg:hidden fixed top-0 right-0 h-full w-full bg-white dark:bg-slate-900 shadow-lg transform transition-transform duration-300 max-w-xs ${
          navbarOpen ? 'translate-x-0' : 'translate-x-full'
        } z-50`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-menu-title">
        <div className='flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-800'>
          <h2 id="mobile-menu-title" className='text-lg font-bold text-slate-900 dark:text-white'>
            Menu
          </h2>
          <button onClick={() => setNavbarOpen(false)} aria-label='Close mobile menu'>
            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' className='dark:text-white'>
              <path fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
            </svg>
          </button>
        </div>
        <nav className='flex flex-col items-start p-4 gap-2'>
          {headerData.map((item, index) => (
            <MobileHeaderLink key={index} item={item} />
          ))}
          <Link
            href="/admin/login"
            onClick={() => setNavbarOpen(false)}
            className="w-full text-center mt-4 py-2 px-4 rounded-lg bg-cyan-600 text-white font-semibold text-sm hover:bg-cyan-500"
          >
            {t.navAdmin}
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
