import React from "react";
import "../styles/Projects.css";

const projects = [
  {
    title: "Внедрение системы мониторинга безопасности",
    description: "Разработка и внедрение SIEM-системы для крупной компании.",
    image: "/path/to/project1.jpg",
    link: "/projects/security-monitoring",
  },
  {
    title: "Тестирование на проникновение для финансового сектора",
    description: "Проведение тестов на проникновение для банка.",
    image: "/path/to/project2.jpg",
    link: "/projects/pentest-finance",
  },
  {
    title: "Обучение сотрудников крупного предприятия",
    description: "Создание программы по повышению осведомленности в сфере кибербезопасности.",
    image: "/path/to/project3.jpg",
    link: "/projects/security-training",
  },
  {
    title: "Анализ инцидента и восстановление данных",
    description: "Расследование утечки данных и восстановление инфраструктуры.",
    image: "/path/to/project4.jpg",
    link: "/projects/incident-response",
  },
];

const testimonials = [
  {
    name: "Алексей Иванов, CEO FinTechCorp",
    feedback: "Сотрудничество с этой компанией повысило уровень безопасности наших финансовых систем.",
  },
  {
    name: "Мария Козлова, Директор IT-департамента",
    feedback: "Профессионалы в своем деле, помогли защитить данные и обучить сотрудников.",
  },
];

const Projects = () => {
  return (
    <div className="projects-page">
      <header className="projects-header">
        <h1>Наши проекты</h1>
        <p>Мы помогаем компаниям защитить их данные, улучшить инфраструктуру и реагировать на инциденты.</p>
      </header>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <a href={project.link} className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-content">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
          </a>
        ))}
      </div>

      <section className="advantages">
        <h2>Почему выбирают нас?</h2>
        <ul>
          <li>✅ Гарантия конфиденциальности данных</li>
          <li>✅ Опыт работы с крупными корпорациями</li>
          <li>✅ Гибкие решения для бизнеса любого уровня</li>
        </ul>
      </section>

      <section className="testimonials">
        <h2>Отзывы клиентов</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <p className="testimonial-feedback">"{testimonial.feedback}"</p>
              <p className="testimonial-name">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
