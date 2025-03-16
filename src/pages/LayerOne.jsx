import AuditSection from "../components/TextBox";
import InfoCard from "../components/AuditInfo";
import pic1 from "../assets/pic1.jpg";
import "../styles/LayerOne.css";
import LayerInfo from "../components/LayerInfo";

function LayerOne() {
  const auditSections = [
    {
      key: "Analyse",
      title: "Анализ журналов безопасности",
      content: (
        <p>
          <strong>Анализ журналов безопасности:</strong> Мы обеспечиваем
          соответствие вашей организации лучшим практикам кибербезопасности,
          разрабатывая четкие и эффективные политики:
          <br></br>
          <br></br>
          <br></br>
          <ul>
            Оценка рисков: Выявляем и приоритизируем риски для эффективного
            распределения ресурсов.
          </ul>
          <ul>
            Анализ угроз: Оцениваем текущие и потенциальные угрозы на основе
            вашей отрасли и используемых технологий.
          </ul>
          <ul>
            Дорожная карта стратегии: Помогаем создать пошаговый план внедрения
            мер безопасности.
          </ul>
        </p>
      ),
    },
    {
      key: "vCISO",
      title: "vCISO",
      content: (
        <p>
          <strong>
            Виртуальный директор по информационной безопасности (vCISO):
          </strong>
          Услуги виртуального CISO позволяют получить доступ к экспертным
          знаниям по кибербезопасности без необходимости нанимать CISO на полный
          рабочий день.
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <ul>
            Руководство в области кибербезопасности: Помощь в разработке
            долгосрочной стратегии.
          </ul>
          <ul>
            Управление соответствием: Обеспечение соответствия законодательным и
            нормативным требованиям.
          </ul>
          <ul>
            Планирование реагирования на инциденты: Разработка стратегий,
            которые можно активировать при кибератаке.
          </ul>
        </p>
      ),
    },
    {
      key: "politics",
      title: "Поддержка соответствия политикам",
      content: (
        <p>
          <strong>Поддержка соответствия политикам</strong>
          <br></br>
          <br></br>
          <br></br>
          <ul>
            Разработка политик безопасности, включая защиту данных и управление
            паролями.
          </ul>
          <ul>
            Поддержка соответствия GDPR, HIPAA и другим отраслевым стандартам.
          </ul>
        </p>
      ),
    },
  ];

  return (
    <div>
      <LayerInfo
        title="Аудит ИТ-инфраструктуры"
        backgroundImage="https://inova.kz/wp-content/uploads/2023/05/wall_4_3-1.png"
        breadcrumbs={[
          { label: "Главная", link: "/" },
          { label: "Услуги", link: "/" },
          { label: "Аудит ИТ-инфраструктуры" },
        ]}
      />
      <AuditSection
        title="Консультирование по кибербезопасности"
        paragraphs={[
          "Консультирование включает в себя улучшение стратегий безопасности и внедрение передовых практик",
          "Мы предоставляем услуги виртуального CISO, разрабатываем и внедряем политики безопасности, а также помогаем соответствовать нормативным требованиям, таким как GDPR и HIPAA",
        ]}
        imageURL={pic1}
        imageAlt="audit"
      />

      <InfoCard sections={auditSections} />
    </div>
  );
}

export default LayerOne;
