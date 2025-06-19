import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { ExpertsObj } from "../../../../Services/Date/ExpertsDate/ExpertsObj";
import styles from "./expertdetalis.module.scss";
import PathTrace from "../../../../SharedComponents/PathTrace/PathTrace";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/material";

export default function ExpertsDetalis() {
  const { id } = useParams();
  const Experts = ExpertsObj.find((item) => item.id.toString() === id);
  const [index, setindex] = useState();
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  return (
    <div className={styles.expertsprofile}>
      <PathTrace
        title={Experts.FullName}
        nextitle="Awesome Team"
        breadcrumbs={[
          { name: "Home", to: "/" },
          { name: "Expert", to: "/Expert" },
          { name: "Single Expert" },
        ]}
      />
      <div className={styles.profileContent}>
        <div className={styles.profile}>
          <div className={styles.img}>
            <img src={Experts.profileImage} />
          </div>
          <div className={styles.text}>
            <h1>{Experts.Specialist} </h1>
            <p>{Experts.summary}</p>
            <div className={styles.experienceWrapper}>
              <span className={styles.year}>2014</span>
              <div className={styles.lineWrapper}>
                <span className={`${styles.dot} ${styles.leftDot}`}></span>
                <div className={styles.line}></div>
                <span className={styles.title}>Experience</span>
                <div className={styles.line}></div>
                <span className={`${styles.dot} ${styles.rightDot}`}></span>
              </div>
              <span className={styles.year}>2024</span>
            </div>
          </div>
        </div>
        <div className={styles.worksConteiner}>
          <h1>MY WORKS</h1>
          <div className={styles.myworks}>
            {Experts.MyWorks.map((elem) => (
              <div
                key={elem.id}
                className={styles.worksWrapper}
                onClick={() => {
                  setindex(elem.id);
                  setOpen(true);
                }}
              >
                <img src={elem.img} />
              </div>
            ))}
          </div>
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          className={styles.modal}
        >
          <Box>
            <div className={styles.imgmodal}>
              <img src={Experts.MyWorks[index].img} />
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
}
