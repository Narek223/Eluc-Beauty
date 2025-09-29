import React, { useEffect } from "react";
import styles from "./services.module.scss";
import PathTrace from "../../SharedComponents/PathTrace/PathTrace";
import { service } from "../../Services/Date/Services/services";
import Checkbox from "@mui/material/Checkbox";
import { useSelector, useDispatch } from "react-redux";
import * as serviceslice from "../../Redux/Slices/Services/services";
import { experts } from "../../Services/Date/ExpertsDate/experts";
import Calendar from "./Calendar/Calendar";
import Dates from "./Dates/Dates";
import PopupModal from "./ComfirmPopup/PopupModal";
import { FaPen } from "react-icons/fa";
import Changedate from "./ChangedateModal/Changedate";
import { useTranslation } from "react-i18next";

export default function Services() {

  const { selectedService, selectedExpert, cartArray, total, openDateModal } =
    useSelector((state) => state.service);

  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(serviceslice.total());
  }, [dispatch, cartArray]);

  const isServiceSelected = (categoryId, serviceId) => {
    if (!selectedService) return false;
    return (
      selectedService?.categoryId === categoryId &&
      selectedService?.id === serviceId
    );
  };

  const isExpertSelected = (categoryId, expertId) => {
    if (!selectedExpert) return false;
    return (
      selectedExpert?.categoryId === categoryId &&
      selectedExpert?.id === expertId
    );
  };

  const itemsCount = cartArray.reduce((acc, c) => acc + c.services.length, 0);

  return (
    <div className={styles.container}>
      <PathTrace
        title="SERVICES"
        nextitle={t("Path.Awesomeservices")}
        breadcrumbs={[{ name: "Home", to: "/" }, { name: "Services" }]}
      />
      <PopupModal />
      <Changedate />
      <div className={styles.body}>
        <div className={styles.services}>
          {service.map(({ id: categoryId, img, title, services }) => (
            <div className={styles.service} key={categoryId}>
              <div className={styles.servicewrapper}>
                <img src={img} />
                <div className={styles.text}>
                  <h1>{t(title)}</h1>
                  {services.map((elem, id) => (
                    <div key={id} className={styles.buy}>
                      <div className={styles.buyservice}>
                        <Checkbox
                          className={styles.checkbox}
                          checked={isServiceSelected(categoryId, elem.id)}
                          onChange={() => {
                            dispatch(
                              serviceslice.setSelectedService({
                                ...elem,
                                title,
                                img,
                                categoryId,
                              })
                            );

                            dispatch(serviceslice.setSelectedExpert(null));
                          }}
                        />
                        <p>{t(elem.secondtitle)}</p>
                      </div>
                      <p>{elem.price} $</p>
                    </div>
                  ))}
                </div>
              </div>

              {isServiceSelected(categoryId, selectedService?.id) && (
                <div className={styles.extra}>
                  <div className={styles.wrapper}>
                    <p>{t("Date.chooseExpert")}</p>
                    {experts.map((elem, id) => {
                      const today = new Date().toISOString().split("T")[0];
                      const todayTimes =
                        elem.freetime?.find((f) => f.date === today)?.times ||
                        [];
                      return (
                        <div key={id} className={styles.chooseExperts}>
                          <Checkbox
                            className={styles.chooseExpertsCheckbox}
                            checked={isExpertSelected(categoryId, elem.id)}
                            onChange={() =>
                              dispatch(
                                serviceslice.setSelectedExpert({
                                  ...elem,
                                  categoryId,
                                })
                              )
                            }
                          />
                          <div className={styles.expertWrapper}>
                            <img src={elem.avatar} />
                            <div className={styles.experts}>
                              <h1>{elem.name}</h1>
                              <p>{t("free.Freetimetoday")}</p>
                              {todayTimes.length > 0 ? (
                                <div className={styles.times}>
                                  {todayTimes.map((t) => (
                                    <span key={t.id}>{t.label}</span>
                                  ))}
                                </div>
                              ) : (
                                <p>{t("free.Nofreetimetoday")}</p>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  {selectedExpert ? (
                    <div className={styles.dateConteiner}>
                      <div className={styles.dateWrapper}>
                        <p className={styles.choosedate}>{t("Date.chooseDate")}</p>
                        <div className={styles.bookingContent}>
                          <div className={styles.bookingWrapper}>
                            <div className={styles.Calendar}>
                              <Calendar />
                            </div>
                            <div className={styles.date}>
                              <Dates />
                            </div>
                          </div>

                          <div className={styles.buttons}>
                            <button
                              onClick={() => {
                                dispatch(serviceslice.addInCart());
                              }}
                            >
                              {t("free.add")}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className={styles.cart}>
          <div className={styles.cartcont}>
            <p>{t("Cart.Cart")}</p>
            <p>{itemsCount}/3</p>
          </div>
          {cartArray.length === 0 ? (
            <div className={styles.emptycart}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="150"
                height="151"
              >
                {" "}
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 6h18l-2 14H5L3 6zm0 0l2-2m4 0l-2 2m4 0l-2-2m4 0l2 2m4 0l-2-2M9 10v4m6-4v4"
                />{" "}
              </svg>
            </div>
          ) : (
            <div className={styles.cartConteiner}>
              {cartArray.flatMap((elem, ind) =>
                elem.services.map((svcObj, serviceIndex) => (
                  <div
                    key={`${ind}-${serviceIndex}`}
                    className={styles.cartWrapper}
                  >
                    <div className={styles.expertName}>
                      <img src={svcObj.expert.avatar} />
                      <p>
                        {svcObj.expert.name}{" "}
                        <span
                          onClick={() => {
                            dispatch(serviceslice.openDateModal());
                            dispatch(
                              serviceslice.saveandEdit({
                                time: svcObj.time,
                                date: svcObj.date,
                                service: svcObj.service,
                                expert: svcObj.expert,
                                categoryIndex: ind,
                                serviceIndex: serviceIndex,
                              })
                            );
                          }}
                        >
                          <FaPen />
                        </span>
                      </p>
                    </div>
                    <p className={styles.serviceNamEndPrice}>
                      Hair Care Services <span>{svcObj.service.price} $ </span>
                    </p>
                    <p className={styles.date}>
                      {svcObj.date} ({svcObj.time})
                    </p>
                    <div className={styles.removebtn}>
                      <button
                        onClick={() =>
                          dispatch(
                            serviceslice.deletefromcart({
                              categoryIndex: ind,
                              serviceIndex,
                            })
                          )
                        }
                        className={styles.button}
                      >
                          {t("free.Remove")}
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          <div className={styles.totalcont}>
            <div className={styles.total}>
              <p>{t("Cart.Total")}</p>
              <p>{total}$</p>
            </div>

            <button
              className={itemsCount === 0 ? styles.disabled : styles.bookingbtn}
              disabled={itemsCount === 0}
              onClick={() => {
                dispatch(serviceslice.openModal());
              }}
            >
             {t("Cart.booknow")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
