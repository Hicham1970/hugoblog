import styles from "./mdx-layout.module.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Thumbnail from "@/components/thumbnail/Thumbnail";
import SyntaxHighlighter from "@/components/syntaxHighlighter/SyntaxHighlighter";

export default function MdxLayout({ children }) {
  return (
    <>
      <Header />
      <article className={styles.container}>
        <div className={styles.content}>
          <Thumbnail />
          <SyntaxHighlighter>{children}</SyntaxHighlighter>
        </div>
      </article>
      <Footer />
    </>
  );
}
