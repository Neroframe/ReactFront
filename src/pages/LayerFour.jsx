import AuditSection from "../components/TextBox";
import InfoCard from "../components/AuditInfo";
import pic1 from "../assets/pic1.jpg";
import "../styles/LayerOne.css";
import LayerInfo from "../components/LayerInfo";

function LayerOne() {
  const auditSections = [
    {
      key: "monitoring",
      title: "Мониторинг и защита устройств",
      content: (
        <p>
          <strong>Мониторинг и защита устройств</strong>
          <br></br>
          <br></br>
          <br></br>
          <ul>Отслеживание всех устройств в сети.</ul>
          <ul>Централизованное управление безопасностью.</ul>
          <ul>Предотвращение атак в режиме реального времени.</ul>
        </p>
      ),
    },
    {
      key: "usage",
      title: "Управление доступом и идентификацией",
      content: (
        <p>
          <strong>Управление доступом и идентификацией</strong>
          <br></br>
          <br></br>
          <br></br>
          <ul>Ограничение доступа по ролям.</ul>
          <ul>Двухфакторная аутентификация.</ul>
          <ul>Шифрование данных.</ul>
        </p>
      ),
    },
    {
      key: "incidents",
      title: "Выявление и реагирование на инциденты",
      content: (
        <p>
          <strong>Выявление и реагирование на инциденты</strong>
          <br></br>
          <br></br>
          <br></br>
          <ul>Системы IDS/IPS для обнаружения атак.</ul>
          <ul>Автоматизированные инструменты реагирования.</ul>
          <ul>Оповещения в реальном времени.</ul>
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
        title="Защита конечных устройств (Endpoint Security)"
        paragraphs={[
          "Мы управляем и защищаем все конечные устройства организации (ПК, мобильные устройства, серверы).",
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
