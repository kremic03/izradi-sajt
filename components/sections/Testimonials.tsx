'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import { useLanguage } from '@/lib/LanguageContext';

export default function Testimonials() {
  const { t, language } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const testimonials = t.testimonials.items;

  // IntersectionObserver — prati da li je sekcija u viewportu
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // Auto-rotate samo kad je sekcija vidljiva
  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isVisible, testimonials.length]);

  return (
    <section id="testimonials" ref={sectionRef} className="section-padding relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px"
          style={{
            background: 'linear-gradient(90deg, transparent, var(--accent-primary), transparent)',
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <SectionTitle
          title={t.testimonials.title}
          subtitle={t.testimonials.subtitle}
        />

        {/* Testimonial Carousel */}
        <div key={language} className="relative min-h-[280px] sm:min-h-[240px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="glass rounded-2xl p-6 md:p-10"
            >
              {/* Quote icon */}
              <svg
                className="w-10 h-10 text-[var(--accent-primary)] opacity-40 mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              {/* Tekst recenzije */}
              <p className="text-[var(--text-secondary)] text-base md:text-lg leading-relaxed mb-6 italic">
                &ldquo;{testimonials[activeIndex].text}&rdquo;
              </p>

              {/* Info o klijentu */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] flex items-center justify-center text-white font-bold text-lg">
                  {testimonials[activeIndex].name.charAt(0)}
                </div>
                <div>
                  <p className="text-[var(--text-primary)] font-semibold">
                    {testimonials[activeIndex].name}
                  </p>
                  <p className="text-[var(--text-muted)] text-sm">
                    {testimonials[activeIndex].role}
                  </p>
                </div>

                {/* Zvezdice */}
                <div className="ml-auto flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonials[activeIndex].rating
                          ? 'text-yellow-400'
                          : 'text-[var(--border-color)]'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_: unknown, index: number) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? 'bg-[var(--accent-primary)] w-8'
                  : 'bg-[var(--border-color)] hover:bg-[var(--accent-primary)]/50'
              }`}
              aria-label={`Testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
