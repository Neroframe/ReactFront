import AuditSection from "../components/TextBox";
import InfoCard from "../components/AuditInfo";
import pic1 from "../assets/pic1.jpg";
import "../styles/LayerOne.css";
import LayerInfo from "../components/LayerInfo";

function LayerOne() {
  const auditSections = [
    {
      key: "identification",
      title: "Идентивикация уязвимостей",
      content: (
        <p>
          <strong>Идентификация уязвимостей</strong>
          <br></br>
          <br></br>
          <br></br>
          <ul>Регулярное сканирование систем на предмет слабых мест.</ul>
          <ul>
            Анализ текущего уровня защиты от вредоносного ПО,
            программ-вымогателей и фишинга.
          </ul>
          <ul>Приоритизация рисков по степени вероятности их эксплуатации.</ul>
        </p>
      ),
    },
    {
      key: "pen testing",
      title: "Pen testing",
      content: (
        <p>
          <strong>Тестирование на проникновение (Pen Testing)</strong>
          <br></br>
          <br></br>
          <br></br>
          <ul>Симуляция атак для выявления слабых мест.</ul>
          <ul>Подробные отчёты с путями атак и рекомендациями.</ul>
          <ul>Улучшение безопасности на основе результатов тестирования.</ul>
        </p>
      ),
    },
    {
      key: "test",
      title: "Проверка соответствия требованиям",
      content: (
        <p>
          <strong>Проверка соответствия требованиям</strong>
          <br></br>
          <br></br>
          <br></br>
          <ul>
            Обеспечиваем соответствие таким стандартам, как ISO 27001, GDPR,
            HIPAA, а также внутренним политикам безопасности.
          </ul>
        </p>
      ),
    },
  ];

  return (
    <div>
      <LayerInfo
        title="Тестирование на проникновение"
        backgroundImage="https://inova.kz/wp-content/uploads/2023/05/wall_4_3-1.png"
        breadcrumbs={[
          { label: "Что то ", link: "/" },
          { label: "ФЫВ", link: "/" },
          { label: "Аудит ИТ-инфраструктуры" },
        ]}
      />
      <AuditSection
        title="Аудит информационной безопасности"
        paragraphs={[
          "Аудит включает проверку систем на уязвимости и соответствие стандартам.",
          "Мы проводим тестирование на проникновение для выявления слабых мест и управления уязвимостями.",
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
