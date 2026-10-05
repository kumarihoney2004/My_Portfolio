/**
 * components/Hero.jsx
 * Full-screen hero with typing animation, CTA buttons, social links,
 * and animated blob background elements.
 */

import { motion } from 'framer-motion';
import { FiGithub, FiMail, FiPhone, FiDownload, FiEye, FiArrowDown } from 'react-icons/fi';
import useTypingEffect from '../hooks/useTypingEffect';

const TYPING_WORDS = [
  'Full Stack Developer',
  'React.js Developer',
  'Node.js Developer',
  'API Engineer',
];

const SOCIAL_LINKS = [
  {
    label: 'GitHub',
    href:  'https://github.com/kumarihoney2004',
    icon:  <FiGithub size={20} />,
  },
  {
    label: 'Email',
    href:  'mailto:kumarihoney170.08@gmail.com',
    icon:  <FiMail size={20} />,
  },
  {
    label: 'Phone',
    href:  'tel:+917857818410',
    icon:  <FiPhone size={20} />,
  },
];

// Framer Motion variants
const containerVariants = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Hero = () => {
  const typedText = useTypingEffect(TYPING_WORDS);

  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative min-h-screen flex items-center overflow-hidden
        bg-gradient-to-br from-slate-50 via-white to-primary-50/30
        dark:from-dark-900 dark:via-dark-800 dark:to-dark-900"
    >
      {/* ── Background Glow Blobs ───────────────────────────────────── */}
      <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full
        bg-primary-400/15 dark:bg-primary-500/10 blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full
        bg-violet-400/15 dark:bg-violet-500/10 blur-3xl pointer-events-none animate-pulse-slow delay-1000" />

      <div className="section-container pt-24 pb-16 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          {/* Status badge */}
          <motion.div variants={itemVariants} className="inline-block mb-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full
              text-xs font-semibold tracking-wide uppercase
              bg-primary-50 text-primary-600 border border-primary-200
              dark:bg-primary-900/30 dark:text-primary-400 dark:border-primary-700/50">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Open to opportunities
            </span>
          </motion.div>

          {/* Name heading */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-4"
          >
            <span className="text-slate-900 dark:text-white">Hi, I&apos;m </span>
            <span className="gradient-text">Honey Kumari</span>
          </motion.h1>

          {/* Typing animation */}
          <motion.div
            variants={itemVariants}
            className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-6
              text-slate-600 dark:text-slate-300 h-10"
            aria-label={`Role: ${typedText}`}
          >
            <span>{typedText}</span>
            <span className="typing-cursor" />
          </motion.div>

          {/* Summary */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-slate-600 dark:text-slate-400
              leading-relaxed mb-8 max-w-2xl"
          >
            BCA graduate and Full Stack Developer building modern web applications and
            RESTful APIs using <strong className="text-slate-800 dark:text-slate-200">React.js</strong>,{' '}
            <strong className="text-slate-800 dark:text-slate-200">Node.js</strong>, and{' '}
            <strong className="text-slate-800 dark:text-slate-200">PostgreSQL</strong>.
            Currently learning React Native and Socket.IO for real-time experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 mb-10"
          >
            <a href="#projects" className="btn-primary">
              View Projects
              <FiArrowDown size={16} className="animate-bounce" />
            </a>
            <a
              id="download-cv-btn"
              href="/Honey_Kumari_CV.pdf"
              download="Honey_Kumari_CV.pdf"
              className="btn-outline"
              aria-label="Download Honey Kumari's CV as PDF"
            >
              <FiDownload size={16} />
              Download CV
            </a>
            <a
              id="view-cv-btn"
              href="/Honey_Kumari_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline border-slate-300 dark:border-dark-600 hover:border-primary-400"
              aria-label="View Honey Kumari's CV in new tab"
            >
              <FiEye size={16} />
              View CV
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3"
          >
            {SOCIAL_LINKS.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={label}
                className="w-10 h-10 rounded-xl flex items-center justify-center
                  text-slate-500 dark:text-slate-400
                  border border-slate-200 dark:border-dark-500
                  hover:border-primary-400 hover:text-primary-500
                  dark:hover:border-primary-400 dark:hover:text-primary-400
                  hover:-translate-y-1 hover:shadow-glow
                  transition-all duration-300"
              >
                {icon}
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
