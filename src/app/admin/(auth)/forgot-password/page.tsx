'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

type Step = 'form' | 'sent';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [step, setStep] = useState<Step>('form');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // ── Firebase: replace with sendPasswordResetEmail(auth, email) ──
  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isEmailValid) return;
    setError('');
    setLoading(true);
    try {
      // TODO: await sendPasswordResetEmail(auth, email);
      console.log('Reset email sent to:', email);
      setStep('sent');
    } catch (err: any) {
      setError(err.message || 'Failed to send reset email. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#07090e] flex items-center justify-center px-4 relative overflow-hidden transition-colors duration-300">

      {/* Ambient glows */}
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-cyan-400/5 dark:bg-cyan-500/8 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-60px] right-[-60px] w-80 h-80 rounded-full bg-violet-500/5 dark:bg-violet-600/8 blur-[100px] pointer-events-none" />

      <div className="w-full max-w-md relative z-10">

        {/* Brand */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex flex-col items-center gap-2 mb-6 group">
            {/* Light mode logo */}
            <Image
              src="/images/logo/logo.svg"
              alt="VinuLabs"
              width={200}
              height={56}
              style={{ width: 'auto', height: '52px' }}
              priority
              className="dark:hidden group-hover:opacity-90 transition-opacity"
            />
            {/* Dark mode logo */}
            <Image
              src="/images/logo/logo-white.svg"
              alt="VinuLabs"
              width={200}
              height={56}
              style={{ width: 'auto', height: '52px' }}
              priority
              className="hidden dark:block group-hover:opacity-90 transition-opacity"
            />
          </Link>

          {step === 'form' ? (
            <>
              {/* Lock icon */}
              <div className="w-14 h-14 rounded-2xl bg-cyan-50 dark:bg-gradient-to-br dark:from-cyan-500/20 dark:to-blue-600/20 border border-cyan-200 dark:border-cyan-500/20 flex items-center justify-center mx-auto mb-4">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-7 h-7 text-cyan-600 dark:text-cyan-400">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                  <path d="M7 11V7a5 5 0 0110 0v4"/>
                </svg>
              </div>
              <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">Forgot password?</h1>
              <p className="text-slate-500 dark:text-slate-400 text-sm mt-2 max-w-xs mx-auto leading-relaxed">
                No worries — enter your email and we&apos;ll send you a reset link.
              </p>
            </>
          ) : (
            <>
              {/* Check icon */}
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 dark:bg-gradient-to-br dark:from-emerald-500/20 dark:to-teal-600/20 border border-emerald-200 dark:border-emerald-500/30 flex items-center justify-center mx-auto mb-4 animate-[bounce_1s_ease-in-out_1]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7 text-emerald-600 dark:text-emerald-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">Check your inbox</h1>
              <p className="text-slate-500 dark:text-slate-400 text-sm mt-2 max-w-xs mx-auto leading-relaxed">
                We sent a password reset link to{' '}
                <span className="text-cyan-600 dark:text-cyan-400 font-semibold">{email}</span>
              </p>
            </>
          )}
        </div>

        {/* Card */}
        <div className="bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800/80 backdrop-blur-xl rounded-2xl p-8 shadow-xl shadow-slate-200/50 dark:shadow-black/40 transition-colors duration-300">

          {step === 'form' ? (
            <>
              {/* Error */}
              {error && (
                <div className="mb-4 px-4 py-3 rounded-xl bg-rose-50 dark:bg-rose-500/10 border border-rose-200 dark:border-rose-500/30 text-rose-600 dark:text-rose-400 text-xs flex items-center gap-2">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 shrink-0"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/></svg>
                  {error}
                </div>
              )}

              <form onSubmit={handleReset} className="space-y-5" noValidate>
                <div>
                  <label htmlFor="reset-email" className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5">
                    Email address
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500">
                      <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/></svg>
                    </span>
                    <input
                      id="reset-email"
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="Enter your registered email"
                      autoComplete="email"
                      className={`w-full pl-10 pr-10 py-3 rounded-xl
                        bg-slate-50 dark:bg-slate-800/60
                        text-slate-900 dark:text-white text-sm
                        placeholder-slate-400 dark:placeholder-slate-500
                        focus:outline-none focus:ring-2 focus:ring-cyan-500/60 focus:border-cyan-500/60
                        transition-all duration-200 border
                        ${email.length > 0 && !isEmailValid
                          ? 'border-rose-400 dark:border-rose-500/50'
                          : 'border-slate-200 dark:border-slate-700'}`}
                    />
                    {isEmailValid && (
                      <span className="absolute right-3.5 top-1/2 -translate-y-1/2">
                        <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-emerald-500 dark:text-emerald-400"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                      </span>
                    )}
                  </div>
                  {email.length > 0 && !isEmailValid && (
                    <p className="text-rose-500 dark:text-rose-400 text-[11px] mt-1 ml-1">Enter a valid email address</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={loading || !isEmailValid}
                  className="w-full py-3 px-6 rounded-xl
                    bg-gradient-to-r from-cyan-500 to-blue-600
                    text-white font-bold text-sm
                    shadow-lg shadow-cyan-500/25
                    hover:shadow-cyan-500/40 hover:-translate-y-0.5
                    disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
                    transition-all duration-200 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/></svg>
                      Sending reset link…
                    </>
                  ) : (
                    <>
                      <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/></svg>
                      Send Reset Link
                    </>
                  )}
                </button>
              </form>
            </>
          ) : (
            /* ── Sent State ── */
            <div className="space-y-5">
              <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-sm text-center">
                Reset link sent! Please check your email (including spam folder).
              </div>

              <p className="text-slate-500 dark:text-slate-400 text-xs text-center leading-relaxed">
                Didn&apos;t receive it?{' '}
                <button
                  onClick={() => { setStep('form'); setError(''); }}
                  className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 font-semibold transition-colors"
                >
                  Try again
                </button>
                {' '}with a different email or check your spam folder.
              </p>

              <Link
                href="/admin/login"
                className="w-full py-3 px-6 rounded-xl flex items-center justify-center gap-2
                  bg-gradient-to-r from-cyan-500 to-blue-600
                  text-white font-bold text-sm
                  shadow-lg shadow-cyan-500/25
                  hover:shadow-cyan-500/40 hover:-translate-y-0.5
                  transition-all duration-200"
              >
                ← Back to Sign In
              </Link>
            </div>
          )}

          {step === 'form' && (
            <p className="text-center text-xs text-slate-400 dark:text-slate-500 mt-6">
              Remember your password?{' '}
              <Link href="/admin/login" className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 font-semibold transition-colors">
                Sign in
              </Link>
            </p>
          )}
        </div>

        <p className="text-center text-xs text-slate-400 dark:text-slate-600 mt-6">
          <Link href="/" className="hover:text-slate-600 dark:hover:text-slate-400 transition-colors">← Back to VinuLabs.com</Link>
        </p>
      </div>
    </div>
  );
}
