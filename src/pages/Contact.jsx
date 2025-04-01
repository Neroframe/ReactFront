import React from "react";
import "../styles/Contact.css"; // Подключаем стили

const Contact = () => {
  return (
    <div className="contact-container">
      {/* Заголовок страницы */}
      <header className="contact-header">
        <h1>Свяжитесь с нами</h1>
        <p>Мы всегда готовы помочь вам в вопросах кибербезопасности</p>
      </header>

      {/* Основная контактная информация */}
      <section className="contact-info">
        <div className="contact-card">
          <h2>📞 Телефон</h2>
          <p><a href="tel:+77001234567">+7 (700) 123-45-67</a></p>
        </div>
        <div className="contact-card">
          <h2>📧 Email</h2>
          <p><a href="mailto:info@shieldednetworks.com">info@shieldednetworks.com</a></p>
        </div>
        <div className="contact-card">
          <h2>📍 Адрес</h2>
          <p>г. Астана, Казахстан, ул. Безопасная 42</p>
        </div>
      </section>

      {/* Социальные сети */}
      <section className="contact-social">
        <h2>🌐 Социальные сети</h2>
        <div className="social-links">
          <a href="https://t.me/shieldednetworks" target="_blank" rel="noopener noreferrer">Telegram</a>
          <a href="https://www.linkedin.com/company/shieldednetworks" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/shieldednetworks" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </section>

      {/* Форма обратной связи */}
      <section className="contact-form">
        <h2> Оставьте нам сообщение</h2>
        <form>
          <input type="text" placeholder="Ваше имя" required />
          <input type="email" placeholder="Ваш Email" required />
          <textarea placeholder="Ваше сообщение" required></textarea>
          <button type="submit">Отправить</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
