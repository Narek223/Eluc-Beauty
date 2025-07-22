import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ExpertsObj } from "../../../../Services/Date/ExpertsDate/ExpertsObj";
import styles from "./expertdetalis.module.scss";
import PathTrace from "../../../../SharedComponents/PathTrace/PathTrace";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/material";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import * as ExpertSlice from "../../../../Redux/Slices/ExpertDetalis/Expert";

export default function ExpertsDetalis() {
  const dispatch = useDispatch();
  
  const { selectedWork, open, selectedIndex } = useSelector(
    (state) => state.Expert
  );

  const { id } = useParams();
  const Experts = ExpertsObj.find((item) => item.id.toString() === id);
  const worksLength = Experts.MyWorks.length;
  const handleClose = () => dispatch(ExpertSlice.close());
  const handlePrev = () => {
    dispatch(ExpertSlice.prevWork(worksLength));
  };

  const handleNext = () => {
    dispatch(ExpertSlice.nextWork(worksLength));
  };

  useEffect(() => {
    if (selectedIndex !== null) {
      dispatch(ExpertSlice.setSelectedWork(Experts.MyWorks[selectedIndex]));
    }
  }, [selectedIndex, Experts.MyWorks]);

  return (
    <div className={styles.expertsprofile}>
      <PathTrace
        title={Experts.FullName}
        nextitle="Awesome Team"
        breadcrumbs={[
          { name: "Home", to: "/" },
          { name: "Expert", to: "/expert" },
          { name: "Single Expert" },
        ]}
      />
      <div className={styles.profileContent}>
        <div className={styles.profile}>
          <div className={styles.img}>
            <img src={Experts.profileImage} alt="Expert" />
          </div>
          <div className={styles.text}>
            <h1>{Experts.Specialist}</h1>
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
            {Experts.MyWorks.map((elem, index) => (
              <div
                key={elem.id}
                className={styles.worksWrapper}
                onClick={() => {
                  dispatch(ExpertSlice.setSelectedIndex(index));
                  dispatch(ExpertSlice.setSelectedWork(elem));
                  dispatch(ExpertSlice.setOpen(true));
                }}
              >
                <img src={elem.img} alt="Work" />
              </div>
            ))}
          </div>
        </div>

        <div className={styles.parentModal}>
          <Modal
            open={open}
            onClose={handleClose}
            closeAfterTransition
            className={styles.modal}
          >
            <Box className={styles.modalWrapper}>
              {selectedWork && (
                <div
                  className={styles.modalImageCont}
                  style={{ backgroundImage: `url(${selectedWork.img})` }}
                >
                  <button className={styles.arrowLeft} onClick={handlePrev}>
                    <MdKeyboardArrowLeft className={styles.icon} />
                  </button>

                  <button className={styles.arrowRight} onClick={handleNext}>
                    <MdKeyboardArrowRight className={styles.icon} />
                  </button>
                </div>
              )}
            </Box>
          </Modal>
          <button className={styles.SeeMore}>See More</button>
        </div>
        <div className={styles.Certificates}>
          <div className={styles.Dotwo}></div>
          <div className={styles.CertificatesWrapper}>
            <h1>MY CERTIFICATES</h1>
            <div className={styles.imgCont}>
              {Experts.MyCertificates.map((elem) => (
                <div key={elem.id} className={styles.img}>
                  <img src={elem.img} />
                </div>
              ))}
            </div>
            <div className={styles.Dotwo}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
