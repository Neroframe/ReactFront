import AuditSection from "../components/TextBox";
import InfoCard from "../components/AuditInfo";
import pic1 from "../assets/pic1.jpg";
import "../styles/LayerOne.css";

function LayerOne() {
  const auditSections = [
    {
      key: "risks",
      title: "Оценка рисков",
      content: (
        <p>
          <strong>Оценка рисков</strong>  
          <br></br>  
          <br></br>  
          <br></br>  
          <ul>Анализ потенциальных угроз (кибератаки, природные катастрофы и т. д.).</ul>  
          <ul>Оценка влияния инцидентов на бизнес.</ul>  
          <ul>Разработка стратегии минимизации рисков.</ul>  

        </p>
      ),
    },
    {
      key: "developmentStrategies",
      title: "Разработка стратегий непрерывности бизнеса",
      content: (
        <p>
          <strong>Разработка стратегии непрерывности бизнеса</strong>  
          <br></br>  
          <br></br>  
          <br></br>  
          <ul>Обеспечение работы критически важных сервисов.</ul>  
          <ul>Возможность удалённой работы сотрудников в экстренных ситуациях.</ul>  
          <ul>Создание резервных копий данных.</ul>  

        </p>
      ),
    },
    {
      key: "recovery",
      title: "Восстановление после сбоев",
      content: (
        <p>
          <strong>Восстановление после сбоев</strong>  
          <br></br>  
          <br></br>  
          <br></br>  
          <ul>Настройка регулярного резервного копирования.</ul>  
          <ul>Планирование допустимого времени восстановления.</ul>  
          <ul>Облачные решения для быстрого восстановления данных.</ul>  
        </p>
      ),
    },
  ];

  return (
    <div className="navbar-fix">
      <AuditSection
        title="Планирование обеспечения непрерывности бизнеса (BCDR)"
        paragraphs={[
          "Разрабатываем стратегии для минимизации простоев после атак и кризисных ситуаций."
        ]}
        imageURL={pic1}
        imageAlt="audit"
      />

      {/* Pass sections to InfoCard (AuditInfo) */}
      <InfoCard sections={auditSections} />
    </div>
  );
}

export default LayerOne;
