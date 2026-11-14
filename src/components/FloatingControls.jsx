import { useState, useEffect, useCallback } from 'react';
import './FloatingControls.css';

const THEME_KEY = 'estudio-nodo-theme';

function applyTheme(isDark) {
  if (isDark) {
    document.documentElement.classList.add('theme-dark');
  } else {
    document.documentElement.classList.remove('theme-dark');
  }
}

export default function FloatingControls() {
  const [dark, setDark] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(THEME_KEY);
    const prefersDark =
      stored === 'dark' ||
      (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setDark(prefersDark);
    applyTheme(prefersDark);
  }, []);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 320);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleTheme = useCallback(() => {
    setDark((prev) => {
      const next = !prev;
      applyTheme(next);
      localStorage.setItem(THEME_KEY, next ? 'dark' : 'light');
      return next;
    });
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="floating-controls" role="group" aria-label="Controles de página">
      <button
        type="button"
        className="floating-controls__btn"
        onClick={toggleTheme}
        aria-label={dark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
        title={dark ? 'Modo claro' : 'Modo oscuro'}
      >
        <span className="material-symbols-outlined" aria-hidden="true">
          {dark ? 'light_mode' : 'dark_mode'}
        </span>
      </button>
      <button
        type="button"
        className={`floating-controls__btn ${showTop ? 'is-visible' : ''}`}
        onClick={scrollTop}
        aria-label="Volver arriba"
        title="Volver arriba"
        tabIndex={showTop ? 0 : -1}
      >
        <span className="material-symbols-outlined" aria-hidden="true">
          vertical_align_top
        </span>
      </button>
    </div>
  );
}
