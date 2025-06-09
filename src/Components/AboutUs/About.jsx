import React from "react";
import styles from "./about.module.scss";
import PathTrace from "../../SharedComponents/PathTrace/PathTrace";
export default function About() {
  return (
    <div className={styles.AboutComponent}>
      <PathTrace
        title={"About us"}
        nextitle={"AwesomeBeauty salon"}
        oldPage={"Home"}
        currentPage={"About"}
        
      />
    </div>
  );
}
