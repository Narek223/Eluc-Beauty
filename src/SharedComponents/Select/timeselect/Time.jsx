import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { IoIosArrowDown } from "react-icons/io";
import styles from "./styles.module.scss";
import { Button, Popover, Box, Typography } from "@mui/material";
import timeicon from "../../../assets/HomePage/Vertical container.png";

export default function Time({ value, onChange }) {

const times=[
  { id:1, label: "12:00" },
  { id:2, label: "12:30" },
  { id:3, label: "13:30" },
  { id:4, label: "14:00" },
  { id:5, label: "15:00" },
  { id:6, label: "15:30" },
  { id:7, label: "16:30" },
  { id:8, label: "17:00" },
  { id:9, label: "18:00" },
  { id:10, label: "18:30" },
]



  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={styles.timeSelect}>
      <button
        onClick={handleClick}
        variant="outlined"
     
        className={styles.timeButton}
      >
        <img className={styles.iconimg} src={timeicon} /> {value || "Any Time"}
      </button>
      <Popover open={open} anchorEl={anchorEl} onClose={handleClose}
        disableScrollLock
        anchorOrigin={{
    vertical: 'bottom',
    horizontal: 'left',
  }}
  transformOrigin={{
    vertical: 'top',
    horizontal: 'left',
  }}
    PaperProps={{
          sx: {
            width: "220px", // ✅ задай фиксированную ширину
            padding: "10px",
            boxShadow: 3,
          },
        }}
      >
        <Box
          sx={{
            display: "grid",
           gridTemplateColumns: "repeat(2, 1fr)",
            gap: "8px",
            padding: "10px",
            width: "100%",
          }}
        >
          {times.map((elem, index) => (
            <Button
              key={index}
              variant="outlined"
           
              onClick={() => {
                onChange(elem.label); 
                handleClose();
              }}
              sx={{
                   minWidth: 0,
                border: " 1px solid rgba(189, 189, 189, 1)",
                textTransform: "none",
                height: "27px",
              color: " rgba(82, 82, 82, 1)"
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
