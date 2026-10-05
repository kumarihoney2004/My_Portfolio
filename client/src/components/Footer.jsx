/**
 * components/Footer.jsx
 * Site footer with social links and copyright.
 */

import { motion } from 'framer-motion';
import { FiGithub, FiMail, FiPhone, FiHeart, FiArrowUp } from 'react-icons/fi';

const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com/kumarihoney2004', icon: <FiGithub size={18} /> },
  { label: 'Email',  href: 'mailto:kumarihoney170.08@gmail.com',  icon: <FiMail   size={18} /> },
  { label: 'Phone',  href: 'tel:+917857818410',                    icon: <FiPhone  size={18} /> },
];

const NAV_LINKS = [
  { label: 'About',     href: '#about' },
  { label: 'Skills',    href: '#skills' },
  { label: 'Projects',  href: '#projects' },
  { label: 'Contact',   href: '#contact' },
];

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer
      role="contentinfo"
      className="bg-slate-900 dark:bg-dark-900 border-t border-white/5 pt-16 pb-8"
    >
      <div className="section-container">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* ── Brand ──────────────────────────────────────────────── */}
          <div>
            <a href="#hero" className="inline-flex items-center gap-1 mb-4" aria-label="Back to top">
              <span className="gradient-text font-bold text-xl">Honey</span>
              <span className="text-white font-bold text-xl">Kumari</span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mb-3" />
            </a>
            <p className="text-slate-400 text-sm leading-relaxed">
              Full Stack Developer from Bengaluru, India. Building modern web
              applications with React.js, Node.js, and PostgreSQL.
            </p>
          </div>

          {/* ── Navigation ─────────────────────────────────────────── */}
          <nav aria-label="Footer navigation">
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-slate-400 hover:text-primary-400 text-sm transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* ── Contact ────────────────────────────────────────────── */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
              Connect
            </h3>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  className="w-10 h-10 rounded-xl flex items-center justify-center
                    text-slate-400 border border-white/10
                    hover:border-primary-500 hover:text-primary-400
                    hover:-translate-y-1 hover:shadow-glow
                    transition-all duration-300"
                >
                  {icon}
                </a>
              ))}
            </div>

            <p className="text-slate-500 text-xs mt-6">
              📍 Bengaluru, Karnataka, India<br />
              🕐 IST (UTC+5:30)
            </p>
          </div>
        </div>

        {/* ── Bottom Bar ─────────────────────────────────────────────── */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm flex items-center gap-1.5">
            © {new Date().getFullYear()} Honey Kumari. Made with{' '}
            <FiHeart size={13} className="text-red-500 fill-red-500" aria-label="love" />{' '}
            in India.
          </p>

          {/* Scroll to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to top of page"
            className="w-10 h-10 rounded-xl flex items-center justify-center
              bg-primary-600 hover:bg-primary-500 text-white
              shadow-glow transition-all duration-300"
          >
            <FiArrowUp size={18} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
