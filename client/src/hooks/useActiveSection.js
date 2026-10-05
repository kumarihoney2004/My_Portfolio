/**
 * useActiveSection.js — Tracks which nav section is currently in the viewport.
 * Uses IntersectionObserver for performance.
 */

import { useState, useEffect } from 'react';

const useActiveSection = (sectionIds = []) => {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || '');

  useEffect(() => {
    const observers = [];

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          rootMargin: '-40% 0px -55% 0px', // Trigger when section occupies the middle strip
          threshold: 0,
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach(o => o.disconnect());
  }, [sectionIds]);

  return activeSection;
};

export default useActiveSection;
