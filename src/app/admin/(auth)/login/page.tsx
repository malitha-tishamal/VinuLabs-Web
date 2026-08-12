'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function AdminLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // ── Firebase: replace with signInWithEmailAndPassword(auth, email, password) ──
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!email || !password) { setError('Please fill in all fields.'); return; }
    setLoading(true);
    try {
      // TODO: await signInWithEmailAndPassword(auth, email, password);
      // router.push('/admin');
      console.log('Login:', email, password);
    } catch (err: any) {
      setError(err.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // ── Firebase: replace with signInWithPopup(auth, googleProvider) ──
  const handleGoogleLogin = async () => {
    setError('');
    setLoading(true);
    try {
      // TODO: const provider = new GoogleAuthProvider();
      // TODO: await signInWithPopup(auth, provider);
      // router.push('/admin');
      console.log('Google Login');
    } catch (err: any) {
      setError(err.message || 'Google sign-in failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#07090e] flex items-center justify-center px-4 relative overflow-hidden transition-colors duration-300">

      {/* Ambient glows — subtle in light mode, vivid in dark */}
      <div className="absolute top-[-80px] left-[-80px] w-96 h-96 rounded-full bg-cyan-400/5 dark:bg-cyan-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-60px] right-[-60px] w-80 h-80 rounded-full bg-violet-500/5 dark:bg-violet-600/10 blur-[100px] pointer-events-none" />

      <div className="w-full max-w-md relative z-10">

        {/* Logo / Brand */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-full bg-cyan-500/10 dark:bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-cyan-500/10">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-cyan-600 dark:text-cyan-400">
              <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.6-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd"/>
            </svg>
          </div>
          <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">Welcome back</h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Sign in to your admin account</p>
        </div>

        {/* Card */}
        <div className="bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800/80 backdrop-blur-xl rounded-2xl p-8 shadow-xl shadow-slate-200/50 dark:shadow-black/40 transition-colors duration-300">

          {/* Google Button */}
          <button
            onClick={handleGoogleLogin}
            disabled={loading}
            className="w-full flex items-center justify-center gap-3 py-3 px-4 rounded-xl
              border border-slate-200 dark:border-slate-700
              bg-slate-50 dark:bg-slate-800/60
              hover:bg-slate-100 dark:hover:bg-slate-700/80
              text-slate-700 dark:text-slate-200 text-sm font-semibold
              transition-all duration-200 hover:border-slate-300 dark:hover:border-slate-600 hover:shadow-md
              disabled:opacity-50 disabled:cursor-not-allowed mb-6"
          >
            {/* Google SVG icon */}
            <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" aria-hidden="true">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Continue with Google
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 h-px bg-slate-200 dark:bg-slate-800" />
            <span className="text-xs text-slate-400 dark:text-slate-500 font-mono">or sign in with email</span>
            <div className="flex-1 h-px bg-slate-200 dark:bg-slate-800" />
          </div>

          {/* Error */}
          {error && (
            <div className="mb-4 px-4 py-3 rounded-xl bg-rose-50 dark:bg-rose-500/10 border border-rose-200 dark:border-rose-500/30 text-rose-600 dark:text-rose-400 text-xs flex items-center gap-2">
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 shrink-0"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/></svg>
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-4" noValidate>
            {/* Email */}
            <div>
              <label htmlFor="login-email" className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5">Email address</label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/></svg>
                </span>
                <input
                  id="login-email"
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="admin@vinulabs.com"
                  autoComplete="email"
                  className="w-full pl-10 pr-4 py-3 rounded-xl
                    bg-slate-50 dark:bg-slate-800/60
                    border border-slate-200 dark:border-slate-700
                    text-slate-900 dark:text-white
                    text-sm placeholder-slate-400 dark:placeholder-slate-500
                    focus:outline-none focus:ring-2 focus:ring-cyan-500/60 focus:border-cyan-500/60
                    transition-all duration-200"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label htmlFor="login-password" className="text-xs font-semibold text-slate-500 dark:text-slate-400">Password</label>
                <Link href="/admin/forgot-password" className="text-xs text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors">
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/></svg>
                </span>
                <input
                  id="login-password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  className="w-full pl-10 pr-12 py-3 rounded-xl
                    bg-slate-50 dark:bg-slate-800/60
                    border border-slate-200 dark:border-slate-700
                    text-slate-900 dark:text-white
                    text-sm placeholder-slate-400 dark:placeholder-slate-500
                    focus:outline-none focus:ring-2 focus:ring-cyan-500/60 focus:border-cyan-500/60
                    transition-all duration-200"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(v => !v)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? (
                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4"><path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd"/><path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"/></svg>
                  ) : (
                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/></svg>
                  )}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-6 rounded-xl mt-2
                bg-gradient-to-r from-cyan-500 to-blue-600
                text-white font-bold text-sm
                shadow-lg shadow-cyan-500/25
                hover:shadow-cyan-500/40 hover:-translate-y-0.5
                disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none
                transition-all duration-200 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/></svg>
                  Signing in…
                </>
              ) : 'Sign In'}
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-xs text-slate-400 dark:text-slate-500 mt-6">
            Don&apos;t have an account?{' '}
            <Link href="/admin/signup" className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 font-semibold transition-colors">
              Create account
            </Link>
          </p>
        </div>

        <p className="text-center text-xs text-slate-400 dark:text-slate-600 mt-6">
          <Link href="/" className="hover:text-slate-600 dark:hover:text-slate-400 transition-colors">← Back to VinuLabs.com</Link>
        </p>
      </div>
    </div>
  );
}
