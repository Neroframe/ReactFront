import React from "react";
import "../styles/News.css";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const articles = [
  {
    key: "businessSecurity",
    link: "#",
    icon: "https://wazuh.com/wp-content/themes/wazuh-v3/assets/images/partners/strong-together-icon.png",
  },
  {
    key: "topCybersecurityMistakes",
    link: "#",
    icon: "https://wazuh.com/wp-content/themes/wazuh-v3/assets/images/partners/increase-margin-icon.png",
  },
  {
    key: "socialEngineering",
    link: "#",
    icon: "https://wazuh.com/wp-content/themes/wazuh-v3/assets/images/partners/expand-your-business-icon.png",
  },
  {
    key: "phishingTypes",
    link: "#",
    icon: "https://wazuh.com/wp-content/themes/wazuh-v3/assets/images/partners/flexible-software-icon.png",
  },
];

const Articles = () => {
  const { t } = useTranslation("news");

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
    <motion.section
      className="articles"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <div>
        <h2 className="text-center mb-3">
          {t("title")} <span className="text-danger">{t("highlightedText")}</span>
        </h2>
        <p className="text-center text-muted mb-4">{t("description")}</p>

        <Row>
          {articles.map((article, index) => (
            <Col key={index} xs={12} md={6} className="mb-4">
              <motion.div
                className="article-card p-4"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                custom={index}
                viewport={{ once: true }}
              >
                <div className="article-title d-flex align-items-center">
                  <img
                    src={article.icon}
                    alt={t(article.key)}
                    className="me-3"
                  />
                  <h3 className="mb-0">{t(article.key)}</h3>
                </div>
                <p className="article-description mt-3">
                  {t(`${article.key}Description`)}
                </p>
                <a href={article.link} className="text-danger">
                  {t("readMore")}
                </a>
              </motion.div>
            </Col>
          ))}
        </Row>
      </div>
    </motion.section>
  );
};

export default Articles;
