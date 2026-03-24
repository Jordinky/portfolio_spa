import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import portfolioData from '../data/portfolio.json';

export default function Hero() {
  const { name, title, cta, photo } = portfolioData.hero;
  const [displayedTitle, setDisplayedTitle] = useState('');
  const { t } = useTranslation();

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < title.length) {
        setDisplayedTitle(title.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [title]);

  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-name">{name}</h1>
          <h2 className="hero-title">
            {displayedTitle}
            <span className="typing-cursor"></span>
          </h2>
          <p className="hero-tagline">{t('hero.tagline')}</p>
          <div className="hero-cta">
            <a href={cta.href} className="sharp-corners">
              <button>{t('hero.cta')}</button>
            </a>
          </div>
        </div>
        <div className="hero-photo">
          <img src={photo} alt={name} className="profile-img" />
        </div>
      </div>
    </section>
  );
}
