import React from "react";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { IoIosArrowDown } from "react-icons/io";
import { datestyles } from "../../Services/Date/datepicker/datePickerStyles";
import styles from "./styles.module.scss";

import { useSelector } from "react-redux";

export default function Calendar({ setDate, value }) {
  const {  expert } = useSelector(
    (state) => state.FastBook
  );



  const handleDateChange = (newDate) => {
    if (newDate) {
      setDate(newDate.toDate());
    }
  };

  return (
    <div className={styles.datePicker}  style={{     opacity: expert ? 1 : 0.5, cursor: expert ? "pointer" : "not-allowed"}}>
   <LocalizationProvider dateAdapter={AdapterDayjs} >
      <DesktopDatePicker
      disabled={!expert}
        value={value ? dayjs(value) : null}
        onChange={handleDateChange}
         slots={{
          openPickerIcon: (props) => (
            <IoIosArrowDown {...props} style={{ fontSize: "18px" }} />
          ),
        }}
        slotProps={{
          textField: {
            placeholder: "Any date",
            variant: "standard",
            color:"black",
            InputProps: {
              disableUnderline: true,
           
    
            },
            inputAdornment: {
              position: "end",
            },
            sx: {
              
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
