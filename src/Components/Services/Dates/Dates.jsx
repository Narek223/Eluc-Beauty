import React, { useState } from "react";
import styles from "./dates.module.scss";
import { useSelector, useDispatch } from "react-redux";
import * as serviceslice from "../../../Redux/Slices/Services/services";
const timeSlots = {
  Morning: ["08:00", "09:00", "10:00", "11:00"],
  Afternoon: ["12:00", "13:00", "14:00", "15:00"],
  Evening: ["16:00", "17:00", "18:00", "19:00"],
};

export default function Dates() {
  const { chooseTime, date, selectedExpert } = useSelector(
    (state) => state.service
  );
  const dispatch = useDispatch();

  const freeTimeForDate = selectedExpert?.freetime?.find(
    (d) => d.date === date?.split("T")[0]
  );
  const bookedTimes = freeTimeForDate
    ? freeTimeForDate.times.map((t) => t.label)
    : [];
  return (
    <div className={styles.container}>
      {Object.entries(timeSlots).map(([period, times]) => (
        <div key={period} className={styles.column}>
          <p className={styles.title}>{period}</p>
          <div className={styles.slots}>
            {times.map((time, idx) => {
              const isSelected = chooseTime === time;
              const isBooked = bookedTimes.includes(time);

              return (
                <button
                  key={time}
                  className={`${styles.slot} 
                           
                             ${isSelected ? styles.selected : ""}`}
                  onClick={() => dispatch(serviceslice.setSelectedTime(time))}
                  disabled={isBooked}
                >
                  {time}
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
