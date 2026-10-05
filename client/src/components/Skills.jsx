/**
 * components/Skills.jsx
 * Skills section with animated category cards and badge pills.
 */

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skillCategories } from '../data/skills';

const containerVariants = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const Skills = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="py-24 bg-slate-50 dark:bg-dark-800"
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
            What I work with
          </p>
          <h2 id="skills-heading" className="section-heading">Technical Skills</h2>
          <p className="section-subheading max-w-xl mx-auto">
            A curated overview of my technical toolkit, grouped by category.
          </p>
        </motion.div>

        {/* ── Skill Cards Grid ──────────────────────────────────────── */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          role="list"
          aria-label="Technical skills by category"
        >
          {skillCategories.map((category) => (
            <motion.article
              key={category.id}
              variants={cardVariants}
              role="listitem"
              className="glass-card p-6 group hover:shadow-glow transition-all duration-300
                hover:-translate-y-1.5"
            >
              {/* Card Header */}
              <div className="flex items-center gap-3 mb-5">
                <h3 className="font-bold text-slate-800 dark:text-white text-lg">
                  {category.title}
                </h3>
              </div>

              {/* Skill badges */}
              <div className="flex flex-wrap gap-2" role="list" aria-label={`${category.title} skills`}>
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    role="listitem"
                    className="skill-badge"
                    title={skill}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
