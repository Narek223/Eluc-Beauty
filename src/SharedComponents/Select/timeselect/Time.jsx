import React, { useState } from "react";
import styles from "./styles.module.scss";
import { Button, Popover, Box } from "@mui/material";
import timeicon from "../../../assets/HomePage/Vertical container.png";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { experts } from "../../../Services/Date/ExpertsDate/experts";
import * as timeActions from "../../../Redux/Slices/FastBooking/Time";
import dayjs from "dayjs";

export default function Time({ value, onChange }) {
  
  const times = [
    { id: 1, label: "12:00" },
    { id: 2, label: "12:30" },
    { id: 3, label: "13:30" },
    { id: 4, label: "14:00" },
    { id: 5, label: "15:00" },
    { id: 6, label: "15:30" },
    { id: 7, label: "16:30" },
    { id: 8, label: "17:00" },
    { id: 9, label: "18:00" },
    { id: 10, label: "18:30" },
  ];
const dispatch = useDispatch();
  const { date, expert } = useSelector((state) => state.FastBook);
 const { arrowIcon, anchorEl } = useSelector((state) => state.time);

  const open = Boolean(anchorEl);


  const selectedDate = date ? dayjs(date).format("YYYY-MM-DD") : null;

  const expertData = experts.find((exp) => exp.name === expert);

  let availableTimes = [];
  if (expertData && expertData.freetime && selectedDate) {
    const dateData = expertData.freetime.find((d) => d.date === selectedDate);
    if (dateData) {
      availableTimes = dateData.times;
    }
  }
 

  return (
    <div
      className={styles.timeSelect}
      style={{
        opacity: date ? 1 : 0.5,
      }}
    >
      <div className={styles.timeSelectContainer}>
        <button
          disabled={!date}
          style={{ cursor: date ? "pointer" : "not-allowed" }}
          onClick={(e)=>{dispatch(timeActions.handleClick({ event: e }))}}
          variant="outlined"
          className={styles.timeButton}
        >
          <img className={styles.iconimg} src={timeicon} />{" "}
          {value || "Any Time"}
        </button>
        <p> {arrowIcon ? <IoIosArrowDown /> : <IoIosArrowUp />} </p>
      </div>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={()=> dispatch(timeActions.handleClose())}
        disableScrollLock
        disableAutoFocus={true}
        disableEnforceFocus={true}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        PaperProps={{
          style: {
            width: anchorEl ? anchorEl.offsetWidth : undefined,
          },
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "16px",
            padding: "10px",
            width: "100%",
            
          }}
        >
          {times.map((elem, index) => {
            const isAvailable = availableTimes.some(
              (t) => t.label === elem.label
            );
        
            return (
              <Button
                className={styles.btn}
                key={index}
                disabled={isAvailable}
                variant="outlined"
                onClick={() => {
                    onChange(elem.label);
                    dispatch(timeActions.handleClose());      
                }}
                sx={{
                  "& .MuiPaper-root": {
                    width:
                      open && anchorEl ? `${anchorEl.offsetWidth}px` : "auto",

                    overflowY: "auto",
                  },
                  "&.Mui-disabled": {
                    backgroundColor: "rgba(239, 239, 239, 1)",
                    color: "rgba(189, 189, 189, 1)",
                    cursor: "not-allowed",
                    border: "none",
                  },
                  fontSize: "16px",
                  minWidth: 0,
                  border: " 1px solid rgba(189, 189, 189, 1)",
                  textTransform: "none",
                  height: "27px",

                  backgroundColor:
                    elem.label === value ? "rgb(212, 163, 115)" : "",
                  color: elem.label === value ? "white" : "rgba(82, 82, 82, 1)",
                }}
              >
                {elem.label}
              </Button>
            );
          })}
        </Box>
      </Popover>
    </div>
  );
}
