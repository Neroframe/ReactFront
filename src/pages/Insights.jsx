import React from "react";
import "../styles/Projects.css";

const projects = [
  {
    title: "Внедрение системы мониторинга безопасности",
    description: "Разработка и внедрение SIEM-системы для крупной компании.",
    image: "/path/to/project1.jpg",
    link: "/projects/security-monitoring",
    category: "SIEM"
  },
  {
    title: "Внедрение системы мониторинга безопасности",
    description: "Разработка и внедрение SIEM-системы для крупной компании.",
    image: "/path/to/project1.jpg",
    link: "/projects/security-monitoring",
    category: "SIEM"
  },
  {
    title: "Внедрение системы мониторинга безопасности",
    description: "Разработка и внедрение SIEM-системы для крупной компании.",
    image: "/path/to/project1.jpg",
    link: "/projects/security-monitoring",
    category: "SIEM"
  },
  {
    title: "Тестирование на проникновение",
    description: "Проведение тестов на проникновение для банка.",
    image: "/path/to/project2.jpg",
    link: "/projects/pentest-finance",
    category: "Penetration Testing"
  },
  {
    title: "Обучение сотрудников",
    description: "Создание программы по повышению осведомленности в сфере кибербезопасности.",
    image: "/path/to/project3.jpg",
    link: "/projects/security-training",
    category: "Обучение"
  },
  {
    title: "Анализ инцидента",
    description: "Расследование утечки данных и восстановление инфраструктуры.",
    image: "/path/to/project4.jpg",
    link: "/projects/incident-response",
    category: "Digital Forensics"
  },
];

const testimonials = [
  {
    name: "Алексей Иванов, CEO FinTechCorp",
    feedback: "Сотрудничество с этой компанией повысило уровень безопасности наших финансовых систем.",
    avatar: "/path/to/avatar1.jpg"
  },
  {
    name: "Мария Козлова, Директор IT-департамента",
    feedback: "Профессионалы в своем деле, помогли защитить данные и обучить сотрудников.",
    avatar: "/path/to/avatar2.jpg"
  },
];

const Projects = () => {
  return (
    <div className="projects-page">
      <header className="projects-hero">
        <div className="hero-content">
          <h1>Наши проекты</h1>
          <p className="subtitle">
            Мы помогаем компаниям защитить их данные, улучшить инфраструктуру и
            реагировать на инциденты.
          </p>
          <div className="scroll-indicator">
            <span></span>
          </div>
        </div>
      </header>

      <section className="projects-section">
        <div className="section-header">
          <h2>Наши кейсы</h2>
          <p>Реализованные проекты в сфере кибербезопасности</p>
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
                  Подробнее →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="advantages-section">
        <div className="section-header">
          <h2>Почему выбирают нас?</h2>
          <p>Наши ключевые преимущества</p>
        </div>
        
        <div className="advantages-grid">
          <div className="advantage-card">
            <div className="advantage-icon">🔒</div>
            <h3>Конфиденциальность</h3>
            <p>Полная гарантия безопасности и неразглашения данных</p>
          </div>
          
          <div className="advantage-card">
            <div className="advantage-icon">🏢</div>
            <h3>Опыт</h3>
            <p>Работаем с корпорациями любого уровня сложности</p>
          </div>
          
          <div className="advantage-card">
            <div className="advantage-icon">🔄</div>
            <h3>Гибкость</h3>
            <p>Индивидуальные решения под ваш бизнес</p>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="section-header">
          <h2>Отзывы клиентов</h2>
          <p>Что говорят о нас наши клиенты</p>
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