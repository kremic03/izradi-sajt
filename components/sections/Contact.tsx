'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import { useLanguage } from '@/lib/LanguageContext';

const contactIcons = [
  (
    <svg key="email" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  (
    <svg key="phone" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  ),
  (
    <svg key="location" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
];

const socialLinks = [
  {
    name: 'GitHub',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    ),
    href: 'https://github.com/kremic03',
  },
  {
    name: 'LinkedIn',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    href: 'https://www.linkedin.com/in/nikola-kremic-b4a318257/',
  },
  {
    name: 'Instagram',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
    href: 'https://www.instagram.com/kremic_nikola/',
  },
];

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const contactInfo = [
    { icon: contactIcons[0], label: t.contact.info.email, value: 'nikolakremic15@gmail.com', href: 'mailto:nikolakremic15@gmail.com' },
    { icon: contactIcons[1], label: t.contact.info.phone, value: '+381 60 422 4990', href: 'tel:+381604224990' },
    { icon: contactIcons[2], label: t.contact.info.location, value: t.contact.info.locationValue, href: null },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    try {
      const response = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formData) });
      if (response.ok) { setSubmitStatus('success'); setFormData({ name: '', email: '', message: '' }); }
      else { setSubmitStatus('error'); }
    } catch { setSubmitStatus('error'); }
    finally { setIsSubmitting(false); setTimeout(() => setSubmitStatus('idle'), 5000); }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="section-padding relative bg-[var(--bg-secondary)]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px" style={{ background: 'linear-gradient(90deg, transparent, var(--accent-primary), transparent)' }} />
        <div className="absolute bottom-1/4 -right-40 w-80 h-80 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, var(--accent-secondary) 0%, transparent 70%)' }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionTitle title={t.contact.title} subtitle={t.contact.subtitle} />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4">{t.contact.heading}</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">{t.contact.description}</p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info) => (
                <motion.div key={info.label} whileHover={{ x: 10 }} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-[var(--accent-primary)]">{info.icon}</div>
                  <div>
                    <p className="text-[var(--text-muted)] text-sm">{info.label}</p>
                    {info.href ? (<a href={info.href} className="text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-colors">{info.value}</a>) : (<p className="text-[var(--text-primary)]">{info.value}</p>)}
                  </div>
                </motion.div>
              ))}
            </div>

            <div>
              <p className="text-[var(--text-muted)] text-sm mb-4">{t.contact.social}</p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg glass flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)] transition-all" whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }} aria-label={social.name}>{social.icon}</motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 md:p-8 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[var(--text-secondary)] mb-2">{t.contact.form.name}</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-primary)] transition-colors" placeholder={t.contact.form.namePlaceholder} />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[var(--text-secondary)] mb-2">{t.contact.form.email}</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-primary)] transition-colors" placeholder={t.contact.form.emailPlaceholder} />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[var(--text-secondary)] mb-2">{t.contact.form.message}</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full px-4 py-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-primary)] transition-colors resize-none" placeholder={t.contact.form.messagePlaceholder} />
              </div>
              <motion.button type="submit" disabled={isSubmitting} className="w-full py-4 rounded-xl bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white font-semibold hover:shadow-[var(--glow-primary)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed" whileHover={{ scale: isSubmitting ? 1 : 1.02 }} whileTap={{ scale: isSubmitting ? 1 : 0.98 }}>
                {isSubmitting ? (<span className="flex items-center justify-center gap-2"><svg className="animate-spin h-5 w-5" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" /></svg>{t.contact.form.sending}</span>) : submitStatus === 'success' ? (<span className="flex items-center justify-center gap-2"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>{t.contact.form.success}</span>) : submitStatus === 'error' ? (<span className="flex items-center justify-center gap-2"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>{t.contact.form.error}</span>) : (t.contact.form.submit)}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
