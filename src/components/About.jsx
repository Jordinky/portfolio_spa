import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import portfolioData from '../data/portfolio.json';

export default function About() {
  const { skills } = portfolioData.about;
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const dateStr = "Mar 23 10:00";
  
  const skillLogos = {
    React: <svg viewBox="-11.5 -10.2 23 20.4" width="18" height="18"><circle cx="0" cy="0" r="2" fill="currentColor"/><g stroke="currentColor" strokeWidth="1" fill="none"><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></g></svg>,
    NodeJS: <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 18l-8-4v-8l8-4 8 4v8l-8 4z"/></svg>,
    Javascript: <svg viewBox="0 0 24 24" width="18" height="18"><rect x="2" y="2" width="20" height="20" fill="currentColor"/><text x="12" y="17" fill="#000" fontSize="14" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">JS</text></svg>,
    Java: <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 18s4 2 10 2 10-2 10-2"/><path d="M8 12c0 2 4 4 4 4s4-2 4-4V6s-4 4-4 4-4-4-4-4v6z"/><path d="M15 3s-1-2-3-2-3 2-3 2"/></svg>,
    MySql: <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><ellipse cx="12" cy="6" rx="10" ry="4"/><path d="M2 6v12c0 2.2 4.5 4 10 4s10-1.8 10-4V6"/></svg>,
    Git: <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="15" cy="6" r="3"/><circle cx="9" cy="18" r="3"/><circle cx="6" cy="9" r="3"/><path d="M15 9V18m0 0L9 18M6 12l3 3"/></svg>,
    MongoDB: <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2c0 0-3 5-3 11a3 3 0 0 0 6 0c0-6-3-11-3-11z"/></svg>
  };

  return (
    <section id="about" ref={sectionRef}>
      <h2 className="section-title">{t('about.title')}</h2>
      
      <div className={`terminal-window ${isVisible ? 'visible' : ''}`}>
        <div className="terminal-header">
          <div className="terminal-buttons">
            <span className="term-btn close"></span>
            <span className="term-btn min"></span>
            <span className="term-btn max"></span>
          </div>
          <div className="terminal-title">guest@portfolio:~</div>
        </div>
        
        <div className="terminal-body">
          <div className="term-line">
            <span className="term-prompt">guest@portfolio:~$</span>
            <span className="term-command">cat bio.txt</span>
          </div>
          <div className="term-output bio-text">{t('about.bio')}</div>
          
          <div className="term-line mt-2">
            <span className="term-prompt">guest@portfolio:~$</span>
            <span className="term-command">ls -l ./skills</span>
          </div>
          
          <div className="term-output">
            <div>total {skills.length * 4}</div>
            {skills.map((skill, index) => (
              <div key={index} className="term-file-row">
                <span className="term-perms">drwxr-xr-x</span>
                <span className="term-links">2</span>
                <span className="term-user">guest</span>
                <span className="term-group">staff</span>
                <span className="term-date">{dateStr}</span>
                <span className="term-filename">{skill.name}{skillLogos[skill.name]}</span>
              </div>
            ))}
          </div>
          
          <div className="term-line mt-2">
            <span className="term-prompt">guest@portfolio:~$</span>
            <span className="typing-cursor"></span>
          </div>
        </div>
      </div>
    </section>
  );
}
