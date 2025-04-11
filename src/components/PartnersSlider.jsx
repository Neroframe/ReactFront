import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/PartnersSlider.css";
import { useTranslation } from "react-i18next";

const PrevArrow = ({ className, style, onClick }) => (
  <div
    className={className}
    style={{ ...style, display: "flex" }}
    onClick={onClick}
  >
    <span className="custom-arrow-icon">&#10094;</span>
  </div>
);

const NextArrow = ({ className, style, onClick }) => (
  <div
    className={className}
    style={{ ...style, display: "flex" }}
    onClick={onClick}
  >
    <span className="custom-arrow-icon">&#10095;</span>
  </div>
);

const partners = [
  {
    id: 1,
    logo: "https://wazuh.com/uploads/2024/01/woop-white.png",
    quoteKey: "partner1.quote",
    authorKey: "partner1.author",
    positionKey: "partner1.position",
  },
  {
    id: 2,
    logo: "https://wazuh.com/uploads/2024/09/guayoyo-white-narrow.png",
    quoteKey: "partner2.quote",
    authorKey: "partner2.author",
    positionKey: "partner2.position",
  },
  {
    id: 3,
    logo: "https://wazuh.com/uploads/2024/09/enevo-white.png",
    quoteKey: "partner3.quote",
    authorKey: "partner3.author",
    positionKey: "partner3.position",
  },
];

const PartnersSlider = () => {
  const { t } = useTranslation("partnersslider");

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    arrows: true,
    swipe: true,
    touchMove: true,
    appendDots: (dots) => <ul>{dots}</ul>,
  };

  return (
    <div className="partners-slider-section">
      <h2 className="partners-heading">{t("title")}</h2>
      <div className="slider-container">
        <Slider {...settings} className="custom-slider no-default-arrows">
          {partners.map((partner) => (
            <div key={partner.id} className="testimonial-slide">
              <div className="testimonial-content">
                <div className="testimonial-logo">
                  <img src={partner.logo} alt="Partner Logo" />
                </div>
                <div className="testimonial-text">
                  <p className="quote">“{t(partner.quoteKey)}”</p>
                  <p className="author">
                    <strong>{t(partner.authorKey)}</strong>,{" "}
                    {t(partner.positionKey)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PartnersSlider;
