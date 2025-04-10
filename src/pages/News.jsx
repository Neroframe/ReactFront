import React from "react";
import "../styles/News.css";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";

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

  return (
    <section className="articles">
      <div>
        <h2 className="text-center mb-3">
          {t("title")} <span className="text-danger">{t("highlightedText")}</span>
        </h2>
        <p className="text-center text-muted mb-4">{t("description")}</p>

        <Row>
          {articles.map((article, index) => (
            <Col key={index} xs={12} md={6} className="mb-4">
              <div className="article-card p-4">
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
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Articles;
