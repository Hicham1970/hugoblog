"use client";
import styles from "./headerPage.module.css"
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

const links = [{ displayName: "Blog", href: "/blog" }];



export default function Header() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.link}>
        <Image src={
          theme === "dark" ? "/dark-union.svg" : "/light-union.svg"
        } alt="Logo" width={40} height={40} priority />
        <div className={styles.text}>
          Garoum<span className={styles.bold}> Blog</span>
        </div>
      </Link>
      <div className={styles.spaceX}>
        <nav className={styles.nav}>
          {links.map((l, index) => (
            <Link
              href={l.href}
              key={index}>
              {l.displayName}
            </Link>
          ))}
        </nav>
        <button type="button" className={styles.btn}  aria-label="Toggle theme" onClick={toggleTheme}>
          <Image src={theme === "dark" ? "/dark-toggle.svg" : "/light-toggle.svg"}
            alt="Toggle icon" width={46} height={28} priority />

        </button>

      </div>
    </header>
  )
}


