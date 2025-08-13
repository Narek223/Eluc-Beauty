import React, { useState } from "react";
import { Popover, Box } from "@mui/material";
import { experts } from "../../../../Services/Date/ExpertsDate/experts";
import styles from "./popover.module.scss";
import icon from "../../../../assets/HomePage/Icon.png";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import * as popoverActions from "../../../../Redux/Slices/FastBooking/Popover";

export default function PopoveExperts({ value, expert, state }) {
  const dispatch = useDispatch();
  const { anchorEl, arrowIcon } = useSelector((state) => state.popover);
  const open = Boolean(anchorEl);

  const filteredExperts = value
    ? experts.filter((expert) => expert.services.includes(value))
    : [];

  return (
    <div className={styles.popoverContainer}>
      <div
        onClick={(e) => {
          dispatch(popoverActions.popover({ event: e, value }));
        }}
        className={styles.popoverButton}
        style={{
          opacity: value ? 1 : 0.5,
        }}
      >
        <button
          disabled={!value}
          style={{ cursor: value ? "pointer" : "not-allowed" }}
        >
          <img src={icon} /> {state || "Experts"}
        </button>
        <p>{arrowIcon ? <IoIosArrowDown /> : <IoIosArrowUp />}</p>
      </div>

      <Popover
        anchorEl={anchorEl}
        open={open}
        onClose={() => {
          dispatch(popoverActions.handleClose);
        }}
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
            style={{
              backgroundColor: "#fff",
              backgroundColor: expert === state ? "rgb(212, 163, 115)" : "",
            }}
          >
            {filteredExperts.length > 0
              ? filteredExperts.map((elem) => (
                  <div
                    key={elem.id}
                    className={styles.popoverItem}
                    onClick={() => {
                      expert(elem.name);
                      dispatch(popoverActions.handleClose());
                    }}
                  >
                    <img src={elem.avatar} alt={elem.name} />
                    <p>{elem.name}</p>
                  </div>
                ))
              : null}
          </div>
        </Box>
      </Popover>
    </div>
  );
}
