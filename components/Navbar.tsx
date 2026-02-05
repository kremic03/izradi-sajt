'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/LanguageContext';
import BubbleMenu from './ui/BubbleMenu';

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [activeSection, setActiveSection] = useState('');
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);


  const navLinks = [
    { href: '#about', label: t.nav.about },
    { href: '#services', label: t.nav.services },
    { href: '#portfolio', label: t.nav.portfolio },
    { href: '#contact', label: t.nav.contact },
  ];

  const bubbleItems = navLinks.map((link, i) => ({
    label: link.label,
    href: link.href,
    ariaLabel: link.label,
    rotation: i % 2 === 0 ? -8 : 8,
    hoverStyles: {
      bgColor: '#8b5cf6',
      textColor: '#ffffff'
    }
  }));

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Detekcija smera scroll-a
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling DOWN & past 100px → hide
        setIsVisible(false);
      } else {
        // Scrolling UP or at top → show
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);

      // Active section detection
      const sections = ['about', 'services', 'portfolio', 'testimonials', 'faq', 'contact'];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'sr' ? 'en' : 'sr');
  };

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="fixed top-0 left-0 right-0 z-50 glass py-5 hidden md:block"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#"
              className="text-2xl sm:text-3xl font-bold gradient-text whitespace-nowrap overflow-hidden text-ellipsis max-w-[200px] sm:max-w-none"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              Nikola Kremić
            </motion.a>

            {/* Desktop Navigation */}
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`relative text-base font-semibold transition-colors duration-300 ${
                    activeSection === link.href.slice(1)
                      ? 'text-[var(--text-primary)]'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                  whileHover={{ y: -2 }}
                >
                  {link.label}
                  {activeSection === link.href.slice(1) && (
                    <motion.span
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.a>
              ))}

              {/* Language Toggle Button */}
              <motion.button
                onClick={toggleLanguage}
                className="px-4 py-2 rounded-full border border-[var(--border-color)] text-base font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-primary)] transition-all duration-300 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle language"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                {language === 'sr' ? 'EN' : 'SR'}
              </motion.button>

              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#contact');
                }}
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white text-base font-semibold hover:shadow-[var(--glow-primary)] transition-shadow duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t.hero.contact}
              </motion.a>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile BubbleMenu */}
      <div className="md:hidden">
        <BubbleMenu
          logo={
            <span
              className="font-bold text-white text-lg cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              NK
            </span>
          }
          items={bubbleItems}
          menuAriaLabel="Toggle navigation"
          menuBg="linear-gradient(135deg, #8b5cf6 0%, #a855f7 50%, #c084fc 100%)"
          menuContentColor="#ffffff"
          useFixedPosition={true}
          animationEase="back.out(1.5)"
          animationDuration={0.5}
          staggerDelay={0.12}
          onItemClick={(href) => handleNavClick(href)}
          hidden={!isVisible}
        />
      </div>
    </>
  );
}
