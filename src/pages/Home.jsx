import { useState } from 'react';
import ImagePlaceholder from '../components/ImagePlaceholder';
import { projects } from '../data/projects';
import './Home.css';

const services = [
  {
    title: 'Diseño arquitectónico',
    icon: 'architecture',
    description:
      'Desarrollamos proyectos de arquitectura desde la comprensión de las necesidades del cliente y las condiciones del espacio, hasta la definición de una solución coherente y técnicamente viable.',
    includes:
      'Análisis de necesidades, estudio de condiciones del sitio, desarrollo de propuesta espacial y documentación básica del proyecto.',
  },
  {
    title: 'Diseño de interiores',
    icon: 'chair',
    description:
      'Organizamos el interior de los espacios considerando uso cotidiano, circulación, iluminación y materialidad, con el objetivo de mejorar la experiencia de quienes los habitan.',
    includes:
      'Definición de distribución interior, selección de materiales y acabados, criterios de iluminación y mobiliario integrado cuando corresponde.',
  },
  {
    title: 'Remodelación y adecuación de espacios',
    icon: 'home_repair_service',
    description:
      'Intervenimos espacios existentes para mejorar su distribución, funcionalidad e iluminación, respetando las condiciones estructurales y las posibilidades reales de transformación.',
    includes:
      'Diagnóstico del espacio actual, propuesta de adecuación, definición de intervenciones prioritarias y coordinación de criterios técnicos básicos.',
  },
  {
    title: 'Desarrollo de proyectos',
    icon: 'design_services',
    description:
      'Acompañamos el desarrollo del proyecto desde la idea inicial hasta la definición de entregables acordados, manteniendo claridad en cada etapa y en las decisiones que se toman.',
    includes:
      'Desarrollo de la propuesta, coordinación de información técnica, revisión de criterios y entrega de documentación según el alcance definido.',
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Exploración',
    description:
      'Conocemos las necesidades, objetivos y condiciones del proyecto. Escuchamos y registramos lo que realmente importa resolver.',
  },
  {
    number: '02',
    title: 'Evaluación',
    description:
      'Analizamos el espacio, sus limitaciones y sus posibilidades. Identificamos oportunidades y condicionantes técnicas.',
  },
  {
    number: '03',
    title: 'Propuesta',
    description:
      'Desarrollamos y presentamos una solución clara, fundamentada en las necesidades detectadas y en las condiciones del lugar.',
  },
  {
    number: '04',
    title: 'Desarrollo',
    description:
      'Coordinamos las siguientes etapas y los entregables acordados, manteniendo el criterio y la claridad a lo largo del proceso.',
  },
];

