import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import * as serviceslice from "../../../Redux/Slices/Services/services";
import { useSelector, useDispatch } from "react-redux";
import styles from "./modal.module.scss";
import { ratingEmojis } from "../../../Services/Date/Services/icon";
import { useTranslation } from "react-i18next";

export default function PopupModal() {
  const { open, cartArray, total, confirm, emoji } = useSelector(
    (state) => state.service
  );
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const raiting = (index) => {
    dispatch(serviceslice.setEmoji(index));
  };

  return (
    <div className={styles.container}>
      <Modal
        open={open}
        onClose={() => dispatch(serviceslice.closeModal())}
        disablePortal
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className={styles.modal}
      >
        <Box>
          <div className={styles.boxconteiner}>
            {confirm ? (
              <div className={styles.confirm}>
                <div className={styles.closebtn}>
                  <p onClick={() => dispatch(serviceslice.closeModal())}>X</p>
                </div>
                <div className={styles.thenkyou}>
                  <h1>{t("confirmation.thankYou")}</h1>
                  <h2>{t("confirmation.forBooking")}</h2>
                  <p>
                 {t("confirmation.appointmentSuccess")}
                  </p>
                  <div className={styles.emojis}>
                    {ratingEmojis.map((elem, index) => (
                      <button
                        style={{
                          color: elem.id <= emoji ? "red" : "black",
                          transition: "0.3s",
                          transform:
                            index === emoji ? "scale(1.2)" : "scale(1)",
                        }}
                        onClick={() => raiting(index)}
                        key={index}
                        title={elem.label}
                      >
                        {elem.svg}
                      </button>
                    ))}
                  </div>

                  <button onClick={() => dispatch(serviceslice.closeModal())}>
                    {t("confirmation.rate")}
                  </button>
                </div>
              </div>
            ) : (
              <div className={styles.popup}>
                <div className={styles.closebtn}>
                  <p onClick={() => dispatch(serviceslice.closeModal())}>X</p>
                </div>

                <div className={styles.orderComponent}>
                  <h1>Your Order</h1>

                  <div className={styles.orderDetails}>
                    {cartArray.map((category, categoryIndex) => (
                      <div key={categoryIndex} className={styles.order}>
                        <img
                          src={t(category.services[0].service.img)}
                          alt={t(category.services[0].service.title)}
                        />
                        <div className={styles.text}>
                          <h1>{t(category.services[0].service.title)}</h1>
                          {category.services.map((elem, serviceIndex) => (
                            <p key={serviceIndex}>
                              {t(elem.service.secondtitle)}{" "}
                              <span>{elem.service.price} $</span>
                            </p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={styles.total}>
                  <h1> {t("Cart.Total")} </h1>
                  <h1>{total} $</h1>
                </div>
                <div className={styles.button}>
                  <button
                    onClick={() => dispatch(serviceslice.openComfirmpage())}
                  >
                 {t("free.Confirm")}
                  </button>
                </div>
              </div>
            )}
          </div>
        </Box>
      </Modal>
    </div>
  );
}
