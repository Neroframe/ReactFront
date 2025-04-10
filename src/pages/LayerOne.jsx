import { useTranslation } from "react-i18next";
import AuditSection from "../components/TextBox";
import InfoCard from "../components/AuditInfo";
import pic1 from "../assets/pic1.jpg";
import "../styles/LayerOne.css";
import LayerInfo from "../components/LayerInfo";

function LayerOne() {
  const { t } = useTranslation('layerone'); // Указываем конкретный namespace

  const auditSections = [
    {
      key: "risks",
      title: t("layer1.risks.title"),
      content: (
        <p>
          <strong>{t("layer1.risks.title")}</strong>
          <br />
          {t("layer1.risks.intro")}
          <ul>
            <li>
              <strong>{t("layer1.risks.point1.title")}</strong> {t("layer1.risks.point1.text")}
            </li>
            <li>
              <strong>{t("layer1.risks.point2.title")}</strong> {t("layer1.risks.point2.text")}
            </li>
            <li>
              <strong>{t("layer1.risks.point3.title")}</strong> {t("layer1.risks.point3.text")}
            </li>
          </ul>
        </p>
      ),
    },
    {
      key: "developmentStrategies",
      title: t("layer1.developmentStrategies.title"),
      content: (
        <p>
          <strong>{t("layer1.developmentStrategies.title")}</strong>
          <br />
          {t("layer1.developmentStrategies.intro")}
          <ul>
            <li>
              <strong>{t("layer1.developmentStrategies.point1.title")}</strong> {t("layer1.developmentStrategies.point1.text")}
            </li>
            <li>
              <strong>{t("layer1.developmentStrategies.point2.title")}</strong> {t("layer1.developmentStrategies.point2.text")}
            </li>
            <li>
              <strong>{t("layer1.developmentStrategies.point3.title")}</strong> {t("layer1.developmentStrategies.point3.text")}
            </li>
          </ul>
        </p>
      ),
    },
    {
      key: "recovery",
      title: t("layer1.recovery.title"),
      content: (
        <p>
          <strong>{t("layer1.recovery.title")}</strong>
          <br />
          {t("layer1.recovery.intro")}
          <ul>
            <li>
              <strong>{t("layer1.recovery.point1.title")}</strong> {t("layer1.recovery.point1.text")}
            </li>
            <li>
              <strong>{t("layer1.recovery.point2.title")}</strong> {t("layer1.recovery.point2.text")}
            </li>
            <li>
              <strong>{t("layer1.recovery.point3.title")}</strong> {t("layer1.recovery.point3.text")}
            </li>
          </ul>
        </p>
      ),
    },
  ];

  return (
    <div>
      <LayerInfo
        title={t("layer1.title")}
        backgroundImage="https://inova.kz/wp-content/uploads/2023/05/wall_4_3-1.png"
        breadcrumbs={[{ label: t("layer1.title") }]}
      />
      <AuditSection
        title={t("layer1.auditSectionTitle")}
        paragraphs={[t("layer1.auditSectionText")]}
        imageURL={pic1}
        imageAlt="audit"
      />
      <InfoCard sections={auditSections} />
    </div>
  );
}

export default LayerOne;
