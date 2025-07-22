import React, { useEffect } from "react";
import styles from "./blog.module.scss";
import { blogData } from "../../Services/Date/Blog/blog";
import PathTrace from "../../SharedComponents/PathTrace/PathTrace";
import { paginate } from "../../Utils/pagination";
import PaginationComponent from "./Pagination/Pagination";
import { useSelector, useDispatch } from "react-redux";
import * as blogslice from "../../Redux/Slices/Blog/blog";
import { NavLink } from "react-router-dom";

export default function Blog() {
  const dispatch = useDispatch();
  const { currentPage, itemsPerPage } = useSelector((state) => state.blog);

  const sortedBlogs = [...blogData].sort((a, b) => b.id - a.id);
  const newPost = sortedBlogs[0];


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const paginationExperts = paginate(blogData, currentPage, itemsPerPage);
  return (
    <div className={styles.conteiner}>
      <div className={styles.path}>
        <PathTrace
          title="BLOG"
          nextitle="Articles"
         breadcrumbs={[{ name: "Home", to: "/" }, { name: "Blog" }]}
        />
      </div>
      <div className={styles.conteinerWrapper}>
        {currentPage === 0 ? (
             <NavLink
                  to={`/blog/${newPost.id}`}
                  key={newPost.id}
              
                >
          <div>
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
          </div>
          </NavLink>
        ) : null}

        <div className={styles.recentPost}>
          <h1>RECENT POSTS</h1>
          <div className={styles.postsConteiner}>
            {paginationExperts.map((elem) => (
              <div key={elem.id} className={styles.posts}>
                <NavLink
                  to={`/blog/${elem.id}`}
                  key={elem.id}
                  className={styles.posts}
                >
                  <img src={elem.image} />
                  <p>{elem.category}</p>
                  <h1>{elem.title}</h1>
                  <p>{elem.content}</p>
                  <div className={styles.date}>
                    <p>{elem.date}</p>
                    <p>{elem.readingTime}</p>
                  </div>
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </div>
      <PaginationComponent
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItems={blogData.length}
        onPageChange={(page) => dispatch(blogslice.handlePageChange(page))}
      />
    </div>
  );
}
