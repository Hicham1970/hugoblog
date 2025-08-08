import styles from './mdx-layout.module.css';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import Thumbnail from '@/components/thumbnail/Thumbnail';

export default function MdxLayout({ children }) {
  return (
    <>
      <Header />
      <article className={styles.container}>
        <div className={styles.content}>
          <Thumbnail />
          {children}
        </div>
      </article>
      <Footer />
    </>
  );
}
