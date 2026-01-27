'use client';

import { motion } from 'framer-motion';

export default function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large gradient orb - top right */}
      <motion.div
        className="absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-30"
        style={{
          background: 'radial-gradient(circle, var(--accent-primary) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Medium gradient orb - bottom left */}
      <motion.div
        className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, var(--accent-secondary) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Floating cube 1 */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-16 h-16"
        style={{
          background: 'linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-secondary) 100%)',
          borderRadius: '20%',
        }}
        animate={{
          y: [0, -30, 0],
          rotate: [0, 90, 180, 270, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Floating cube 2 */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-10 h-10 opacity-60"
        style={{
          background: 'linear-gradient(135deg, var(--accent-secondary) 0%, var(--accent-tertiary) 100%)',
          borderRadius: '30%',
        }}
        animate={{
          y: [0, 20, 0],
          x: [0, 10, 0],
          rotate: [0, -90, -180, -270, -360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Floating sphere */}
      <motion.div
        className="absolute bottom-1/3 right-1/3 w-8 h-8 rounded-full opacity-50"
        style={{
          background: 'var(--gradient-primary)',
          boxShadow: 'var(--glow-primary)',
        }}
        animate={{
          y: [0, -40, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Small floating dots */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-[var(--accent-primary)]"
          style={{
            top: `${20 + i * 15}%`,
            left: `${10 + i * 20}%`,
            opacity: 0.4 + i * 0.1,
          }}
          animate={{
            y: [0, -20 - i * 5, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.5,
          }}
        />
      ))}

      {/* Grid lines - decorative */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(var(--accent-primary) 1px, transparent 1px),
            linear-gradient(90deg, var(--accent-primary) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
    </div>
  );
}
