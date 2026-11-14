import { Link, useParams } from 'react-router-dom';
import ImagePlaceholder from '../components/ImagePlaceholder';
import { getProjectById, projects } from '../data/projects';
import './ProjectDetail.css';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = getProjectById(id);

  if (!project) {
    return (
      <main className="section">
        <div className="container">
          <h1>Proyecto no encontrado</h1>
          <p className="section-intro">
            El proyecto que buscas no existe o ha sido movido.
          </p>
          <Link to="/#proyectos" className="btn btn-primary">
            Volver a proyectos
          </Link>
        </div>
      </main>
    );
  }

  const otherProjects = projects.filter((p) => p.id !== project.id);

  return (
    <main>
      <section className="project-detail-hero section">
        <div className="container">
          <Link to="/#proyectos" className="project-detail__back">
            <span className="material-symbols-outlined" aria-hidden="true">
              arrow_back
            </span>
            Volver a proyectos
          </Link>

          <span className="project-detail__number">{project.number}</span>
          <h1 className="project-detail__title">{project.title}</h1>
          <p className="project-detail__lead">{project.shortDescription}</p>
        </div>
      </section>

      <section className="project-detail-media">
        <div className="container">
          <ImagePlaceholder
            src={project.image}
            alt={project.imageAlt}
            aspectRatio="16/10"
            label={project.image.split('/').pop()}
            className="project-detail__image"
          />
        </div>
      </section>

      <section className="section project-detail-body">
        <div className="container project-detail__grid">
          <article className="detail-block">
            <h2>Necesidad inicial</h2>
            <p>{project.need}</p>
          </article>
          <article className="detail-block">
            <h2>Condiciones del espacio</h2>
            <p>{project.conditions}</p>
          </article>
          <article className="detail-block">
            <h2>Decisiones de diseño</h2>
            <p>{project.decisions}</p>
          </article>
          <article className="detail-block">
            <h2>Solución desarrollada</h2>
            <p>{project.solution}</p>
          </article>
        </div>

        <div className="container">
          <p className="project-detail__disclaimer">
            Este es un caso demostrativo y conceptual. No corresponde a un
            proyecto real ejecutado por Estudio Nodo ni a un encargo
            específico.
          </p>
        </div>
      </section>

      {otherProjects.length > 0 && (
        <section className="section project-detail-related">
          <div className="container">
            <h2 className="section-title">Otros proyectos</h2>
            <ul className="related-list">
              {otherProjects.map((p) => (
                <li key={p.id}>
                  <Link to={`/proyectos/${p.id}`} className="related-item">
                    <span className="related-item__number">{p.number}</span>
                    <span className="related-item__title">{p.title}</span>
                    <span className="material-symbols-outlined" aria-hidden="true">
                      arrow_forward
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </main>
  );
}
