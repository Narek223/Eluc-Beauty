import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { IoIosArrowDown } from "react-icons/io";
import styles from "./styles.module.scss";
import { Button, Popover, Box, Typography } from "@mui/material";
import timeicon from "../../../assets/HomePage/Vertical container.png";

export default function Time({ value, onChange }) {
  const times = [
    "12:00",
    "12:30",
    "13:30",
    "14:00",
    "15:00",
    "15:30",
    "16:30",
    "17:00",
    "18:00",
    "18:30",
  ];

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <divv className={styles.timeSelect}>
      <button
        onClick={handleClick}
        variant="outlined"
        fullWidth
        className={styles.timeButton}
      >
        <img className={styles.iconimg} src={timeicon} /> {value || "Any Time"}
      </button>
      <Popover open={open} anchorEl={anchorEl} onClose={handleClose}
      
        anchorOrigin={{
    vertical: 'bottom',
    horizontal: 'left',
  }}
  transformOrigin={{
    vertical: 'top',
    horizontal: 'left',
  }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "8px",
            padding: "10px",
            maxWidth: "200px",
          }}
        >
          {times.map((elem, index) => (
            <Button
              key={index}
              variant="outlined"
                      fullWidth
              onClick={() => {
                onChange(elem);
                handleClose();
              }}
              sx={{
                width: "100%",
                border: " 1px solid rgba(189, 189, 189, 1)",
                textTransform: "none",
                height: "27px",
              color: " rgba(82, 82, 82, 1)"
              }}
            >
              {elem}
            </Button>
          ))}
        </Box>
      </Popover>
    </divv>
  );
}
