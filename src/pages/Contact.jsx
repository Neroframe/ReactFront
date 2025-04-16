import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "../styles/Contact.css";

const Contact = () => {
  const { t } = useTranslation('contact');

  // Варианты анимации для карточек контактов
  const contactCardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6
      }
    })
  };

  // Варианты анимации для социальных ссылок
  const socialLinkVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  // Анимация для формы
  const formVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  // Анимация для элементов формы
  const formItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div
      className="contact-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Заголовок страницы */}
      <motion.header 
        className="contact-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h1>{t('title')}</h1>
        <p>{t('subtitle')}</p>
      </motion.header>

      {/* Основная контактная информация */}
      <motion.section 
        className="contact-info"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        transition={{ staggerChildren: 0.1 }}
      >
        {['phone', 'email', 'address'].map((item, i) => (
          <motion.div
            key={item}
            className="contact-card"
            variants={contactCardVariants}
            custom={i}
          >
            <h2>
              {item === 'phone' ? '📞' : item === 'email' ? '📧' : '📍'} 
              {t(`${item}.title`)}
            </h2>
            <p>
              {item !== 'address' ? (
                <a 
                  href={item === 'phone' ? 'tel:+77001234567' : 'mailto:info@shieldednetworks.com'}
                >
                  {t(`${item}.${item === 'phone' ? 'number' : 'address'}`)}
                </a>
              ) : (
                t(`${item}.value`)
              )}
            </p>
          </motion.div>
        ))}
      </motion.section>

      {/* Социальные сети */}
      <motion.section 
        className="contact-social"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        transition={{ staggerChildren: 0.1 }}
      >
        <h2>🌐 {t('social.title')}</h2>
        <div className="social-links">
          {['telegram', 'linkedin', 'github'].map((social, i) => (
            <motion.a
              key={social}
              href={`https://${social === 'telegram' ? 't.me' : social === 'linkedin' ? 'www.linkedin.com/company' : 'github.com'}/shieldednetworks`}
              target="_blank"
              rel="noopener noreferrer"
              variants={socialLinkVariants}
              custom={i}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t(`social.${social}`)}
            </motion.a>
          ))}
        </div>
      </motion.section>

      {/* Форма обратной связи */}
      <motion.section 
        className="contact-form"
        variants={formVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <h2>{t('form.title')}</h2>
        <motion.form variants={formVariants}>
          <motion.input 
            type="text" 
            placeholder={t('form.namePlaceholder')} 
            required
            variants={formItemVariants}
          />
          <motion.input 
            type="email" 
            placeholder={t('form.emailPlaceholder')} 
            required
            variants={formItemVariants}
          />
          <motion.textarea 
            placeholder={t('form.messagePlaceholder')} 
            required
            variants={formItemVariants}
          ></motion.textarea>
          <motion.button 
            type="submit"
            variants={formItemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('form.submitButton')}
          </motion.button>
        </motion.form>
      </motion.section>
    </motion.div>
  );
};

export default Contact;