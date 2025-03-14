import AuditSection from "../components/TextBox";
import InfoCard from "../components/AuditInfo";
import pic1 from "../assets/pic1.jpg";
import "../styles/LayerOne.css";

function LayerOne() {
  const auditSections = [
    {
      key: "certification",
      title: "Сертификация",
      content: (
        <p>
          <strong>Сертификация в области кибербезопасности</strong>  
          <br></br>  
          <br></br>  
          <br></br>  
          <ul>Интерактивные сессии по реальным угрозам.</ul>  
          <ul>Обучение, адаптированное к вашей отрасли.</ul>  
          <ul>Постоянное обновление программ с учётом новых угроз.</ul>  

        </p>
      ),
    },
    {
      key: "phishing",
      title: "Фишинговые симуляции",
      content: (
        <p>
          <strong>Фишинговые симуляции</strong>  
            <br></br>  
            <br></br>  
            <br></br>  
            <ul>Создание реалистичных фишинговых писем.</ul>  
            <ul>Анализ реакции сотрудников и выявление проблемных мест.</ul>  
            <ul>Персонализированная обратная связь.</ul>  


        </p>
      ),
    },
    {
      key: "mobile",
      title: "Защита мобильных устройств",
      content: (
        <p>
         <strong>Защита мобильных устройств</strong>  
        <br></br>  
        <br></br>  
        <br></br>  
        <ul>Обучение по защите корпоративных и личных мобильных устройств.</ul>  

        </p>
      ),
    },
  ];

  return (
    <div className="navbar-fix">
      <AuditSection
        title="Проведение тренингов и семинаров"
        paragraphs={[
          "Мы организуем курсы и семинары по кибербезопасности, помогаем в получении ",
          "профессиональных сертификатов и разрабатываем меры защиты мобильных устройств."
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
