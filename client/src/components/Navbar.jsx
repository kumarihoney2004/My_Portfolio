/**
 * components/Navbar.jsx
 * Sticky responsive navbar with active-section highlighting,
 * dark/light toggle, and mobile hamburger menu.
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';
import useActiveSection from '../hooks/useActiveSection';

const NAV_LINKS = [
  { label: 'About',      href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Contact',    href: '#contact' },
];

const SECTION_IDS = ['hero', 'about', 'experience', 'skills', 'projects', 'contact'];

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection(SECTION_IDS);

  // Add shadow/blur when scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu when a link is clicked
  const handleNavClick = () => setMenuOpen(false);

  const isActive = (href) => activeSection === href.replace('#', '');

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-xl bg-white/80 dark:bg-dark-900/80 shadow-lg border-b border-white/20 dark:border-white/5'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="section-container h-16 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* ── Logo ──────────────────────────────────────────────────── */}
        <a
          href="#hero"
          className="font-bold text-xl group flex items-center gap-1.5"
          aria-label="Honey Kumari — back to top"
        >
          <span className="gradient-text">Honey</span>
          <span className="text-slate-800 dark:text-white">Kumari</span>
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary-500 mb-3 group-hover:animate-bounce" />
        </a>

        {/* ── Desktop Links ─────────────────────────────────────────── */}
        <ul className="hidden md:flex items-center gap-1" role="list">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className={`nav-link ${isActive(href) ? 'active' : ''}`}
                aria-current={isActive(href) ? 'page' : undefined}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* ── Right Controls ────────────────────────────────────────── */}
        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          <button
            id="theme-toggle"
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="w-9 h-9 rounded-xl flex items-center justify-center
              text-slate-600 dark:text-slate-300
              hover:bg-primary-50 dark:hover:bg-primary-900/30
              hover:text-primary-600 dark:hover:text-primary-400
              transition-all duration-200"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={isDark ? 'moon' : 'sun'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0,   opacity: 1 }}
                exit={  { rotate:  90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
              </motion.span>
            </AnimatePresence>
          </button>

          {/* Hire Me CTA */}
          <a
            href="#contact"
            className="hidden md:inline-flex btn-primary text-sm py-2 px-4"
          >
            Hire Me
          </a>

          {/* Hamburger — mobile only */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="md:hidden w-9 h-9 rounded-xl flex items-center justify-center
              text-slate-700 dark:text-slate-200
              hover:bg-slate-100 dark:hover:bg-dark-600
              transition-colors duration-200"
          >
            {menuOpen ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
          </button>
        </div>
      </nav>

      {/* ── Mobile Menu ───────────────────────────────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={  { opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden backdrop-blur-xl bg-white/95 dark:bg-dark-800/95
              border-b border-slate-200 dark:border-white/10"
          >
            <ul className="section-container py-4 flex flex-col gap-1" role="list">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    onClick={handleNavClick}
                    className={`block px-4 py-3 rounded-xl text-sm font-medium
                      transition-all duration-200
                      ${isActive(href)
                        ? 'bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-dark-700'
                      }`}
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li className="mt-2">
                <a
                  href="#contact"
                  onClick={handleNavClick}
                  className="btn-primary w-full justify-center text-sm py-2.5"
                >
                  Hire Me
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
