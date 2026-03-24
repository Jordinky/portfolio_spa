import { useTranslation } from 'react-i18next';
import portfolioData from '../data/portfolio.json';

export default function Studies() {
  const { studies } = portfolioData;
  const { t } = useTranslation();

  return (
    <section id="studies">
      <h2 className="section-title">{t('studies.title')}</h2>
      <div className="timeline">
        {studies.map((study, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="job-period">{study.year}</span>
              <h3 className="job-role">{t(`studies.${study.id}`)}</h3>
              <h4 className="job-company">{study.institution}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
