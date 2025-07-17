import React from "react";
import styles from "./fast.module.scss";
import { useSelector, useDispatch } from "react-redux";
import * as fastBooking from "../../../Redux/Slices/FastBooking/FastbookSlice";
import iconimg from "../../../assets/HomePage/Container (1).png";
import Select from "../../../SharedComponents/Select/InputSelect";
import { IoPersonOutline } from "react-icons/io5";
import icon from "../../../assets/HomePage/Icon.png";
import Calendar from "../../../SharedComponents/Calendar/Calendar";

import TimeSelect from "../../../SharedComponents/Select/timeselect/Time";


export default function FastBooking() {
  const dispatch = useDispatch();
  const { services, experts, date, time } = useSelector(
    (state) => state.FastBook
  );

  const fields = [
    {
      value: services,
      action: fastBooking.setservice,
      label: "Service",
      icon: iconimg,
    },
    {
      value: experts,
      action: fastBooking.setexperts,
      label: "Expert",
      icon: icon,
    },
  ];

  return (
    <div className={styles.bookingCont}>
      <div className={styles.boogkingWrapper}>
        <div className={styles.inputPicker}>
          {fields.map((f, i) => (
            <div key={i} className={styles.inputWrapper}>
              <Select
                key={i}
                value={f.value}
                onChange={(e) => dispatch(f.action(e.target.value))}
                state={f.value}
                label={f.label}
                iconimg={f.icon}
              />
            </div>
          ))}
          <Calendar
            setDate={(date) => dispatch(fastBooking.setdate(date))}
            value={date}
          />
<div className={styles.time}>
 <TimeSelect
  value={time}
 onChange={(val) => dispatch(fastBooking.settime(val))}
  // state={time}
  // label="Any time"
  // iconimg={timeicon}
/>


</div>
        
          <button className={styles.bookbutton}>Book</button>
        </div>
      </div>
    </div>
  );
}
