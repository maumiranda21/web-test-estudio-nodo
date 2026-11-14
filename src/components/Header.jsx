import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const navItems = [
  { label: 'Proyectos', href: '/#proyectos' },
  { label: 'Servicios', href: '/#servicios' },
  { label: 'Proceso', href: '/#proceso' },
  { label: 'Estudio', href: '/#estudio' },
  { label: 'Contacto', href: '/#contacto' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = () => setOpen(false);

  const isHome = location.pathname === '/';

  return (
    <header className="header">
      <div className="header__inner container">
        <Link to="/" className="header__logo" onClick={handleNavClick}>
          ESTUDIO NODO
        </Link>

        <button
          className="header__toggle"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="material-symbols-outlined">
            {open ? 'close' : 'menu'}
          </span>
        </button>

        <nav className={`header__nav ${open ? 'is-open' : ''}`} aria-label="Principal">
          <ul className="header__list">
            {navItems.map((item) => (
              <li key={item.label}>
                {isHome ? (
                  <a href={item.href} onClick={handleNavClick}>
                    {item.label}
                  </a>
                ) : (
                  <Link to={item.href} onClick={handleNavClick}>
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <a
            href={isHome ? '/#contacto' : '/#contacto'}
            className="btn btn-accent header__cta"
            onClick={handleNavClick}
          >
            Conversemos sobre tu proyecto
          </a>
        </nav>
      </div>
    </header>
  );
}
