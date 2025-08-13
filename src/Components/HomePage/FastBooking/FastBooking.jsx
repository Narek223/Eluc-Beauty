import React, { useEffect } from "react";
import styles from "./fast.module.scss";
import { useSelector, useDispatch } from "react-redux";
import * as fastBooking from "../../../Redux/Slices/FastBooking/FastbookSlice";
import iconimg from "../../../assets/HomePage/Container (1).png";
import Select from "../../../SharedComponents/Select/InputSelect";
import Calendar from "../../../SharedComponents/Calendar/Calendar";
import { service } from "../../../Services/Date/ExpertsDate/services";
import TimeSelect from "../../../SharedComponents/Select/timeselect/Time";
import PopoveExperts from "./Popover/PopoveExperts";

export default function FastBooking() {
  const dispatch = useDispatch();
  const { services, expert, date, time } = useSelector(
    (state) => state.FastBook
  );



  return (
    <div className={styles.bookingCont}>
      <div className={styles.boogkingWrapper}>
        <div className={styles.inputPicker}>
          <div className={styles.inputWrapper}>
            <Select
              value={services}
              onChange={(e) => dispatch(fastBooking.setservice(e.target.value))}
              state={services}
              label={"Service"}
              iconimg={iconimg}
              servicesobj={service}
            />
          </div>
          <PopoveExperts value={services}  state={expert}      expert={(val) => dispatch(fastBooking.setexperts(val))}/>
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
