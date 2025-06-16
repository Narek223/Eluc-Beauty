import React from "react";
import styles from "./blog.module.scss";
import { blogData } from "../../Services/Date/Blog/blog";
import PathTrace from "../../SharedComponents/PathTrace/PathTrace";

export default function Blog() {
  const sortedBlogs = [...blogData].sort((a, b) => b.id - a.id);
  const newPost = sortedBlogs[0];

  return (
    <div className={styles.conteiner}>
      <div className={styles.path}>
        <PathTrace
          title="BLOG"
          nextitle="Articles"
          oldPage="Home"
          currentPage="Blog"
        />
      </div>
      <div className={styles.conteinerWrapper}>
        <h1>NEW POST</h1>

        <div
          className={styles.newPost}
          style={{ backgroundImage: `url(${newPost.image})` }}
        >
          <div className={styles.BlogContent}>
            <h1>{newPost.title}</h1>
            <h2>{newPost.subtitle}</h2>
            <div className={styles.date}>
              <p> {newPost.date}</p>
              <p> {newPost.category}</p>
            </div>
          </div>
        </div>
        <div className={styles.recentPost}>
          <h1>RECENT POSTS</h1>
          <div className={styles.postsConteiner}>
            {blogData.map((elem) => (
              <div key={elem.id} className={styles.posts}>
                <img src={elem.image} />
                <p>{elem.category}</p>
                <h1>{elem.title}</h1>
                <p>{elem.content}</p>
                <div className={styles.date}>
                  <p>{elem.date}</p>
                  <p>{elem.readingTime}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
