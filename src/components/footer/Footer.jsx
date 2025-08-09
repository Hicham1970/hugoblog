"use client"; 
import Link from 'next/link';
import styles from './footer.module.css';
import { useTheme } from 'next-themes'; 
import Image from 'next/image'; // Ensure you have next/image imported

function Footer() {
    const { theme } = useTheme(); // Assuming useTheme is imported from 'next-themes' or similar
  return (
    <footer className={styles.footer}>
      <Link href="/" className={styles.link}>
        <Image
          src={theme === "dark" ? "/dark-union.svg" : "/light-union.svg"}
          alt="Logo"
          width={40}
          height={40}
          priority
        />
        <div className={styles.text}>
          Garoum<span className={styles.bold}> Blog</span>
        </div>
      </Link>
          <div className={styles.socials}>
              <Link href="/terms-of-use">Terms of Use</Link>
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/cookie-policy">Cookie Policy</Link>
          </div>
    </footer>
  );
}

export default Footer
