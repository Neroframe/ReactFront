import { useEffect } from "react";
import { useLocation } from "react-router-dom";
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

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToServices) {
      document.getElementById("services-section")?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div>
      <HeroSection />

      {/* Блок с услугами (добавлен id для скролла) */}
      <div id="services-section">
        {/* 1st Layer - Strategic Security Consulting */}
        <GridSection
          title="Strategic Security Consulting"
          text="Экспертные советы по стратегиям кибербезопасности, внедрению политик и соблюдению требований GDPR, HIPAA и других нормативов."
          link="/LayerOne"
          image={pic1}
        />

        {/* 2nd Layer - Security Assessment & Penetration Testing (Reversed) */}
        <GridSection
          title="Оценка безопасности и тестирование на проникновение"
          text="Комплексные аудиты, тестирование на проникновение и управление уязвимостями для усиления вашей системы безопасности."
          link="/LayerTwo"
          image={pic2}
          reverse={true}
        />

        {/* 3rd Layer - Security Awareness & Mobile Protection */}
        <GridSection
          title="Обучение безопасности и защита мобильных устройств"
          text="Обучение сотрудников, меры по обеспечению мобильной безопасности и тестирование устойчивости к фишинговым атакам для повышения осведомленности в сфере кибербезопасности."
          link="/LayerThree"
          image={pic3}
        />

        {/* 4th Layer - Endpoint & Access Security (Reversed) */}
        <GridSection
          title="Защита конечных устройств и управление доступом"
          text="Защита конечных устройств, управление доступом и система обнаружения вторжений в режиме реального времени для защиты критически важных систем."
          link="/LayerFour"
          image={pic4}
          reverse={true}
        />

        {/* 5th Layer - Business Continuity & Risk Management */}
        <GridSection
          title="Непрерывность бизнеса и управление рисками"
          text="Восстановление после сбоев, управление рисками и судебная экспертиза для обеспечения долгосрочной устойчивости бизнеса."
          link="/LayerFive"
          image={pic5}
        />

        {/* 6th Layer - Secure Development & IoT Security (Reversed) */}
        <GridSection
          title="Безопасная разработка и защита IoT"
          text="Аудиты безопасности приложений, защита устройств IoT и планирование безопасной IT-архитектуры."
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
