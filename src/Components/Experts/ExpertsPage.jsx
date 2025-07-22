import React from "react";
import PathTrace from "../../SharedComponents/PathTrace/PathTrace";
import styles from "./experts.module.scss";
import expertimg from "../../assets/Experts/Switch.png";
import Experts from "../HomePage/Experts/Experts";
import Subscribe from "../HomePage/Subscribe/Subscribe";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { useTranslation } from "react-i18next";

export default function ExpertsPage() {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className={styles.ExpertConteiner}>
      <PathTrace
        title={t("experts.pathTitle")}
        nextitle={t("experts.pathSubtitle")}
        breadcrumbs={[
          { name: t("breadcrumbs.home"), to: "/" },
          { name: t("breadcrumbs.expert") },
        ]}
      />

      <div className={styles.BodyConteiner}>
        <div className={styles.BodyWrapper}>
          <div className={styles.img}>
            <img src={expertimg} alt="expert" />
          </div>
          <div className={styles.ExpertsContent}>
            <div className={styles.title}>
              <div className={styles.titleWrapper}>
                <h1>{t("experts.mainTitle1")}</h1>
                <h1>{t("experts.mainTitle2")}</h1>
              </div>
              <p>{t("experts.subtitle")}</p>
            </div>

            <div className={styles.Content}>
              <p>{t("experts.description")}</p>
            </div>

            <div className={styles.count} ref={ref}>
              <div className={styles.happyclients}>
                <p>{t("experts.happyClients")}</p>
                <h1>
                  <CountUp start={0} end={inView ? 2 : 0} duration={2} delay={2} />k
                </h1>
              </div>
              <div className={styles.procedures}>
                <p>{t("experts.beautyProcedures")}</p>
                <h1>
                  <CountUp start={0} end={inView ? 5 : 0} duration={2} delay={2} />b
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
