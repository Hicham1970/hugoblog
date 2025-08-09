import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import styles from "./styles.module.css";

export const metadata = {
  title: "Terms of Use - Garoum Blog",
  description: "Terms and conditions for using Garoum Blog",
};

export default function TermsOfUse() {
    return (
        <>
            <Header />
        <div className={styles.termsContainer}>
          <h1 className={styles.termsTitle}>Terms of Use</h1>

          <div className={styles.termsContent}>
            <p className={styles.termsSection}>
              <strong>Last updated:</strong> January 1, 2025
            </p>

            <div className={styles.termsSection}>
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing and using Garoum Blog, you accept and agree to be
                bound by the terms and provision of this agreement.
              </p>
            </div>

            <div className={styles.termsSection}>
              <h2>2. Use License</h2>
              <p>
                Permission is granted to temporarily download one copy of the
                materials (information or software) on Garoum Blog for personal,
                non-commercial transitory viewing only.
              </p>
            </div>

            <div className={styles.termsSection}>
              <h2>3. Disclaimer</h2>
              <p>
                The materials on Garoum Blog are provided on an 'as is' basis.
                Garoum Blog makes no warranties, expressed or implied, and
                hereby disclaims and negates all other warranties including,
                without limitation, implied warranties or conditions of
                merchantability, fitness for a particular purpose, or
                non-infringement of intellectual property or other violation of
                rights.
              </p>
            </div>

            <div className={styles.termsSection}>
              <h2>4. Limitations</h2>
              <p>
                In no event shall Garoum Blog or its suppliers be liable for any
                damages (including, without limitation, damages for loss of data
                or profit, or due to business interruption) arising out of the
                use or inability to use the materials on Garoum Blog.
              </p>
            </div>

            <div className={styles.termsSection}>
              <h2>5. Revisions and Errata</h2>
              <p>
                The materials appearing on Garoum Blog could include technical,
                typographical, or photographic errors. Garoum Blog does not
                warrant that any of the materials on its website are accurate,
                complete, or current.
              </p>
            </div>

            <div className={styles.termsSection}>
              <h2>6. Links</h2>
              <p>
                Garoum Blog has not reviewed all of the sites linked to its
                website and is not responsible for the contents of any such
                linked site. The inclusion of any link does not imply
                endorsement by Garoum Blog of the site.
              </p>
            </div>

            <div className={styles.termsSection}>
              <h2>7. Modifications</h2>
              <p>
                Garoum Blog may revise these terms of use for its website at any
                time without notice. By using this website you are agreeing to
                be bound by the then current version of these terms of service.
              </p>
            </div>
          </div>
            </div>
            <Footer />
      </>
    );
}
