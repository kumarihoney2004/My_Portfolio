/**
 * components/Experience.jsx
 * Experience section with vertical timeline layout, loading skeleton, error state with retry,
 * and Framer Motion animations.
 */

import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiBriefcase, FiMapPin, FiCalendar, FiRefreshCw, FiAlertCircle } from 'react-icons/fi';
import { fetchExperience } from '../utils/api';
import { experience as localExperience } from '../data/experience';

const ExperienceCard = ({ item, index }) => {
  const [cardRef, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative pl-8 md:pl-0 md:grid md:grid-cols-2 md:gap-12 group"
    >
      {/* Timeline Node Icon (Desktop & Mobile) */}
      <div className="absolute left-0 top-1 md:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-primary-500/10 dark:bg-primary-500/20 border-2 border-primary-500 flex items-center justify-center text-primary-600 dark:text-primary-400 z-10 group-hover:scale-115 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300 shadow-md">
        <FiBriefcase size={16} />
      </div>

      {/* Content Position: Left or Right for desktop timeline */}
      <div className={`md:contents ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
        <div className={`${index % 2 === 0 ? 'md:col-start-1 md:text-right' : 'md:col-start-2'} mb-8 md:mb-0`}>
          <div className="glass-card p-6 md:p-8 hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
            {/* Header info */}
            <div className="flex flex-wrap items-center gap-2 mb-3 justify-start md:justify-inherit">
              <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 border border-primary-200 dark:border-primary-800/50 flex items-center gap-1.5">
                <FiCalendar size={13} />
                {item.duration}
              </span>
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1">
                <FiMapPin size={13} />
                {item.location}
              </span>
            </div>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-primary-500 transition-colors">
              {item.role}
            </h3>
            <p className="text-md font-semibold text-slate-600 dark:text-slate-300 mb-4">
              {item.company}
            </p>

            {/* Bullet Highlights */}
            <ul className="space-y-2 mb-6 text-slate-600 dark:text-slate-300 text-sm leading-relaxed text-left" role="list">
              {item.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-primary-500 font-bold select-none mt-1">•</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 dark:border-white/10" role="list" aria-label="Technologies used">
              {item.techStack.map(tech => (
                <span
                  key={tech}
                  role="listitem"
                  className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-dark-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const [experienceList, setExperienceList] = useState([]);
  const [loading, setLoading]               = useState(true);
  const [error, setError]                     = useState(null);
  const [usingFallback, setUsingFallback]     = useState(false);
  const [ref, inView]                        = useInView({ threshold: 0.05, triggerOnce: true });

  const loadExperienceData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetchExperience();
      if (res && res.data && res.data.length > 0) {
        setExperienceList(res.data);
        setUsingFallback(false);
      } else {
        throw new Error('Empty data returned from API');
      }
    } catch (err) {
      console.warn('API error fetching experience, falling back to static data:', err);
      setExperienceList(localExperience);
      setUsingFallback(true);
      setError('Could not reach backend API. Showing offline cached experience entries.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadExperienceData();
  }, [loadExperienceData]);

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="py-24 bg-slate-50/50 dark:bg-dark-800/40 relative overflow-hidden"
    >
      <div className="section-container relative z-10" ref={ref}>
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary-500 dark:text-primary-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Career Journey
          </p>
          <h2 id="experience-heading" className="section-heading">
            Work Experience
          </h2>
          <p className="section-subheading max-w-xl mx-auto">
            My professional internships and hands-on industry contributions.
          </p>
        </motion.div>

        {/* Error banner with retry option if using fallback */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-xl mx-auto mb-10 p-4 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700/50 text-amber-800 dark:text-amber-300 flex items-center justify-between gap-4 text-sm"
          >
            <div className="flex items-center gap-2">
              <FiAlertCircle size={18} className="shrink-0 text-amber-500" />
              <span>{error}</span>
            </div>
            <button
              onClick={loadExperienceData}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-amber-100 dark:bg-amber-800/40 hover:bg-amber-200 dark:hover:bg-amber-700/50 font-medium text-xs transition-colors shrink-0"
              aria-label="Retry fetching experience data from backend"
            >
              <FiRefreshCw size={12} />
              Retry API
            </button>
          </motion.div>
        )}

        {/* Loading Skeletons */}
        {loading ? (
          <div className="max-w-4xl mx-auto space-y-8">
            {[1, 2].map(i => (
              <div key={i} className="glass-card p-6 h-48 animate-pulse flex flex-col justify-between">
                <div className="h-6 bg-slate-200 dark:bg-dark-600 rounded w-1/3 mb-4" />
                <div className="h-4 bg-slate-200 dark:bg-dark-600 rounded w-2/3 mb-2" />
                <div className="h-4 bg-slate-200 dark:bg-dark-600 rounded w-1/2" />
              </div>
            ))}
          </div>
        ) : (
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Central Line (Desktop) / Left Line (Mobile) */}
            <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-gradient-to-b from-primary-500 via-violet-500 to-cyan-500 opacity-30 dark:opacity-40" />

            <div className="space-y-12">
              {experienceList.map((item, index) => (
                <ExperienceCard key={item.id} item={item} index={index} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;
