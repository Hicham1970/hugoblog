import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Image from "next/image";
import { posts } from "@/posts";
import Link from "next/link";

export default function Home() {
  return (
    // The root <div> and className={styles.body} are removed because
    // this should be handled by your main layout.js file.
    // We use global class names directly (e.g., className="hero").
    <>
      <Header />
      {/* hero section */}
      <section className="hero">
        <div className="imageContainer">
          <Image src={"/hero.png"} alt={"hero image"} sizes="100vw" fill priority style={{objectFit: "cover"}} />
        </div>
        <div className="textContainer">
          <p className="title">Technology</p>
          <h2 className="description">
            The impact of the technology on the workplaces, How technology is changing the world?
          </h2>
          <p className="author">Hicham Garoum | August 07, 2025</p>
        </div>
      </section>
      {/* content section*/}
      <div className="posts">
        {posts.map((p, idx) => (
          <Link className="post" key={idx} href={`/blog/${p.slug}`}>
            {/**image */}
            <div className="postImageContainer">
              <Image src={p.thumbnail} alt={`${p.title} - thumbnail`} sizes="100vw" fill priority  />
            </div>
            { /**category */}
            <p className="postCategory">
              {p.category}
            </p>
            {/* *title */ }
            <h2 className="postTitle">{p.title}</h2>
            {/* *author & date  */}
            <div className="postAuthor">
              <div>{p.author}</div>
              <div>{p.date}</div>
            </div>
          </Link>
        ))}
      </div>
      <Footer />
    </>
  );
}
