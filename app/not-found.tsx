'use client';

import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-[var(--bg-primary)]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-md"
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8"
        >
          <h1 className="text-8xl md:text-9xl font-bold gradient-text mb-2">
            404
          </h1>
          <div className="h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]" />
        </motion.div>

        <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
          Stranica nije pronađena
        </h2>
        <p className="text-[var(--text-secondary)] mb-8">
          Stranica koju tražite ne postoji ili je premeštena.
        </p>

        <motion.a
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white font-semibold hover:shadow-[var(--glow-primary)] transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          Nazad na početnu
        </motion.a>
      </motion.div>
    </div>
  );
}
