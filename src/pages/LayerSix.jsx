import { motion } from "framer-motion";
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
        <div className="section-content">
          <h3 className="section-title">{t("sageLifeCycle.title")}</h3>
          <p className="section-description">
            {t("sageLifeCycle.description1")}
            <br /><br />
            {t("sageLifeCycle.description2")}
          </p>
          <ul className="feature-list">
            {[1, 2, 3, 4].map((i) => (
              <motion.li
                key={i}
                className="feature-item"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="feature-icon">🔹</div>
                <div>
                  <strong>{t(`sageLifeCycle.step${i}.title`)}</strong>: {t(`sageLifeCycle.step${i}.desc`)}
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      key: "software",
      title: t("software.title"),
      content: (
        <div className="section-content">
          <h3 className="section-title">{t("software.title")}</h3>
          <p className="section-description">
            {t("software.description1")}
            <br /><br />
            {t("software.description2")}
          </p>
          <ul className="feature-list">
            {[1, 2, 3, 4].map((i) => (
              <motion.li
                key={i}
                className="feature-item"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="feature-icon">💻</div>
                <div>
                  <strong>{t(`software.step${i}.title`)}</strong>: {t(`software.step${i}.desc`)}
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      key: "secureCoding",
      title: t("secureCoding.title"),
      content: (
        <div className="section-content">
          <h3 className="section-title">{t("secureCoding.title")}</h3>
          <p className="section-description">
            {t("secureCoding.description1")}
            <br /><br />
            {t("secureCoding.description2")}
          </p>
          <ul className="feature-list">
            {[1, 2, 3, 4, 5].map((i) => (
              <motion.li
                key={i}
                className="feature-item"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="feature-icon">🔐</div>
                <div>
                  <strong>{t(`secureCoding.step${i}.title`)}</strong>: {t(`secureCoding.step${i}.desc`)}
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      ),
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <LayerInfo
        title={t("layer_title")}
        backgroundImage="https://inova.kz/wp-content/uploads/2023/05/wall_4_3-1.png"
        breadcrumbs={[{ label: t("breadcrumbs.layer_title") }]}
      />

      <div className="container">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-block"
        >
          <AuditSection
            title={t("secureDev.title")}
            paragraphs={[t("secureDev.text")]}
            imageURL={pic1}
            imageAlt="audit"
          />
        </motion.div>

        <InfoCard sections={auditSections} />
      </div>
    </motion.div>
  );
}

export default LayerOne;
