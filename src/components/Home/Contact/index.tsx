'use client'
import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import { useLanguage } from '@/context/LanguageContext'

const Contactform = () => {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '', email: '', company: '', phone: '', service: 'General Inquiry', message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Update service when language changes
  React.useEffect(() => {
    setFormData(prev => ({ ...prev, service: t.contactFormSubject }));
  }, [t]);

  // Listen for custom event to open modal from Hero section
  React.useEffect(() => {
    const handleOpenModal = () => setIsModalOpen(true);
    window.addEventListener('openConversationModal', handleOpenModal);
    return () => window.removeEventListener('openConversationModal', handleOpenModal);
  }, []);

  // Auto-open modal if URL has #contact hash
  React.useEffect(() => {
    if (window.location.hash === '#contact') {
      setIsModalOpen(true);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Generate mailto link
    const subject = encodeURIComponent(`New Contact Form Submission: ${formData.service}`);
    const body = encodeURIComponent(`
New Contact Form Submission

Service Type: ${formData.service}
Full Name: ${formData.name}
Company: ${formData.company}
Email: ${formData.email}
Phone: ${formData.phone}

Message:
${formData.message}

Submitted: ${new Date().toLocaleString()}
    `);
    
    const mailtoLink = `mailto:hello@vinulabs.lk?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Also store in database
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        toast.success('Opening email client...');
        setFormData({ name: '', email: '', company: '', phone: '', service: 'General Inquiry', message: '' });
        setIsModalOpen(false);
      }
    } catch {
      toast.error('Email client opened, but storage failed.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleModalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Generate mailto link
    const subject = encodeURIComponent(`New Conversation Request: ${formData.service}`);
    const body = encodeURIComponent(`
New Conversation Request from VinuLabs Website

Service Type: ${formData.service}
Full Name: ${formData.name}
Company: ${formData.company}
Email: ${formData.email}
Phone: ${formData.phone}

Message:
${formData.message}

Submitted: ${new Date().toLocaleString()}
    `);
    
    const mailtoLink = `mailto:hello@vinulabs.lk?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Also store in database
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        toast.success('Opening email client...');
        setFormData({ name: '', email: '', company: '', phone: '', service: 'General Inquiry', message: '' });
        setIsModalOpen(false);
      }
    } catch {
      toast.error('Email client opened, but storage failed.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className='py-20 bg-[#07090e] relative overflow-hidden' id='contact'>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/8 rounded-full blur-[120px] pointer-events-none' />

      <div className='container mx-auto max-w-7xl px-6 relative z-10'>
        {/* CTA Banner */}
        <div className='relative overflow-hidden text-center max-w-3xl mx-auto mb-16 p-10 rounded-2xl bg-gradient-to-r from-cyan-950/40 to-blue-950/40 border border-cyan-800/30' data-aos='fade-up'>
          <div className='absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-emerald-400 to-violet-500' />
          <span className='inline-block px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 uppercase mb-4'>
            {t.contactTitle}
          </span>
          <h2 className='text-3xl md:text-4xl font-black text-white tracking-tight mb-4'>
            Contact <span className='bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-emerald-400 to-blue-500'>Us</span>
          </h2>
          <p className='text-slate-400 text-sm md:text-base mb-6'>
            {t.contactDesc}
          </p>
          <div className='flex gap-4 justify-center flex-wrap'>
            <button 
              onClick={() => setIsModalOpen(true)}
              className='px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all'
            >
              {t.heroCtaSecondary}
            </button>
          </div>
        </div>

        <div className='grid lg:grid-cols-2 gap-12 items-start'>
          {/* Left - Info */}
          <div className='space-y-8' data-aos='fade-right' data-aos-duration='800'>
            <div>
              <span className='inline-block px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 uppercase mb-4'>
                {t.contactTitle}
              </span>
              <h2 className='text-3xl md:text-4xl font-black text-white tracking-tight leading-tight'>
                Contact <span className='bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-emerald-400 to-blue-500'>Us</span>
              </h2>
              <p className='text-slate-400 text-base mt-4 max-w-md'>
                {t.contactDesc}
              </p>
            </div>

            <div className='space-y-5 pt-4 border-t border-slate-800'>
              <div className='flex items-start gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800'>
                <span className='text-xl'>✉</span>
                <div>
                  <span className='text-xs text-slate-500 uppercase font-mono block mb-1'>{t.footerEmail}</span>
                  <a href='mailto:hello@vinulabs.lk' className='text-white text-sm font-medium hover:text-cyan-400 transition-colors'> hello@vinulabs.lk</a>
                </div>
              </div>
              <div className='flex items-start gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800'>
                <span className='text-xl'>📍</span>
                <div>
                  <span className='text-xs text-slate-500 uppercase font-mono block mb-1'>{t.footerLocation.split('\n')[0]}</span>
                  <span className='text-white text-sm font-medium'>{t.footerLocation.split('\n')[1]}</span>
                </div>
              </div>
              <div className='flex items-start gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800'>
                <span className='text-xl'>🔗</span>
                <div>
                  <span className='text-xs text-slate-500 uppercase font-mono block mb-1'>{t.footerConnect}</span>
                  <div className='flex gap-3 mt-1'>
                    <a href='https://www.linkedin.com/company/vinulab/' target='_blank' rel='noopener noreferrer' className='text-cyan-400 hover:text-cyan-300 text-sm font-semibold transition-colors'>LinkedIn ↗</a>
                    <a href='#' className='text-cyan-400 hover:text-cyan-300 text-sm font-semibold transition-colors'>GitHub ↗</a>
                    <a href='https://www.facebook.com/share/17w2QSNZj1/?mibextid=wwXIfr' className='text-cyan-400 hover:text-cyan-300 text-sm font-semibold transition-colors'>Facebook ↗</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div data-aos='fade-left' data-aos-duration='800'>
            <div className='p-8 rounded-2xl bg-slate-900/70 border border-slate-800 backdrop-blur-xl'>
              <h3 className='text-lg font-bold text-white mb-6'>{t.contactFormTitle}</h3>
              <form onSubmit={handleSubmit} className='space-y-4'>
                <div className='grid grid-cols-2 gap-4'>
                  <input name='name' value={formData.name} onChange={handleChange} type='text' placeholder={t.contactFormFullName} required className='w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-slate-700 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500' />
                  <input name='company' value={formData.company} onChange={handleChange} type='text' placeholder={t.contactFormCompany} className='w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-slate-700 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500' />
                </div>
                <div className='grid grid-cols-2 gap-4'>
                  <input name='email' value={formData.email} onChange={handleChange} type='email' placeholder={t.contactFormEmail} required className='w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-slate-700 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500' />
                  <input name='phone' value={formData.phone} onChange={handleChange} type='tel' placeholder={t.contactFormPhone} className='w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-slate-700 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500' />
                </div>
                <select name='service' value={formData.service} onChange={handleChange} className='w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-slate-700 text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-500'>
                  <option value='General Inquiry'>{t.contactFormSubject}</option>
                  <option value='AI Strategy & Adoption'>{t.service1Title}</option>
                  <option value='Architecture & Engineering'>{t.service2Title}</option>
                  <option value='Business Transformation'>{t.service3Title}</option>
                  <option value='Professional Training'>{t.service4Title}</option>
                  <option value='Applied AI & R&D'>{t.service5Title}</option>
                  <option value='Delivery Leadership'>{t.service6Title}</option>
                </select>
                <textarea name='message' value={formData.message} onChange={handleChange} placeholder={t.contactFormMessage} required rows={5} className='w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-slate-700 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none' />
                <button type='submit' disabled={submitting} className='w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50'>
                  {submitting ? 'Sending...' : t.contactFormSubmit}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Conversation Modal */}
      {isModalOpen && (
        <div className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm'>
          <div className='w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl'>
            <div className='flex items-center justify-between mb-6'>
              <h3 className='text-xl font-bold text-white'>Start a Conversation</h3>
              <button 
                onClick={() => setIsModalOpen(false)}
                className='text-slate-400 hover:text-white transition-colors'
              >
                <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                </svg>
              </button>
            </div>
            
            <form onSubmit={handleModalSubmit} className='space-y-4'>
              <input 
                name='name' 
                value={formData.name} 
                onChange={handleChange} 
                type='text' 
                placeholder={t.contactFormFullName} 
                required 
                className='w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-slate-700 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500' 
              />
              <input 
                name='email' 
                value={formData.email} 
                onChange={handleChange} 
                type='email' 
                placeholder={t.contactFormEmail} 
                required 
                className='w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-slate-700 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500' 
              />
              <input 
                name='company' 
                value={formData.company} 
                onChange={handleChange} 
                type='text' 
                placeholder={t.contactFormCompany} 
                className='w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-slate-700 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500' 
              />
              <input 
                name='phone' 
                value={formData.phone} 
                onChange={handleChange} 
                type='tel' 
                placeholder={t.contactFormPhone} 
                className='w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-slate-700 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500' 
              />
              <select 
                name='service' 
                value={formData.service} 
                onChange={handleChange} 
                className='w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-slate-700 text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-500'
              >
                <option value='General Inquiry'>{t.contactFormSubject}</option>
                <option value='AI Strategy & Adoption'>{t.service1Title}</option>
                <option value='Architecture & Engineering'>{t.service2Title}</option>
                <option value='Business Transformation'>{t.service3Title}</option>
                <option value='Professional Training'>{t.service4Title}</option>
                <option value='Applied AI & R&D'>{t.service5Title}</option>
                <option value='Delivery Leadership'>{t.service6Title}</option>
              </select>
              <textarea 
                name='message' 
                value={formData.message} 
                onChange={handleChange} 
                placeholder={t.contactFormMessage} 
                required 
                rows={4} 
                className='w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-slate-700 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none' 
              />
              <button 
                type='submit' 
                disabled={submitting} 
                className='w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50'
              >
                {submitting ? 'Sending...' : 'Start Conversation ↗'}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  )
}

export default Contactform
