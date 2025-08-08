"use client"; 

import styles from './thumbnail.module.css'
import Image from "next/image"
import {usePathname} from 'next/navigation' 
import { posts } from '@/posts'

function Thumbnail() {
  const slug = usePathname().split('/')[2]; // Get the second segment of the pathname
  // For example, if the pathname is "/blog/post", this will return "post"
  console.log("Current Pathname:", slug); // Log the current pathname
  const post = posts.find((p)=>p.slug === slug); // Find the post with the matching slug


  return (
    <div className={styles.thumbnailContainer}>
      <Image
        className={styles.imageContainer}
        src={post?.thumbnail || "/hero.png"}
        alt="Thumbnail Image"
        width={500}
        height={250}
        sizes="100vw"
      />
      
    </div>
  );
}

export default Thumbnail
