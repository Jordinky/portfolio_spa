import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Nav() {
  const [activeSection, setActiveSection] = useState('');
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { id: 'hero', label: t('nav.home') },
    { id: 'about', label: t('nav.about') },
    { id: 'projects', label: t('nav.projects') },
    { id: 'experience', label: t('nav.experience') },
    { id: 'studies', label: t('nav.studies') },
    { id: 'contact', label: t('nav.contact') },
  ];

  return (
    <nav className="navbar glass-panel">
      <div className="nav-container">
        <div className="logo">[JP]</div>
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={activeSection === link.id ? 'active' : ''}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="nav-lang-switcher">
          <button onClick={() => changeLanguage('ca')} className={i18n.language === 'ca' ? 'active-lang' : ''}>CA</button>
          <button onClick={() => changeLanguage('es')} className={i18n.language === 'es' ? 'active-lang' : ''}>ES</button>
          <button onClick={() => changeLanguage('en')} className={i18n.language === 'en' ? 'active-lang' : ''}>EN</button>
        </div>
      </div>
    </nav>
  );
}
