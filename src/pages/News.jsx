import React from "react";
import "../styles/News.css"; // Подключаем стили

const articles = [
  {
    title: "Как защитить бизнес от кибератак?",
    description: "Рассматриваем основные методы защиты компаний от взломов.",
    link: "#",
  },
  {
    title: "Топ-10 ошибок в кибербезопасности",
    description: "Какие ошибки делают компании уязвимыми и как их избежать.",
    link: "#",
  },
  {
    title: "Что такое социальная инженерия?",
    description: "Как хакеры обманывают людей, заставляя раскрывать данные.",
    link: "#",
  },
  {
    title: "Фишинг и его разновидности",
    description: "Разбираем популярные схемы мошенников и способы защиты.",
    link: "#",
  },
];

const Articles = () => {
  return (
    <section className="articles">
      <h1>Статьи</h1>
      <p className="subtitle">Обзор актуальных тем в мире кибербезопасности</p>

      <div className="articles-container">
        {articles.map((article, index) => (
          <div key={index} className="article-card">
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <a href={article.link}>Читать далее</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Articles;
