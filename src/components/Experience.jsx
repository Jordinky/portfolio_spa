import portfolioData from '../data/portfolio.json';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience">
      <h2 className="section-title">Experience</h2>
      <div className="timeline">
        {experience.map((job, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="job-period">{job.period}</span>
              <h3 className="job-role">{job.role}</h3>
              <h4 className="job-company">{job.company}</h4>
              <p className="job-desc">{job.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
