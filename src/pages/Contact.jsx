import React from "react";
import { useTranslation, Trans } from 'react-i18next';
import "../styles/Contact.css";

const Contact = () => {
  const { t } = useTranslation('contact'); // Указываем namespace 'contact'

  return (
    <div className="contact-container">
      {/* Заголовок страницы */}
      <header className="contact-header">
        <h1>{t('title')}</h1>
        <p>{t('subtitle')}</p>
      </header>

      {/* Основная контактная информация */}
      <section className="contact-info">
        <div className="contact-card">
          <h2>📞 {t('phone.title')}</h2>
          <p><a href="tel:+77001234567">{t('phone.number')}</a></p>
        </div>
        <div className="contact-card">
          <h2>📧 {t('email.title')}</h2>
          <p><a href="mailto:info@shieldednetworks.com">{t('email.address')}</a></p>
        </div>
        <div className="contact-card">
          <h2>📍 {t('address.title')}</h2>
          <p>{t('address.value')}</p>
        </div>
      </section>

      {/* Социальные сети */}
      <section className="contact-social">
        <h2>🌐 {t('social.title')}</h2>
        <div className="social-links">
          <a href="https://t.me/shieldednetworks" target="_blank" rel="noopener noreferrer">
            {t('social.telegram')}
          </a>
          <a href="https://www.linkedin.com/company/shieldednetworks" target="_blank" rel="noopener noreferrer">
            {t('social.linkedin')}
          </a>
          <a href="https://github.com/shieldednetworks" target="_blank" rel="noopener noreferrer">
            {t('social.github')}
          </a>
        </div>
      </section>

      {/* Форма обратной связи */}
      <section className="contact-form">
        <h2>{t('form.title')}</h2>
        <form>
          <input 
            type="text" 
            placeholder={t('form.namePlaceholder')} 
            required 
          />
          <input 
            type="email" 
            placeholder={t('form.emailPlaceholder')} 
            required 
          />
          <textarea 
            placeholder={t('form.messagePlaceholder')} 
            required
          ></textarea>
          <button type="submit">{t('form.submitButton')}</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;