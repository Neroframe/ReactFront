import { useTranslation } from "react-i18next";
import AuditSection from "../components/TextBox";
import InfoCard from "../components/AuditInfo";
import pic1 from "../assets/pic1.jpg";
import "../styles/LayerOne.css";
import LayerInfo from "../components/LayerInfo";

function LayerOne() {
  const { t } = useTranslation();

  const auditSections = [
    {
      key: "risks",
      title: t("layer5.risks.title"),
      content: (
        <p>
          <strong>{t("layer5.risks.title")}</strong>
          <br />
          {t("layer5.risks.intro")} 
          <ul>
            <li>
              <strong>{t("layer5.risks.point1.title")}</strong> {t("layer5.risks.point1.text")}
            </li>
            <li>
              <strong>{t("layer5.risks.point2.title")}</strong> {t("layer5.risks.point2.text")}
            </li>
            <li>
              <strong>{t("layer5.risks.point3.title")}</strong> {t("layer5.risks.point3.text")}
            </li>
          </ul>
        </p>
      ),
    },
    {
      key: "developmentStrategies",
      title: t("layer5.developmentStrategies.title"),
      content: (
        <p>
          <strong>{t("layer5.developmentStrategies.title")}</strong>
          <br />
          {t("layer5.developmentStrategies.intro")}
          <ul>
            <li>
              <strong>{t("layer5.developmentStrategies.point1.title")}</strong> {t("layer5.developmentStrategies.point1.text")}
            </li>
            <li>
              <strong>{t("layer5.developmentStrategies.point2.title")}</strong> {t("layer5.developmentStrategies.point2.text")}
            </li>
            <li>
              <strong>{t("layer5.developmentStrategies.point3.title")}</strong> {t("layer5.developmentStrategies.point3.text")}
            </li>
          </ul>
        </p>
      ),
    },
    {
      key: "recovery",
      title: t("layer5.recovery.title"),
      content: (
        <p>
          <strong>{t("layer5.recovery.title")}</strong>
          <br />
          {t("layer5.recovery.intro")}
          <ul>
            <li>
              <strong>{t("layer5.recovery.point1.title")}</strong> {t("layer5.recovery.point1.text")}
            </li>
            <li>
              <strong>{t("layer5.recovery.point2.title")}</strong> {t("layer5.recovery.point2.text")}
            </li>
            <li>
              <strong>{t("layer5.recovery.point3.title")}</strong> {t("layer5.recovery.point3.text")}
            </li>
          </ul>
        </p>
      ),
    },
  ];

  return (
    <div>
      <LayerInfo
        title={t("layer5.title")}
        backgroundImage="https://inova.kz/wp-content/uploads/2023/05/wall_4_3-1.png"
        breadcrumbs={[{ label: t("layer5.title") }]}
      />
      <AuditSection
        title={t("layer5.auditSectionTitle")}
        paragraphs={[t("layer5.auditSectionText")]}
        imageURL={pic1}
        imageAlt="audit"
      />
      <InfoCard sections={auditSections} />
    </div>
  );
}

export default LayerOne;
