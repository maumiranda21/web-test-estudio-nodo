import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Link to="/" className="footer__logo">
            ESTUDIO NODO
          </Link>
          <p className="footer__tagline">
            Espacios pensados para funcionar.
          </p>
        </div>

        <nav className="footer__nav" aria-label="Pie de página">
          <a href="/#proyectos">Proyectos</a>
          <a href="/#servicios">Servicios</a>
          <a href="/#proceso">Proceso</a>
          <a href="/#estudio">Estudio</a>
          <a href="/#contacto">Contacto</a>
        </nav>

        <p className="footer__note">
          © {new Date().getFullYear()} Estudio Nodo. Sitio de demostración.
        </p>
      </div>
    </footer>
  );
}
