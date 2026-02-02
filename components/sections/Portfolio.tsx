'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import SectionTitle from '../ui/SectionTitle';
import { useLanguage } from '@/lib/LanguageContext';

// Project image URLs - koristi Unsplash za placeholder slike
// Kada budeš imao svoje slike, zameni ove URL-ove sa: /projects/project-1.jpg, itd.
const projectImages = [
  'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80', // E-commerce
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80', // Portfolio
  'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80', // Job Finder (mobile app)
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80', // Restaurant
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80', // CRM Dashboard
  'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80', // Blog
];

const projectMeta = [
  { categoryIndex: 1, tags: ['Next.js', 'MongoDB', 'Stripe'], gradient: 'from-blue-500 to-purple-600' },
  { categoryIndex: 0, tags: ['React', 'Tailwind', 'Framer Motion'], gradient: 'from-pink-500 to-rose-600' },
  { categoryIndex: 2, tags: ['Kotlin', 'Android', 'Firebase'], gradient: 'from-green-500 to-emerald-600' },
  { categoryIndex: 0, tags: ['Next.js', 'Tailwind', 'Firebase'], gradient: 'from-orange-500 to-amber-600' },
  { categoryIndex: 2, tags: ['React', 'Express', 'MongoDB'], gradient: 'from-cyan-500 to-blue-600' },
  { categoryIndex: 2, tags: ['Next.js', 'Prisma', 'PostgreSQL'], gradient: 'from-violet-500 to-purple-600' },
];

export default function Portfolio() {
  const { t } = useLanguage();
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  // Build projects with translations
  const projects = t.portfolio.projects.map((project, index) => ({
    id: index + 1,
    title: project.title,
    description: project.description,
    categoryIndex: projectMeta[index].categoryIndex,
    category: t.portfolio.categories[projectMeta[index].categoryIndex + 1], // +1 because first is "All"
    tags: projectMeta[index].tags,
    gradient: projectMeta[index].gradient,
    image: projectImages[index],
  }));

  const filteredProjects = activeCategoryIndex === 0
    ? projects
    : projects.filter((project) => project.categoryIndex === activeCategoryIndex - 1);

  return (
    <section id="portfolio" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title={t.portfolio.title}
          subtitle={t.portfolio.subtitle}
        />

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {t.portfolio.categories.map((category: string, index: number) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategoryIndex(index)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategoryIndex === index
                  ? 'bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white shadow-[var(--glow-primary)]'
                  : 'glass text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -10 }}
                whileTap={{ scale: 0.98 }}
                className="group cursor-pointer touch-manipulation"
              >
                <div className="relative overflow-hidden rounded-2xl glass">
                  {/* Project Image */}
                  <div className="aspect-video relative overflow-hidden bg-[var(--bg-secondary)]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      loading="lazy"
                    />

                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 mix-blend-overlay`} />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1.1 }}
                        className="w-12 h-12 rounded-full bg-white flex items-center justify-center"
                      >
                        <svg className="w-6 h-6 text-[var(--bg-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </motion.div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-5">
                    <span className="text-xs text-[var(--accent-primary)] font-medium uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="text-lg font-bold text-[var(--text-primary)] mt-1 mb-2 group-hover:gradient-text transition-all">
                      {project.title}
                    </h3>
                    <p className="text-[var(--text-secondary)] text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag: string) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs rounded-md bg-[var(--bg-secondary)] text-[var(--text-muted)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* More projects hint */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-[var(--text-muted)] mt-10"
        >
          {t.portfolio.note}
        </motion.p>
      </div>
    </section>
  );
}
