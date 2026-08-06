'use client'
import React, { useState } from 'react'
import { toast } from 'react-hot-toast'

const Contactform = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', company: '', phone: '', service: 'General Inquiry', message: '',
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        toast.success('Message sent successfully!');
        setFormData({ name: '', email: '', company: '', phone: '', service: 'General Inquiry', message: '' });
      } else {
        toast.error('Failed to send message.');
      }
    } catch {
      toast.error('Network error. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className='py-20 bg-[#07090e] relative overflow-hidden' id='contact'>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/8 rounded-full blur-[120px] pointer-events-none' />

      <div className='container mx-auto max-w-7xl px-6 relative z-10'>
        {/* CTA Banner */}
        <div className='text-center max-w-3xl mx-auto mb-16 p-10 rounded-2xl bg-gradient-to-r from-cyan-950/40 to-blue-950/40 border border-cyan-800/30' data-aos='fade-up'>
          <span className='inline-block px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 uppercase mb-4'>
            Ready for Transformation?
          </span>
          <h2 className='text-2xl md:text-4xl font-extrabold text-white tracking-tight mb-4'>
            Have a challenge worth solving?
          </h2>
          <p className='text-slate-400 text-sm md:text-base mb-6'>
            Let&apos;s explore what a focused strategy, the right architecture, and an enabled team could make possible.
          </p>
          <div className='flex gap-4 justify-center flex-wrap'>
            <a href='https://www.linkedin.com/company/vinulab/' target='_blank' rel='noopener noreferrer' className='px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all'>
              Talk to VinuLabs ↗
            </a>
          </div>
        </div>

        <div className='grid lg:grid-cols-2 gap-12 items-start'>
          {/* Left - Info */}
          <div className='space-y-8' data-aos='fade-right' data-aos-duration='800'>
            <div>
              <span className='inline-block px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 uppercase mb-4'>
                Get In Touch
              </span>
              <h2 className='text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight'>
                Let&apos;s Start a Conversation.
              </h2>
              <p className='text-slate-400 text-base mt-4 max-w-md'>
                Reach out to discuss your AI roadmap, solution architecture, or custom workforce upskilling needs.
              </p>
            </div>

            <div className='space-y-5 pt-4 border-t border-slate-800'>
              <div className='flex items-start gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800'>
                <span className='text-xl'>✉</span>
                <div>
                  <span className='text-xs text-slate-500 uppercase font-mono block mb-1'>Email Us</span>
                  <span className='text-white text-sm font-medium'>hello@vinulabs.com</span>
                </div>
              </div>
              <div className='flex items-start gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800'>
                <span className='text-xl'>📍</span>
                <div>
                  <span className='text-xs text-slate-500 uppercase font-mono block mb-1'>Location</span>
                  <span className='text-white text-sm font-medium'>Sri Lanka</span>
                </div>
              </div>
              <div className='flex items-start gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800'>
                <span className='text-xl'>🔗</span>
                <div>
                  <span className='text-xs text-slate-500 uppercase font-mono block mb-1'>Connect</span>
                  <div className='flex gap-3 mt-1'>
                    <a href='https://www.linkedin.com/company/vinulab/' target='_blank' rel='noopener noreferrer' className='text-cyan-400 hover:text-cyan-300 text-sm font-semibold transition-colors'>LinkedIn ↗</a>
                    <a href='#' className='text-cyan-400 hover:text-cyan-300 text-sm font-semibold transition-colors'>GitHub ↗</a>
                    <a href='#' className='text-cyan-400 hover:text-cyan-300 text-sm font-semibold transition-colors'>Facebook ↗</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div data-aos='fade-left' data-aos-duration='800'>
            <div className='p-8 rounded-2xl bg-slate-900/70 border border-slate-800 backdrop-blur-xl'>
              <h3 className='text-lg font-bold text-white mb-6'>Project Discussion & Consultation</h3>
              <form onSubmit={handleSubmit} className='space-y-4'>
                <div className='grid grid-cols-2 gap-4'>
                  <input name='name' value={formData.name} onChange={handleChange} type='text' placeholder='Full Name *' required className='w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-slate-700 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500' />
                  <input name='company' value={formData.company} onChange={handleChange} type='text' placeholder='Company Name *' className='w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-slate-700 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500' />
                </div>
                <div className='grid grid-cols-2 gap-4'>
                  <input name='email' value={formData.email} onChange={handleChange} type='email' placeholder='Email Address *' required className='w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-slate-700 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500' />
                  <input name='phone' value={formData.phone} onChange={handleChange} type='tel' placeholder='Phone Number' className='w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-slate-700 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500' />
                </div>
                <select name='service' value={formData.service} onChange={handleChange} className='w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-slate-700 text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-500'>
                  <option value='General Inquiry'>General Inquiry</option>
                  <option value='AI Strategy & Adoption'>AI Strategy & Adoption</option>
                  <option value='Architecture & Engineering'>Architecture & Engineering</option>
                  <option value='Business Transformation'>Business Transformation</option>
                  <option value='Professional Training'>Professional Training</option>
                  <option value='Applied AI & R&D'>Applied AI & R&D</option>
                  <option value='Delivery Leadership'>Delivery Leadership</option>
                </select>
                <textarea name='message' value={formData.message} onChange={handleChange} placeholder='Tell us about your goals, technical constraints, or training requirements...' required rows={5} className='w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-slate-700 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none' />
                <button type='submit' disabled={submitting} className='w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50'>
                  {submitting ? 'Sending...' : 'Submit Inquiry ↗'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contactform
