import React, { useState } from "react";
import styles from "./styles.module.scss";
import { Button, Popover, Box } from "@mui/material";
import timeicon from "../../../assets/HomePage/Vertical container.png";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

export default function Time({ value, onChange }) {
    const [arrowIcon, setArrowIcon] = useState(true);


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

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
    setArrowIcon(!arrowIcon);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setArrowIcon(true);
  };

  return (
    <div className={styles.timeSelect}>
      <div className={styles.timeSelectContainer}>
 <button
        onClick={handleClick}
        variant="outlined"
        className={styles.timeButton}
      >
        <img className={styles.iconimg} src={timeicon} /> {value || "Any Time"}
      </button>
      <p> {arrowIcon?<IoIosArrowDown/> :<IoIosArrowUp/>  } </p>
      </div>
     
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
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
          {times.map((elem, index) => (
            <Button
              className={styles.btn}
              key={index}
              variant="outlined"
              onClick={() => {
                onChange(elem.label);
                handleClose();
              }}
              sx={{
                "& .MuiPaper-root": {
                  width:
                    open && anchorEl ? `${anchorEl.offsetWidth}px` : "auto",

                  overflowY: "auto",
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
          ))}
        </Box>
      </Popover>
    </div>
  );
}
