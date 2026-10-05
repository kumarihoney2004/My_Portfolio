/**
 * components/Contact.jsx
 * Contact section displaying direct contact options in a clean grid layout.
 */

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiPhone, FiGithub, FiMapPin } from 'react-icons/fi';

const CONTACT_INFO = [
  { icon: <FiMail size={20} />, label: 'Email', value: 'kumarihoney170.08@gmail.com', href: 'mailto:kumarihoney170.08@gmail.com' },
  { icon: <FiPhone size={20} />, label: 'Phone', value: '+91-7857818410', href: 'tel:+917857818410' },
  { icon: <FiGithub size={20} />, label: 'GitHub', value: 'kumarihoney2004', href: 'https://github.com/kumarihoney2004' },
  { icon: <FiMapPin size={20} />, label: 'Location', value: 'Bengaluru, Karnataka, India', href: null },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Contact = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-24 bg-slate-50 dark:bg-dark-800"
    >
      <div className="section-container max-w-4xl mx-auto" ref={ref}>
        {/* ── Heading ───────────────────────────────────────────────── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="text-center mb-12"
        >
          <p className="text-primary-500 dark:text-primary-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Let&apos;s connect
          </p>
          <h2 id="contact-heading" className="section-heading">Get In Touch</h2>
          <p className="section-subheading max-w-lg mx-auto">
            Have an opportunity, project, or just want to say hello? Feel free to connect directly through any of the channels below.
          </p>
        </motion.div>

        {/* ── Contact Info Grid Layout ─────────────────────────────── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          transition={{ delay: 0.1 }}
          className="space-y-6 max-w-2xl mx-auto"
        >
          {/* Let's Talk Hero Card */}
          <div className="glass-card p-8 text-center shadow-sm">
            <h3 className="font-bold text-slate-900 dark:text-white text-xl mb-3">
              Let&apos;s Talk 👋
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed max-w-lg mx-auto">
              I&apos;m actively seeking full-time Full Stack / Backend engineering roles, freelance opportunities, and technical collaborations.
            </p>
          </div>

          {/* 2x2 Grid of Direct Contact Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {CONTACT_INFO.map(({ icon, label, value, href }) => {
              const cardContent = (
                <div className="flex items-center gap-4 p-5 glass-card h-full hover:shadow-glow hover:-translate-y-1 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center text-primary-500 flex-shrink-0">
                    {icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-slate-400 dark:text-slate-500 uppercase tracking-wider font-medium mb-0.5">
                      {label}
                    </p>
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-100 truncate group-hover:text-primary-500 transition-colors">
                      {value}
                    </p>
                  </div>
                </div>
              );

              return href ? (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="block group"
                  aria-label={`${label}: ${value}`}
                >
                  {cardContent}
                </a>
              ) : (
                <div key={label} className="block">
                  {cardContent}
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
