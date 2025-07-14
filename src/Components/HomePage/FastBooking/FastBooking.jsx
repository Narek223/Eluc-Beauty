import React from "react";
import styles from "./fast.module.scss";
import { useSelector, useDispatch } from "react-redux";
import * as fastBooking from "../../../Redux/Slices/FastBooking/FastbookSlice";
import iconimg from "../../../assets/HomePage/Container (1).png";
import Select from "../../../SharedComponents/Select/InputSelect";
import { IoPersonOutline } from "react-icons/io5";
import icon from "../../../assets/HomePage/Icon.png"
export default function FastBooking() {
  const dispatch = useDispatch();
  const { services, experts } = useSelector((state) => state.FastBook);

  return (
    <div className={styles.bookingCont}>
      <div className={styles.boogkingWrapper}>
        <div className={styles.inputPicker}>
          <Select
            value={services}
            onChange={(e) => dispatch(fastBooking.setservice(e.target.value))}
            state={services}
            label={"Service"}
            iconimg={iconimg}
          />
          <Select
            value={experts}
            onChange={(e) => dispatch(fastBooking.setexperts(e.target.value))}
            state={experts}
            label={"Expert"}
            iconimg={icon}
          />
          <button>Book</button>
        </div>
      </div>
    </div>
  );
}
