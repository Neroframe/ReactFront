import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/PartnersSlider.css";

// Custom arrow components
const PrevArrow = ({ onClick }) => (
  <div className="slick-arrow slick-prev" onClick={onClick}>
    &#10094;
  </div>
);

const NextArrow = ({ onClick }) => (
  <div className="slick-arrow slick-next" onClick={onClick}>
    &#10095;
  </div>
);

const partners = [
  {
    id: 1,
    logo: "https://wazuh.com/uploads/2024/01/woop-white.png",
    quote:
      "In addition to the great advantage of being an open source platform, Wazuh is also easy to deploy, and its multiple capabilities have allowed us to achieve our goal with security at Woop.",
    author: "Haithem Souala",
    position: "Site Reliability Engineer",
  },
  {
    id: 2,
    logo: "https://wazuh.com/uploads/2024/09/guayoyo-white-narrow.png",
    quote:
      "This platform provided us with the scalability and security we needed. The flexibility and ease of integration have been invaluable to our company.",
    author: "Jane Doe",
    position: "CTO, Tech Corp",
  },
  {
    id: 3,
    logo: "https://wazuh.com/uploads/2024/09/enevo-white.png",
    quote:
      "Working with this team has been a fantastic experience. Their expertise and dedication to security make them a trusted partner for our business.",
    author: "John Smith",
    position: "Cybersecurity Lead",
  },
];

const PartnersSlider = () => {
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
  };

  return (
    <div className="partners-slider-section">
      <h2 className="partners-heading">What our customers say about us</h2>
      <div className="slider-container">
        <Slider {...settings}>
          {partners.map((partner) => (
            <div key={partner.id} className="testimonial-slide">
              <div className="testimonial-content">
                <div className="testimonial-logo">
                  <img src={partner.logo} alt="Partner Logo" />
                </div>
                <div className="testimonial-text">
                  <p className="quote">“{partner.quote}”</p>
                  <p className="author">
                    <strong>{partner.author}</strong>, {partner.position}
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
