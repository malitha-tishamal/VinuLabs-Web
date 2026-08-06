"use client";

import React, { useState } from "react";
import { ArrowUpRight, CheckCircle } from "./Icons";

export function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    budget: "< $10k",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24 bg-[#07090e]">
      <div className="section-wrapper">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Details & Socials */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
                Get In Touch
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight mb-4">
                Let&apos;s Start a <span className="gradient-text-cyan">Conversation.</span>
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Reach out to discuss your AI roadmap, solution architecture, or custom workforce upskilling needs.
              </p>
            </div>

            {/* Details */}
            <div className="space-y-4 pt-4">
              <div className="glass-card p-4 border-white/10 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-bold flex items-center justify-center shrink-0">
                  ✉
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Email Us</div>
                  <a href="mailto:hello@vinulabs.com" className="text-white font-bold text-sm hover:text-cyan-300">
                    hello@vinulabs.com
                  </a>
                </div>
              </div>

              <div className="glass-card p-4 border-white/10 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-violet-500/10 border border-violet-500/30 text-violet-400 font-bold flex items-center justify-center shrink-0">
                  📞
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Call Us</div>
                  <div className="text-white font-bold text-sm">+94 XX XXX XXXX</div>
                </div>
              </div>

              <div className="glass-card p-4 border-white/10 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold flex items-center justify-center shrink-0">
                  📍
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Location</div>
                  <div className="text-white font-bold text-sm">Sri Lanka</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4 border-t border-white/10">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                Connect With Us
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/company/vinulab/"
                  target="_blank"
                  rel="noreferrer"
                  className="glass-pill text-xs font-semibold hover:text-cyan-300"
                >
                  LinkedIn ↗
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="glass-pill text-xs font-semibold hover:text-cyan-300"
                >
                  GitHub ↗
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="glass-pill text-xs font-semibold hover:text-cyan-300"
                >
                  Facebook ↗
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 sm:p-10 border-white/10 relative">
              {formSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-cyan-500/20 border border-cyan-400 text-cyan-300 flex items-center justify-center text-3xl">
                    ✓
                  </div>
                  <h3 className="text-2xl font-bold text-white">Thank You!</h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto">
                    Your message has been submitted successfully. A VinuLabs director will contact you within 24 hours.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="btn-secondary text-xs mt-4"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-xl font-bold text-white mb-4">
                    Project Discussion & Consultation
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-sm transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-2">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Acme Corp"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-sm transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-sm transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+94 7X XXX XXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-sm transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-2">
                      Estimated Project Budget
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0e1626] border border-white/10 text-white focus:outline-none focus:border-cyan-400 text-sm transition-all"
                    >
                      <option value="< $10k">&lt; $10k USD</option>
                      <option value="$10k - $25k">$10k - $25k USD</option>
                      <option value="$25k - $50k">$25k - $50k USD</option>
                      <option value="$50k+">$50k+ USD</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-2">
                      Message / Project Details *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Tell us about your goals, technical constraints, or training requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-sm transition-all resize-none"
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full py-3.5 text-sm font-semibold">
                    Submit Inquiry ↗
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
