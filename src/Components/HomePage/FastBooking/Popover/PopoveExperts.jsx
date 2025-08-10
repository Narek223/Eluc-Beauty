import React, { useState } from "react";
import { Popover, Box } from "@mui/material";
import { experts } from "../../../../Services/Date/ExpertsDate/experts";
import styles from "./popover.module.scss";
import icon from "../../../../assets/HomePage/Icon.png";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";


export default function PopoveExperts({ value, expert, state }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [arrowIcon, setArrowIcon] = useState(true);
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
    setArrowIcon(true);
  };

  const popover = (event) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
    setArrowIcon(!arrowIcon);
  };

  const filteredExperts = value
    ? experts.filter((expert) => expert.services.includes(value))
    : [];

  return (
    <div className={styles.popoverContainer}>
      <div onClick={popover} className={styles.popoverButton}>
        <button>
          <img src={icon} /> {state || "Experts"}
        </button>
        <p>
         { arrowIcon ? <IoIosArrowDown /> : <IoIosArrowUp />} 
        </p>
      </div>

      <Popover
        anchorEl={anchorEl}
        open={open}
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
            width: anchorEl?.offsetWidth || "auto",
          },
        }}
      >
        <Box
          sx={{
            gap: "16px",
            padding: "10px",
            width: "100%",
          }}
        >
          <div
            className={styles.popoverwrapper}
            style={{ backgroundColor: "#fff" }}
          >
            {filteredExperts.length > 0 ? (
              filteredExperts.map((elem) => (
                <div
                  key={elem.id}
                  className={styles.popoverItem}
                  onClick={() => {
                    expert(elem.name);
                    handleClose();
                  }}
                >
                  <img src={elem.avatar} alt={elem.name} />
                  <p
                    sx={{
                      backgroundColor:
                        elem.name === state ? "rgb(212, 163, 115)" : "",
                    }}
                  >
                    {elem.name}
                  </p>
                </div>
              ))
            ) : (
              <p>No experts available</p>
            )}
          </div>
        </Box>
      </Popover>
    </div>
  );
}
