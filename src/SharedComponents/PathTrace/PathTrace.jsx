import React from "react";
import styles from "./pathTrace.module.scss";
import { IoMdArrowDropright } from "react-icons/io";
import { NavLink } from "react-router-dom";


export default function PathTrace({ title, nextitle, breadcrumbs = [] }) {
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
            {breadcrumbs.map((item, index) => (
              <React.Fragment key={index}>
                {item.to ? (
                  <NavLink className={styles.link} to={item.to}>
                    <li>{item.name}</li>
                  </NavLink>
                ) : (
                  <li>{item.name}</li> 
                )}
                {index < breadcrumbs.length - 1 && <IoMdArrowDropright />}
              </React.Fragment>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}


