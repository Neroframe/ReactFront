import AuditSection from "../components/TextBox";
import InfoCard from "../components/AuditInfo";
import pic1 from "../assets/pic1.jpg";
import "../styles/LayerOne.css";
import LayerInfo from "../components/LayerInfo";
import { useTranslation } from "react-i18next";

function LayerOne() {
  const { t } = useTranslation('layersix');

  const auditSections = [
    {
      key: "sageLifeCycle",
      title: t("sageLifeCycle.title"),
      content: (
        <p>
          <strong>{t("sageLifeCycle.title")}</strong>
          <br />
          {t("sageLifeCycle.description1")}
          <br /><br />
          {t("sageLifeCycle.description2")}
          <ul>
            <li>
              <strong>{t("sageLifeCycle.step1.title")}</strong>: {t("sageLifeCycle.step1.desc")}
            </li>
            <li>
              <strong>{t("sageLifeCycle.step2.title")}</strong>: {t("sageLifeCycle.step2.desc")}
            </li>
            <li>
              <strong>{t("sageLifeCycle.step3.title")}</strong>: {t("sageLifeCycle.step3.desc")}
            </li>
            <li>
              <strong>{t("sageLifeCycle.step4.title")}</strong>: {t("sageLifeCycle.step4.desc")}
            </li>
          </ul>
        </p>
      ),
    },
    {
      key: "software",
      title: t("software.title"),
      content: (
        <p>
          <strong>{t("software.title")}</strong>
          <br />
          {t("software.description1")}
          <br /><br />
          {t("software.description2")}
          <ul>
            <li>
              <strong>{t("software.step1.title")}</strong>: {t("software.step1.desc")}
            </li>
            <li>
              <strong>{t("software.step2.title")}</strong>: {t("software.step2.desc")}
            </li>
            <li>
              <strong>{t("software.step3.title")}</strong>: {t("software.step3.desc")}
            </li>
            <li>
              <strong>{t("software.step4.title")}</strong>: {t("software.step4.desc")}
            </li>
          </ul>
        </p>
      ),
    },
    {
      key: "secureCoding",
      title: t("secureCoding.title"),
      content: (
        <p>
          <strong>{t("secureCoding.title")}</strong>
          <br />
          {t("secureCoding.description1")}
          <br /><br />
          {t("secureCoding.description2")}
          <ul>
            <li>
              <strong>{t("secureCoding.step1.title")}</strong>: {t("secureCoding.step1.desc")}
            </li>
            <li>
              <strong>{t("secureCoding.step2.title")}</strong>: {t("secureCoding.step2.desc")}
            </li>
            <li>
              <strong>{t("secureCoding.step3.title")}</strong>: {t("secureCoding.step3.desc")}
            </li>
            <li>
              <strong>{t("secureCoding.step4.title")}</strong>: {t("secureCoding.step4.desc")}
            </li>
            <li>
              <strong>{t("secureCoding.step5.title")}</strong>: {t("secureCoding.step5.desc")}
            </li>
          </ul>
        </p>
      ),
    },
  ];

  return (
    <div>
      <LayerInfo
        title={t("layer_title")}
        backgroundImage="https://inova.kz/wp-content/uploads/2023/05/wall_4_3-1.png"
        breadcrumbs={[{ label: t("breadcrumbs.layer_title") }]}
      />
      <AuditSection
        title={t("secureDev.title")}
        paragraphs={[t("secureDev.text")]}
        imageURL={pic1}
        imageAlt="audit"
      />
      <InfoCard sections={auditSections} />
    </div>
  );
}

export default LayerOne
