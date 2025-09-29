import React from "react";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { IoIosArrowDown } from "react-icons/io";
import { datestyles } from "../../Services/Date/datepicker/datePickerStyles";
import styles from "./styles.module.scss";

import { useSelector } from "react-redux";
import { width } from "@mui/system";

export default function Calendar({ setDate, value }) {
  const { expert } = useSelector((state) => state.FastBook);

  const handleDateChange = (newDate) => {
    if (newDate) {
      setDate(newDate.toDate());
    }
  };

  return (
    <div
      className={styles.datePicker}
      style={{
        height: "100%",
        opacity: expert ? 1 : 0.5,
        cursor: expert ? "pointer" : "not-allowed",
        border: "1px solid  rgba(220, 220, 220, 1)",
        borderRadius: "0 0 0 16px",
      }}
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DesktopDatePicker
          disabled={!expert}
          value={value ? dayjs(value) : null}
          onChange={handleDateChange}
          slots={{
            width: "100%",
            openPickerIcon: (props) => (
              <IoIosArrowDown {...props} style={{ fontSize: "18px" }} />
            ),
          }}
          slotProps={{
            textField: {
              paddingRight: "0px",
              placeholder: "Any date",
              variant: "standard",
              color: "black",

              InputProps: {
                disableUnderline: true,
              },
              inputAdornment: {
                position: "end",
              },
              sx: {
                width: "100%",

                backgroundColor: "transparent",
                fontSize: "16px",
                py: "8px",
                px: "12px",
              },
              iconButton: {
                "& svg": {
                  width: "18px",
                  height: "18px",
                },
              },
            },
            popper: {
              sx: datestyles,
            },
          }}
        />
      </LocalizationProvider>
    </div>
  );
}
