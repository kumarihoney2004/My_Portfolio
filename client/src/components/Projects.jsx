/**
 * components/Projects.jsx
 * Projects section: fetches from API with fallback to local static data.
 * Shows responsive card grid, tech-stack tags, bullet highlights, and GitHub/Live buttons with loading skeletons & retry capability.
 */

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink, FiFolder, FiRefreshCw, FiAlertCircle } from 'react-icons/fi';
import { fetchProjects } from '../utils/api';
import { projects as localProjects } from '../data/projects';

const CATEGORIES = ['All', 'Full Stack', 'Backend', 'Frontend'];

const ProjectCard = ({ project, index }) => {
  const [cardRef, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const githubLink = project.githubUrl || project.github;
  const liveLink   = project.liveUrl || project.live;

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card overflow-hidden group flex flex-col hover:shadow-glow transition-all duration-300 hover:-translate-y-2 h-full"
      aria-label={`Project: ${project.title}`}
    >
      {/* Top Accent Line */}
      <div className="h-1.5 bg-gradient-to-r from-primary-400 via-violet-500 to-cyan-500" />

      <div className="p-6 flex flex-col flex-1">
        {/* Category & Badge */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary-500 dark:text-primary-400">
            {project.category || 'Software'}
          </span>
          {project.featured && (
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-600 border border-amber-200 dark:bg-amber-900/20 dark:text-amber-400 dark:border-amber-700/50 font-medium">
              ★ Featured
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary-500 transition-colors duration-200">
          {project.title}
        </h3>

        {/* Overview Description */}
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Bullet Highlights if available */}
        {project.highlights && project.highlights.length > 0 && (
          <ul className="space-y-1.5 mb-5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed" role="list">
            {project.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-1.5">
                <span className="text-primary-500 font-bold select-none">•</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6 mt-auto" role="list" aria-label="Technologies used">
          {project.techStack.map(tech => (
            <span
              key={tech}
              role="listitem"
              className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-dark-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons (Hide if link is empty) */}
        <div className="flex items-center gap-4 pt-4 border-t border-slate-100 dark:border-white/10 mt-auto">
          {githubLink ? (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} source code on GitHub`}
              className="flex items-center gap-1.5 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200"
            >
              <FiGithub size={16} />
              GitHub
            </a>
          ) : null}

          {liveLink ? (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} live demo`}
              className="flex items-center gap-1.5 text-sm font-medium text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300 transition-colors duration-200 ml-auto"
            >
              Live Demo
              <FiExternalLink size={15} />
            </a>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
};

const Projects = () => {
  const [projectsList, setProjectsList]   = useState([]);
  const [activeCategory, setCategory]   = useState('All');
  const [loading, setLoading]           = useState(true);
  const [error, setError]               = useState(null);
  const [ref, inView]                   = useInView({ threshold: 0.05, triggerOnce: true });

  const loadProjectsData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetchProjects();
      if (res && res.data && res.data.length > 0) {
        setProjectsList(res.data);
      } else {
        throw new Error('Empty data returned from API');
      }
    } catch (err) {
      console.warn('API error fetching projects, falling back to static data:', err);
      setProjectsList(localProjects);
      setError('Could not reach backend API. Showing offline cached projects.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadProjectsData();
  }, [loadProjectsData]);

  const filtered = activeCategory === 'All'
    ? projectsList
    : projectsList.filter(p => p.category && p.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="py-24 bg-white dark:bg-dark-900"
    >
      <div className="section-container" ref={ref}>
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary-500 dark:text-primary-400 text-sm font-semibold tracking-widest uppercase mb-3">
            What I&apos;ve built
          </p>
          <h2 id="projects-heading" className="section-heading">Featured Projects</h2>
          <p className="section-subheading max-w-xl mx-auto">
            Production-ready applications and scalable server architectures.
          </p>
        </motion.div>

        {/* Error Banner with Retry */}
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
              onClick={loadProjectsData}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-amber-100 dark:bg-amber-800/40 hover:bg-amber-200 dark:hover:bg-amber-700/50 font-medium text-xs transition-colors shrink-0"
              aria-label="Retry fetching projects data from backend"
            >
              <FiRefreshCw size={12} />
              Retry API
            </button>
          </motion.div>
        )}

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
          role="tablist"
          aria-label="Filter projects by category"
        >
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeCategory === cat}
              onClick={() => setCategory(cat)}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-200
                ${activeCategory === cat
                  ? 'bg-primary-500 text-white shadow-glow'
                  : 'bg-slate-100 dark:bg-dark-700 text-slate-600 dark:text-slate-300 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-600'
                }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Card Grid */}
        {loading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[1, 2].map(i => (
              <div key={i} className="glass-card h-72 animate-pulse p-6 flex flex-col justify-between">
                <div className="h-6 bg-slate-200 dark:bg-dark-600 rounded w-1/2" />
                <div className="h-16 bg-slate-200 dark:bg-dark-600 rounded w-full" />
                <div className="h-8 bg-slate-200 dark:bg-dark-600 rounded w-3/4" />
              </div>
            ))}
          </div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto"
            >
              {filtered.length > 0 ? (
                filtered.map((project, i) => (
                  <ProjectCard key={project.id} project={project} index={i} />
                ))
              ) : (
                <div className="col-span-full flex flex-col items-center gap-4 py-16 text-slate-400 dark:text-slate-600">
                  <FiFolder size={40} />
                  <p className="text-lg">No projects found in this category.</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        )}

        {/* GitHub Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/kumarihoney2004"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            aria-label="View all projects on GitHub"
          >
            <FiGithub size={18} />
            View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
