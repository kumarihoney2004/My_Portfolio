/**
 * App.jsx — Root application component.
 * Assembles all sections and provides global context + toaster.
 */

import { Toaster } from 'react-hot-toast';
import { useTheme } from './context/ThemeContext';
import Navbar     from './components/Navbar';
import Hero       from './components/Hero';
import About      from './components/About';
import Experience from './components/Experience';
import Skills     from './components/Skills';
import Projects   from './components/Projects';
import Contact    from './components/Contact';
import Footer     from './components/Footer';

const App = () => {
  const { isDark } = useTheme();

  return (
    <>
      {/* Skip-to-content link for keyboard / screen-reader users */}
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4
          focus:z-[100] btn-primary text-sm"
      >
        Skip to main content
      </a>

      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            borderRadius: '12px',
            padding: '14px 18px',
            fontSize: '14px',
            fontFamily: 'Inter, sans-serif',
            background: isDark ? '#1a1a35' : '#fff',
            color:      isDark ? '#e2e8f0' : '#1e293b',
            border:     `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : '#e2e8f0'}`,
            boxShadow:  '0 8px 32px rgba(0,0,0,0.15)',
          },
        }}
      />

      <Navbar />

      <main id="main-content">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
};

export default App;
