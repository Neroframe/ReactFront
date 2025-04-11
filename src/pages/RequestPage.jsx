import React, { useState } from "react";
import "../styles/RequestPage.css";
import { useTranslation } from "react-i18next";

const RequestPage = () => {
  const { t } = useTranslation("requestpage");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    problem: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);
    alert(t("requestPage.submittedMessage"));
  };

  return (
    <div className="request-container">
      <div className="request-box">
        <h2>{t("requestPage.title")}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder={t("requestPage.namePlaceholder")}
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder={t("requestPage.emailPlaceholder")}
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder={t("requestPage.phonePlaceholder")}
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <textarea
            name="problem"
            placeholder={t("requestPage.problemPlaceholder")}
            value={formData.problem}
            onChange={handleChange}
            required
          />
          <button type="submit" className="btn-submit">
            {t("requestPage.submitButton")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RequestPage;
