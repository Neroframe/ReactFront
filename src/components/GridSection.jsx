import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import "../styles/Gridsection.css";

const GridSection = ({ title, text, link, image, reverse = false }) => {
  const { t } = useTranslation("gridsection"); // используем нужный namespace

  return (
    <section className={`grid-section ${reverse ? 'reverse' : ''}`}>
      <div className="grid-content">
        <h2 className="grid-title">
          <Link to={link} className="grid-link">
            {title}
          </Link>
        </h2>
        <p className="grid-text">{text}</p>
        <Link to={link} className="grid-more-btn">
          <span>{t("learnMore")}</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
      <Link to={link} className="grid-image-wrapper">
        <img src={image} alt={title} className="grid-image" />
      </Link>
    </section>
  );
};

export default GridSection;
