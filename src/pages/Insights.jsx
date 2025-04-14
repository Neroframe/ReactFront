import React from "react";
import { useTranslation } from 'react-i18next';
import "../styles/Projects.css";

const Projects = () => {
  const { t } = useTranslation('insights');

  const projects = [
    {
      title: t('projects.list.siem.title'),
      description: t('projects.list.siem.description'),
      image: "/path/to/project1.jpg",
      link: "/projects/security-monitoring",
      category: t('categories.siem')
    },
    {
      title: t('projects.list.siem.title'),
      description: t('projects.list.siem.description'),
      image: "/path/to/project1.jpg",
      link: "/projects/security-monitoring",
      category: t('categories.siem')
    },
    {
      title: t('projects.list.siem.title'),
      description: t('projects.list.siem.description'),
      image: "/path/to/project1.jpg",
      link: "/projects/security-monitoring",
      category: t('categories.siem')
    },
    {
      title: t('projects.list.pentest.title'),
      description: t('projects.list.pentest.description'),
      image: "/path/to/project2.jpg",
      link: "/projects/pentest-finance",
      category: t('categories.pentest')
    },
    {
      title: t('projects.list.training.title'),
      description: t('projects.list.training.description'),
      image: "/path/to/project3.jpg",
      link: "/projects/security-training",
      category: t('categories.training')
    },
    {
      title: t('projects.list.forensics.title'),
      description: t('projects.list.forensics.description'),
      image: "/path/to/project4.jpg",
      link: "/projects/incident-response",
      category: t('categories.forensics')
    },
  ];

  const testimonials = [
    {
      name: t('testimonials.list.0.name'),
      feedback: t('testimonials.list.0.feedback'),
      avatar: "/path/to/avatar1.jpg"
    },
    {
      name: t('testimonials.list.1.name'),
      feedback: t('testimonials.list.1.feedback'),
      avatar: "/path/to/avatar2.jpg"
    },
  ];

  return (
    <div className="projects-page">
      <header className="projects-hero">
        <div className="hero-content">
          <h1>{t('hero.title')}</h1>
          <p className="subtitle">{t('hero.subtitle')}</p>
          <div className="scroll-indicator">
            <span></span>
          </div>
        </div>
      </header>

      <section className="projects-section">
        <div className="section-header">
          <h2>{t('sections.cases.title')}</h2>
          <p>{t('sections.cases.subtitle')}</p>
        </div>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="card-image">
                <img src={project.image} alt={project.title} />
                <span className="project-category">{project.category}</span>
              </div>
              <div className="card-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} className="project-link">
                  {t('common.more')} →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="advantages-section">
        <div className="section-header">
          <h2>{t('sections.advantages.title')}</h2>
          <p>{t('sections.advantages.subtitle')}</p>
        </div>
        
        <div className="advantages-grid">
          <div className="advantage-card">
            <div className="advantage-icon">🔒</div>
            <h3>{t('advantages.confidentiality.title')}</h3>
            <p>{t('advantages.confidentiality.description')}</p>
          </div>
          
          <div className="advantage-card">
            <div className="advantage-icon">🏢</div>
            <h3>{t('advantages.experience.title')}</h3>
            <p>{t('advantages.experience.description')}</p>
          </div>
          
          <div className="advantage-card">
            <div className="advantage-icon">🔄</div>
            <h3>{t('advantages.flexibility.title')}</h3>
            <p>{t('advantages.flexibility.description')}</p>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="section-header">
          <h2>{t('sections.testimonials.title')}</h2>
          <p>{t('sections.testimonials.subtitle')}</p>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <div className="testimonial-avatar">
                <img src={testimonial.avatar} alt={testimonial.name} />
              </div>
              <div className="testimonial-content">
                <p className="feedback">"{testimonial.feedback}"</p>
                <p className="author">- {testimonial.name}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;