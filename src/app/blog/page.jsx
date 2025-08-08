import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import { posts } from '@/posts'; 
import Link from 'next/link';
import Image from 'next/image';

export default function page() {
  return (
    <div>
      <Header />
      <div className="posts">
        {posts.map((p, idx) => (
          <Link className="post" key={idx} href={`/blog/${p.slug}`}>
            {/**image */}
            <div className="postImageContainer">
              <Image
                src={p.thumbnail}
                alt={`${p.title} - thumbnail`}
                sizes="100vw"
                fill
                priority
              />
            </div>
            {/**category */}
            <p className="postCategory">{p.category}</p>
            {/* *title */}
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
    </div>
  );
}


