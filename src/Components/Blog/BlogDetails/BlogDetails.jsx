import React from "react";
import { useParams } from "react-router-dom";
import { blogData } from "../../../Services/Date/Blog/blog";
import styles from "./blogdetails.module.scss";

export default function BlogDetails() {
  const { id } = useParams();
  const blog = blogData.find((item) => item.id.toString() === id);



  return (
    <div className={styles.blogDetails}>
      <div
        className={styles.banner}
       
      >
        <img src={blog.image}/>
        <div className={styles.overlay}>
          <p>{blog.category}</p>
          <p>{blog.date} — By {blog.author}</p>
        </div>
      </div>

      <div className={styles.contentWrapper}>
        <h1>{blog.title}</h1>
        <h2>{blog.subtitle}</h2>
        <div className={styles.content}>
          {blog.content.split("\n").map((elem, i) =>
            elem.trim() ? <p key={i}>{elem.trim()}</p> : <br key={i} />
          )}
        </div>
      </div>
    </div>
  );
}
