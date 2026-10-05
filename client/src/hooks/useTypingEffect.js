/**
 * useTypingEffect.js — Custom hook for the typing / typewriter animation.
 * Cycles through an array of words, typing and then deleting each one.
 */

import { useState, useEffect } from 'react';

const TYPING_SPEED  = 100; // ms per character when typing
const DELETING_SPEED = 50; // ms per character when deleting
const PAUSE_DURATION = 2000; // ms to pause after fully typed

const useTypingEffect = (words = []) => {
  const [displayText, setDisplayText] = useState('');
  const [wordIndex,   setWordIndex]   = useState(0);
  const [isDeleting,  setIsDeleting]  = useState(false);
  const [isPaused,    setIsPaused]    = useState(false);

  useEffect(() => {
    if (!words.length) return;

    const currentWord = words[wordIndex % words.length];

    // Pause after fully typed
    if (isPaused) {
      const timer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, PAUSE_DURATION);
      return () => clearTimeout(timer);
    }

    const speed = isDeleting ? DELETING_SPEED : TYPING_SPEED;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Type next character
        const next = currentWord.slice(0, displayText.length + 1);
        setDisplayText(next);
        if (next === currentWord) setIsPaused(true);
      } else {
        // Delete last character
        const next = currentWord.slice(0, displayText.length - 1);
        setDisplayText(next);
        if (next === '') {
          setIsDeleting(false);
          setWordIndex(i => (i + 1) % words.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, isPaused, wordIndex, words]);

  return displayText;
};

export default useTypingEffect;
