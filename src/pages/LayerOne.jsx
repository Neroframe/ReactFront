import AuditSection from "../components/TextBox";
import InfoCard from "../components/AuditInfo";
import pic1 from "../assets/pic1.jpg";
import "../styles/LayerOne.css";

function LayerOne() {
  return (
    <div className="navbar-fix">
      <AuditSection
        title="IT-аудит"
        paragraphs={[
          "IT-аудит проводится с целью определения эффективности использования ресурсов, оценки безопасности и надежности систем, а также для установления соответствия политикам и стандартам компании и промышленным стандартам.",
          "Аудит ИТ-инфраструктуры может быть проведен внутренними или внешними аудиторами и обычно завершается отчетом, который включает рекомендации по улучшению операций ИТ.",
          "Аудит ИТ-инфраструктуры - это важный инструмент для обеспечения непрерывной работы бизнес-процессов, снижения рисков, связанных с IT, и оптимизации затрат на IT.",
        ]}
        imageURL={pic1}
        imageAlt="audit"
      />

      <InfoCard />
    </div>
  );
}

export default LayerOne;
