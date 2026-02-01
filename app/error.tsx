'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-md"
      >
        <div className="mb-8">
          <div className="text-6xl mb-4">⚠️</div>
          <h1 className="text-3xl font-bold gradient-text mb-4">
            Nešto je pošlo po zlu
          </h1>
          <p className="text-[var(--text-secondary)] mb-2">
            Izvinjavamo se, došlo je do greške.
          </p>
          {error.message && (
            <p className="text-sm text-[var(--text-muted)] font-mono bg-[var(--bg-card)] px-4 py-2 rounded-lg mt-4">
              {error.message}
            </p>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            onClick={reset}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white font-semibold hover:shadow-[var(--glow-primary)] transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Pokušaj ponovo
          </motion.button>

          <motion.a
            href="/"
            className="px-6 py-3 rounded-full glass text-[var(--text-primary)] font-semibold glow-border hover:bg-[var(--bg-card)] transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Nazad na početnu
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}
