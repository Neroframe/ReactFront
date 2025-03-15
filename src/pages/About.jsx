import React from "react";
import "../styles/About.css"; // Подключаем стили

const About = () => {
  return (
    <div className="about-container">
      {/* Блок с заголовком */}
      <header className="about-header">
        <h1>О компании <span className="highlight">Shielded Networks</span></h1>
        <p>Ваш надежный партнер в области кибербезопасности</p>
      </header>

      {/* Раздел "Наша миссия" */}
      <section className="about-mission">
        <div className="about-content">
          <h2>Наша миссия</h2>
          <p>
            Мы помогаем бизнесу и частным клиентам защитить их данные, 
            минимизировать киберугрозы и быть на шаг впереди хакеров.
          </p>
        </div>
        <img src="/src/assets/security-mission.jpg" alt="Миссия компании" />
      </section>

      {/* Раздел "История компании" */}
      <section className="about-history">
        <img src="/src/assets/history.jpg" alt="История компании" />
        <div className="about-content">
          <h2>История компании</h2>
          <p>
            Shielded Networks была основана в 2024 году группой энтузиастов, 
            стремящихся сделать кибербезопасность доступной и эффективной. 
            Сегодня мы работаем с бизнесом разного масштаба, предлагая 
            инновационные решения и экспертный подход.
          </p>
        </div>
      </section>

      {/* Раздел "Наша команда" */}
      <section className="about-team">
        <h2>Наша команда</h2>
        <div className="team-grid">
          <div className="team-member">
            <img src="/src/assets/team/adilet.jpg" alt="Асылжан" />
            <h3>Асылжан</h3>
            <p>Основатель идеи и разработчик концепции услуг</p>
          </div>
          <div className="team-member">
            <img src="/src/assets/team/bagdar.jpg" alt="..." />
            <h3>ИМЯ</h3>
            <p>Ответственный за бизнес-модель и развитие компании</p>
          </div>
          <div className="team-member">
            <img src="/src/assets/team/you.jpg" alt="..." />
            <h3>ИМЯ</h3>
            <p>Ключевой участник команды и будущий лидер в кибербезопасности</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
