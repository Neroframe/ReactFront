import React from "react";
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";
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

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.1, duration: 0.5 }
    })
  };

  return (
    <div className="projects-page">
      <motion.header
        className="projects-hero"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="hero-content">
          <h1>{t('hero.title')}</h1>
          <p className="subtitle">{t('hero.subtitle')}</p>
          <div className="scroll-indicator">
            <span></span>
          </div>
        </div>
      </motion.header>

      <motion.section
        className="projects-section"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="section-header">
          <h2>{t('sections.cases.title')}</h2>
          <p>{t('sections.cases.subtitle')}</p>
        </div>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              className="project-card"
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
            >
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
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="advantages-section"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="section-header">
          <h2>{t('sections.advantages.title')}</h2>
          <p>{t('sections.advantages.subtitle')}</p>
        </div>
        
        <div className="advantages-grid">
          <motion.div
            className="advantage-card"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            <div className="advantage-icon">🔒</div>
            <h3>{t('advantages.confidentiality.title')}</h3>
            <p>{t('advantages.confidentiality.description')}</p>
          </motion.div>

          <motion.div
            className="advantage-card"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
          >
            <div className="advantage-icon">🏢</div>
            <h3>{t('advantages.experience.title')}</h3>
            <p>{t('advantages.experience.description')}</p>
          </motion.div>

          <motion.div
            className="advantage-card"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
          >
            <div className="advantage-icon">🔄</div>
            <h3>{t('advantages.flexibility.title')}</h3>
            <p>{t('advantages.flexibility.description')}</p>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="testimonials-section"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <div className="section-header">
          <h2>{t('sections.testimonials.title')}</h2>
          <p>{t('sections.testimonials.subtitle')}</p>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              className="testimonial-card"
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
            >
              <div className="testimonial-avatar">
                <img src={testimonial.avatar} alt={testimonial.name} />
              </div>
              <div className="testimonial-content">
                <p className="feedback">"{testimonial.feedback}"</p>
                <p className="author">- {testimonial.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default Projects;
