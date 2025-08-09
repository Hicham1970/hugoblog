import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

import styles from "./styles.module.css";

export const metadata = {
  title: "Privacy Policy - Garoum Blog",
  description: "Privacy policy for Garoum Blog",
};

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
    <div className={styles.privacyContainer}>
      <h1 className={styles.privacyTitle}>Privacy Policy</h1>

      <div className={styles.privacyContent}>
        <p className={styles.privacySection}>
          <strong>Last updated:</strong> January 1, 2025
        </p>

        <div className={styles.privacySection}>
          <h2>1. Information We Collect</h2>
          <p>
            We collect information you provide directly to us, such as when you
            subscribe to our newsletter, contact us, or interact with our
            website.
          </p>
        </div>

        <div className={styles.privacySection}>
          <h2>2. How We use your information</h2>
          <ul>
            <li>To provide and maintain our service</li>
            <li>To notify you about changes to our service</li>
            <li>To allow you to participate in interactive features</li>
            <li>To provide customer support</li>
            <li>
              To gather analysis or valuable information to improve our service
            </li>
            <li>To monitor the usage of our service</li>
            <li>To detect, prevent and address technical issues</li>
          </ul>
        </div>

        <div className={styles.privacySection}>
          <h2>3. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to
            protect your personal data against unauthorized access, alteration,
            disclosure, or destruction.
          </p>
        </div>

        <div className={styles.privacySection}>
          <h2>4. Third-Party Services</h2>
          <p>
            We may use third-party services that set their own cookies. These
            include services like Google Analytics, social media platforms, and
            advertising networks.
          </p>
        </div>

        <div className={styles.privacySection}>
          <h2>5. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal data</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to processing of your data</li>
            <li>Data portability</li>
          </ul>
        </div>

        <div className={styles.privacySection}>
          <h2>6. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at [your-email@domain.com].
          </p>
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
}
