import portfolioData from '../data/portfolio.json';

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card sharp-corners" key={index}>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>
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
