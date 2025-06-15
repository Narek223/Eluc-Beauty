import React from "react";
import errorimg from "../../assets/404/Group.png";
import styles from "./Error.module.scss";
import { NavLink } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className={styles.errorConteiner}>
      <div className={styles.errorWrapper}>
        <h1>404</h1>
        <h1>OOOPS! PAGE NOT FOUND!</h1>
        <p>
          You are here because you entered the address of a page that no longer
          exists or has been moved to a different address․
        </p>
        <img src={errorimg} />

        <NavLink to="/">
          <button>Go Home Page</button>
        </NavLink>
      </div>
    </div>
  );
}
