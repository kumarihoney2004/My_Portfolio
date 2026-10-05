/**
 * components/About.jsx
 * About section with animated entrance and key stats.
 */

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMapPin, FiMail, FiPhone, FiGithub } from 'react-icons/fi';

const STATS = [
  { value: '3+', label: 'Projects Built' },
  { value: '5+', label: 'Technologies' },
  { value: 'BCA', label: 'Degree (Completed)' },
  { value: '2026', label: 'Graduated' },
];

const INFO_ITEMS = [
  { icon: <FiMapPin size={16} />, label: 'Location', value: 'Bengaluru, Karnataka, India' },
  { icon: <FiMail    size={16} />, label: 'Email',    value: 'kumarihoney170.08@gmail.com', href: 'mailto:kumarihoney170.08@gmail.com' },
  { icon: <FiPhone   size={16} />, label: 'Phone',    value: '+91-7857818410',              href: 'tel:+917857818410' },
  { icon: <FiGithub  size={16} />, label: 'GitHub',   value: 'github.com/kumarihoney2004',  href: 'https://github.com/kumarihoney2004' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-24 bg-white dark:bg-dark-900"
    >
      <div className="section-container" ref={ref}>
        {/* ── Heading ───────────────────────────────────────────────── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="text-center mb-16"
        >
          <p className="text-primary-500 dark:text-primary-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Who am I?
          </p>
          <h2 id="about-heading" className="section-heading">About Me</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* ── Left: Text ────────────────────────────────────────────── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            transition={{ delay: 0.1 }}
            className="space-y-5"
          >
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              I&apos;m <strong className="text-slate-900 dark:text-white">Honey Kumari</strong>, a{' '}
              <span className="gradient-text font-semibold">Full Stack Developer</span> and
              BCA graduate from Netaji Subhas University, Jamshedpur. I build complete web experiences
              — from pixel-perfect UIs to robust backend APIs.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              I have hands-on experience with <strong className="text-slate-800 dark:text-slate-200">React.js</strong>,{' '}
              <strong className="text-slate-800 dark:text-slate-200">Node.js</strong>,{' '}
              <strong className="text-slate-800 dark:text-slate-200">PostgreSQL</strong>, and{' '}
              <strong className="text-slate-800 dark:text-slate-200">MySQL</strong>, and I follow
              MVC architecture and RESTful API design principles. I&apos;m currently expanding my
              skills into <strong className="text-slate-800 dark:text-slate-200">React Native</strong> and{' '}
              <strong className="text-slate-800 dark:text-slate-200">Socket.IO</strong> for real-time
              and mobile applications.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              I&apos;m passionate about writing clean, well-documented code and eager to contribute to
              agile, cross-functional engineering teams. Based in Bengaluru and open to full-time
              opportunities.
            </p>

            {/* Info grid */}
            <div className="grid sm:grid-cols-2 gap-3 pt-2">
              {INFO_ITEMS.map(({ icon, label, value, href }) => (
                <div
                  key={label}
                  className="flex items-start gap-3 p-3 rounded-xl
                    bg-slate-50 dark:bg-dark-700/50
                    border border-slate-100 dark:border-white/5"
                >
                  <span className="mt-0.5 text-primary-500 flex-shrink-0">{icon}</span>
                  <div className="min-w-0">
                    <p className="text-xs text-slate-400 dark:text-slate-500 font-medium uppercase tracking-wider">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-sm text-slate-700 dark:text-slate-200 hover:text-primary-500
                          dark:hover:text-primary-400 transition-colors truncate block"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm text-slate-700 dark:text-slate-200 truncate">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Right: Stats ──────────────────────────────────────────── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {STATS.map(({ value, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3 + i * 0.1, type: 'spring', stiffness: 200 }}
                className="glass-card p-6 text-center hover:shadow-glow
                  transition-all duration-300 hover:-translate-y-1"
              >
                <p className="text-4xl font-extrabold gradient-text mb-2">{value}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
