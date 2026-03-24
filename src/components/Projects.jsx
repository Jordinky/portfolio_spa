import { useTranslation } from 'react-i18next';
import portfolioData from '../data/portfolio.json';

export default function Projects() {
  const { projects } = portfolioData;
  const { t } = useTranslation();

  return (
    <section id="projects">
      <h2 className="section-title">{t('projects.title')}</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card sharp-corners" key={index}>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{t(`projects.desc_${project.id}`)}</p>
            <div className="project-stack">
              {project.stack.map((tech, i) => (
                <span className="stack-badge" key={i}>{tech}</span>
              ))}
            </div>
            <div className="project-links">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              )}
              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
