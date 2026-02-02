'use client';

import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import { useLanguage } from '@/lib/LanguageContext';

const techStack = [
  {
    name: 'React',
    color: '#61DAFB',
    icon: (
      <svg viewBox="-11.5 -10.23174 23 20.46348" fill="currentColor" className="w-8 h-8">
        <circle cx="0" cy="0" r="2.05" />
        <g stroke="currentColor" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    ),
  },
  {
    name: 'Next.js',
    color: '#ffffff',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.251 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.572 0Zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054Z"/>
      </svg>
    ),
  },
  {
    name: 'TypeScript',
    color: '#3178C6',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125Zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201Zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375V9.938Z"/>
      </svg>
    ),
  },
  {
    name: 'Node.js',
    color: '#339933',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M11.998 24c-.321 0-.641-.084-.922-.247l-2.936-1.737c-.438-.245-.224-.332-.08-.383.585-.203.703-.25 1.328-.604.065-.037.151-.023.218.017l2.256 1.339a.29.29 0 0 0 .272 0l8.795-5.076a.277.277 0 0 0 .134-.238V6.921a.283.283 0 0 0-.137-.242l-8.791-5.072a.278.278 0 0 0-.271 0L3.075 6.68a.284.284 0 0 0-.139.241v10.15a.27.27 0 0 0 .139.235l2.409 1.392c1.307.654 2.108-.116 2.108-.89V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.112.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L2.28 18.675a1.857 1.857 0 0 1-.922-1.604V6.921c0-.659.353-1.275.922-1.603l8.795-5.082c.557-.315 1.296-.315 1.848 0l8.794 5.082c.57.329.924.944.924 1.603v10.15a1.86 1.86 0 0 1-.924 1.604l-8.795 5.078c-.28.163-.6.247-.924.247Zm2.715-6.997c-3.857 0-4.664-1.774-4.664-3.262 0-.141.113-.253.255-.253h1.137c.127 0 .233.092.252.216.172 1.163.683 1.75 3.02 1.75 1.858 0 2.65-.42 2.65-1.406 0-.568-.224-.99-3.112-1.273-2.414-.238-3.906-.772-3.906-2.703 0-1.782 1.502-2.843 4.02-2.843 2.828 0 4.227.981 4.403 3.085a.256.256 0 0 1-.064.19.259.259 0 0 1-.185.081h-1.143a.252.252 0 0 1-.247-.199c-.275-1.22-.943-1.611-2.764-1.611-2.036 0-2.274.71-2.274 1.241 0 .644.28.832 3.015 1.197 2.709.361 4.003.872 4.003 2.762-.001 1.928-1.605 3.028-4.396 3.028Z"/>
      </svg>
    ),
  },
  {
    name: 'MongoDB',
    color: '#47A248',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0 1 11.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 0 0 3.639-8.464c.01-.814-.103-1.662-.197-2.218Zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405Z"/>
      </svg>
    ),
  },
  {
    name: 'Tailwind',
    color: '#06B6D4',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8Zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12Z"/>
      </svg>
    ),
  },
  {
    name: 'Python',
    color: '#3776AB',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/>
      </svg>
    ),
  },
  {
    name: 'SQL',
    color: '#4479A1',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M12 0c6.627 0 12 2.461 12 5.5v13c0 3.039-5.373 5.5-12 5.5S0 21.539 0 18.5v-13C0 2.461 5.373 0 12 0zm0 2c-5.523 0-10 1.791-10 4s4.477 4 10 4 10-1.791 10-4-4.477-4-10-4zM2 8.5v3c0 2.209 4.477 4 10 4s10-1.791 10-4v-3c-2.089 1.546-5.771 2.5-10 2.5S4.089 10.046 2 8.5zm0 5v5c0 2.209 4.477 4 10 4s10-1.791 10-4v-5c-2.089 1.546-5.771 2.5-10 2.5S4.089 15.046 2 13.5z"/>
      </svg>
    ),
  },
];

export default function About() {
  const { t } = useLanguage();

  const stats = [
    { number: '20', label: t.about.stats.projects },
    { number: '10+', label: t.about.stats.clients },
    { number: '4+', label: t.about.stats.experience },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title={t.about.title}
          subtitle={t.about.subtitle}
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
              {t.about.intro} <span className="text-[var(--text-primary)] font-semibold">{t.about.name}</span>,
              {' '}{t.about.description1}
            </p>
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
              {t.about.description2Start} <span className="gradient-text font-semibold">{t.about.responsive}</span> {t.about.and}
              <span className="gradient-text font-semibold"> {t.about.webApps}</span> {t.about.description2End}
            </p>
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
              {t.about.description3Start} <span className="text-[var(--text-primary)] font-semibold">{t.about.thesis}</span> {t.about.description3End}
            </p>

            {/* Stats */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-4 pt-6"
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold gradient-text">
                    {stat.number}
                  </div>
                  <div className="text-sm text-[var(--text-muted)] mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-6">
              {t.about.techStack}
            </h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-3 sm:gap-4"
            >
              {techStack.map((tech) => (
                <motion.div
                  key={tech.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  className="glass rounded-xl p-3 sm:p-4 text-center cursor-default group touch-manipulation"
                >
                  <div
                    className="mb-2 flex justify-center group-hover:scale-110 transition-transform"
                    style={{ color: tech.color }}
                  >
                    {tech.icon}
                  </div>
                  <span className="text-[var(--text-secondary)] text-sm font-medium group-hover:text-[var(--text-primary)] transition-colors">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Additional skills */}
            <div className="mt-8">
              <h4 className="text-sm font-medium text-[var(--text-muted)] mb-3">
                {t.about.alsoWorkWith}
              </h4>
              <div className="flex flex-wrap gap-2">
                {['Git', 'REST API', 'PostgreSQL', 'Firebase', 'Figma', 'Responsive Design'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm rounded-full bg-[var(--bg-card)] text-[var(--text-secondary)] border border-[var(--border-color)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
