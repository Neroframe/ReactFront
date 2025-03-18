import React from "react";
import "../styles/News.css";
import { Container, Row, Col } from "react-bootstrap";

const articles = [
  {
    title: "Как защитить бизнес от кибератак?",
    description: "Рассматриваем основные методы защиты компаний от взломов.",
    link: "#",
    icon: "https://wazuh.com/wp-content/themes/wazuh-v3/assets/images/partners/strong-together-icon.png",
  },
  {
    title: "Топ-10 ошибок в кибербезопасности",
    description: "Какие ошибки делают компании уязвимыми и как их избежать.",
    link: "#",
    icon: "https://wazuh.com/wp-content/themes/wazuh-v3/assets/images/partners/increase-margin-icon.png",
  },
  {
    title: "Что такое социальная инженерия?",
    description: "Как хакеры обманывают людей, заставляя раскрывать данные.",
    link: "#",
    icon: "https://wazuh.com/wp-content/themes/wazuh-v3/assets/images/partners/expand-your-business-icon.png",
  },
  {
    title: "Фишинг и его разновидности",
    description: "Разбираем популярные схемы мошенников и способы защиты.",
    link: "#",
    icon: "https://wazuh.com/wp-content/themes/wazuh-v3/assets/images/partners/flexible-software-icon.png",
  },
];

const Articles = () => {
  return (
    <section className="articles">
      <div>
        <h2 className="text-center mb-3">
          Изучите <span className="text-danger">важные темы</span>
        </h2>
        <p className="text-center text-muted mb-4">
          Обзор актуальных тем в мире кибербезопасности
        </p>

        <Row>
          {articles.map((article, index) => (
            <Col key={index} xs={12} md={6} className="mb-4">
              <div className="article-card p-4">
                <div className="article-title d-flex align-items-center">
                  <img
                    src={article.icon}
                    alt={article.title}
                    className="me-3"
                  />
                  <h3 className="mb-0">{article.title}</h3>
                </div>
                <p className="article-description mt-3">
                  {article.description}
                </p>
                <a href={article.link} className="text-danger">
                  Читать далее →
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
