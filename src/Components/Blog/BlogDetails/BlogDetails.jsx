import React from "react";
import { useParams, Link } from "react-router-dom";
import { blogData } from "../../../Services/Date/Blog/blog";
import styles from "./blogdetails.module.scss";

export default function BlogDetails() {
  const { id } = useParams();
  const blog = blogData.find((item) => item.id.toString() === id);

  return (
    <div className={styles.blogDetails}>
      {blog ? (
        <>
          <div className={styles.banner}>
            <img src={blog.image} />
            <div className={styles.overlay}>
              <p>{blog.category}</p>
              <p>
                {blog.date} — By {blog.author}
              </p>
            </div>
          </div>
          <div className={styles.contentWrapper}>
            <h1>{blog.title}</h1>
            <h2>{blog.subtitle}</h2>
            <div className={styles.content}>
              {blog.content
                .split("\n")
                .map((elem, i) =>
                  elem.trim() ? <p key={i}>{elem.trim()}</p> : <br key={i} />
                )}
            </div>
          </div>
        </>
      ) : (
        <div className={styles.blognotfound}>
          <div className={styles.container}>
            <h1 className={styles.code}>404</h1>
            <h2 className={styles.title}>Blog Post Not Found</h2>
            <p className={styles.description}>
              Sorry, the blog post you’re looking for doesn’t exist or has been removed.
            </p>
            <Link to="/blog" className={styles.homebutton}>
            <button>   Back to Blog</button>

             
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}