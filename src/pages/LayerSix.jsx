import AuditSection from "../components/TextBox";
import InfoCard from "../components/AuditInfo";
import pic1 from "../assets/pic1.jpg";
import "../styles/LayerOne.css";

function LayerOne() {
  const auditSections = [
    {
      key: "sageLifeCycle",
      title: "SDLC",
      content: (
        <p>
          <strong>Безопасный жизненный цикл разработки ПО (SDLC)</strong>  
          <br></br>  
          <br></br>  
          <br></br>  
          <ul>Интеграция безопасности на всех этапах разработки.</ul>  
          <ul>Использование безопасных методов кодирования.</ul>  
          <ul>Моделирование угроз.</ul>  
        </p>
      ),
    },
    {
      key: "software",
      title: "Аудиты кода",
      content: (
        <p>
          <strong>Аудиты кода и оценка уязвимостей</strong>  
          <br></br>  
          <br></br>  
          <br></br>  
          <ul>Статический анализ кода (SAST).</ul>  
          <ul>Динамическое тестирование безопасности (DAST).</ul>  
          <ul>Автоматизированные и ручные проверки.</ul>  

        </p>
      ),
    },
    {
      key: "network",
      title: "Обуччение разработчиков безопасному кодированию",
      content: (
        <p>
          <strong>Обучение разработчиков безопасному кодированию</strong>  
          <br></br>  
          <br></br>  
          <br></br>  
          <ul>Практические воркшопы по безопасному кодированию.</ul>  
          <ul>Обучение по стандартам OWASP Top 10.</ul>  
          <ul>Внедрение DevSecOps-практик.</ul>  

        </p>
      ),
    },
  ];

  return (
    <div className="navbar-fix">
      <AuditSection
        title="Безопасность разработки приложений"
        paragraphs={[
          "Мы проверяем и улучшаем безопасность ПО, обучаем разработчиков безопасному кодированию и защищаем IoT-устройства."
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
