/**
 * components/Education.jsx
 * Education section displayed as an animated vertical timeline.
 */

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { education } from '../data/projects';

const TimelineItem = ({ item, index }) => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`flex gap-6 md:gap-0 items-start ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
    >
      {/* ── Content ───────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="flex-1 md:max-w-[calc(50%-2.5rem)]"
      >
        <article
          className="glass-card p-6 hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
          aria-label={`${item.degree} at ${item.institution}`}
        >
          <div className="mb-3">
            <span className={`text-xs font-semibold px-2 py-0.5 rounded-full
              ${item.status === 'Pursuing'
                ? 'bg-emerald-50 text-emerald-600 border border-emerald-200 dark:bg-emerald-900/20 dark:text-emerald-400 dark:border-emerald-700/50'
                : 'bg-slate-50 text-slate-500 border border-slate-200 dark:bg-dark-600 dark:text-slate-400 dark:border-white/10'
              }`}>
              {item.status}
            </span>
          </div>

          <h3 className="font-bold text-slate-900 dark:text-white text-lg leading-tight mb-1">
            {item.degree}
          </h3>
          <p className="text-primary-600 dark:text-primary-400 font-semibold text-sm mb-1">
            {item.institution}
          </p>
          <p className="text-slate-500 dark:text-slate-500 text-xs mb-3 flex items-center gap-2">
            <span>📍 {item.location}</span>
            <span>·</span>
            <span>📅 {item.period}</span>
          </p>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
            {item.description}
          </p>
        </article>
      </motion.div>

      {/* ── Center dot (desktop) ──────────────────────────────────── */}
      <div className="hidden md:flex flex-col items-center mx-5 flex-shrink-0">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.2, type: 'spring' }}
          className="timeline-dot"
        />
        {index < education.length - 1 && (
          <div className="w-0.5 flex-1 min-h-12 bg-gradient-to-b from-primary-400 to-slate-200 dark:to-dark-600 mt-2" />
        )}
      </div>

      {/* Spacer for opposing side (desktop) */}
      <div className="hidden md:block flex-1 md:max-w-[calc(50%-2.5rem)]" />
    </div>
  );
};

const Education = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="py-24 bg-white dark:bg-dark-900"
    >
      <div className="section-container" ref={ref}>
        {/* ── Heading ───────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary-500 dark:text-primary-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Academic Background
          </p>
          <h2 id="education-heading" className="section-heading">Education</h2>
          <p className="section-subheading">My academic journey and qualifications.</p>
        </motion.div>

        {/* ── Timeline ──────────────────────────────────────────────── */}
        <div
          className="flex flex-col gap-8 md:gap-0"
          role="list"
          aria-label="Education timeline"
        >
          {education.map((item, index) => (
            <div key={item.id} role="listitem">
              <TimelineItem item={item} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
