import { useTranslation } from 'react-i18next';
import portfolioData from '../data/portfolio.json';

export default function Experience() {
  const { experience } = portfolioData;
  const { t } = useTranslation();

  return (
    <section id="experience">
      <h2 className="section-title">{t('experience.title')}</h2>
      <div className="timeline">
        {experience.map((job, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="job-period">{job.period}</span>
              <h3 className="job-role">{t(`experience.${job.id}_role`)}</h3>
              <h4 className="job-company">{job.company}</h4>
              <p className="job-desc">{t(`experience.${job.id}_desc`)}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
