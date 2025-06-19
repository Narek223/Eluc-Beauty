import React from "react";
import PathTrace from "../../SharedComponents/PathTrace/PathTrace";
import styles from "./experts.module.scss";
import expertimg from "../../assets/Experts/Switch.png";
import Experts from "../HomePage/Experts/Experts";
import Subscribe from "../HomePage/Subscribe/Subscribe";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

export default function ExpertsPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className={styles.ExpertConteiner}>
      <PathTrace
        title="EXPERT"
        nextitle="Awesome Team"
        breadcrumbs={[{ name: "Home", to: "/" }, { name: "Expert" }]}
      />

    
      <div className={styles.BodyConteiner}>
        <div className={styles.BodyWrapper}>
          <div className={styles.img}>
            <img src={expertimg} />
          </div>
          <div className={styles.ExpertsContent}>
            <div className={styles.title}>
              <div className={styles.titleWrapper}>
                <h1>BEATY BEGINS HERE MEET THE TEAM</h1>
                <h1>Creative Team</h1>
              </div>

              <p> Ut enim ad minim veniam, quis nostrud exercitation</p>
            </div>
            <div className={styles.Content}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit .
              </p>
            </div>
            <div className={styles.count} ref={ref}>
              <div className={styles.happyclients}>
                <p>happy clients</p>

                <h1>
                  <CountUp
                    start={0}
                    end={inView ? 2 : 0}
                    duration={2}
                    deley={2}
                  />
                  k
                </h1>
              </div>
              <div className={styles.procedures}>
                <p>we made beauty procedures</p>
                <h1>
                  <CountUp
                    start={0}
                    end={inView ? 5 : 0}
                    duration={2}
                    deley={2}
                  />
                  b
                </h1>
              </div>
            </div>
          </div>
        </div>
        <Experts />
        <Subscribe />
      </div>
    </div>
  );
}
