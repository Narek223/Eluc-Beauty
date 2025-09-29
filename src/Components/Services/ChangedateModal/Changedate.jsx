import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useSelector, useDispatch } from "react-redux";
import * as serviceslice from "../../../Redux/Slices/Services/services";
import styles from "./date.module.scss";
import Calendar from "../Calendar/Calendar";
import Dates from "../Dates/Dates";
import { useTranslation } from "react-i18next";
export default function Changedate() {
  const { openModal } = useSelector((state) => state.service);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const handleChange = () => {

    dispatch(serviceslice.applyEditChanges());
  };

  return (
    <div className={styles.dateConteiener}>
      <Modal
        open={openModal}
        onClose={() => dispatch(serviceslice.closeDateModal())}
        disablePortal
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className={styles.modal}>
        <Box>
          <div className={styles.datewrapper}>
            <div className={styles.closebtn}>
              <p onClick={() => dispatch(serviceslice.closeDateModal())}>X</p>
            </div>
            <div className={styles.date}>
              <h1> {t("Date.changeDate")}</h1>
              <div className={styles.datecontent}>
                <div className={styles.calendar}>
                  <Calendar />
                </div>
                <div className={styles.dates}>
                  <Dates />
                </div>
              </div>
              <div className={styles.changebtn}>
                <button onClick={handleChange}>Change</button>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}