import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next"; // импорт i18n
import GridSection from "../components/GridSection";
import HeroSection from "../components/HeroSection";
import PartnersSlider from "../components/PartnersSlider";
import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";
import pic4 from "../assets/pic4.jpg";
import pic5 from "../assets/pic5.jpg";
import pic6 from "../assets/pic6.jpg";
import StatsSection from "../components/StatsSection";
import '../styles/Home.css';

function Home() {
  const location = useLocation();
  const { t } = useTranslation(); // хук перевода

  useEffect(() => {
    if (location.state?.scrollToServices) {
      setTimeout(() => {
        const servicesSection = document.getElementById("services-section");
        if (servicesSection) {
          servicesSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);

  return (
    <div>
      <HeroSection />

      <div id="services-section">
        {/* 1st Layer - Strategic Security Consulting */}
        <GridSection
          title={t("home.layer1.title")}
          text={t("home.layer1.text")}
          link="/LayerOne"
          image={pic1}
        />
        {/* 2nd Layer - Security Assessment & Penetration Testing (Reversed) */}
        <GridSection
          title={t("home.layer2.title")}
          text={t("home.layer2.text")}
          link="/LayerTwo"
          image={pic2}
          reverse={true}
        />
        {/* 3rd Layer - Security Awareness & Mobile Protection */}
        <GridSection
          title={t("home.layer3.title")}
          text={t("home.layer3.text")}
          link="/LayerThree"
          image={pic3}
        />
        {/* 4th Layer - Endpoint & Access Security (Reversed) */}
        <GridSection
          title={t("home.layer4.title")}
          text={t("home.layer4.text")}
          link="/LayerFour"
          image={pic4}
          reverse={true}
        />
        {/* 5th Layer - Business Continuity & Risk Management */}
        <GridSection
          title={t("home.layer5.title")}
          text={t("home.layer5.text")}
          link="/LayerFive"
          image={pic5}
        />
        {/* 6th Layer - Secure Development & IoT Security (Reversed) */}
        <GridSection
          title={t("home.layer6.title")}
          text={t("home.layer6.text")}
          link="/LayerSix"
          image={pic6}
          reverse={true}
        />
      </div>

      <StatsSection />
      <PartnersSlider />
    </div>
  );
}

export default Home;
