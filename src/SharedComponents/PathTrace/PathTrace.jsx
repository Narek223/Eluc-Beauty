import React from "react";
import styles from "./pathTrace.module.scss";
import { IoMdArrowDropright } from "react-icons/io";
import { NavLink } from "react-router-dom";

export default function PathTrace({ title, nextitle, currentPage, oldPage }) {
  return (
    <div className={styles.pathConteiner}>
      <div className={styles.pathWrapper}>
        <div className={styles.titles}>
          <h1>
            {title}
            <span>{nextitle}</span>
          </h1>
        </div>
        <div className={styles.pathTrace}>
          <ul>
            <NavLink className={styles.link} to="/">
              <li>{oldPage}</li>
            </NavLink>

            <IoMdArrowDropright />

            <li>{currentPage}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
