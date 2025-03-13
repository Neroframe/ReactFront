import GridSection from "../components/GridSection";
import HeroSection from "../components/HeroSection";

import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";
import pic4 from "../assets/pic4.jpg";
import pic5 from "../assets/pic5.jpg";
import pic6 from "../assets/pic6.jpg";

function Home() {
  return (
    <div>
      <HeroSection />

      {/* 1st Layer - Strategic Security Consulting */}
      <GridSection
        title="Strategic Security Consulting"
        text="Expert advice on cybersecurity strategies, policy implementation, and compliance with GDPR, HIPAA, and other regulations."
        link="#"
        image={pic1}
      />

      {/* 2nd Layer - Security Assessment & Penetration Testing (Reversed) */}
      <GridSection
        title="Security Assessment & Penetration Testing"
        text="Comprehensive audits, penetration testing, and vulnerability management to strengthen your security posture."
        link="#"
        image={pic2}
        reverse={true}
      />

      {/* 3rd Layer - Security Awareness & Mobile Protection */}
      <GridSection
        title="Security Awareness & Mobile Protection"
        text="Employee training, mobile security measures, and phishing resistance testing to improve cybersecurity awareness."
        link="#"
        image={pic3}
      />

      {/* 4th Layer - Endpoint & Access Security (Reversed) */}
      <GridSection
        title="Endpoint & Access Security"
        text="Endpoint protection, identity access management, and real-time intrusion detection to safeguard critical systems."
        link="#"
        image={pic4}
        reverse={true}
      />

      {/* 5th Layer - Business Continuity & Risk Management */}
      <GridSection
        title="Business Continuity & Risk Management"
        text="Disaster recovery, risk management, and forensic analysis to ensure long-term business resilience."
        link="#"
        image={pic5}
      />

      {/* 6th Layer - Secure Development & IoT Security (Reversed) */}
      <GridSection
        title="Secure Development & IoT Security"
        text="Application security audits, IoT device protection, and secure IT architecture planning."
        link="#"
        image={pic6}
        reverse={true}
      />
    </div>
  );
}

export default Home;