export default function Home() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleProject = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <main>
      {/* HERO — bloque fotográfico full-bleed con inset */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__frame">
          <div className="hero__bg">
            <ImagePlaceholder
              src="/images/HERO_ARQUITECTURA.jpg"
              alt="Espacio arquitectónico contemporáneo, funcional y bien resuelto, con luz natural, materiales honestos y composición editorial."
              aspectRatio="auto"
              label="HERO_ARQUITECTURA.jpg"
              className="hero__bg-img"
            />
            <div className="hero__overlay" aria-hidden="true" />
          </div>

          <div className="hero__content">
            <h1 id="hero-title">Diseñamos espacios pensados para funcionar.</h1>
            <p className="hero__text">
              Desarrollamos proyectos arquitectónicos considerando las
              necesidades de cada cliente, las condiciones del espacio y las
              exigencias técnicas de cada proyecto.
            </p>
            <div className="hero__actions">
              <a href="#contacto" className="btn btn-primary">
                Solicitar una evaluación inicial
              </a>
              <a href="#proyectos" className="btn btn-secondary">
                Explorar proyectos
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PROYECTOS */}
      <section id="proyectos" className="section projects" aria-labelledby="projects-title">
        <div className="container">
          <h2 id="projects-title" className="section-title">
            Proyectos que resuelven necesidades reales
          </h2>
          <p className="section-intro">
            Casos demostrativos que ilustran nuestra manera de abordar
            problemas espaciales concretos. No se trata de proyectos
            ejecutados; son ejemplos conceptuales orientados a mostrar
            criterio y método.
          </p>

          <div className="projects__list">
            {projects.map((project, index) => {
              const isOpen = expandedId === project.id;
              return (
                <article
                  key={project.id}
                  className={`project-item ${index % 2 === 1 ? 'project-item--reverse' : ''} ${isOpen ? 'is-open' : ''}`}
                >
                  <div className="project-item__media">
                    <ImagePlaceholder
                      src={project.image}
                      alt={project.imageAlt}
                      aspectRatio="4/3"
                      label={project.image.split('/').pop()}
                      className="project-item__img"
                    />
                  </div>
                  <div className="project-item__content">
                    <span className="project-item__number">{project.number}</span>
                    <h3 className="project-item__title">{project.title}</h3>
                    <p className="project-item__desc">{project.shortDescription}</p>
                    <button
                      type="button"
                      className="project-item__link"
                      onClick={() => toggleProject(project.id)}
                      aria-expanded={isOpen}
                    >
                      {isOpen ? 'Ocultar detalle' : 'Ver detalle del proyecto'}
                      <span className="material-symbols-outlined" aria-hidden="true">
                        {isOpen ? 'expand_less' : 'expand_more'}
                      </span>
                    </button>
                  </div>

                  {isOpen && (
                    <div className="project-item__detail" id={`detail-${project.id}`}>
                      <div className="project-detail-grid">
                        <div className="detail-block">
                          <h4>Necesidad inicial</h4>
                          <p>{project.need}</p>
                        </div>
                        <div className="detail-block">
                          <h4>Condiciones del espacio</h4>
                          <p>{project.conditions}</p>
                        </div>
                        <div className="detail-block">
                          <h4>Decisiones de diseño</h4>
                          <p>{project.decisions}</p>
                        </div>
                        <div className="detail-block">
                          <h4>Solución desarrollada</h4>
                          <p>{project.solution}</p>
                        </div>
                      </div>
                      <p className="project-detail__disclaimer">
                        Este es un caso demostrativo y conceptual. No corresponde a un
                        proyecto real ejecutado por Estudio Nodo ni a un encargo específico.
                      </p>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="section services" aria-labelledby="services-title">
        <div className="container">
          <h2 id="services-title" className="section-title">
            Servicios
          </h2>
          <p className="section-intro">
            Trabajamos desde la comprensión del problema hasta la definición
            de una solución espacial clara y viable.
          </p>

          <div className="services__grid">
            {services.map((service) => (
              <article key={service.title} className="service-card">
                <span className="service-card__icon material-symbols-outlined" aria-hidden="true">
                  {service.icon}
                </span>
                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__desc">{service.description}</p>
                <p className="service-card__includes">
                  <strong>Incluye de manera general:</strong> {service.includes}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section id="proceso" className="section process" aria-labelledby="process-title">
        <div className="container">
          <h2 id="process-title" className="section-title">
            Primero entendemos. Después diseñamos.
          </h2>
          <p className="section-intro process__intro">
            Un proceso sencillo y transparente, pensado para mantener el
            criterio en cada decisión.
          </p>

          <ol className="process__steps">
            {processSteps.map((step, i) => (
              <li key={step.number} className="process-step">
                <div className="process-step__marker">
                  <span className="process-step__number">{step.number}</span>
                  {i < processSteps.length - 1 && (
                    <span className="process-step__line" aria-hidden="true" />
                  )}
                </div>
                <div className="process-step__content">
                  <h3 className="process-step__title">{step.title}</h3>
                  <p className="process-step__desc">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ESTUDIO */}
      <section id="estudio" className="section studio" aria-labelledby="studio-title">
        <div className="container studio__grid">
          <div className="studio__content">
            <h2 id="studio-title" className="section-title">
              Arquitectura con intención y criterio
            </h2>
            <p>
              En Estudio Nodo abordamos cada proyecto desde la comprensión
              de lo que realmente se necesita resolver. Trabajamos con
              claridad, orden y atención a las condiciones técnicas del
              espacio, evitando soluciones genéricas o puramente estéticas.
            </p>
            <p>
              Nos interesa la arquitectura que funciona en el día a día:
              recorridos claros, usos bien resueltos, materiales honestos
              y una relación coherente entre forma, uso y contexto. El
              diseño es una herramienta para organizar y mejorar espacios,
              no un fin en sí mismo.
            </p>
            <p>
              Preferimos conversaciones directas, decisiones fundamentadas
              y un proceso transparente en el que el cliente entiende qué
              se propone y por qué.
            </p>
          </div>
          <div className="studio__media">
            <ImagePlaceholder
              src="/images/ESTUDIO_EQUIPO.jpg"
              alt="Equipo pequeño de arquitectura revisando planos sobre una mesa de trabajo, ambiente real, luz natural, sin poses publicitarias."
              aspectRatio="4/3"
              label="ESTUDIO_EQUIPO.jpg"
              className="studio__img"
            />
          </div>
        </div>
      </section>

      {/* Espaciador entre Estudio y Contacto */}
      <div className="section-spacer" aria-hidden="true" />

      {/* CONTACTO */}
      <section id="contacto" className="section contact" aria-labelledby="contact-title">
        <div className="container contact__wrap">
          <h2 id="contact-title" className="section-title">
            Cuéntanos qué necesitas resolver
          </h2>
          <p className="section-intro">
            Completa el formulario con la información básica de tu
            proyecto. Nos pondremos en contacto para conversar sobre las
            necesidades y las posibilidades de trabajo.
          </p>

          <form
            className="contact-form"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const note = form.querySelector('.contact-form__note');
              if (note) {
                note.textContent =
                  'Gracias por tu mensaje. Este es un sitio de demostración: el formulario no envía datos reales. En un despliegue con backend configurado, recibirías una confirmación y nos pondríamos en contacto.';
                note.classList.add('is-visible');
              }
              form.reset();
            }}
          >
            <div className="contact-form__grid">
              <div className="form-field">
                <label htmlFor="nombre">Nombre</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  required
                  autoComplete="name"
                  placeholder="Tu nombre"
                />
              </div>
              <div className="form-field">
                <label htmlFor="correo">Correo</label>
                <input
                  type="email"
                  id="correo"
                  name="correo"
                  required
                  autoComplete="email"
                  placeholder="tu@correo.com"
                />
              </div>
              <div className="form-field">
                <label htmlFor="tipo">Tipo de proyecto</label>
                <select id="tipo" name="tipo" required defaultValue="">
                  <option value="" disabled>
                    Selecciona una opción
                  </option>
                  <option value="vivienda">Vivienda / Residencial</option>
                  <option value="trabajo">Espacio de trabajo</option>
                  <option value="reforma">Reforma / Remodelación</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
              <div className="form-field">
                <label htmlFor="ubicacion">Ubicación</label>
                <input
                  type="text"
                  id="ubicacion"
                  name="ubicacion"
                  placeholder="Ciudad o zona"
                />
              </div>
              <div className="form-field form-field--full">
                <label htmlFor="descripcion">Descripción de la necesidad</label>
                <textarea
                  id="descripcion"
                  name="descripcion"
                  rows={5}
                  required
                  placeholder="Describe brevemente qué necesitas resolver o mejorar en el espacio."
                />
              </div>
            </div>

            <div className="contact-form__actions">
              <button type="submit" className="btn btn-primary">
                Enviar consulta
              </button>
            </div>

            <p className="contact-form__note" role="status" aria-live="polite">
              Después de enviar el formulario, revisaremos la información y
              nos pondremos en contacto para coordinar una conversación
              inicial. Este sitio es de demostración: no existe backend
              configurado, por lo que el envío no genera un mensaje real.
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}
