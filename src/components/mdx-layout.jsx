import styles from './mdx-layout.module.css';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';

export default function MdxLayout({ children }) {
  return (
    <>
      <Header />
      <article className={styles.container}>
        <div className={styles.content}>{children}</div>
      </article>
      <Footer />
    </>
  );
}
