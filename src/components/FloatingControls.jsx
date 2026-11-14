import { useState, useEffect } from 'react';
import './FloatingControls.css';

export default function FloatingControls() {
  const [dark, setDark] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('estudio-nodo-theme');
    if (stored === 'dark') {
      setDark(true);
      document.documentElement.classList.add('theme-dark');
    }
  }, []);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 320);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('theme-dark', next);
    localStorage.setItem('estudio-nodo-theme', next ? 'dark' : 'light');
  };

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
        disabled={!showTop}
      >
        <span className="material-symbols-outlined" aria-hidden="true">
          vertical_align_top
        </span>
      </button>
    </div>
  );
}
