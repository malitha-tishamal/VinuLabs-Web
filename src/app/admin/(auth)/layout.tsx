'use client';

import React from 'react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

/* ── Inline theme toggle so auth pages need no Header/Footer ── */
function AuthThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = resolvedTheme === 'dark';
  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="fixed top-4 right-4 z-50 w-10 h-10 rounded-xl
        bg-white/80 dark:bg-slate-800/80
        border border-slate-200 dark:border-slate-700
        backdrop-blur-md shadow-lg
        text-slate-600 dark:text-slate-300
        hover:text-slate-900 dark:hover:text-white
        hover:bg-white dark:hover:bg-slate-700
        transition-all duration-200
        flex items-center justify-center"
    >
      {isDark ? (
        /* Sun icon – switch to light */
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"/>
        </svg>
      ) : (
        /* Moon icon – switch to dark */
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd"/>
        </svg>
      )}
    </button>
  );
}

export default function AdminAuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="fixed top-4 left-4 z-50">
        <Link href="/" className="flex flex-col">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo/logo.png"
              alt="VinuLabs - Innovating with Vision, Novelty, and Unity"
              width={140}
              height={40}
              style={{ width: 'auto', height: '36px' }}
              quality={100}
              priority
            />
            <h2 className='text-xl sm:text-2xl font-bold'>
              <span className='text-white dark:text-white'>Vinu</span>
              <span className='text-cyan-400 dark:text-cyan-400'>Labs</span>
            </h2>
          </div>
          <p className='text-white text-[10px] sm:text-xs font-bold text-center mt-1'>
            Innovating with Vision,<br/>
            Novelty, and Unity
          </p>
        </Link>
      </div>
      <AuthThemeToggle />
      {children}
    </>
  );
}
