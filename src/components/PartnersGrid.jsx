import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/PartnersGrid.css";
import { useTranslation } from "react-i18next";

const partners = [
  {
    id: 1,
    name: "GitHub",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
    description:
      "GitHub is a platform for version control and collaboration that empowers millions of developers to build software together.",
  },
  {
    id: 2,
    name: "Mozilla",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Mozilla_logo_%282017%E2%80%932024%29.svg",
    description:
      "Mozilla champions an open internet and develops the Firefox browser, celebrated for its speed and privacy features.",
  },
  {
    id: 3,
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    description:
      "Google provides innovative search, advertising, and productivity tools that have revolutionized how we access and use information.",
  },
  {
    id: 4,
    name: "Docker",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg",
    description:
      "Docker streamlines application development by packaging software into standardized containers for development, shipment, and deployment.",
  },
  {
    id: 5,
    name: "React",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    description:
      "React is a powerful JavaScript library for building interactive user interfaces and dynamic web applications.",
  },
  {
    id: 6,
    name: "Node.js",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    description:
      "Node.js is a fast, scalable runtime built on Chrome's V8 engine that lets developers use JavaScript for server-side programming.",
  },
];

const PartnersGrid = () => {
  const { t } = useTranslation("partnersgrid");

  return (
    <div className="partners-grid">
      <div className="justify-content-center">
        <Col xs={12} className="text-center">
          <h2 className="display-4 fw-bold">{t("partners.title")}</h2>
          <p className="lead text-muted">{t("partners.description")}</p>
        </Col>
      </div>

      <Row className="mt-4">
        {partners.map((partner) => (
          <Col key={partner.id} xs={12} md={6} lg={4} className="mb-4">
            <div className="partner-card">
              <div className="partner-logo">
                <img src={partner.logo} alt={partner.name} />
              </div>
              <div className="partner-description">
                <p>{t(`partners.${partner.name.toLowerCase()}.description`)}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default PartnersGrid;
