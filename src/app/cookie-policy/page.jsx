import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import styles from "./styles.module.css";

export const metadata = {
  title: "Cookie Policy - Garoum Blog",
  description: "Cookie policy for Garoum Blog",
};

export default function CookiePolicy() {
  return (
    <>
      <Header   />
      <div className={styles.cookieContainer}>
        <h1 className={styles.cookieTitle}>Cookie Policy</h1>

        <div className={styles.cookieContent}>
          <p className={styles.cookieSection}>
            <strong>Last updated:</strong> January 1, 2025
          </p>

          <div className={styles.cookieSection}>
            <h2>What are cookies?</h2>
            <p>
              Cookies are small text files that are placed on your computer or
              mobile device when you visit our website. They are widely used to
              make websites work more efficiently and provide information to
              website owners.
            </p>
          </div>

          <div className={styles.cookieSection}>
            <h2>How we use cookies</h2>
            <p>We use cookies for several purposes:</p>
            <ul>
              <li>
                <strong>Essential cookies:</strong> These are necessary for the
                website to function properly
              </li>
              <li>
                <strong>Analytics cookies:</strong> These help us understand how
                visitors interact with our website
              </li>
              <li>
                <strong>Functionality cookies:</strong> These remember your
                preferences and choices
              </li>
              <li>
                <strong>Marketing cookies:</strong> These are used to track
                visitors across websites
              </li>
            </ul>
          </div>

          <div className={styles.cookieSection}>
            <h2>Types of cookies we use</h2>
            <table className={styles.cookieTable}>
              <thead>
                <tr>
                  <th>Cookie Type</th>
                  <th>Purpose</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Essential</td>
                  <td>Basic website functionality</td>
                  <td>Session</td>
                </tr>
                <tr>
                  <td>Analytics</td>
                  <td>Website usage statistics</td>
                  <td>1 year</td>
                </tr>
                <tr>
                  <td>Preferences</td>
                  <td>User preferences storage</td>
                  <td>1 year</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={styles.cookieSection}>
            <h2>Managing cookies</h2>
            <p>
              You can control and/or delete cookies as you wish. You can delete
              all cookies that are already on your computer and you can set most
              browsers to prevent them from being placed.
            </p>
          </div>

          <div className={styles.cookieSection}>
            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Cookie Policy, please contact
              us at [h.garoum@gmail.com].
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
